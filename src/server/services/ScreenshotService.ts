import puppeteer from 'puppeteer';
import { BaseService } from './BaseService';
import path from 'path';
import fs from 'fs/promises';

export class ScreenshotService extends BaseService {
  /**
   * Captures a full page screenshot using Puppeteer.
   * Returns a URL/path to the saved screenshot.
   */
  async captureScreenshot(
    url: string,
    analysisId: string
  ): Promise<{ screenshotUrl: string; domElements: unknown[] }> {
    this.logger.info(`Capturing screenshot and DOM tree for ${url}`);

    // Vercel Serverless Functions do not include Chromium.
    // We gracefully degrade to Microlink for the screenshot and skip DOM coordinates.
    if (
      process.env.VERCEL ||
      process.env.NEXT_PUBLIC_VERCEL_ENV ||
      process.env.VERCEL_ENV
    ) {
      this.logger.warn(
        'Vercel environment detected. Bypassing Puppeteer and falling back to Microlink API for screenshot.'
      );
      try {
        const microlinkUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false`;
        const res = await fetch(microlinkUrl);
        const data = await res.json();

        if (data?.data?.screenshot?.url) {
          return { screenshotUrl: data.data.screenshot.url, domElements: [] };
        }
      } catch (e) {
        this.logger.error(`Microlink API failed: ${(e as Error).message}`);
      }
      return { screenshotUrl: '', domElements: [] };
    }

    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      const page = await browser.newPage();

      // Set a generic desktop viewport
      await page.setViewport({ width: 1440, height: 900 });

      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Extract DOM spatial coordinates
      const domElements = await page.evaluate(() => {
        const elements = document.querySelectorAll(
          'h1, h2, h3, a, button, img, section, form, input, .hero, .cta, header, footer'
        );
        const data: unknown[] = [];

        elements.forEach((el, index) => {
          const rect = el.getBoundingClientRect();
          // Only care about visible elements
          if (rect.width > 0 && rect.height > 0) {
            data.push({
              id: `el-${index}`,
              tag: el.tagName.toLowerCase(),
              text: (el as HTMLElement).innerText?.substring(0, 100) || '',
              x: Math.round(rect.x),
              y: Math.round(rect.y),
              width: Math.round(rect.width),
              height: Math.round(rect.height),
            });
          }
        });
        return data;
      });

      // Ensure directory exists
      const screenshotDir = path.join(process.cwd(), 'public', 'screenshots');
      await fs.mkdir(screenshotDir, { recursive: true });

      const fileName = `${analysisId}.webp`;
      const filePath = path.join(screenshotDir, fileName);

      await page.screenshot({
        path: filePath,
        type: 'webp',
        fullPage: true, // We take a full page screenshot
      });

      return { screenshotUrl: `/screenshots/${fileName}`, domElements };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.logger.error(`Screenshot failed for ${url}: ${error.message}`);
      throw error;
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}

export const screenshotService = new ScreenshotService();
