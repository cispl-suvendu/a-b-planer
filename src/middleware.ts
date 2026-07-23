import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: ({ req, token }) => {
      // If the user is trying to access an admin route, they must be an ADMIN
      if (
        req.nextUrl.pathname.startsWith('/admin') ||
        req.nextUrl.pathname.startsWith('/api/admin')
      ) {
        return token?.role === 'ADMIN';
      }

      // For all other matched routes, just require that a token exists (logged in)
      return !!token;
    },
  },
});

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/api/admin/:path*',
    '/report/:path*',
  ],
};
