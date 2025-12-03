import { SensorTowerClient } from "../utils/api-client.js";
import { Tool } from "./app-analysis.js";

/**
 * Publisher & Search Tools
 * For sales teams to find and research potential clients
 */
export const publisherSearchTools: Tool[] = [
  {
    name: "search_apps_publishers",
    description: "Search for apps or publishers by name. Essential for sales prospecting and market research.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android", "unified"], default: "unified" },
        entity_type: { type: "string", enum: ["app", "publisher"], default: "app" },
        term: { type: "string", description: "Search term (min 3 chars)" },
        limit: { type: "number", default: 100, maximum: 250 },
      },
      required: ["term"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os || "unified"}/search_entities`, {
        entity_type: args.entity_type || "app",
        term: args.term,
        limit: args.limit || 100,
      });
    },
  },
  {
    name: "get_publisher_apps",
    description: "Get all apps from a publisher. Use to understand publisher portfolio for sales targeting.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        publisher_id: { type: "string", description: "Publisher ID (numeric for iOS, string for Android)" },
        limit: { type: "number", default: 100, maximum: 100 },
        offset: { type: "number", default: 0 },
        include_count: { type: "boolean", default: true },
      },
      required: ["os", "publisher_id"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/publisher/publisher_apps`, {
        publisher_id: args.publisher_id,
        limit: args.limit || 100,
        offset: args.offset || 0,
        include_count: args.include_count !== false,
      });
    },
  },
  {
    name: "get_top_publishers",
    description: "Get top publishers by downloads or revenue. Use for market analysis and sales targeting.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android", "unified"] },
        date: { type: "string", format: "date", description: "Date YYYY-MM-DD" },
        time_range: { type: "string", enum: ["day", "week", "month", "quarter", "year"], default: "month" },
        measure: { type: "string", enum: ["units", "revenue"], default: "units" },
        category: { type: "string", description: "Category ID" },
        regions: { type: "array", items: { type: "string" } },
        limit: { type: "number", default: 25, maximum: 2000 },
      },
      required: ["os", "date"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/top_and_trending/publishers`, {
        date: args.date,
        time_range: args.time_range || "month",
        measure: args.measure || "units",
        comparison_attribute: "absolute",
        category: args.category || "0",
        regions: args.regions?.join(","),
        limit: args.limit || 25,
        device_type: "total",
      });
    },
  },
  {
    name: "get_unified_app_info",
    description: "Get unified app data linking iOS and Android versions. Use to understand cross-platform presence.",
    inputSchema: {
      type: "object",
      properties: {
        app_id_type: { type: "string", enum: ["unified", "itunes", "android"] },
        app_ids: { type: "array", items: { type: "string" }, description: "App IDs (max 100)" },
      },
      required: ["app_id_type", "app_ids"],
    },
    handler: async (client, args) => {
      return client.request("GET", "/v1/unified/apps", {
        app_id_type: args.app_id_type,
        app_ids: args.app_ids.join(","),
      });
    },
  },
  {
    name: "get_apps_by_category",
    description: "Get list of app IDs in a category. Use for comprehensive market mapping.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        category: { type: "string", description: "Category ID" },
        start_date: { type: "string", format: "date", description: "Min release date" },
        limit: { type: "number", default: 1000, maximum: 10000 },
        offset: { type: "number", default: 0 },
      },
      required: ["os", "category"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/apps/app_ids`, {
        category: args.category,
        start_date: args.start_date,
        limit: args.limit || 1000,
        offset: args.offset || 0,
      });
    },
  },
];
