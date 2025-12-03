#!/usr/bin/env node

// Load environment variables
import { config } from 'dotenv';
config();

import axios from 'axios';
import { writeFileSync } from 'fs';

const API_TOKEN = process.env.SENSOR_TOWER_API_TOKEN;
const BASE_URL = 'https://api.sensortower.com';

// iOS Category ID to Name mapping
const IOS_CATEGORIES = {
  6000: 'Business',
  6001: 'Weather',
  6002: 'Utilities',
  6003: 'Travel',
  6004: 'Sports',
  6005: 'Social Networking',
  6006: 'Reference',
  6007: 'Productivity',
  6008: 'Photo & Video',
  6009: 'News',
  6010: 'Navigation',
  6011: 'Music',
  6012: 'Lifestyle',
  6013: 'Health & Fitness',
  6014: 'Games',
  6015: 'Finance',
  6016: 'Entertainment',
  6017: 'Education',
  6018: 'Books',
  6020: 'Medical',
  6021: 'Newsstand',
  6022: 'Catalogs',
  6023: 'Food & Drink',
  6024: 'Shopping',
  7001: 'Action',
  7002: 'Adventure',
  7003: 'Arcade',
  7004: 'Board',
  7005: 'Card',
  7006: 'Casino',
  7009: 'Family',
  7011: 'Music',
  7012: 'Puzzle',
  7013: 'Racing',
  7014: 'Role Playing',
  7015: 'Simulation',
  7016: 'Sports',
  7017: 'Strategy',
  7018: 'Trivia',
  7019: 'Word'
};

function getGenreFromApp(app) {
  if (!app.categories || app.categories.length === 0) return 'Unknown';
  // First category is primary genre
  return IOS_CATEGORIES[app.categories[0]] || `Category ${app.categories[0]}`;
}

function getSubgenreFromApp(app) {
  if (!app.categories || app.categories.length < 2) return null;
  // Second category is subgenre
  return IOS_CATEGORIES[app.categories[1]] || `Category ${app.categories[1]}`;
}

async function getTopApps(os, country, category, chartType, date) {
  const url = `${BASE_URL}/v1/${os}/ranking`;
  const params = {
    auth_token: API_TOKEN,
    country,
    category,
    chart_type: chartType,
    date,
    limit: 20
  };
  
  console.log(`Fetching: ${os} ${country} ${chartType} ${date}...`);
  const response = await axios.get(url, { params });
  return response.data;
}

async function getAppMetadata(os, appIds, country = 'US') {
  const url = `${BASE_URL}/v1/${os}/apps`;
  const params = {
    auth_token: API_TOKEN,
    app_ids: appIds.join(','),
    country
  };
  
  console.log(`Fetching metadata for ${appIds.length} apps...`);
  const response = await axios.get(url, { params });
  return response.data;
}

async function runTest() {
  console.log('=== SensorTower Test Pull - Small Sample ===\n');
  
  try {
    // Pull 4 charts
    const charts = {};
    
    // 1. US iOS All Games - Dec 2024
    charts.us_ios_allgames_dec = await getTopApps('ios', 'US', '6007', 'topfreeapplications', '2024-12-01');
    
    // 2. US iOS All Games - Nov 2024
    charts.us_ios_allgames_nov = await getTopApps('ios', 'US', '6007', 'topfreeapplications', '2024-11-01');
    
    // 3. US iOS Puzzle - Dec 2024
    charts.us_ios_puzzle_dec = await getTopApps('ios', 'US', '7012', 'topfreeapplications', '2024-12-01');
    
    // 4. US iOS Puzzle - Nov 2024  
    charts.us_ios_puzzle_nov = await getTopApps('ios', 'US', '7012', 'topfreeapplications', '2024-11-01');
    
    // Collect unique app IDs
    const allAppIds = new Set();
    Object.values(charts).forEach(chart => {
      chart.ranking.slice(0, 20).forEach(appId => allAppIds.add(appId));
    });
    
    console.log(`\nTotal unique apps: ${allAppIds.size}`);
    
    // Get metadata (in batches of 20 to avoid URL length limits)
    const appIdArray = Array.from(allAppIds);
    const metadata = {};

    for (let i = 0; i < appIdArray.length; i += 20) {
      const batch = appIdArray.slice(i, i + 20);
      const batchMetadata = await getAppMetadata('ios', batch);
      // API returns { apps: [...] }, convert to map
      if (batchMetadata.apps) {
        batchMetadata.apps.forEach(app => {
          metadata[app.app_id] = app;
        });
      }
    }
    
    // Merge data
    const result = {
      test_scope: 'US iOS - All Games + Puzzle',
      generated_at: new Date().toISOString(),
      data_source: '✅ SensorTower API',
      charts: {
        'US_iOS_AllGames_2024-12': {
          date: '2024-12-01',
          rankings: charts.us_ios_allgames_dec.ranking.slice(0, 20).map((appId, idx) => {
            const app = metadata[appId];
            return {
              rank: idx + 1,
              app_id: appId,
              app_name: app?.name || 'Unknown',
              publisher: app?.publisher_name || 'Unknown',
              genre: app ? getGenreFromApp(app) : 'Unknown',
              subgenre: app ? getSubgenreFromApp(app) : null
            };
          })
        },
        'US_iOS_AllGames_2024-11': {
          date: '2024-11-01',
          rankings: charts.us_ios_allgames_nov.ranking.slice(0, 20).map((appId, idx) => {
            const app = metadata[appId];
            return {
              rank: idx + 1,
              app_id: appId,
              app_name: app?.name || 'Unknown',
              publisher: app?.publisher_name || 'Unknown',
              genre: app ? getGenreFromApp(app) : 'Unknown',
              subgenre: app ? getSubgenreFromApp(app) : null
            };
          })
        },
        'US_iOS_Puzzle_2024-12': {
          date: '2024-12-01',
          rankings: charts.us_ios_puzzle_dec.ranking.slice(0, 20).map((appId, idx) => {
            const app = metadata[appId];
            return {
              rank: idx + 1,
              app_id: appId,
              app_name: app?.name || 'Unknown',
              publisher: app?.publisher_name || 'Unknown',
              genre: 'Puzzle',
              subgenre: app ? getSubgenreFromApp(app) : null
            };
          })
        },
        'US_iOS_Puzzle_2024-11': {
          date: '2024-11-01',
          rankings: charts.us_ios_puzzle_nov.ranking.slice(0, 20).map((appId, idx) => {
            const app = metadata[appId];
            return {
              rank: idx + 1,
              app_id: appId,
              app_name: app?.name || 'Unknown',
              publisher: app?.publisher_name || 'Unknown',
              genre: 'Puzzle',
              subgenre: app ? getSubgenreFromApp(app) : null
            };
          })
        }
      },
      stats: {
        total_charts: 4,
        total_apps: allAppIds.size,
        api_calls: 4 + Math.ceil(allAppIds.size / 20)
      }
    };
    
    // Save to file
    writeFileSync('data/topchart-test.json', JSON.stringify(result, null, 2));
    console.log('\n✅ Success! Data saved to data/topchart-test.json');
    console.log(`\nAPI Calls Made: ${result.stats.api_calls}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

runTest();
