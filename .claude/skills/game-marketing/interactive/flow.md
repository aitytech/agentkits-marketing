# Interactive Flow - Top Chart Analysis

**Purpose:** User interaction workflow for dynamic parameter selection

---

## Flow Diagram

```
User: /game:topchart
     │
     ▼
┌─────────────────────────────┐
│ Q1: Scope Selection         │
│ - Quick (2 charts)          │
│ - Standard (8 charts)       │
│ - Full (16 charts)          │
│ - Custom                    │
└─────────────────────────────┘
     │
     ├──[Preset]──────▶ Skip to Confirmation
     │
     └──[Custom]───────▶ Ask Details
                         │
                         ▼
                    ┌─────────────────┐
                    │ Q2: Countries   │
                    │ (multi-select)  │
                    └─────────────────┘
                         │
                         ▼
                    ┌─────────────────┐
                    │ Q3: Platforms   │
                    │ (multi-select)  │
                    └─────────────────┘
                         │
                         ▼
                    ┌─────────────────┐
                    │ Q4: Genres      │
                    │ (multi-select)  │
                    └─────────────────┘
                         │
                         ▼
                    ┌─────────────────┐
                    │ Q5: Month       │
                    │ (single)        │
                    └─────────────────┘
                         │
                         ▼
                    ┌─────────────────┐
                    │ Q6: Depth       │
                    │ (Top 10/20/50)  │
                    └─────────────────┘
                         │
                         ▼
                    ┌─────────────────┐
                    │ Q7: Confirm     │
                    │ Show summary    │
                    └─────────────────┘
                         │
                         ├──[No]─────▶ Go Back
                         │
                         └──[Yes]────▶ Execute
                                         │
                                         ▼
                                    ┌─────────────┐
                                    │ MCP Calls   │
                                    │ + Process   │
                                    │ + Report    │
                                    └─────────────┘
```

---

## Implementation Pattern

### Step 1: Ask Scope
```javascript
const scopeAnswer = await AskUserQuestion({
  questions: [SCOPE_QUESTION]  // From questions.md
});
```

### Step 2: Get Config
```javascript
let config;

if (scopeAnswer === "Quick Analysis (2 charts)") {
  config = PRESETS.QUICK;  // From presets.md
} else if (scopeAnswer === "Standard Analysis (8 charts)") {
  config = PRESETS.STANDARD;
} else if (scopeAnswer === "Full Analysis (16 charts)") {
  config = PRESETS.FULL;
} else {
  // Custom flow - ask all questions
  config = await askCustomQuestions();
}
```

### Step 3: Confirm
```javascript
const summary = generateSummary(config);
const confirmed = await AskUserQuestion({
  questions: [createConfirmQuestion(summary)]
});

if (confirmed === "No, change settings") {
  return askScope();  // Start over
}
```

### Step 4: Execute
```javascript
if (confirmed === "Yes, proceed") {
  await executeAnalysis(config);
}
```

---

## Custom Questions Function

```javascript
async function askCustomQuestions() {
  const countries = await AskUserQuestion({
    questions: [COUNTRY_QUESTION]
  });

  const platforms = await AskUserQuestion({
    questions: [PLATFORM_QUESTION]
  });

  const genres = await AskUserQuestion({
    questions: [GENRE_QUESTION]
  });

  const month = await AskUserQuestion({
    questions: [MONTH_QUESTION]
  });

  const depth = await AskUserQuestion({
    questions: [DEPTH_QUESTION]
  });

  return {
    countries: parseSelection(countries),
    platforms: parseSelection(platforms),
    genres: parseSelection(genres),
    month: parseMonth(month),
    depth: parseDepth(depth)
  };
}
```

---

## Config Object Structure

```javascript
import { getDefaultPeriod } from '../lib/date-helpers.js';

const period = getDefaultPeriod();

{
  countries: ['US', 'WW'],
  platforms: ['ios', 'android'],
  genres: ['All Games', 'Puzzle', 'Strategy'],
  month: period.current,  // e.g., '2025-12-01' (auto-calculated)
  previousMonth: period.previous,  // e.g., '2025-11-01'
  depth: 20,
  chartType: 'topfreeapplications'
}
```

---

## Calculate Total Charts

```javascript
function calculateTotalCharts(config) {
  const numCountries = config.countries.length;
  const numPlatforms = config.platforms.length;
  const numGenres = config.genres.length;

  return numCountries * numPlatforms * numGenres;
}

// Example:
// 2 countries × 2 platforms × 4 genres = 16 charts
// Each chart needs 2 API calls (current + previous month)
// Total MCP calls: 16 × 2 = 32 ranking calls + 3-4 metadata batches
```

---

## Progress Indication

During execution, show progress:

```
Fetching data: [████░░░░░░] 4/16 charts complete
- ✓ US iOS All Games (Nov + Oct)
- ✓ US iOS Puzzle (Nov + Oct)
- ⏳ US Android All Games...
```

---

## Error Handling

### Invalid Selections
```javascript
if (config.genres.length === 0) {
  throw new Error("Please select at least one genre");
}

if (config.platforms.length === 0) {
  throw new Error("Please select at least one platform");
}
```

### API Limits
```javascript
const totalCharts = calculateTotalCharts(config);

if (totalCharts > 50) {
  const proceed = await AskUserQuestion({
    question: `This will generate ${totalCharts} charts. Continue?`,
    options: ["Yes, I understand", "No, let me adjust"]
  });
}
```

---

## User Preference Saving (Future)

Save last used configuration:

```javascript
// Save
localStorage.set('topchart_config', JSON.stringify(config));

// Load on next run
const lastConfig = JSON.parse(localStorage.get('topchart_config'));
const useLastConfig = await AskUserQuestion({
  question: "Use your last configuration?",
  options: [
    {label: "Yes", description: formatConfig(lastConfig)},
    {label: "No, start fresh"}
  ]
});
```
