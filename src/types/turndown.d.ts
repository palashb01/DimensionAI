declare module 'turndown' {
  class TurndownService {
    constructor(options?: any);
    turndown(html: string): string;
    // Add any other methods or properties you need here
  }
  export = TurndownService;
}
