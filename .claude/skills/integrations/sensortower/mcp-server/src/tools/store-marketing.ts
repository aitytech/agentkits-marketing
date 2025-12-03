import { SensorTowerClient } from "../utils/api-client.js";
import { Tool } from "./app-analysis.js";

export const storeMarketingTools: Tool[] = [
  {
    name: "get_keyword_rankings",
    description: "Get current keyword rankings for an app. Use for ASO (App Store Optimization) analysis.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        app_id: { type: "string", description: "App ID (numeric for iOS, package name for Android)" },
        country: { type: "string", default: "US", description: "Country code" },
      },
      required: ["os", "app_id"],
    },
    handler: async (client, args) => {
      return client.getKeywordRankings(args.os, args.app_id, {
        country: args.country,
      });
    },
  },
  {
    name: "search_keywords",
    description: "Research a keyword to get traffic data, difficulty, and apps ranking for it.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        term: { type: "string", description: "Keyword to research" },
        country: { type: "string", default: "US" },
      },
      required: ["os", "term", "country"],
    },
    handler: async (client, args) => {
      return client.searchKeywords(args.os, args.term, {
        country: args.country,
      });
    },
  },
  {
    name: "get_keyword_stats",
    description: "Get traffic scores for multiple keywords. Use for keyword prioritization.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        keywords: { type: "array", items: { type: "string" }, description: "Keywords to check (max 500)" },
        countries: { type: "array", items: { type: "string" }, default: ["US"], description: "Country codes (max 25)" },
      },
      required: ["os", "keywords"],
    },
    handler: async (client, args) => {
      return client.getKeywordStats(args.os, args.keywords, {
        countries: args.countries,
      });
    },
  },
];
