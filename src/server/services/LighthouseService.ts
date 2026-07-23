import { BaseService } from './BaseService';

export class LighthouseService extends BaseService {
  /**
   * Mocks a Lighthouse audit since running real audits inside the Next.js process
   * is highly resource intensive. In Sprint 06, we will implement this in a separate worker.
   */
  async runAudit(url: string) {
    this.logger.info(`Simulating Lighthouse audit for ${url}`);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Return randomized good scores
    return {
      performance: Math.floor(Math.random() * 20) + 70, // 70-90
      accessibility: Math.floor(Math.random() * 10) + 90, // 90-100
      seo: Math.floor(Math.random() * 10) + 90, // 90-100
      bestPractices: Math.floor(Math.random() * 15) + 85, // 85-100
    };
  }
}

export const lighthouseService = new LighthouseService();
