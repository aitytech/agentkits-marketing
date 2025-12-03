import { SensorTowerClient } from "../utils/api-client.js";
import { Tool } from "./app-analysis.js";

/**
 * Trending & Featured Tools
 * For marketing teams to track trends and app store featuring
 */
export const trendingFeaturedTools: Tool[] = [
  {
    name: "get_trending_searches",
    description: "Get trending search terms in the App Store. Essential for ASO and content strategy.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios"], default: "ios" },
        country: { type: "string", default: "US" },
        category: { type: "string", description: "Category ID (optional)" },
        date: { type: "string", format: "date", description: "Date (defaults to latest)" },
      },
      required: ["country"],
    },
    handler: async (client, args) => {
      return client.request("GET", "/v1/ios/keywords/trending_searches", {
        country: args.country || "US",
        category: args.category,
        date: args.date,
      });
    },
  },
  {
    name: "get_featured_apps",
    description: "Get apps featured in the App Store/Google Play. Track featuring opportunities.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        country: { type: "string", default: "US" },
        date: { type: "string", format: "date", description: "Date (defaults to latest)" },
      },
      required: ["os"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/featured/apps`, {
        country: args.country || "US",
        date: args.date,
      });
    },
  },
  {
    name: "get_featured_history",
    description: "Get featuring history for an app. Track when app was featured in stores.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        app_id: { type: "string" },
        country: { type: "string", default: "US" },
        start_date: { type: "string", format: "date" },
        end_date: { type: "string", format: "date" },
      },
      required: ["os", "app_id"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/featured/get_featured_dates`, {
        app_id: args.app_id,
        country: args.country || "US",
        start_date: args.start_date,
        end_date: args.end_date,
      });
    },
  },
  {
    name: "get_search_ads_keywords",
    description: "Get Apple Search Ads keywords for an app. Use for paid ASO strategy.",
    inputSchema: {
      type: "object",
      properties: {
        app_id: { type: "string", description: "iOS App ID" },
        country: { type: "string", default: "US" },
        start_date: { type: "string", format: "date" },
        end_date: { type: "string", format: "date" },
      },
      required: ["app_id", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.request("GET", "/v1/ios/search_ads/apps", {
        app_id: args.app_id,
        country: args.country || "US",
        start_date: args.start_date,
        end_date: args.end_date,
      });
    },
  },
  {
    name: "get_search_ads_by_keyword",
    description: "Get apps running Search Ads for a keyword. Use to analyze paid search competition.",
    inputSchema: {
      type: "object",
      properties: {
        keyword: { type: "string" },
        country: { type: "string", default: "US" },
        start_date: { type: "string", format: "date" },
        end_date: { type: "string", format: "date" },
      },
      required: ["keyword", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.request("GET", "/v1/ios/search_ads/terms", {
        term: args.keyword,
        country: args.country || "US",
        start_date: args.start_date,
        end_date: args.end_date,
      });
    },
  },
  {
    name: "get_app_update_history",
    description: "Get app version update history. Track competitor release patterns.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        app_id: { type: "string" },
      },
      required: ["os", "app_id"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/apps/versions`, {
        app_id: args.app_id,
      });
    },
  },
];
