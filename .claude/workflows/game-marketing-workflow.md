# Game Marketing Workflow

## Overview

Workflow for mobile game marketing teams to analyze market trends, track competitor rankings, and generate monthly top chart reports.

---

## Data Sources

### Primary: SensorTower MCP
| Data Type | MCP Tool | Use For |
|-----------|----------|---------|
| Top Charts | `get_top_apps` | Ranking data by category |
| App Details | `get_app_metadata` | Game info, publisher, genre |
| Rankings | `get_app_rankings` | Historical position tracking |

### Secondary: CSV Import
- SensorTower exports
- AppMagic exports
- Custom data files in `./data/`

---

## Monthly Top Chart Analysis

### Execution
```bash
/game:topchart [YYYY-MM]
```

### Parameters
| Parameter | Default | Options |
|-----------|---------|---------|
| Months | Current + Previous | Any 2 consecutive months |
| Countries | Global, US | Any supported country |
| Platforms | iOS, Android | Single or both |
| Charts | All Games + 3 Genres | Customizable |
| Limit | Top 20 | 20, 50, 100 |

### Filter Matrix (8 Charts Total)
| Chart Type | Countries | Platforms |
|------------|-----------|-----------|
| All Games | Global, US | iOS, Android |
| Puzzle | Global, US | iOS, Android |
| Tower Defense | Global, US | iOS, Android |
| Simulation | Global, US | iOS, Android |

---

## Implementation Workflow (MCP + Modular Libraries)

### Architecture
```
User Command → Claude Code → MCP Tools → Bridge → Modular Libs → Report
```

### Step-by-Step Execution

#### 1. Data Collection (Claude Code + MCP)
```javascript
// Claude Code orchestrates MCP calls for all 32 charts
// Example: US iOS All Games
const us_ios_allgames_nov = await mcp__sensortower__get_top_apps({
  os: 'ios',
  category: '6014',  // All Games
  chart_type: 'topfreeapplications',
  country: 'US',
  date: '2024-11-01'
});

const us_ios_allgames_oct = await mcp__sensortower__get_top_apps({
  os: 'ios',
  category: '6014',
  chart_type: 'topfreeapplications',
  country: 'US',
  date: '2024-10-01'
});

// Repeat for all 32 chart combinations
// Total: 32 ranking calls + 3-4 metadata batch calls
```

#### 2. Collect Unique App IDs (MCP Bridge)
```javascript
import { collectAppIdsFromMCPResponses } from '.claude/skills/game-marketing/workflows/mcp-bridge.js';

const allMCPResponses = [us_ios_allgames_nov, us_ios_allgames_oct, /* ... */];
const uniqueIds = collectAppIdsFromMCPResponses(allMCPResponses, 'ios');
// Returns: { ios: [id1, id2, ...], android: [] }
```

#### 3. Fetch Metadata (MCP + Adapter)
```javascript
import { batchAppIds, mergeMetadataResponses } from '.claude/skills/game-marketing/lib/sensortower-mcp-adapter.js';

const batches = batchAppIds(uniqueIds.ios, 100);
const metadataResponses = [];

for (const batch of batches) {
  const response = await mcp__sensortower__get_app_metadata({
    os: 'ios',
    app_ids: batch,
    country: 'US'
  });
  metadataResponses.push(response);
}

const metadata = mergeMetadataResponses(metadataResponses);
```

#### 4. Process Charts (MCP Bridge + Modular Libraries)
```javascript
import { transformMCPChartToReportFormat } from '.claude/skills/game-marketing/workflows/mcp-bridge.js';
import { generateFullReport } from '.claude/skills/game-marketing/lib/full-report-generator.js';

const processedCharts = {};

// Transform each chart
processedCharts['US_ios_allgames'] = transformMCPChartToReportFormat({
  country: 'US',
  platform: 'ios',
  chartName: 'All Games',
  currentMCPResponse: us_ios_allgames_nov,
  previousMCPResponse: us_ios_allgames_oct,
  metadata
});

// Repeat for all 32 charts
```

#### 5. Generate Report (Modular Libraries)
```javascript
import fs from 'fs';

const report = generateFullReport({
  allData: processedCharts,
  metadata,
  periodLabel: 'November 2024 vs October 2024',
  scope: 'Global + US, iOS + Android, 4 genres',
  generatedDate: new Date().toISOString().split('T')[0]
});

fs.writeFileSync('docs/topchart-analysis-nov2024.md', report);
```

---

## Analysis Framework

### Position Change Indicators
| Indicator | Meaning |
|-----------|---------|
| `0` | No change in position |
| `+X` | Moved up X positions |
| `-X` | Moved down X positions |
| `New` | New entry to chart |

### Calculation
```
Change = Rank(Month T-1) - Rank(Month T)
```

### Insight Categories

#### For All Games Charts
1. **Genre Distribution** - Which genres dominate the chart?
2. **New Entries** - New games mainly from which genre?
3. **Big Movers** - Games with >20 position change, which genres?

#### For Genre-Specific Charts
1. **Subgenre Distribution** - Which subgenres dominate?
2. **New Entries** - New games mainly from which subgenre?
3. **Big Movers** - Games with >20 position change, which subgenres?

---

## Genre Taxonomy

### Puzzle
| Subgenre | Examples |
|----------|----------|
| Match-3 | Candy Crush, Royal Match |
| Word | Wordle, Word Cookies |
| Brain/Trivia | Brain Out, Trivia Crack |
| Physics | Cut the Rope, Angry Birds |

### Tower Defense
| Subgenre | Examples |
|----------|----------|
| Classic TD | Kingdom Rush, Bloons TD |
| Hybrid TD | Plants vs Zombies, Arknights |
| Idle TD | Auto-battle variants |

### Simulation
| Subgenre | Examples |
|----------|----------|
| Life Sim | The Sims, BitLife |
| Business | Game Dev Tycoon |
| Farming | Hay Day, FarmVille |
| Building | SimCity, Township |

---

## Report Schedule

### Weekly
- Quick ranking check (no full analysis)
- Alert on major position changes

### Monthly (Primary)
- Full top chart analysis
- Genre/subgenre breakdown
- Trend identification
- Recommendations

### Quarterly
- Trend summary across 3 months
- Strategic recommendations

---

## Agent Responsibilities

| Agent | Role |
|-------|------|
| `game-market-analyst` | Primary data analysis, chart processing |
| `researcher` | Deep dive on specific games/trends |
| `copywriter` | Report narrative polish |
| `planner` | Strategic recommendations |

---

## Output Deliverables

### 1. Data Tables
- Ranking comparison tables (CSV/Excel)
- Genre distribution charts
- Position change summaries

### 2. Analysis Report
- Executive summary
- Key findings
- Trend analysis
- Recommendations

### 3. Visualizations (if needed)
- Genre pie charts
- Position change histograms
- Trend line graphs

---

## Quick Reference

### Run Monthly Analysis
```bash
/game:topchart 2024-01
```

### Check Specific Genre
```bash
# Use game-market-analyst agent
"Analyze Puzzle games Top 20 for December vs November"
```

### Compare Specific Games
```bash
# Use game-market-analyst agent
"Compare ranking changes for [Game A], [Game B], [Game C]"
```

---

## Data Reliability

**CRITICAL**: All data must come from:
1. ✅ SensorTower MCP (preferred)
2. 📊 User-provided CSV exports
3. ⚠️ Never fabricate rankings or metrics

If MCP unavailable, prompt user to:
1. Export data from SensorTower/AppMagic
2. Upload CSV to `./data/` folder
3. Reference file in command
