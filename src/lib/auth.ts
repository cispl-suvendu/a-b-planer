import NextAuth, { AuthOptions, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { env } from '@/env';
import { authService } from '@/server/services/AuthService';
import { UserRole, SubscriptionPlan } from '@/server/models/User';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: UserRole;
      subscriptionPlan?: SubscriptionPlan;
    };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google' && profile && user.email) {
        try {
          const dbUser = await authService.handleGoogleSignIn({
            googleId: profile.sub as string,
            email: user.email,
            name: user.name || 'Unknown',
            avatar: user.image || undefined,
          });

          // Attach db user ID to the token object via mutative hack since token isn't available here
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (user as any).dbId = dbUser._id.toString();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (user as any).role = dbUser.role;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (user as any).subscriptionPlan = dbUser.subscriptionPlan;

          return true;
        } catch (error) {
          console.error('Error during Google sign-in:', error);
          return false;
        }
      }
      return false; // Only allow Google for now
    },
    async jwt({ token, user }) {
      // user is only available on sign-in
      if (user) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        token.id = (user as any).dbId;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        token.role = (user as any).role;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        token.subscriptionPlan = (user as any).subscriptionPlan;
      }
      return token;
    },
    async session({ session, token }): Promise<Session> {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
        session.user.subscriptionPlan =
          token.subscriptionPlan as SubscriptionPlan;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const handler = NextAuth(authOptions);
