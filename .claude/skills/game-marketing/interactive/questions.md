# Interactive Questions - Top Chart Analysis

**Purpose:** AskUserQuestion configurations for dynamic parameter selection

---

## Q1: Scope Selection

```javascript
{
  questions: [{
    question: "What scope of analysis do you want?",
    header: "Scope",
    multiSelect: false,
    options: [
      {
        label: "Quick Analysis (2 charts)",
        description: "US iOS only - All Games + 1 genre. Fast, focused insights."
      },
      {
        label: "Standard Analysis (8 charts)",
        description: "US + Global, iOS only - All Games + 3 genres. Recommended."
      },
      {
        label: "Full Analysis (16 charts)",
        description: "US + Global, iOS + Android - All Games + 3 genres. Complete view."
      },
      {
        label: "Custom (let me choose)",
        description: "Select countries, platforms, and genres individually."
      }
    ]
  }]
}
```

---

## Q2: Country Selection (if Custom)

```javascript
{
  questions: [{
    question: "Which countries/regions do you want to analyze?",
    header: "Countries",
    multiSelect: true,
    options: [
      {
        label: "United States (US)",
        description: "Largest mobile game market, high ARPU"
      },
      {
        label: "Global (WW)",
        description: "Worldwide aggregated data"
      },
      {
        label: "China (CN)",
        description: "Largest market by revenue"
      },
      {
        label: "Japan (JP)",
        description: "High ARPU, unique preferences"
      },
      {
        label: "South Korea (KR)",
        description: "Mobile-first market, strong RPG"
      },
      {
        label: "Vietnam (VN)",
        description: "Growing market, local preferences"
      }
    ]
  }]
}
```

---

## Q3: Platform Selection (if Custom)

```javascript
{
  questions: [{
    question: "Which platforms do you want to analyze?",
    header: "Platforms",
    multiSelect: true,
    options: [
      {
        label: "iOS",
        description: "Apple App Store - Higher ARPU, premium users"
      },
      {
        label: "Android",
        description: "Google Play - Larger user base, diverse demographics"
      }
    ]
  }]
}
```

---

## Q4: Genre Selection (if Custom)

```javascript
{
  questions: [{
    question: "Which game genres do you want to analyze?",
    header: "Genres",
    multiSelect: true,
    options: [
      {
        label: "All Games",
        description: "Overall top charts across all genres (Recommended)"
      },
      {
        label: "Puzzle",
        description: "Match-3, word, brain teasers, casual puzzle"
      },
      {
        label: "Strategy",
        description: "Tower Defense, RTS, turn-based strategy"
      },
      {
        label: "Simulation",
        description: "Life sim, tycoon, city building, farm"
      },
      {
        label: "RPG",
        description: "Role-playing games, character progression"
      },
      {
        label: "Action",
        description: "Fast-paced gameplay, combat, arcade"
      },
      {
        label: "Casino",
        description: "Slots, poker, social casino"
      },
      {
        label: "Sports",
        description: "Football, racing, sports simulation"
      }
    ]
  }]
}
```

---

## Q5: Time Period (if Custom)

**IMPORTANT:** Use dynamic date generation, NOT hardcoded dates!

```javascript
import { getMonthOptions } from '../lib/date-helpers.js';

// Generate month options dynamically
const monthOptions = getMonthOptions(3); // Last 3 months
// Returns: [
//   {label: "Latest (December 2025)", value: "2025-12-01", description: "December 2025 vs November 2025"},
//   {label: "November 2025", value: "2025-11-01", description: "November 2025 vs October 2025"},
//   {label: "October 2025", value: "2025-10-01", description: "October 2025 vs September 2025"}
// ]

{
  questions: [{
    question: "Which month do you want to analyze?",
    header: "Month",
    multiSelect: false,
    options: [
      ...monthOptions.map(opt => ({
        label: opt.label,
        description: opt.description
      })),
      {
        label: "Custom month",
        description: "Enter YYYY-MM format"
      }
    ]
  }]
}
```

---

## Q6: Chart Depth (if Custom)

```javascript
{
  questions: [{
    question: "How many games per chart?",
    header: "Top X",
    multiSelect: false,
    options: [
      {
        label: "Top 20 (Recommended)",
        description: "Standard analysis depth, good balance"
      },
      {
        label: "Top 10 (Quick)",
        description: "Focus on market leaders only"
      },
      {
        label: "Top 50 (Deep)",
        description: "Comprehensive view, longer processing"
      },
      {
        label: "Top 100 (Complete)",
        description: "Full market landscape, extensive data"
      }
    ]
  }]
}
```

---

## Q7: Confirmation

```javascript
{
  questions: [{
    question: "Confirm your analysis configuration:",
    header: "Confirm",
    multiSelect: false,
    options: [
      {
        label: "Yes, proceed",
        description: `Generate analysis for:
- Countries: ${selectedCountries.join(', ')}
- Platforms: ${selectedPlatforms.join(', ')}
- Genres: ${selectedGenres.join(', ')}
- Period: ${selectedMonth} vs previous month
- Depth: Top ${selectedDepth}
Total charts: ${totalCharts}`
      },
      {
        label: "No, change settings",
        description: "Go back and modify selections"
      }
    ]
  }]
}
```

---

## Optional: Chart Type

```javascript
{
  questions: [{
    question: "Which chart type?",
    header: "Chart",
    multiSelect: false,
    options: [
      {
        label: "Top Free",
        description: "topfreeapplications - Most popular"
      },
      {
        label: "Top Grossing",
        description: "topgrossingapplications - Highest revenue"
      },
      {
        label: "Top Paid",
        description: "toppaidapplications - Paid games"
      }
    ]
  }]
}
```

---

## Optional: Output Format

```javascript
{
  questions: [{
    question: "Output format preference?",
    header: "Format",
    multiSelect: true,
    options: [
      {
        label: "Markdown Report",
        description: "docs/topchart-YYYY-MM.md"
      },
      {
        label: "JSON Data",
        description: "Raw data for further processing"
      },
      {
        label: "CSV Export",
        description: "Spreadsheet-friendly format"
      }
    ]
  }]
}
```
