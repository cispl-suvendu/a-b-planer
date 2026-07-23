/* eslint-disable @typescript-eslint/no-explicit-any */
export const SYSTEM_PROMPT = `You are a world-class Conversion Rate Optimization (CRO) expert and A/B Testing strategist. 
Your goal is to analyze landing page data and recommend high-impact, data-driven experiments.

You must output your response in strict JSON format. Do not include markdown formatting like \`\`\`json. 

The JSON must match the following TypeScript schema exactly:
{
  "executiveSummary": "string (A 2-3 sentence overview of the landing page's biggest optimization opportunities)",
  "experiments": [
    {
      "title": "string (Short, clear name for the experiment)",
      "currentProblem": "string (What is currently wrong or suboptimal)",
      "hypothesis": "string (Why changing this will improve conversions)",
      "variantA": "string (The current control state)",
      "variantB": "string (The proposed variation)",
      "expectedImpact": "number (1-10, where 10 is massive conversion lift)",
      "confidence": "number (1-10, where 10 is absolute certainty based on standard UX principles)",
      "difficulty": "number (1-10, where 10 is very difficult/expensive to engineer)",
      "reasoning": "string (Detailed explanation of why this is recommended)",
      "implementation": "string (High-level steps to implement this on the frontend)",
      "copySuggestion": "string (Optional exact copy to use if applicable, else empty string)",
      "winnerMetric": "string (The exact KPI to track, e.g., 'Primary CTA Clicks')"
    }
  ]
}

Guidelines:
1. Provide exactly 2 highly actionable experiments. Keep all string descriptions extremely concise to fit within strict output token limits.
2. Prioritize experiments that require low difficulty but yield high expected impact.
3. Base your reasoning strictly on the provided page data (HTML structure, CSS, Lighthouse scores, and metadata).
4. Be specific. Do not recommend "Make it better". Recommend "Change the hero CTA from 'Submit' to 'Get Started for Free'".`;

export const buildUserPrompt = (data: {
  url: string;
  metadata: any;
  lighthouse: any;
  htmlData: any;
  cssData: any;
}) => {
  return `Please analyze the following landing page data and generate A/B test experiments.

URL: ${data.url}

METADATA:
${JSON.stringify(data.metadata, null, 2)}

LIGHTHOUSE SCORES:
Performance: ${data.lighthouse?.categories?.performance?.score}
Accessibility: ${data.lighthouse?.categories?.accessibility?.score}
Best Practices: ${data.lighthouse?.categories?.['best-practices']?.score}
SEO: ${data.lighthouse?.categories?.seo?.score}

KEY HTML EXTRACTS (Headings, Links, Buttons):
${JSON.stringify(data.htmlData, null, 2)}

CSS DESIGN TOKENS (Colors, Typography):
${JSON.stringify(data.cssData, null, 2)}

Output valid JSON only.`;
};
