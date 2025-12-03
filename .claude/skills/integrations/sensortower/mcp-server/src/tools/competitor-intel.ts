import { SensorTowerClient } from "../utils/api-client.js";
import { Tool } from "./app-analysis.js";

/**
 * Competitor Intelligence Tools
 * For marketing/sales teams to analyze competitor performance
 */
export const competitorIntelTools: Tool[] = [
  {
    name: "get_download_revenue_estimates",
    description: "Get download and revenue estimates for apps. Essential for competitor analysis and market sizing.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android", "unified"] },
        category: { type: "string", description: "Category ID" },
        date: { type: "string", format: "date", description: "Start date YYYY-MM-DD" },
        end_date: { type: "string", format: "date", description: "End date (optional)" },
        time_range: { type: "string", enum: ["day", "week", "month", "quarter", "year"], default: "week" },
        measure: { type: "string", enum: ["units", "revenue"], default: "units" },
        comparison_attribute: { type: "string", enum: ["absolute", "delta", "transformed_delta"], default: "absolute" },
        regions: { type: "array", items: { type: "string" }, description: "Country/region codes" },
        limit: { type: "number", default: 25, maximum: 2000 },
      },
      required: ["os", "category", "date"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/sales_report_estimates_comparison_attributes`, {
        category: args.category,
        date: args.date,
        end_date: args.end_date,
        time_range: args.time_range || "week",
        measure: args.measure || "units",
        comparison_attribute: args.comparison_attribute || "absolute",
        regions: args.regions?.join(","),
        limit: args.limit || 25,
        device_type: "total",
      });
    },
  },
  {
    name: "get_top_apps_by_active_users",
    description: "Get top apps by daily/weekly/monthly active users. Use for engagement analysis.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android", "unified"] },
        date: { type: "string", format: "date", description: "Date YYYY-MM-DD" },
        time_range: { type: "string", enum: ["week", "month", "quarter"], default: "month" },
        measure: { type: "string", enum: ["DAU", "WAU", "MAU"], default: "MAU" },
        category: { type: "string", description: "Category ID (optional)" },
        regions: { type: "array", items: { type: "string" } },
        limit: { type: "number", default: 25 },
      },
      required: ["os", "date"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/top_and_trending/active_users`, {
        date: args.date,
        time_range: args.time_range || "month",
        measure: args.measure || "MAU",
        comparison_attribute: "absolute",
        category: args.category || "0",
        regions: args.regions?.join(","),
        limit: args.limit || 25,
        device_type: "total",
      });
    },
  },
  {
    name: "get_app_ratings",
    description: "Get historical rating breakdown for an app. Use for reputation tracking.",
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
      return client.request("GET", `/v1/${args.os}/review/get_ratings`, {
        app_id: args.app_id,
        country: args.country || "US",
        start_date: args.start_date,
        end_date: args.end_date,
      });
    },
  },
  {
    name: "get_review_summary",
    description: "Get daily summary of positive/negative reviews. Use for sentiment tracking.",
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
      return client.request("GET", `/v1/${args.os}/review/app_history_summary`, {
        app_id: args.app_id,
        country: args.country || "US",
        start_date: args.start_date,
        end_date: args.end_date,
      });
    },
  },
];
