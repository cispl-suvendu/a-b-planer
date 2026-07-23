import { baseApi } from '@/store/api';

export interface DashboardSummary {
  usage: {
    totalAllowed: number;
    used: number;
    remaining: number;
    isUnlimited: boolean;
  };
  recentAnalyses: AnalysisRecord[];
}

export interface AnalysisRecord {
  _id: string;
  url: string;
  status:
    'Queued' | 'Processing' | 'Generating Report' | 'Completed' | 'Failed';
  progress?: number;
  stage?: string;
  screenshotUrl?: string;
  createdAt: string;
}

export interface AnalysesResponse {
  data: AnalysisRecord[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardSummary: builder.query<DashboardSummary, void>({
      query: () => '/dashboard',
      providesTags: ['Dashboard'],
      transformResponse: (response: {
        success: boolean;
        data: DashboardSummary;
      }) => response.data,
    }),
    getAnalysisHistory: builder.query<
      AnalysesResponse,
      { page?: number; limit?: number }
    >({
      query: (params) => ({
        url: '/analyses',
        params,
      }),
      providesTags: ['Analysis'],

      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        let sse: EventSource | null = null;
        try {
          await cacheDataLoaded;

          sse = new EventSource('/api/analyses/stream');

          sse.onmessage = (event) => {
            try {
              const update = JSON.parse(event.data);
              updateCachedData((draft) => {
                const item = draft.data.find(
                  (a) => a._id === update.analysisId
                );
                if (item) {
                  item.progress = update.progress;
                  if (update.stage) item.stage = update.stage;
                  if (update.status) item.status = update.status;
                  if (update.screenshotUrl)
                    item.screenshotUrl = update.screenshotUrl;
                }
              });
            } catch (e) {
              console.error('Error parsing SSE message', e);
            }
          };

          sse.onerror = () => {
            sse?.close();
          };
        } catch {}

        await cacheEntryRemoved;
        if (sse) sse.close();
      },
    }),
    startAnalysis: builder.mutation<
      { success: boolean; analysisId: string },
      { url: string }
    >({
      query: (body) => ({
        url: '/analyses',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Dashboard', 'Analysis'],
      transformResponse: (response: {
        success: boolean;
        data: { success: boolean; analysisId: string };
      }) => response.data,
    }),
  }),
});

export const {
  useGetDashboardSummaryQuery,
  useGetAnalysisHistoryQuery,
  useStartAnalysisMutation,
} = dashboardApi;
