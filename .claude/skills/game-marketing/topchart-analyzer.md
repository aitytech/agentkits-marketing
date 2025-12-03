# Top Chart Analyzer Skill

**Purpose:** Modular, reusable skill for analyzing mobile game top charts with month-over-month comparison.

**Created:** 2025-01-09
**Updated:** 2026-01-09 (MCP Integration)
**Location:** `.claude/skills/game-marketing/`

**Status:** ✅ Production Ready - MCP Integrated

---

## Architecture

**Data Source:** SensorTower MCP (Recommended) or Direct API (Legacy)

```
MCP Tools → MCP Bridge → Modular Libraries → Report
```

**See:** `README.md` for complete architecture diagram

---

## Modules

### 1. `lib/category-mappings.js`
**Purpose:** iOS/Android category ID to name mappings and genre extraction

**Exports:**
- `IOS_CATEGORIES` - Map of iOS category IDs to names (65 categories)
- `getCategoryName(categoryId)` - Get category name from ID
- `getGenreFromApp(app)` - Extract primary genre from app metadata
- `getSubgenreFromApp(app)` - Extract subgenre from app metadata

**Usage:**
```javascript
import { getGenreFromApp, getSubgenreFromApp } from './lib/category-mappings.js';

const genre = getGenreFromApp(appMetadata);      // "Games"
const subgenre = getSubgenreFromApp(appMetadata); // "Puzzle"
```

---

### 2. `lib/sensortower-mcp-adapter.js` ⭐ NEW
**Purpose:** Bridge MCP responses to modular library format

**Exports:**
- `normalizeMCPRankingResponse(mcpResponse)` - Transform ranking data
- `normalizeMCPMetadataResponse(mcpResponse)` - Transform metadata
- `batchAppIds(appIds, batchSize)` - Split IDs for batched fetching
- `mergeMetadataResponses(responses)` - Combine metadata batches

**Usage with MCP:**
```javascript
import { normalizeMCPRankingResponse, normalizeMCPMetadataResponse } from './lib/sensortower-mcp-adapter.js';

// Claude Code fetches via MCP
const mcpRanking = await mcp__sensortower__get_top_apps({...});
const mcpMetadata = await mcp__sensortower__get_app_metadata({...});

// Normalize for modular libraries
const ranking = normalizeMCPRankingResponse(mcpRanking);
const metadata = normalizeMCPMetadataResponse(mcpMetadata);

// Get metadata for apps
const metadata = await client.getAppMetadataBatch('ios', chart.ranking);
```

---

### 3. `lib/ranking-calculator.js`
**Purpose:** Pure logic for calculating ranking changes and analyzing trends

**Functions:**
- `calculateRankingChanges(currentRankings, previousRankings)` - Calculate position changes
- `analyzeRankingChanges(rankingsWithChanges, bigMoverThreshold)` - Extract insights
- `analyzeGenreDistribution(rankings)` - Analyze genre distribution

**Usage:**
```javascript
import { calculateRankingChanges, analyzeRankingChanges } from './lib/ranking-calculator.js';

const withChanges = calculateRankingChanges(decRankings, novRankings);
const analysis = analyzeRankingChanges(withChanges, 5);

console.log(`New entries: ${analysis.newEntries}`);
console.log(`Big movers: ${analysis.bigMovers}`);
console.log(`Churn rate: ${analysis.churnRate}%`);
```

---

### 4. `lib/report-generator.js`
**Purpose:** Format analysis data into markdown reports

**Functions:**
- `generateRankingTable(rankings, includeGenre)` - Generate markdown table
- `generateInsightsSection(analysis)` - Generate insights markdown
- `generateGenreDistributionTable(genreAnalysis)` - Generate genre table
- `generateTopChartReport(data)` - Generate full report

**Usage:**
```javascript
import { generateRankingTable, generateInsightsSection } from './lib/report-generator.js';

const table = generateRankingTable(rankingsWithChanges, true);
const insights = generateInsightsSection(analysis);

const markdown = `## US iOS All Games\n\n${table}\n\n**Insights:**\n${insights}`;
```

---

## Complete Workflow Example

```javascript
import { config } from 'dotenv';
config();

import { SensorTowerAPIClient } from './lib/sensortower-api-client.js';
import { getGenreFromApp, getSubgenreFromApp } from './lib/category-mappings.js';
import { calculateRankingChanges, analyzeRankingChanges } from './lib/ranking-calculator.js';
import { generateRankingTable, generateInsightsSection } from './lib/report-generator.js';
import { getDefaultPeriod } from './lib/date-helpers.js';

// 1. Initialize API client
const client = new SensorTowerAPIClient(process.env.SENSOR_TOWER_API_TOKEN);

// 2. Pull ranking data (using dynamic dates)
const period = getDefaultPeriod();
const currentMonth = await client.getTopApps('ios', 'US', '6014', 'topfreeapplications', period.current, 20);
const previousMonth = await client.getTopApps('ios', 'US', '6014', 'topfreeapplications', period.previous, 20);

// 3. Get metadata
const allAppIds = [...new Set([...currentMonth.ranking, ...previousMonth.ranking])];
const metadata = await client.getAppMetadataBatch('ios', allAppIds);

// 4. Enrich rankings with metadata
const currentRankings = currentMonth.ranking.slice(0, 20).map((appId, idx) => {
  const app = metadata[appId];
  return {
    rank: idx + 1,
    app_id: appId,
    app_name: app?.name || 'Unknown',
    publisher: app?.publisher_name || 'Unknown',
    genre: app ? getGenreFromApp(app) : 'Unknown',
    subgenre: app ? getSubgenreFromApp(app) : null
  };
});

const previousRankings = previousMonth.ranking.slice(0, 20).map((appId, idx) => ({
  rank: idx + 1,
  app_id: appId
}));

// 5. Calculate changes
const withChanges = calculateRankingChanges(currentRankings, previousRankings);
const analysis = analyzeRankingChanges(withChanges, 5);

// 6. Generate report
const table = generateRankingTable(withChanges, true);
const insights = generateInsightsSection(analysis);

console.log(table);
console.log('\n**Insights:**');
console.log(insights);
```

---

## Integration with Commands

This skill is used by:
- `/game:topchart` - Top chart analysis command
- `game-market-analyst` - Agent for game market intelligence

---

## Benefits

✅ **Modular** - Each component has single responsibility
✅ **Reusable** - Import only what you need
✅ **Testable** - Pure functions for logic
✅ **Maintainable** - Clear separation of concerns
✅ **Documented** - JSDoc comments for all functions

---

## File Structure

```
.claude/skills/game-marketing/
├── topchart-analyzer.md        # This file
└── lib/
    ├── category-mappings.js     # Category ID mappings (65 LOC)
    ├── sensortower-api-client.js # API client (85 LOC)
    ├── ranking-calculator.js    # Ranking logic (105 LOC)
    └── report-generator.js      # Report formatting (140 LOC)
```

**Total:** ~395 LOC across 4 focused modules (vs 224 LOC in single file)

---

## Next Steps

1. **Add Android support** - Extend category mappings for Google Play
2. **Add caching** - Integrate with SensorTower MCP cache system
3. **Add visualizations** - Generate charts/graphs from data
4. **Add export formats** - JSON, CSV, PDF output options
