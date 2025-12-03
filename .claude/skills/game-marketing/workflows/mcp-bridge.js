#!/usr/bin/env node
/**
 * MCP Bridge Functions
 *
 * Minimal adapter layer between Claude Code MCP and modular libraries.
 * Transforms MCP responses into formats expected by existing modules.
 */

import { normalizeMCPRankingResponse, normalizeMCPMetadataResponse } from '../lib/sensortower-mcp-adapter.js';
import { getGenreFromApp, getSubgenreFromApp } from '../lib/category-mappings.js';
import { calculateRankingChanges } from '../lib/ranking-calculator.js';

/**
 * Process single chart from MCP responses
 *
 * Transforms MCP data into format expected by full-report-generator.js
 *
 * @param {Object} params - Chart parameters and MCP responses
 * @returns {Object} Chart data compatible with generateChartSection()
 */
export function transformMCPChartToReportFormat({ country, platform, chartName, currentMCPResponse, previousMCPResponse, metadata }) {
  // Normalize MCP responses
  const current = normalizeMCPRankingResponse(currentMCPResponse);
  const previous = normalizeMCPRankingResponse(previousMCPResponse);

  // Return raw app IDs - enrichment happens in full-report-generator.js
  return {
    country,
    platform,
    chart: chartName,
    current: { ranking: current.ranking },
    previous: { ranking: previous.ranking }
  };
}

/**
 * Collect unique app IDs from MCP responses
 *
 * @param {Array} mcpResponses - Array of {ranking: [appIds...]}
 * @param {string} platform - 'ios' or 'android'
 * @returns {Object} {ios: [], android: []}
 */
export function collectAppIdsFromMCPResponses(mcpResponses, platform) {
  const appIds = new Set();

  mcpResponses.forEach(response => {
    if (response?.ranking) {
      response.ranking.slice(0, 20).forEach(id => appIds.add(id));
    }
  });

  return {
    ios: platform === 'ios' ? Array.from(appIds) : [],
    android: platform === 'android' ? Array.from(appIds) : []
  };
}
