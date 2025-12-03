# Game Marketing Skill - Top Chart Analyzer

**Purpose:** Modular skill for analyzing mobile game top charts with real SensorTower data

**Status:** ✅ Production Ready - MCP Integrated

---

## ⚠️ CRITICAL: Dynamic Date Handling

**NEVER hardcode dates in your code!**

Always use `lib/date-helpers.js` for automatic date calculation:

```javascript
import { getDefaultPeriod, getMonthOptions } from './lib/date-helpers.js';

// Get current period (auto-calculated)
const period = getDefaultPeriod();
// Returns: {current: '2025-12-01', previous: '2025-11-01', periodLabel: 'December 2025 vs November 2025'}

// Get month options for UI
const options = getMonthOptions(3);
// Returns: [{label: 'Latest (December 2025)', value: '2025-12-01', ...}, ...]
```

---

## Architecture

```
┌─────────────────────────────────────────────────┐
│  Data Sources                                   │
│  ┌──────────────┐         ┌──────────────────┐ │
│  │ SensorTower  │         │ SensorTower MCP  │ │
│  │ Direct API   │         │ (29 tools)       │ │
│  │ (Legacy)     │         │ (Recommended)    │ │
│  └──────────────┘         └──────────────────┘ │
│         │                          │           │
│         └──────────┬───────────────┘           │
│                    ▼                            │
│          ┌──────────────────┐                  │
│          │  Bridge Layer    │                  │
│          │  - MCP Adapter   │                  │
│          │  - Normalizers   │                  │
│          └──────────────────┘                  │
│                    │                            │
│                    ▼                            │
│          ┌──────────────────┐                  │
│          │ Modular Libraries│                  │
│          │ (Reusable)       │                  │
│          ├──────────────────┤                  │
│          │ Mappings         │ Genre extraction │
│          │ Calculator       │ Position changes │
│          │ Generator        │ Report formatting│
│          │ Collector        │ Data orchestration│
│          └──────────────────┘                  │
│                    │                            │
│                    ▼                            │
│          ┌──────────────────┐                  │
│          │  Output          │                  │
│          │  - Markdown      │                  │
│          │  - JSON          │                  │
│          │  - Console       │                  │
│          └──────────────────┘                  │
└─────────────────────────────────────────────────┘
```

---

## Module Structure

```
.claude/skills/game-marketing/
├── lib/                                   # Modular libraries (reusable)
│   ├── category-mappings.js              # iOS/Android genre extraction
│   ├── ranking-calculator.js             # Position change analysis
│   ├── report-generator.js               # Markdown table formatting
│   ├── data-collector.js                 # Multi-chart orchestration
│   ├── full-report-generator.js          # Complete report assembly
│   ├── sensortower-api-client.js         # Direct API client (legacy)
│   └── sensortower-mcp-adapter.js        # MCP response normalizers
│
├── workflows/                             # Integration patterns
│   └── mcp-bridge.js                     # MCP → Module transformer
│
├── example-usage.js                       # Direct API example
└── README.md                              # This file
```

---

## Usage Patterns

### 1. With Claude Code MCP (Recommended)

**Workflow:**
1. Claude Code fetches data via MCP tools
2. `mcp-bridge.js` transforms responses
3. Existing modular libraries process data
4. Generate final report

**Code:**
```javascript
import { transformMCPChartToReportFormat, collectAppIdsFromMCPResponses } from './workflows/mcp-bridge.js';
import { normalizeMCPMetadataResponse, batchAppIds, mergeMetadataResponses } from './lib/sensortower-mcp-adapter.js';
import { generateFullReport } from './lib/full-report-generator.js';

// 1. MCP fetches rankings (Claude Code does this)
const dec = await mcp__sensortower__get_top_apps({
  os: 'ios', category: '6014', country: 'US',
  chart_type: 'topfreeapplications', date: '2024-12-01'
});
const nov = await mcp__sensortower__get_top_apps({
  os: 'ios', category: '6014', country: 'US',
  chart_type: 'topfreeapplications', date: '2024-11-01'
});

// 2. Collect unique app IDs
const allResponses = [dec, nov];
const uniqueIds = collectAppIdsFromMCPResponses(allResponses, 'ios');

// 3. Fetch metadata
const batches = batchAppIds(uniqueIds.ios, 100);
const metadataResponses = [];
for (const batch of batches) {
  const response = await mcp__sensortower__get_app_metadata({
    os: 'ios', app_ids: batch, country: 'US'
  });
  metadataResponses.push(response);
}
const metadata = mergeMetadataResponses(metadataResponses);

// 4. Transform to report format
const chartData = transformMCPChartToReportFormat({
  country: 'US',
  platform: 'ios',
  chartName: 'All Games',
  currentMCPResponse: dec,
  previousMCPResponse: nov,
  metadata
});

// 5. Generate report (uses existing modular libraries)
const report = generateFullReport({
  allData: { 'US_ios_allgames': chartData },
  metadata,
  periodLabel: 'Dec 2024 vs Nov 2024',
  scope: 'iOS US All Games',
  generatedDate: new Date().toISOString().split('T')[0]
});
```

