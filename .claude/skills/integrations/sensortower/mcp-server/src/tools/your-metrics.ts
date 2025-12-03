import { SensorTowerClient } from "../utils/api-client.js";
import { Tool } from "./app-analysis.js";

export const yourMetricsTools: Tool[] = [
  {
    name: "get_analytics_metrics",
    description: "Get your iOS app's analytics metrics (impressions, views, downloads, sessions). Requires connected App Store Connect.",
    inputSchema: {
      type: "object",
      properties: {
        app_ids: { type: "array", items: { type: "string" }, description: "Your connected iOS app IDs" },
        countries: { type: "array", items: { type: "string" }, description: "Country codes" },
        start_date: { type: "string", format: "date", description: "YYYY-MM-DD" },
        end_date: { type: "string", format: "date", description: "YYYY-MM-DD" },
      },
      required: ["app_ids", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.getAnalyticsMetrics(args.app_ids, {
        countries: args.countries,
        startDate: args.start_date,
        endDate: args.end_date,
      });
    },
  },
  {
    name: "get_sales_reports",
    description: "Get your app's downloads and revenue reports. Requires connected App Store Connect / Google Play Console.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        app_ids: { type: "array", items: { type: "string" } },
        countries: { type: "array", items: { type: "string" } },
        start_date: { type: "string", format: "date" },
        end_date: { type: "string", format: "date" },
        date_granularity: { type: "string", enum: ["daily", "weekly", "monthly", "quarterly"], default: "daily" },
      },
      required: ["os", "app_ids", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.getSalesReports(args.os, args.app_ids, {
        countries: args.countries,
        startDate: args.start_date,
        endDate: args.end_date,
        dateGranularity: args.date_granularity,
      });
    },
  },
];
