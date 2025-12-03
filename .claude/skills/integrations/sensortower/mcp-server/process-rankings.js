#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';

const data = JSON.parse(readFileSync('.claude/skills/integrations/sensortower/mcp-server/data/topchart-test.json', 'utf8'));

function calculateChanges(currentChart, previousChart) {
  const prevMap = new Map();
  previousChart.rankings.forEach(app => {
    prevMap.set(app.app_id, app.rank);
  });
  
  return currentChart.rankings.map(app => {
    const prevRank = prevMap.get(app.app_id);
    let change;
    
    if (!prevRank) {
      change = "New";
    } else if (prevRank === app.rank) {
      change = "0";
    } else {
      const diff = prevRank - app.rank;
      change = diff > 0 ? `+${diff}` : `${diff}`;
    }
    
    return {
      ...app,
      prev_rank: prevRank || null,
      change
    };
  });
}

// Process All Games
const allGamesDec = data.charts['US_iOS_AllGames_2024-12'];
const allGamesNov = data.charts['US_iOS_AllGames_2024-11'];
const allGamesWithChanges = calculateChanges(allGamesDec, allGamesNov);

// Process Puzzle
const puzzleDec = data.charts['US_iOS_Puzzle_2024-12'];
const puzzleNov = data.charts['US_iOS_Puzzle_2024-11'];
const puzzleWithChanges = calculateChanges(puzzleDec, puzzleNov);

// Analyze
const allGamesNewEntries = allGamesWithChanges.filter(a => a.change === "New").length;
const allGamesBigMovers = allGamesWithChanges.filter(a => {
  const num = parseInt(a.change);
  return !isNaN(num) && Math.abs(num) > 5;
}).length;

const puzzleNewEntries = puzzleWithChanges.filter(a => a.change === "New").length;
const puzzleBigMovers = puzzleWithChanges.filter(a => {
  const num = parseInt(a.change);
  return !isNaN(num) && Math.abs(num) > 5;
}).length;

const report = {
  generated_at: new Date().toISOString(),
  data_source: "✅ SensorTower API",
  test_scope: "US iOS - All Games + Puzzle (Top 20)",
  period: "Dec 2024 vs Nov 2024",
  
  summary: {
    total_charts_analyzed: 2,
    all_games_new_entries: allGamesNewEntries,
    all_games_big_movers: allGamesBigMovers,
    puzzle_new_entries: puzzleNewEntries,
    puzzle_big_movers: puzzleBigMovers
  },
  
  charts: {
    "US_iOS_AllGames": {
      date: "2024-12",
      rankings: allGamesWithChanges.map(a => ({
        rank: a.rank,
        app_id: a.app_id,
        change: a.change,
        prev_rank: a.prev_rank
      }))
    },
    "US_iOS_Puzzle": {
      date: "2024-12",
      rankings: puzzleWithChanges.map(a => ({
        rank: a.rank,
        app_id: a.app_id,
        change: a.change,
        prev_rank: a.prev_rank
      }))
    }
  }
};

writeFileSync('data/topchart-analysis.json', JSON.stringify(report, null, 2));
console.log('✅ Analysis complete!');
console.log(`\nAll Games: ${allGamesNewEntries} new, ${allGamesBigMovers} big movers`);
console.log(`Puzzle: ${puzzleNewEntries} new, ${puzzleBigMovers} big movers`);
