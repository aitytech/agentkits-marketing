#!/usr/bin/env node
/**
 * Full Top Chart Analysis Runner
 * December 2024 vs November 2024
 */

import { readFileSync } from 'fs';

// Load .env manually
const envPath = '../../../../../../.env';
const envContent = readFileSync(envPath, 'utf8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    const value = match[2].trim();
    if (key && value) process.env[key] = value;
  }
});

import { writeFileSync } from 'fs';
import { SensorTowerAPIClient } from '../../../game-marketing/lib/sensortower-api-client.js';
import { GAME_CATEGORY_IDS } from '../../../game-marketing/lib/category-mappings.js';
import { collectAllRankings, collectUniqueAppIds, fetchAllMetadata } from '../../../game-marketing/lib/data-collector.js';
import { generateFullReport } from '../../../game-marketing/lib/full-report-generator.js';

// Configuration
const CHARTS = [
  { name: 'All Games', category: '6014', key: 'all_games' },
  { name: 'Puzzle', category: GAME_CATEGORY_IDS.PUZZLE, key: 'puzzle' },
  { name: 'Tower Defense', category: GAME_CATEGORY_IDS.STRATEGY, key: 'tower_defense' },
  { name: 'Simulation', category: GAME_CATEGORY_IDS.SIMULATION, key: 'simulation' }
];

const COUNTRIES = [
  { name: 'Global', code: 'WW' },
  { name: 'US', code: 'US' }
];

const PLATFORMS = ['ios', 'android'];

async function main() {
  console.log('📊 Top Chart Analysis - December 2024 vs November 2024\n');
  console.log(`Scope: ${COUNTRIES.length} countries × ${PLATFORMS.length} platforms × ${CHARTS.length} charts\n`);

  const client = new SensorTowerAPIClient(process.env.SENSOR_TOWER_API_TOKEN);

  // Phase 1: Collect rankings
  console.log('Phase 1: Collecting rankings...\n');
  const allData = await collectAllRankings(
    client,
    COUNTRIES,
    PLATFORMS,
    CHARTS,
    '2024-12-01',
    '2024-11-01'
  );

  // Phase 2: Collect metadata
  console.log('\nPhase 2: Collecting app metadata...');
  const appIds = collectUniqueAppIds(allData);
  console.log(`  iOS apps: ${appIds.ios.length}, Android apps: ${appIds.android.length}`);

  const metadata = await fetchAllMetadata(client, appIds);
  console.log(`  ✅ ${Object.keys(metadata).length} apps metadata fetched`);

  // Phase 3: Generate report
  console.log('\nPhase 3: Generating report...');
  const report = generateFullReport({
    allData,
    metadata,
    periodLabel: 'December 2024 vs November 2024',
    scope: `${COUNTRIES.length} countries × ${PLATFORMS.length} platforms × ${CHARTS.length} charts`,
    generatedDate: new Date().toISOString().split('T')[0]
  });

  // Save report
  const reportPath = '../../../../../../docs/topchart-full-analysis.md';
  writeFileSync(reportPath, report);
  console.log(`✅ Report saved to ${reportPath}`);

  // Summary
  const successfulCharts = Object.values(allData).filter(d => !d.error).length;
  const failedCharts = Object.values(allData).filter(d => d.error).length;

  console.log('\n📊 Summary:');
  console.log(`  - Charts analyzed: ${successfulCharts}/${Object.keys(allData).length}`);
  if (failedCharts > 0) console.log(`  - Failed: ${failedCharts}`);
  console.log(`  - Unique apps: ${Object.keys(metadata).length}`);
}

main().catch(console.error);
