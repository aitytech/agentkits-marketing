import { z } from "zod";
import { SensorTowerClient } from "../utils/api-client.js";

export interface Tool {
  name: string;
  description: string;
  inputSchema: object;
  handler: (client: SensorTowerClient, args: any) => Promise<any>;
}

export const appAnalysisTools: Tool[] = [
  {
    name: "get_app_metadata",
    description: "Get app metadata including name, publisher, categories, description, ratings, and screenshots. Use for competitor research or app overview.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"], description: "Operating system" },
        app_ids: { type: "array", items: { type: "string" }, description: "App IDs (max 100)" },
        country: { type: "string", default: "US", description: "Country code" },
      },
      required: ["os", "app_ids"],
    },
    handler: async (client, args) => {
      return client.getAppMetadata(args.os, args.app_ids, args.country);
    },
  },
  {
    name: "get_app_rankings",
    description: "Get historical app rankings in app store charts. Use to track ranking trends over time.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        app_ids: { type: "array", items: { type: "string" } },
        country: { type: "string", default: "US" },
        category: { type: "string", description: "Category ID" },
        start_date: { type: "string", format: "date", description: "YYYY-MM-DD" },
        end_date: { type: "string", format: "date", description: "YYYY-MM-DD" },
      },
      required: ["os", "app_ids"],
    },
    handler: async (client, args) => {
      return client.getAppRankings(args.os, args.app_ids, {
        country: args.country,
        category: args.category,
        startDate: args.start_date,
        endDate: args.end_date,
      });
    },
  },
  {
    name: "get_app_reviews",
    description: "Get user reviews for an app. Use for sentiment analysis, feature requests, and competitor insights.",
    inputSchema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["ios", "android"] },
        app_id: { type: "string", description: "Single app ID" },
        country: { type: "string", default: "US" },
        limit: { type: "number", default: 100, maximum: 500 },
      },
      required: ["os", "app_id"],
    },
    handler: async (client, args) => {
      return client.getAppReviews(args.os, args.app_id, {
        country: args.country,
        limit: args.limit,
      });
    },
  },
];
