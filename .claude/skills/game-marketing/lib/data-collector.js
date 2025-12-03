/**
 * Data Collection Module
 * Handles pulling rankings and metadata from SensorTower API
 */

/**
 * Pull rankings for all chart combinations
 * @param {SensorTowerAPIClient} client - API client instance
 * @param {Array} countries - Array of {name, code}
 * @param {Array} platforms - Array of platform strings ('ios', 'android')
 * @param {Array} charts - Array of {name, category, key}
 * @param {string} currentMonth - Current month (YYYY-MM-DD)
 * @param {string} previousMonth - Previous month (YYYY-MM-DD)
 * @returns {Promise<Object>} All chart data keyed by country_platform_chart
 */
export async function collectAllRankings(client, countries, platforms, charts, currentMonth, previousMonth) {
  const allData = {};

  for (const country of countries) {
    for (const platform of platforms) {
      for (const chart of charts) {
        const key = `${country.code}_${platform}_${chart.key}`;
        console.log(`📥 ${country.name} ${platform.toUpperCase()} ${chart.name}...`);

        try {
          const current = await client.getTopApps(
            platform,
            country.code,
            chart.category,
            'topfreeapplications',
            currentMonth,
            20
          );

          const previous = await client.getTopApps(
            platform,
            country.code,
            chart.category,
            'topfreeapplications',
            previousMonth,
            20
          );

          allData[key] = {
            country: country.name,
            platform: platform,
            chart: chart.name,
            current,
            previous
          };

          console.log(`  ✅ ${current.ranking.length} apps (current), ${previous.ranking.length} apps (previous)`);
        } catch (error) {
          console.error(`  ❌ Error: ${error.message}`);
          allData[key] = {
            country: country.name,
            platform: platform,
            chart: chart.name,
            error: error.message
          };
        }
      }
    }
  }

  return allData;
}

/**
 * Collect all unique app IDs from chart data
 * @param {Object} allData - Chart data from collectAllRankings
 * @returns {Object} {ios: Set, android: Set}
 */
export function collectUniqueAppIds(allData) {
  const iosApps = new Set();
  const androidApps = new Set();

  Object.values(allData).forEach(data => {
    if (data.error) return;

    const targetSet = data.platform === 'ios' ? iosApps : androidApps;

    data.current.ranking.slice(0, 20).forEach(id => targetSet.add(id));
    data.previous.ranking.slice(0, 20).forEach(id => targetSet.add(id));
  });

  return {
    ios: Array.from(iosApps),
    android: Array.from(androidApps)
  };
}

/**
 * Fetch all app metadata
 * @param {SensorTowerAPIClient} client - API client instance
 * @param {Object} appIds - {ios: [], android: []}
 * @returns {Promise<Object>} Combined metadata for all apps
 */
export async function fetchAllMetadata(client, appIds) {
  const metadata = {};

  if (appIds.ios.length > 0) {
    console.log(`  Fetching iOS metadata (${appIds.ios.length} apps)...`);
    const iosMetadata = await client.getAppMetadataBatch('ios', appIds.ios);
    Object.assign(metadata, iosMetadata);
  }

  if (appIds.android.length > 0) {
    console.log(`  Fetching Android metadata (${appIds.android.length} apps)...`);
    const androidMetadata = await client.getAppMetadataBatch('android', appIds.android);
    Object.assign(metadata, androidMetadata);
  }

  return metadata;
}
