/**
 * Ranking Change Calculator
 * Pure logic for calculating position changes between two time periods
 */

/**
 * Calculate ranking changes between current and previous period
 * @param {Array} currentRankings - Array of {rank, app_id, ...} for current period
 * @param {Array} previousRankings - Array of {rank, app_id, ...} for previous period
 * @returns {Array} Current rankings with added prev_rank and change fields
 */
export function calculateRankingChanges(currentRankings, previousRankings) {
  // Create map of previous rankings
  const prevMap = new Map();
  previousRankings.forEach(app => {
    prevMap.set(app.app_id, app.rank);
  });

  // Calculate changes for each current ranking
  return currentRankings.map(app => {
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

/**
 * Analyze ranking changes and extract insights
 * @param {Array} rankingsWithChanges - Rankings with change data
 * @param {number} bigMoverThreshold - Threshold for "big mover" (default: 5)
 * @returns {Object} Analysis results
 */
export function analyzeRankingChanges(rankingsWithChanges, bigMoverThreshold = 5) {
  const newEntries = rankingsWithChanges.filter(a => a.change === "New");
  const unchanged = rankingsWithChanges.filter(a => a.change === "0");

  const bigMovers = rankingsWithChanges.filter(a => {
    const num = parseInt(a.change);
    return !isNaN(num) && Math.abs(num) > bigMoverThreshold;
  });

  const gainers = rankingsWithChanges.filter(a => {
    const num = parseInt(a.change);
    return !isNaN(num) && num > bigMoverThreshold;
  });

  const decliners = rankingsWithChanges.filter(a => {
    const num = parseInt(a.change);
    return !isNaN(num) && num < -bigMoverThreshold;
  });

  const topGainer = gainers.length > 0
    ? gainers.reduce((max, app) => parseInt(app.change) > parseInt(max.change) ? app : max)
    : null;

  const topDecliner = decliners.length > 0
    ? decliners.reduce((max, app) => parseInt(app.change) < parseInt(max.change) ? app : max)
    : null;

  return {
    total: rankingsWithChanges.length,
    newEntries: newEntries.length,
    unchanged: unchanged.length,
    bigMovers: bigMovers.length,
    gainers: gainers.length,
    decliners: decliners.length,
    topGainer,
    topDecliner,
    churnRate: (newEntries.length / rankingsWithChanges.length) * 100,
    stabilityRate: (unchanged.length / rankingsWithChanges.length) * 100,
    newEntriesList: newEntries,
    gainersList: gainers,
    declinersList: decliners
  };
}

/**
 * Analyze genre distribution in rankings
 * @param {Array} rankings - Rankings with genre field
 * @returns {Object} Genre distribution stats
 */
export function analyzeGenreDistribution(rankings) {
  const genreCounts = {};

  rankings.forEach(app => {
    const genre = app.genre || 'Unknown';
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
  });

  const sortedGenres = Object.entries(genreCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([genre, count]) => ({
      genre,
      count,
      percentage: (count / rankings.length) * 100
    }));

  return {
    total: rankings.length,
    uniqueGenres: Object.keys(genreCounts).length,
    distribution: sortedGenres,
    dominant: sortedGenres[0] || null
  };
}
