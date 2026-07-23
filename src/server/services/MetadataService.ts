import * as cheerio from 'cheerio';
import { BaseService } from './BaseService';

export class MetadataService extends BaseService {
  /**
   * Fetches HTML from a URL and extracts structural and SEO metadata
   */
  async extractMetadata(url: string) {
    try {
      // In a real production app, use a proper scraper like Playwright/Puppeteer with proxies
      // For fast extraction of basic HTML, fetch is fine.
      const response = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
        // Enforce timeout
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch page: ${response.statusText}`);
      }

      const html = await response.text();
      const $ = cheerio.load(html);

      const title = $('title').text().trim();
      const description =
        $('meta[name="description"]').attr('content')?.trim() || '';

      const ogTitle =
        $('meta[property="og:title"]').attr('content')?.trim() || '';
      const ogDescription =
        $('meta[property="og:description"]').attr('content')?.trim() || '';
      const ogImage =
        $('meta[property="og:image"]').attr('content')?.trim() || '';

      const headings = {
        h1: $('h1')
          .map((_, el) => $(el).text().trim())
          .get(),
        h2: $('h2')
          .map((_, el) => $(el).text().trim())
          .get(),
        h3: $('h3')
          .map((_, el) => $(el).text().trim())
          .get(),
      };

      const linkCount = $('a').length;
      const imageCount = $('img').length;
      const buttonCount = $('button').length;

      // Extremely basic CSS scraping
      const cssUrls = $('link[rel="stylesheet"]')
        .map((_, el) => $(el).attr('href'))
        .get();

      return {
        htmlData: {
          title,
          description,
          headings,
          counts: {
            links: linkCount,
            images: imageCount,
            buttons: buttonCount,
          },
        },
        metadata: {
          ogTitle,
          ogDescription,
          ogImage,
          canonical: $('link[rel="canonical"]').attr('href'),
        },
        cssData: {
          externalFiles: cssUrls,
        },
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.logger.error(
        `Failed to extract metadata for ${url}: ${error.message}`
      );
      throw error;
    }
  }
}

export const metadataService = new MetadataService();
