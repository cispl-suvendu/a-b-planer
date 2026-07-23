export class ValidationUtils {
  /**
   * Validates a URL to prevent SSRF and block internal/local requests.
   */
  static isUrlSafe(urlString: string): boolean {
    try {
      const url = new URL(urlString);

      if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return false;
      }

      const hostname = url.hostname.toLowerCase();

      // Block localhost and common local addresses
      const blockedHostnames = ['localhost', '127.0.0.1', '0.0.0.0', '[::1]'];

      if (blockedHostnames.includes(hostname)) {
        return false;
      }

      // Basic regex for detecting internal IP patterns (10.x.x.x, 172.16-31.x.x, 192.168.x.x)
      const isPrivateIp =
        /^10\./.test(hostname) ||
        /^192\.168\./.test(hostname) ||
        /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname);

      if (isPrivateIp) {
        return false;
      }

      // Block metadata service IP
      if (hostname === '169.254.169.254') {
        return false;
      }

      return true;
    } catch {
      return false; // Invalid URL string
    }
  }
}