---

### 2. With Direct API (Legacy)

**See:** `example-usage.js` for complete working example

**Code:**
```javascript
import { SensorTowerAPIClient } from './lib/sensortower-api-client.js';
import { getGenreFromApp } from './lib/category-mappings.js';
import { calculateRankingChanges, analyzeRankingChanges } from './lib/ranking-calculator.js';
import { generateRankingTable } from './lib/report-generator.js';

const client = new SensorTowerAPIClient(process.env.SENSOR_TOWER_API_TOKEN);
const dec = await client.getTopApps('ios', 'US', '6014', 'topfreeapplications', '2024-12-01', 20);
const metadata = await client.getAppMetadataBatch('ios', dec.ranking.slice(0, 20));

// ... process with modular libraries
```

---

## Category Reference

### iOS Categories
| Code | Name | Use For |
|------|------|---------|
| 6014 | Games | All Games chart |
| 7012 | Puzzle | Puzzle games |
| 7014 | Simulation | Simulation games |
| 7016 | Strategy | Strategy (Tower Defense) |

### Android Categories
| Code | Name | Use For |
|------|------|---------|
| GAME | All Games | All Games chart |
| GAME_PUZZLE | Puzzle | Puzzle games |
| GAME_SIMULATION | Simulation | Simulation games |
| GAME_STRATEGY | Strategy | Strategy (Tower Defense) |

---

## Module Documentation

### category-mappings.js
**Purpose:** Map App Store category IDs to human-readable names

**Functions:**
- `getGenreFromApp(app)` - Extract primary genre
- `getSubgenreFromApp(app)` - Extract secondary genre
- `getCategoryName(categoryId)` - ID to name conversion

**Example:**
```javascript
import { getGenreFromApp } from './lib/category-mappings.js';

const app = { categories: [6014, 7012] };
const genre = getGenreFromApp(app);      // "Games"
const subgenre = getSubgenreFromApp(app); // "Puzzle"
```

---

### ranking-calculator.js
**Purpose:** Calculate ranking changes and analyze trends

**Functions:**
- `calculateRankingChanges(current, previous)` - Add Δ to rankings
- `analyzeRankingChanges(rankings, threshold)` - Market analysis
- `analyzeGenreDistribution(rankings)` - Genre breakdown

**Example:**
```javascript
import { calculateRankingChanges, analyzeRankingChanges } from './lib/ranking-calculator.js';

const withChanges = calculateRankingChanges(decRankings, novRankings);
const analysis = analyzeRankingChanges(withChanges, 5);
// analysis.newEntries, analysis.bigMovers, analysis.topGainer, etc.
```

---

### report-generator.js
**Purpose:** Format data into markdown tables and insights

**Functions:**
- `generateRankingTable(rankings, includeGenre)` - Markdown table
- `generateInsightsSection(analysis)` - Bullet insights
- `generateGenreDistributionTable(genreAnalysis)` - Genre table

**Example:**
```javascript
import { generateRankingTable, generateInsightsSection } from './lib/report-generator.js';

const table = generateRankingTable(rankings, true);
const insights = generateInsightsSection(analysis);
```

---

### full-report-generator.js
**Purpose:** Assemble complete multi-chart reports

**Functions:**
- `generateExecutiveSummary(allData, metadata)` - Summary section
- `generateChartSection(chartData, metadata, sectionNum)` - Chart section
- `generateFullReport(params)` - Complete report

**Example:**
```javascript
import { generateFullReport } from './lib/full-report-generator.js';

const report = generateFullReport({
  allData: { chart1: {...}, chart2: {...} },
  metadata: { app1: {...} },
  periodLabel: 'Dec vs Nov',
  scope: '2 charts',
  generatedDate: '2024-12-01'
});
```

---

## Data Reliability

**CRITICAL:** All modules follow strict data reliability rules:

✅ **DO:**
- Use real SensorTower data (MCP or Direct API)
- Show "Unknown" for missing metadata
- Mark data source as ✅ VERIFIED

❌ **DON'T:**
- Fabricate rankings or game names
- Guess position changes
- Make up publisher names

**See:** `.claude/workflows/data-reliability-rules.md`

---

## Testing

**Run example:**
```bash
cd .claude/skills/game-marketing
node example-usage.js
```

**Expected output:**
- Fetches US iOS All Games (Dec vs Nov)
- Shows ranking table with position changes
- Displays insights and genre distribution

---

## Integration with Skills

**Skill Commands:**
- `/game:topchart YYYY-MM` - Full 32-chart analysis
- Uses: MCP bridge → Modular libraries → Report

**Location:** `.claude/skills/game-marketing/`

**Called by:**
- `/game:topchart` command
- `game-market-analyst` agent
- Manual scripts

---

## Development

**Adding new analysis:**
1. Add function to appropriate library module
2. Keep modules under 200 LOC
3. Write pure functions (no side effects)
4. Export for reuse

**Adding new chart type:**
1. Add category mapping to `category-mappings.js`
2. No other changes needed (modular design)

---

## License

MIT - Part of AgentKits Marketing suite
