/**
 * Report Generator
 * Formats ranking analysis data into markdown reports
 */

/**
 * Generate markdown table for rankings
 * @param {Array} rankings - Rankings with change data
 * @param {boolean} includeGenre - Include genre column
 * @returns {string} Markdown table
 */
export function generateRankingTable(rankings, includeGenre = true) {
  const headers = includeGenre
    ? '| # | Game | Publisher | Genre | Δ | Prev |'
    : '| # | Game | Publisher | Δ | Prev |';

  const separator = includeGenre
    ? '|---|------|-----------|-------|---|------|'
    : '|---|------|-----------|---|------|';

  const rows = rankings.map(app => {
    const name = app.app_name || `App ${app.app_id}`;
    const publisher = app.publisher || 'Unknown';
    const genre = app.genre || 'Unknown';
    const change = app.change || '-';
    const prevRank = app.prev_rank || '-';

    return includeGenre
      ? `| ${app.rank} | ${name} | ${publisher} | ${genre} | ${change} | ${prevRank} |`
      : `| ${app.rank} | ${name} | ${publisher} | ${change} | ${prevRank} |`;
  });

  return [headers, separator, ...rows].join('\n');
}

/**
 * Generate insights section
 * @param {Object} analysis - Analysis results from analyzeRankingChanges
 * @returns {string} Markdown insights
 */
export function generateInsightsSection(analysis) {
  const insights = [];

  insights.push(`- **Market Stability:** ${analysis.stabilityRate.toFixed(0)}% of top ${analysis.total} unchanged`);

  if (analysis.newEntries > 0) {
    const positions = analysis.newEntriesList.map(a => `#${a.rank}`).join(', ');
    insights.push(`- **New Entries:** ${analysis.newEntries} games (${positions})`);
  }

  if (analysis.topGainer) {
    insights.push(`- **Biggest Gainer:** #${analysis.topGainer.rank} ${analysis.topGainer.app_name || ''} (${analysis.topGainer.change})`);
  }

  if (analysis.topDecliner) {
    insights.push(`- **Biggest Decliner:** #${analysis.topDecliner.rank} ${analysis.topDecliner.app_name || ''} (${analysis.topDecliner.change})`);
  }

  insights.push(`- **Churn Rate:** ${analysis.churnRate.toFixed(0)}%`);

  return insights.join('\n');
}

/**
 * Generate genre distribution table
 * @param {Object} genreAnalysis - Genre distribution from analyzeGenreDistribution
 * @returns {string} Markdown table
 */
export function generateGenreDistributionTable(genreAnalysis) {
  const headers = '| Genre | Count | % |';
  const separator = '|-------|-------|---|';

  const rows = genreAnalysis.distribution.map(item =>
    `| ${item.genre} | ${item.count} | ${item.percentage.toFixed(0)}% |`
  );

  return [headers, separator, ...rows].join('\n');
}

/**
 * Generate full top chart analysis report
 * @param {Object} data - Complete analysis data
 * @returns {string} Full markdown report
 */
export function generateTopChartReport(data) {
  const {
    title,
    period,
    scope,
    generated,
    dataSource,
    summary,
    charts
  } = data;

  let report = `# 📊 ${title}\n`;
  report += `**Period:** ${period}  \n`;
  report += `**Scope:** ${scope}  \n`;
  report += `**Generated:** ${generated}  \n`;
  report += `**Data Source:** ${dataSource}\n\n`;
  report += `---\n\n`;

  // Executive Summary
  if (summary) {
    report += `## Executive Summary\n\n`;
    Object.entries(summary).forEach(([key, value]) => {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      report += `- **${label}:** ${value}\n`;
    });
    report += `\n---\n\n`;
  }

  // Charts
  charts.forEach((chart, idx) => {
    report += `## ${idx + 1}. ${chart.title}\n\n`;

    if (chart.table) {
      report += `### Top ${chart.rankings?.length || 20} Rankings\n\n`;
      report += chart.table + '\n\n';
    }

    if (chart.insights) {
      report += `**Insights:**\n`;
      report += chart.insights + '\n\n';
    }

    if (chart.genreDistribution) {
      report += `**Genre Distribution:**\n\n`;
      report += chart.genreDistribution + '\n\n';
    }

    report += `---\n\n`;
  });

  return report;
}
