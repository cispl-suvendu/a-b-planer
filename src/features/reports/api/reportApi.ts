import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IExperimentResponse {
  title: string;
  currentProblem: string;
  hypothesis: string;
  variantA: string;
  variantB: string;
  expectedImpact: number;
  confidence: number;
  difficulty: number;
  priorityScore: number;
  reasoning: string;
  implementation: string;
  copySuggestion?: string;
  winnerMetric: string;
}

export interface IReport {
  id: string;
  analysisId: string;
  userId: string;
  url: string;
  screenshotUrl?: string;
  title: string;
  executiveSummary: string;
  executiveReport?: Record<string, unknown>;
  revenueOpportunity?: Record<string, unknown>;
  roadmap?: Record<string, unknown>;
  psychologyAnalysis?: Record<string, unknown>;
  trustAudit?: Record<string, unknown>;
  copyBreakdown?: Record<string, unknown>;
  behaviorSimulation?: Record<string, unknown>;
  competitorGapAnalysis?: Record<string, unknown>;
  annotations?: unknown[];
  heatmapData?: unknown[];
  experiments: IExperimentResponse[];
  promptVersion: string;
  status: string;
  aiModel: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetReportResponse {
  report: IReport;
}

export const reportApi = createApi({
  reducerPath: 'reportApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getReportById: builder.query<GetReportResponse, string>({
      query: (id) => `/reports/${id}`,
    }),
  }),
});

export const { useGetReportByIdQuery } = reportApi;
