import axios, { AxiosInstance, AxiosError } from "axios";
import { cache, CacheManager } from "./cache.js";

export interface ApiResponse<T = any> {
  data: T;
  status: number;
}

// Cache TTL presets (in seconds)
const CACHE_TTL = {
  APP_METADATA: 86400,      // 24 hours - app info changes rarely
  RANKINGS: 3600,           // 1 hour - rankings change frequently
  KEYWORDS: 21600,          // 6 hours - keyword data moderately stable
  REVIEWS: 3600,            // 1 hour - reviews can be recent
  MARKET_DATA: 43200,       // 12 hours - market summaries
  DEFAULT: 3600,            // 1 hour default
};

export class SensorTowerClient {
  private client: AxiosInstance;
  private baseUrl = "https://api.sensortower.com";
  private apiToken: string;
  private cache: CacheManager;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
    this.cache = cache;
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 30000,
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          const status = error.response.status;
          const message = (error.response.data as any)?.message || error.message;

          switch (status) {
            case 401:
              throw new Error("Invalid API token. Check SENSOR_TOWER_API_TOKEN.");
            case 403:
              throw new Error("Access forbidden. Check your subscription plan.");
            case 422:
              throw new Error(`Invalid parameters: ${message}`);
            case 429:
              throw new Error("Rate limit exceeded. Please wait and try again.");
            default:
              throw new Error(`API error (${status}): ${message}`);
          }
        }
        throw error;
      }
    );
  }

  // Helper to add auth_token to all requests
  private withAuth(params: Record<string, any> = {}) {
    return { ...params, auth_token: this.apiToken };
  }

  // Cached GET request helper
  private async cachedGet<T>(endpoint: string, params: Record<string, any>, ttl: number): Promise<T> {
    const cached = this.cache.get<T>(endpoint, params);
    if (cached) return cached;

    const response = await this.client.get(endpoint, { params: this.withAuth(params) });
    this.cache.set(endpoint, params, response.data, ttl);
    return response.data;
  }

  // Cache control
  getCacheStats() { return this.cache.getStats(); }
  setCacheEnabled(enabled: boolean) { this.cache.setEnabled(enabled); }
  clearCache() { this.cache.clear(); }

  // App Analysis
  async getAppMetadata(os: "ios" | "android", appIds: string[], country = "US") {
    return this.cachedGet(`/v1/${os}/apps`, { app_ids: appIds.join(","), country }, CACHE_TTL.APP_METADATA);
  }

  async getAppRankings(os: "ios" | "android", appIds: string[], options: { country?: string; category?: string; startDate?: string; endDate?: string } = {}) {
    return this.cachedGet(`/v1/${os}/ranking`, { app_ids: appIds.join(","), country: options.country || "US", category: options.category, start_date: options.startDate, end_date: options.endDate }, CACHE_TTL.RANKINGS);
  }

  async getAppReviews(os: "ios" | "android", appId: string, options: { country?: string; limit?: number } = {}) {
    return this.cachedGet(`/v1/${os}/review/get_reviews`, { app_id: appId, country: options.country || "US", limit: options.limit || 100 }, CACHE_TTL.REVIEWS);
  }

  // Store Marketing / ASO
  async getKeywordRankings(os: "ios" | "android", appId: string, options: { country?: string } = {}) {
    return this.cachedGet(`/v1/${os}/keywords/get_current_keywords`, { app_id: appId, country: options.country || "US" }, CACHE_TTL.KEYWORDS);
  }

  async searchKeywords(os: "ios" | "android", term: string, options: { country?: string } = {}) {
    return this.cachedGet(`/v1/${os}/keywords/research_keyword`, { term, country: options.country || "US" }, CACHE_TTL.KEYWORDS);
  }

  async getKeywordStats(os: "ios" | "android", keywords: string[], options: { countries?: string[] } = {}) {
    return this.cachedGet(`/v1/${os}/keywords/traffic`, { terms: keywords.join(","), countries: (options.countries || ["US"]).join(",") }, CACHE_TTL.KEYWORDS);
  }

  // Market Analysis
  async getTopApps(os: "ios" | "android", options: { country?: string; category: string; chartType?: string; date?: string }) {
    return this.cachedGet(`/v1/${os}/ranking`, { country: options.country || "US", category: options.category, chart_type: options.chartType || "topfreeapplications", date: options.date }, CACHE_TTL.RANKINGS);
  }

  async getCategoryBreakdown(os: "ios" | "android", options: { categories: string[]; countries?: string[]; startDate: string; endDate: string; dateGranularity?: string }) {
    return this.cachedGet(`/v1/${os}/store_summary`, { categories: options.categories.join(","), countries: options.countries?.join(","), start_date: options.startDate, end_date: options.endDate, date_granularity: options.dateGranularity || "daily" }, CACHE_TTL.MARKET_DATA);
  }

  // Your Metrics (connected apps)
  async getAnalyticsMetrics(appIds: string[], options: { countries?: string[]; startDate: string; endDate: string }) {
    return this.cachedGet("/v1/ios/sales_reports/analytics_metrics", { app_ids: appIds.join(","), countries: options.countries?.join(","), start_date: options.startDate, end_date: options.endDate }, CACHE_TTL.DEFAULT);
  }

  async getSalesReports(os: "ios" | "android", appIds: string[], options: { countries?: string[]; startDate: string; endDate: string; dateGranularity?: string }) {
    return this.cachedGet(`/v1/${os}/sales_reports`, { app_ids: appIds.join(","), countries: options.countries?.join(","), start_date: options.startDate, end_date: options.endDate, date_granularity: options.dateGranularity || "daily" }, CACHE_TTL.DEFAULT);
  }

  // Generic request (with optional caching)
  async request<T = any>(method: "GET" | "POST", path: string, params?: Record<string, any>, ttl?: number): Promise<T> {
    if (method === "GET" && ttl) {
      return this.cachedGet<T>(path, params || {}, ttl);
    }
    const response = await this.client.request({
      method, url: path,
      params: method === "GET" ? this.withAuth(params) : { auth_token: this.apiToken },
      data: method === "POST" ? params : undefined,
    });
    return response.data;
  }
}
