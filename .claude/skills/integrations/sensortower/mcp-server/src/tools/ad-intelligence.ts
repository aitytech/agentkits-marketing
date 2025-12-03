import { SensorTowerClient } from "../utils/api-client.js";
import { Tool } from "./app-analysis.js";

/**
 * Ad Intelligence Tools
 * For marketing teams to analyze competitor advertising strategies
 */
export const adIntelligenceTools: Tool[] = [
  {
    name: "get_top_advertisers",
    description: "Get top advertisers by ad impressions/share of voice. Essential for competitive ad analysis.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android", "unified"] },
        start_date: { type: "string", format: "date", description: "Start date YYYY-MM-DD" },
        end_date: { type: "string", format: "date", description: "End date" },
        ad_networks: { type: "array", items: { type: "string" }, description: "Ad network IDs to filter" },
        countries: { type: "array", items: { type: "string" } },
        categories: { type: "array", items: { type: "string" } },
        limit: { type: "number", default: 25, maximum: 2000 },
        sort_by: { type: "string", enum: ["share_of_voice", "impression_count"], default: "impression_count" },
      },
      required: ["os", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/ad_intel/top_apps`, {
        start_date: args.start_date,
        end_date: args.end_date,
        ad_networks: args.ad_networks?.join(","),
        countries: args.countries?.join(","),
        categories: args.categories?.join(","),
        limit: args.limit || 25,
        sort_by: args.sort_by || "impression_count",
      });
    },
  },
  {
    name: "get_top_creatives",
    description: "Get top performing ad creatives. Use to analyze competitor creative strategies.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android", "unified"] },
        start_date: { type: "string", format: "date" },
        end_date: { type: "string", format: "date" },
        ad_networks: { type: "array", items: { type: "string" } },
        countries: { type: "array", items: { type: "string" } },
        categories: { type: "array", items: { type: "string" } },
        creative_types: { type: "array", items: { type: "string" }, description: "e.g., video, playable, static" },
        limit: { type: "number", default: 25, maximum: 500 },
      },
      required: ["os", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/ad_intel/creatives/top`, {
        start_date: args.start_date,
        end_date: args.end_date,
        ad_networks: args.ad_networks?.join(","),
        countries: args.countries?.join(","),
        categories: args.categories?.join(","),
        creative_types: args.creative_types?.join(","),
        limit: args.limit || 25,
      });
    },
  },
  {
    name: "get_app_ad_creatives",
    description: "Get ad creatives for a specific app. Use to study competitor ad strategies in detail.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        app_id: { type: "string" },
        start_date: { type: "string", format: "date" },
        end_date: { type: "string", format: "date" },
        ad_networks: { type: "array", items: { type: "string" } },
        countries: { type: "array", items: { type: "string" } },
        limit: { type: "number", default: 50, maximum: 500 },
      },
      required: ["os", "app_id", "start_date", "end_date"],
    },
    handler: async (client, args) => {
      return client.request("GET", `/v1/${args.os}/ad_intel/creatives`, {
        app_id: args.app_id,
        start_date: args.start_date,
        end_date: args.end_date,
        ad_networks: args.ad_networks?.join(","),
        countries: args.countries?.join(","),
        limit: args.limit || 50,
      });
    },
  },
  {
    name: "get_ad_networks_list",
    description: "Get list of available ad networks for filtering. Use to understand ad network options.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
    handler: async (client, args) => {
      return client.request("GET", "/v1/ad_intel/networks", {});
    },
  },
];
