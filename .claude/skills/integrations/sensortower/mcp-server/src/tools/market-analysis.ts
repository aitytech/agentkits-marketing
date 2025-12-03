import { SensorTowerClient } from "../utils/api-client.js";
import { Tool } from "./app-analysis.js";

export const marketAnalysisTools: Tool[] = [
  {
    name: "get_top_apps",
    description: "Get top ranking apps in a category. Use for market research and competitive landscape.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        category: { type: "string", description: "Category ID (required)" },
        country: { type: "string", default: "US" },
        chart_type: { type: "string", default: "topfreeapplications", description: "Chart type ID" },
        date: { type: "string", format: "date", description: "YYYY-MM-DD (defaults to latest)" },
      },
      required: ["os", "category"],
    },
    handler: async (client, args) => {
      return client.getTopApps(args.os, {
        country: args.country,
        category: args.category,
        chartType: args.chart_type,
        date: args.date,
      });
    },
  },
  {
    name: "get_category_breakdown",
    description: "Get aggregated download/revenue estimates by category. Use for market sizing.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        categories: { type: "array", items: { type: "string" }, description: "Category IDs" },
        countries: { type: "array", items: { type: "string" }, description: "Country codes" },
        start_date: { type: "string", format: "date", description: "YYYY-MM-DD" },
        end_date: { type: "string", format: "date", description: "YYYY-MM-DD" },
        date_granularity: { type: "string", enum: ["daily", "weekly", "monthly", "quarterly"], default: "daily" },
      },
      required: ["os", "categories", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.getCategoryBreakdown(args.os, {
        categories: args.categories,
        countries: args.countries,
        startDate: args.start_date,
        endDate: args.end_date,
        dateGranularity: args.date_granularity,
      });
    },
  },
];
