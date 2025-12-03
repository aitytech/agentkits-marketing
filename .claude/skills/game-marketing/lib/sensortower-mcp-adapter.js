/**
 * SensorTower MCP Adapter
 *
 * Bridges MCP tools with the existing modular skill libraries.
 * Provides the same interface as SensorTowerAPIClient but uses MCP instead.
 *
 * This allows ALL existing modular libraries to work with MCP without modification.
 */

/**
 * MCP Adapter for SensorTower
 *
 * Note: This is designed to be used within Claude Code's MCP environment.
 * The actual MCP calls are made by Claude Code, this adapter just structures the data.
 */
export class SensorTowerMCPAdapter {
  constructor() {
    // No API token needed - MCP handles authentication
    this.baseURL = 'https://api.sensortower.com';
  }

  /**
   * Get top apps rankings
   *
   * In MCP context, Claude Code will make the actual call:
   * mcp__sensortower__get_top_apps({ os, category, chart_type, country, date })
   *
   * This method documents the expected response format.
   */
  async getTopApps(os, country, category, chartType, date, limit = 20) {
    // MCP returns: { category, chart_type, country, date, ranking: [appIds...] }
    // This method signature matches SensorTowerAPIClient for compatibility

    throw new Error(
      'MCP Adapter: Use Claude Code MCP tools directly. ' +
      'This adapter is for interface compatibility only. ' +
      'Call: mcp__sensortower__get_top_apps({ os, category, chart_type: "topfreeapplications", country, date })'
    );
  }

  /**
   * Get app metadata
   *
   * In MCP context, Claude Code will make the actual call:
   * mcp__sensortower__get_app_metadata({ os, app_ids, country })
   *
   * MCP returns: { apps: [{ app_id, name, publisher_name, categories, ... }] }
   */
  async getAppMetadata(os, appIds, country = 'US') {
    throw new Error(
      'MCP Adapter: Use Claude Code MCP tools directly. ' +
      'Call: mcp__sensortower__get_app_metadata({ os, app_ids: [...], country })'
    );
  }

  /**
   * Get app metadata in batches
   *
   * In MCP context, batch fetching is handled by Claude Code making multiple calls
   */
  async getAppMetadataBatch(os, appIds, country = 'US', batchSize = 100) {
    throw new Error(
      'MCP Adapter: Batch fetching handled by Claude Code. ' +
      'Make multiple mcp__sensortower__get_app_metadata calls as needed.'
    );
  }
}

/**
 * Helper: Transform MCP ranking response to match API client format
 *
 * MCP response: { category, chart_type, country, date, ranking: [appIds...] }
 * Module expects: { ranking: [appIds...] }
 *
 * @param {Object} mcpResponse - Response from mcp__sensortower__get_top_apps
 * @returns {Object} Normalized ranking data
 */
export function normalizeMCPRankingResponse(mcpResponse) {
  return {
    ranking: mcpResponse.ranking || [],
    category: mcpResponse.category,
    country: mcpResponse.country,
    date: mcpResponse.date
  };
}

/**
 * Helper: Transform MCP metadata response to match API client format
 *
 * MCP response: { apps: [{ app_id, name, ... }] }
 * Module expects: { appId: { name, publisher_name, categories, ... } }
 *
 * @param {Object} mcpResponse - Response from mcp__sensortower__get_app_metadata
 * @returns {Object} Metadata map keyed by app_id
 */
export function normalizeMCPMetadataResponse(mcpResponse) {
  const metadata = {};

  if (mcpResponse.apps && Array.isArray(mcpResponse.apps)) {
    mcpResponse.apps.forEach(app => {
      metadata[app.app_id] = {
        name: app.name,
        publisher_name: app.publisher_name,
        categories: app.categories || [],
        icon_url: app.icon_url,
        price: app.price,
        custom_product_page_ids: app.custom_product_page_ids
      };
    });
  }

  return metadata;
}

/**
 * Helper: Batch app IDs for metadata fetching
 *
 * @param {Array} appIds - Array of app IDs
 * @param {number} batchSize - Batch size (max 100 for SensorTower)
 * @returns {Array} Array of batches
 */
export function batchAppIds(appIds, batchSize = 100) {
  const batches = [];
  for (let i = 0; i < appIds.length; i += batchSize) {
    batches.push(appIds.slice(i, i + batchSize));
  }
  return batches;
}

/**
 * Helper: Merge multiple metadata responses
 *
 * @param {Array} responses - Array of MCP metadata responses
 * @returns {Object} Combined metadata map
 */
export function mergeMetadataResponses(responses) {
  const combined = {};

  responses.forEach(response => {
    const normalized = normalizeMCPMetadataResponse(response);
    Object.assign(combined, normalized);
  });

  return combined;
}
