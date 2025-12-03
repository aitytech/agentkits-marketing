#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { SensorTowerClient } from "./utils/api-client.js";
import { appAnalysisTools } from "./tools/app-analysis.js";
import { storeMarketingTools } from "./tools/store-marketing.js";
import { marketAnalysisTools } from "./tools/market-analysis.js";
import { yourMetricsTools } from "./tools/your-metrics.js";
import { competitorIntelTools } from "./tools/competitor-intel.js";
import { publisherSearchTools } from "./tools/publisher-search.js";
import { adIntelligenceTools } from "./tools/ad-intelligence.js";
import { trendingFeaturedTools } from "./tools/trending-featured.js";

// Initialize SensorTower API client
const apiToken = process.env.SENSOR_TOWER_API_TOKEN;
if (!apiToken) {
  console.error("Error: SENSOR_TOWER_API_TOKEN environment variable is required");
  process.exit(1);
}

const client = new SensorTowerClient(apiToken);

// Cache control tools
const cacheTools = [
  {
    name: "cache_stats",
    description: "Get cache statistics (enabled status, file count, size)",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: async () => client.getCacheStats(),
  },
  {
    name: "cache_enable",
    description: "Enable or disable caching. Set enabled=true to turn on, enabled=false to turn off",
    inputSchema: { type: "object", properties: { enabled: { type: "boolean", description: "Enable (true) or disable (false) cache" } }, required: ["enabled"] },
    handler: async (_: any, args: { enabled: boolean }) => { client.setCacheEnabled(args.enabled); return { success: true, enabled: args.enabled }; },
  },
  {
    name: "cache_clear",
    description: "Clear all cached data",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: async () => { client.clearCache(); return { success: true, message: "Cache cleared" }; },
  },
];

// Combine all tools
const allTools = [
  ...appAnalysisTools,
  ...storeMarketingTools,
  ...marketAnalysisTools,
  ...yourMetricsTools,
  ...competitorIntelTools,
  ...publisherSearchTools,
  ...adIntelligenceTools,
  ...trendingFeaturedTools,
  ...cacheTools,
];

// Create MCP server
const server = new Server(
  {
    name: "sensortower-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Handle list tools request
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: allTools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
    })),
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  const tool = allTools.find((t) => t.name === name);
  if (!tool) {
    throw new Error(`Unknown tool: ${name}`);
  }

  try {
    const result = await tool.handler(client, args);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  } catch (error: any) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("SensorTower MCP Server running on stdio");
}

main().catch(console.error);
