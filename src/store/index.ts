import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api';
import authReducer from '@/features/auth/store/authSlice';
import { reportApi } from '@/features/reports/api/reportApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, reportApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
