import OpenAI from 'openai';
import { env } from '@/env';

export const openrouter = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': env.NEXTAUTH_URL,
    'X-Title': 'Landing Page A/B Planner',
  },
});
