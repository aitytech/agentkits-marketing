# Date Helpers Component

> Utilities for dynamic date generation in interactive questions

**Version:** 1.0.0
**Last Updated:** 2026-01-25

---

## Critical Rule

**NEVER hardcode dates in questions. ALWAYS generate dynamically.**

---

## Step 0: Get Current Date (MANDATORY)

Execute this BEFORE asking any date-related questions:

### macOS / Linux Compatible

```bash
# Get current date info
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_MONTH_NUM=$(date +%Y-%m)
CURRENT_MONTH_NAME=$(date +"%B %Y")
CURRENT_YEAR=$(date +%Y)
CURRENT_WEEK=$(date +%V)

# Previous months (macOS compatible with -v flag)
PREV_MONTH_1_NUM=$(date -v-1m +%Y-%m 2>/dev/null || date -d "-1 month" +%Y-%m)
PREV_MONTH_1_NAME=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")

PREV_MONTH_2_NUM=$(date -v-2m +%Y-%m 2>/dev/null || date -d "-2 months" +%Y-%m)
PREV_MONTH_2_NAME=$(date -v-2m +"%B %Y" 2>/dev/null || date -d "-2 months" +"%B %Y")

PREV_MONTH_3_NUM=$(date -v-3m +%Y-%m 2>/dev/null || date -d "-3 months" +%Y-%m)
PREV_MONTH_3_NAME=$(date -v-3m +"%B %Y" 2>/dev/null || date -d "-3 months" +"%B %Y")

# Previous weeks
PREV_WEEK_1=$(date -v-7d +%V 2>/dev/null || date -d "-7 days" +%V)
PREV_WEEK_2=$(date -v-14d +%V 2>/dev/null || date -d "-14 days" +%V)

# Quarter calculations
CURRENT_QUARTER=$(( ($(date +%m) - 1) / 3 + 1 ))
CURRENT_QUARTER_NAME="Q${CURRENT_QUARTER} $(date +%Y)"

# Output for verification
echo "Current: $CURRENT_DATE | Month: $CURRENT_MONTH_NAME | Week: $CURRENT_WEEK"
```

### Windows PowerShell

```powershell
# Get current date info
$CURRENT_DATE = Get-Date -Format "yyyy-MM-dd"
$CURRENT_MONTH_NUM = Get-Date -Format "yyyy-MM"
$CURRENT_MONTH_NAME = Get-Date -Format "MMMM yyyy"
$CURRENT_YEAR = Get-Date -Format "yyyy"

# Previous months
$PREV_MONTH_1_NUM = (Get-Date).AddMonths(-1).ToString("yyyy-MM")
$PREV_MONTH_1_NAME = (Get-Date).AddMonths(-1).ToString("MMMM yyyy")

$PREV_MONTH_2_NUM = (Get-Date).AddMonths(-2).ToString("yyyy-MM")
$PREV_MONTH_2_NAME = (Get-Date).AddMonths(-2).ToString("MMMM yyyy")
```

---

## Monthly Report Options

Generate dynamic options for monthly reports:

### Template

```javascript
// After executing date commands above
AskUserQuestion({
  questions: [{
    question: "Which month do you want to report on?",
    header: "Month",
    multiSelect: false,
    options: [
      {
        label: `Latest (${CURRENT_MONTH_NAME})`,
        description: `${CURRENT_MONTH_NAME} vs ${PREV_MONTH_1_NAME}`
      },
      {
        label: PREV_MONTH_1_NAME,
        description: `${PREV_MONTH_1_NAME} vs ${PREV_MONTH_2_NAME}`
      },
      {
        label: PREV_MONTH_2_NAME,
        description: `${PREV_MONTH_2_NAME} vs ${PREV_MONTH_3_NAME}`
      },
      {
        label: "Custom month",
        description: "Enter specific YYYY-MM"
      }
    ]
  }]
})
```

### Example Output (If today is 2026-01-25)

| Option | Label | Description |
|--------|-------|-------------|
| 1 | Latest (January 2026) | January 2026 vs December 2025 |
| 2 | December 2025 | December 2025 vs November 2025 |
| 3 | November 2025 | November 2025 vs October 2025 |
| 4 | Custom month | Enter specific YYYY-MM |

---

## Weekly Report Options

```javascript
AskUserQuestion({
  questions: [{
    question: "Which week do you want to report on?",
    header: "Week",
    multiSelect: false,
    options: [
      {
        label: `Current Week (W${CURRENT_WEEK})`,
        description: "This week's data (may be partial)"
      },
      {
        label: `Last Week (W${PREV_WEEK_1})`,
        description: "Complete data from previous week"
      },
      {
        label: `2 Weeks Ago (W${PREV_WEEK_2})`,
        description: "Data from two weeks ago"
      },
      {
        label: "Custom week",
        description: "Enter specific week number"
      }
    ]
  }]
})
```

---

## Date Range Options

For analysis requiring start and end dates:

```javascript
AskUserQuestion({
  questions: [{
    question: "What time range should we analyze?",
    header: "Range",
    multiSelect: false,
    options: [
      {
        label: "Last 7 days",
        description: `${DAYS_7_AGO} to ${CURRENT_DATE}`
      },
      {
        label: "Last 30 days",
        description: `${DAYS_30_AGO} to ${CURRENT_DATE}`
      },
      {
        label: "Last 90 days",
        description: `${DAYS_90_AGO} to ${CURRENT_DATE}`
      },
      {
        label: "Custom range",
        description: "I'll specify start and end dates"
      }
    ]
  }]
})
```

