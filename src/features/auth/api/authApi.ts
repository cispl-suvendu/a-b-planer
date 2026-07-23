import { baseApi } from '@/store/api';
import { setUser } from '../store/authSlice';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<
      { success: boolean; data: { user: Record<string, unknown> } },
      void
    >({
      query: () => '/auth/me',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data.user));
        } catch {
          dispatch(setUser(null));
        }
      },
    }),
  }),
});

export const { useGetCurrentUserQuery } = authApi;
