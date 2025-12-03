# Top Chart Analysis Workflow

**Purpose:** Step-by-step workflow for top chart analysis after parameter collection

---

## Workflow Phases

### Phase 1: Data Collection

Use `game-market-analyst` agent to pull data via SensorTower MCP.

**For each combination:**
```
Countries: [user selected]
Platforms: [user selected]
Genres: [user selected]
Months: [current month T] + [previous month T-1]
Depth: Top [X] games
```

**Example calculation:**
- 2 countries × 2 platforms × 4 genres × 2 months = 32 API calls
- Each call returns top X rankings

**Data to collect per app:**
- App ID
- Rank position
- App name (from metadata)
- Publisher name (from metadata)
- Category/Genre (from metadata)
- Downloads estimate (from metadata)
- Revenue estimate (from metadata)

**MCP Tools:**
- `mcp__sensortower__get_top_apps` - Get rankings
- `mcp__sensortower__get_app_metadata` - Get app details (batch max 100)

---

### Phase 2: Data Processing

#### 2.1 Calculate Ranking Changes

For each app in Month T top X:

```javascript
// Find app position in Month T-1
const prevRank = findRankInPreviousMonth(appId, monthT1Rankings);

if (!prevRank) {
  change = "New";  // Not in previous month's top X
} else if (prevRank === currentRank) {
  change = "0";    // Same position
} else if (prevRank > currentRank) {
  change = `+${prevRank - currentRank}`;  // Improved (lower rank number = better)
} else {
  change = `-${currentRank - prevRank}`;  // Declined
}
```

#### 2.2 Identify Special Cases

**New Entries:**
- Apps in Month T top X but NOT in Month T-1 top X
- Label: "New"

**Big Movers:**
- Position change > 5 ranks (configurable threshold)
- Label: "+10" or "-10" etc.

**Dropped:**
- Apps in Month T-1 top X but NOT in Month T top X
- Track separately for insights

---

### Phase 3: Analysis

#### 3.1 All Games Charts Analysis

For "All Games" category:

1. **Genre Distribution**
   - Count apps per primary_category
   - Calculate percentage distribution
   - Compare Month T vs Month T-1

2. **New Entries Analysis**
   - List all new entries
   - Group by genre
   - Identify emerging genres

3. **Big Movers Analysis**
   - Filter moves > 5 positions
   - Group by genre
   - Identify momentum shifts

4. **Revenue/Downloads Analysis**
   - Top performers by revenue
   - Top performers by downloads
   - Calculate averages by genre

---

#### 3.2 Genre-Specific Charts Analysis

For each genre (Puzzle, Strategy, Simulation, etc.):

1. **Subgenre Distribution**
   - Count apps per secondary_category
   - Calculate percentage distribution
   - Example: Puzzle → Match-3, Word, Merge, Solitaire

2. **New Entries by Subgenre**
   - Which subgenres gaining traction?
   - Which subgenres declining?

3. **Big Movers by Subgenre**
   - Which subgenres have momentum?
   - Performance patterns

4. **Monetization Analysis**
   - Average revenue by subgenre
   - ARPU calculation (revenue / downloads)
   - Premium vs casual monetization

---

#### 3.3 Cross-Category Insights

1. **Publisher Portfolio Analysis**
   - Which publishers have multiple top X apps?
   - Portfolio diversification strategy
   - Revenue concentration

2. **Market Trends**
   - Rising mechanics (merge, word, idle, etc.)
   - Declining mechanics
   - Emerging themes (narrative, social, etc.)

3. **Platform Differences** (if both iOS & Android analyzed)
   - iOS vs Android top performers
   - Platform-specific preferences
   - Monetization differences

4. **Regional Differences** (if multiple countries)
   - US vs Global trends
   - Region-specific genres
   - Cultural preferences

---

### Phase 4: Report Generation

#### 4.1 Structure

1. **Executive Summary**
   - Key findings at a glance
   - Market volatility metrics
   - Revenue leaders
   - Rising/declining trends

2. **Category-by-Category Analysis**
   - Each chart with full rankings table
   - Position changes highlighted
   - Insights per category

3. **Key Findings Section**
   - Market trends
   - Genre shifts
   - Emerging games to watch

4. **Recommendations**
   - For publishers
   - For investors
   - For platform teams
   - For UA/marketing teams

5. **Appendix**
   - Data sources
   - Methodology
   - Limitations

---

#### 4.2 Output Files

**Primary Report:**
- `docs/topchart-analysis-[YYYY-MM]-vs-[YYYY-MM].md` - Full comprehensive report

**Executive Summary:**
- `docs/topchart-analysis-[YYYY-MM]-executive-summary.md` - 5-minute read

**Category Deep Dives:**
- `docs/topchart-analysis-[YYYY-MM]-category-[genre].md` - Per genre

**Data Files:**
- `data/[YYYY-MM]-top[X]-rankings.md` - Raw rankings
- `data/[YYYY-MM]-app-metadata-lookup.json` - Metadata
- `data/[YYYY-MM]-app-metadata.json` - Full metadata array

**Index:**
- `docs/README-topchart-analysis.md` - Navigation guide

---

### Phase 5: Quality Assurance

#### 5.1 Data Validation

✅ Check:
- All ranking positions 1-X accounted for
- No duplicate app IDs in same chart
- Metadata coverage > 95%
- Position changes logical (no impossible jumps)

⚠️ Flag:
- Unusual revenue/download ratios
- Missing metadata (mark as "Data N/A")
- API errors or incomplete data

#### 5.2 Analysis Validation

✅ Verify:
- Genre distributions sum to 100%
- New entry counts match data
- Big mover threshold applied consistently
- Cross-references accurate

#### 5.3 Report Quality

✅ Ensure:
- All charts documented
- Insights supported by data
- No fabricated information
- Sources clearly marked (✅ VERIFIED)

---

## Agent Delegation

| Task | Agent | When to Use |
|------|-------|-------------|
| Data collection | `game-market-analyst` | SensorTower MCP queries |
| Deep analysis | `researcher` | Market context, trends, insights |
| Report polish | `copywriter` | Executive summary, recommendations |
| Quality check | `seo-specialist` | Report optimization |

---

## Error Handling

**If SensorTower MCP unavailable:**
1. Inform user: "⚠️ SensorTower MCP required for real data"
2. Offer alternative: "Please provide CSV export from SensorTower/AppMagic"
3. If CSV provided, process manually
4. Mark data source appropriately

**If API rate limit hit:**
1. Implement exponential backoff
2. Batch requests efficiently (100 apps per metadata call)
3. Cache intermediate results
4. Resume from last successful call

**If incomplete data:**
1. Mark missing data: "Data N/A"
2. Continue with available data
3. Note limitations in Appendix
4. Do NOT fabricate missing data

---

## Performance Optimization

**Batch Processing:**
- Metadata: 100 apps per call (SensorTower limit)
- Rankings: 1 call per chart (platform + country + genre + month)

**Caching:**
- Cache metadata lookups
- Reuse data across reports
- 15-minute cache for repeated queries

**Parallel Processing:**
- Run independent API calls in parallel
- Batch metadata calls efficiently
- Process analysis per chart concurrently

---

## Success Metrics

Report quality indicators:
- ✅ All parameters user-confirmed
- ✅ 100% data from MCP (not fabricated)
- ✅ >95% metadata coverage
- ✅ All insights data-supported
- ✅ Actionable recommendations
- ✅ Clear source attribution