### Calculate Date Ranges

```bash
# Days ago calculations (macOS)
DAYS_7_AGO=$(date -v-7d +%Y-%m-%d 2>/dev/null || date -d "-7 days" +%Y-%m-%d)
DAYS_30_AGO=$(date -v-30d +%Y-%m-%d 2>/dev/null || date -d "-30 days" +%Y-%m-%d)
DAYS_90_AGO=$(date -v-90d +%Y-%m-%d 2>/dev/null || date -d "-90 days" +%Y-%m-%d)

# Quarter boundaries
Q1_START="${CURRENT_YEAR}-01-01"
Q1_END="${CURRENT_YEAR}-03-31"
Q2_START="${CURRENT_YEAR}-04-01"
Q2_END="${CURRENT_YEAR}-06-30"
Q3_START="${CURRENT_YEAR}-07-01"
Q3_END="${CURRENT_YEAR}-09-30"
Q4_START="${CURRENT_YEAR}-10-01"
Q4_END="${CURRENT_YEAR}-12-31"
```

---

## Quarter Options

```javascript
AskUserQuestion({
  questions: [{
    question: "Which quarter do you want to analyze?",
    header: "Quarter",
    multiSelect: false,
    options: [
      {
        label: `Current (${CURRENT_QUARTER_NAME})`,
        description: "Quarter in progress"
      },
      {
        label: `Previous Quarter`,
        description: "Last completed quarter"
      },
      {
        label: "Year to Date",
        description: `${CURRENT_YEAR}-01-01 to today`
      },
      {
        label: "Custom quarter",
        description: "Select specific Q1-Q4 and year"
      }
    ]
  }]
})
```

---

## Year Options

```javascript
AskUserQuestion({
  questions: [{
    question: "Which year should we compare?",
    header: "Year",
    multiSelect: false,
    options: [
      {
        label: CURRENT_YEAR,
        description: "Current year data"
      },
      {
        label: `${CURRENT_YEAR - 1}`,
        description: "Previous year for YoY comparison"
      },
      {
        label: `${CURRENT_YEAR - 2}`,
        description: "Two years ago"
      },
      {
        label: "Custom year",
        description: "Enter specific year"
      }
    ]
  }]
})
```

---

## Validation Rules

### Date Format Validation

```javascript
// Valid formats
const validFormats = {
  month: /^\d{4}-(0[1-9]|1[0-2])$/,           // YYYY-MM
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, // YYYY-MM-DD
  quarter: /^Q[1-4]\s\d{4}$/,                  // Q1 2026
  week: /^W([0-4]\d|5[0-3])$/                  // W01-W53
};

// Validation function
function validateDateInput(input, format) {
  return validFormats[format].test(input);
}
```

### Future Date Prevention

```javascript
// Check if selected date is not in the future
function isValidPastDate(selectedDate, currentDate) {
  return new Date(selectedDate) <= new Date(currentDate);
}

// If future date selected, show error
if (!isValidPastDate(userSelection, CURRENT_DATE)) {
  // Re-ask with error message
  AskUserQuestion({
    questions: [{
      question: "Please select a past date. Future dates don't have data yet.",
      header: "Invalid",
      // ... valid options only
    }]
  });
}
```

---

## Timezone Handling

```bash
# Get user's timezone (if available from settings)
USER_TZ=${USER_TIMEZONE:-"UTC"}

# Convert to user's timezone
TZ=$USER_TZ date +"%Y-%m-%d %H:%M"
```

### Settings Integration

Reference user preferences for timezone:

```yaml
# From ./.claude/user-preferences.yml
defaults:
  timezone: "Asia/Tokyo"
  date_format: "YYYY-MM-DD"
```

---

## Common Patterns

### Month-over-Month Comparison

```markdown
**Period:** [CURRENT_MONTH_NAME]
**Comparison:** vs [PREV_MONTH_1_NAME]
**Data Range:** [CURRENT_MONTH_NUM]-01 to [CURRENT_DATE]
```

### Year-over-Year Comparison

```markdown
**Current Period:** [CURRENT_MONTH_NAME]
**YoY Comparison:** vs [SAME_MONTH_LAST_YEAR]
```

### Rolling 12 Months

```bash
# Calculate 12 months ago
MONTHS_12_AGO=$(date -v-12m +%Y-%m 2>/dev/null || date -d "-12 months" +%Y-%m)
```

---

## Usage in Commands

### Example: /report:monthly

```markdown
## Step 0: Get Current Date (MANDATORY)

\`\`\`bash
CURRENT_MONTH_NAME=$(date +"%B %Y")
PREV_MONTH_1_NAME=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")
# ... rest of date calculations
\`\`\`

## Step 1: Ask Time Period

Use AskUserQuestion with dynamically generated month options from Step 0.
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Date command fails on macOS | Use `-v` flag instead of `-d` |
| Date command fails on Linux | Use `-d` flag instead of `-v` |
| Timezone mismatch | Check user-preferences.yml |
| Week number differs | ISO week (Monday start) vs US week (Sunday start) |
