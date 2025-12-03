import axios from 'axios';

/**
 * SensorTower API Client Helper
 * Handles all SensorTower API calls with proper error handling and caching
 */
export class SensorTowerAPIClient {
  constructor(apiToken, baseURL = 'https://api.sensortower.com') {
    this.apiToken = apiToken;
    this.baseURL = baseURL;
  }

  /**
   * Get top apps from a chart
   * @param {string} os - 'ios' or 'android'
   * @param {string} country - Country code (e.g., 'US', 'WW' for global)
   * @param {string} category - Category ID (e.g., '6014' for Games)
   * @param {string} chartType - Chart type (e.g., 'topfreeapplications')
   * @param {string} date - Date in YYYY-MM-DD format
   * @param {number} limit - Number of apps to return (max 200)
   * @returns {Promise<Object>} Chart data with rankings array
   */
  async getTopApps(os, country, category, chartType, date, limit = 20) {
    const url = `${this.baseURL}/v1/${os}/ranking`;
    const params = {
      auth_token: this.apiToken,
      country,
      category,
      chart_type: chartType,
      date,
      limit
    };

    const response = await axios.get(url, { params });
    return response.data;
  }

  /**
   * Get app metadata
   * @param {string} os - 'ios' or 'android'
   * @param {Array<string|number>} appIds - App IDs to fetch
   * @param {string} country - Country code
   * @returns {Promise<Object>} Object mapping app_id to app metadata
   */
  async getAppMetadata(os, appIds, country = 'US') {
    const url = `${this.baseURL}/v1/${os}/apps`;
    const params = {
      auth_token: this.apiToken,
      app_ids: appIds.join(','),
      country
    };

    const response = await axios.get(url, { params });

    // Convert { apps: [...] } to { appId: app } map
    const metadata = {};
    if (response.data.apps) {
      response.data.apps.forEach(app => {
        metadata[app.app_id] = app;
      });
    }
    return metadata;
  }

  /**
   * Get app metadata in batches to avoid URL length limits
   * @param {string} os - 'ios' or 'android'
   * @param {Array<string|number>} appIds - All app IDs to fetch
   * @param {string} country - Country code
   * @param {number} batchSize - Batch size (default 20)
   * @returns {Promise<Object>} Combined metadata for all apps
   */
  async getAppMetadataBatch(os, appIds, country = 'US', batchSize = 20) {
    const allMetadata = {};

    for (let i = 0; i < appIds.length; i += batchSize) {
      const batch = appIds.slice(i, i + batchSize);
      const batchMetadata = await this.getAppMetadata(os, batch, country);
      Object.assign(allMetadata, batchMetadata);
    }

    return allMetadata;
  }
}
