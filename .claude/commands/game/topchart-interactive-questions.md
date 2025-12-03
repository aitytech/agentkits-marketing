# Interactive Questions - Top Chart Analysis

**Purpose:** Mandatory user parameter collection for `/game:topchart` command

---

## ⚠️ CRITICAL RULE

**NEVER skip asking user for parameters. NEVER use default values without user confirmation.**

---

## Question Flow

### Step 1: Ask Scope (MANDATORY)

**Question:** "What scope of analysis do you want?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
1. **Quick Analysis (US iOS, 2 categories)** - US iOS only, All Games + 1 genre. Fast insights.
2. **Standard Analysis (US+Global iOS, 4 categories)** (Recommended) - US + Global, iOS only, All Games + 3 genres
3. **Full Analysis (US+Global, iOS+Android, 4 categories)** - Complete view across platforms
4. **Custom (I'll choose details)** - User selects each parameter individually

---

### Step 2: If Custom - Ask Countries (REQUIRED)

**Question:** "Which countries/regions do you want to analyze?"
**Header:** "Countries"
**MultiSelect:** true

**Options:**
- **United States (US)** - Largest mobile game market, high ARPU
- **Global (WW)** - Worldwide aggregated data
- **Japan (JP)** - High ARPU market, unique preferences
- **South Korea (KR)** - Mobile-first market, strong RPG
- **Vietnam (VN)** - Growing market, local preferences
- **China (CN)** - Largest market by revenue

---

### Step 3: If Custom - Ask Platforms (REQUIRED)

**Question:** "Which platforms do you want to analyze?"
**Header:** "Platforms"
**MultiSelect:** true

**Options:**
- **iOS** - Apple App Store (Higher ARPU, premium users)
- **Android** - Google Play (Larger user base, diverse demographics)

---

### Step 4: If Custom - Ask Genres (REQUIRED)

**Question:** "Which game genres do you want to analyze?"
**Header:** "Genres"
**MultiSelect:** true

**Options:**
- **All Games** (Recommended) - Overall top charts across all genres
- **Puzzle** - Match-3, word games, brain teasers
- **Strategy** - Tower Defense, RTS, turn-based strategy
- **Simulation** - Life sim, idle games, tycoon, city building
- **RPG** - Role-playing games, character progression
- **Action** - Fast-paced gameplay, combat, arcade
- **Racing** - Racing and driving games
- **Casino** - Slots, poker, social casino

---

### Step 5: Ask Time Period (REQUIRED)

**Question:** "Which month do you want to analyze?"
**Header:** "Month"
**MultiSelect:** false

**⚠️ CRITICAL:** MUST generate month options dynamically. NEVER hardcode dates!

**Implementation:**

```bash
# Step 1: Get current date and calculate months
CURRENT_DATE=$(date +%Y-%m-01)
PREV_MONTH_1=$(date -d "$CURRENT_DATE -1 month" +%Y-%m-01 2>/dev/null || date -v-1m -j -f "%Y-%m-%d" "$CURRENT_DATE" +%Y-%m-01)
PREV_MONTH_2=$(date -d "$CURRENT_DATE -2 months" +%Y-%m-01 2>/dev/null || date -v-2m -j -f "%Y-%m-%d" "$CURRENT_DATE" +%Y-%m-01)

# Step 2: Format for display
CURRENT_DISPLAY=$(date -d "$CURRENT_DATE" +"%B %Y" 2>/dev/null || date -j -f "%Y-%m-%d" "$CURRENT_DATE" +"%B %Y")
PREV_DISPLAY_1=$(date -d "$PREV_MONTH_1" +"%B %Y" 2>/dev/null || date -j -f "%Y-%m-%d" "$PREV_MONTH_1" +"%B %Y")
PREV_DISPLAY_2=$(date -d "$PREV_MONTH_2" +"%B %Y" 2>/dev/null || date -j -f "%Y-%m-%d" "$PREV_MONTH_2" +"%B %Y")

# Step 3: Calculate comparison months
PREV_FOR_CURRENT=$(date -d "$CURRENT_DATE -1 month" +"%B %Y" 2>/dev/null || date -v-1m -j -f "%Y-%m-%d" "$CURRENT_DATE" +"%B %Y")
PREV_FOR_MONTH_1=$(date -d "$PREV_MONTH_1 -1 month" +"%B %Y" 2>/dev/null || date -v-1m -j -f "%Y-%m-%d" "$PREV_MONTH_1" +"%B %Y")
PREV_FOR_MONTH_2=$(date -d "$PREV_MONTH_2 -1 month" +"%B %Y" 2>/dev/null || date -v-1m -j -f "%Y-%m-%d" "$PREV_MONTH_2" +"%B %Y")
```

**Dynamic Options Structure:**

```javascript
// Example output for January 2026:
options: [
  {
    label: "Latest (January 2026)",           // CURRENT_DISPLAY
    description: "January 2026 vs December 2025"  // vs PREV_FOR_CURRENT
  },
  {
    label: "December 2025",                   // PREV_DISPLAY_1
    description: "December 2025 vs November 2025"  // vs PREV_FOR_MONTH_1
  },
  {
    label: "November 2025",                   // PREV_DISPLAY_2
    description: "November 2025 vs October 2025"   // vs PREV_FOR_MONTH_2
  },
  {
    label: "Custom YYYY-MM",
    description: "Enter specific month manually"
  }
]
```

**Example for different dates:**

If today is **2026-01-09**:
- Option 1: "Latest (January 2026)" → Jan 2026 vs Dec 2025
- Option 2: "December 2025" → Dec 2025 vs Nov 2025
- Option 3: "November 2025" → Nov 2025 vs Oct 2025

If today is **2026-06-15**:
- Option 1: "Latest (June 2026)" → Jun 2026 vs May 2026
- Option 2: "May 2026" → May 2026 vs Apr 2026
- Option 3: "April 2026" → Apr 2026 vs Mar 2026

---

### Step 6: Ask Chart Depth (OPTIONAL)

**Question:** "How many games per chart?"
**Header:** "Top X"
**MultiSelect:** false

**Options:**
- **Top 20** (Recommended) - Standard analysis depth, good balance
- **Top 10** (Quick) - Focus on market leaders only
- **Top 50** (Deep) - Comprehensive view, longer processing
- **Top 100** (Complete) - Full market landscape

**Default if not asked:** Top 20

---

### Step 7: Confirm Configuration (MANDATORY)

**Question:** "Confirm your analysis configuration"
**Header:** "Confirm"
**MultiSelect:** false

**Display Summary:**
```
Analysis Configuration:
- Countries: [selected countries]
- Platforms: [selected platforms]
- Genres: [selected genres]
- Period: [month] vs [previous month]
- Depth: Top [X] games per chart
- Total Charts: [count] charts
```

**Options:**
- **Yes, proceed with analysis** - Start data collection
- **No, let me change settings** - Go back to Step 1

**If "No" selected:** Restart from Step 1

---

## Preset Configurations

### Quick Analysis Preset
- Countries: US
- Platforms: iOS
- Genres: All Games + Puzzle
- Period: Latest month
- Depth: Top 20
- **Total:** 2 charts

### Standard Analysis Preset (Recommended)
- Countries: US, Global
- Platforms: iOS
- Genres: All Games + Puzzle + Strategy + Simulation
- Period: Latest month
- Depth: Top 20
- **Total:** 8 charts (2 countries × 4 genres)

### Full Analysis Preset
- Countries: US, Global
- Platforms: iOS, Android
- Genres: All Games + Puzzle + Strategy + Simulation
- Period: Latest month
- Depth: Top 20
- **Total:** 16 charts (2 countries × 2 platforms × 4 genres)

---

## Validation Rules

Before proceeding to data collection, verify:

✅ **Required:**
- User has answered Scope question (Step 1)
- If Custom selected, user has answered Countries, Platforms, Genres (Steps 2-4)
- User has answered Time Period (Step 5)
- User has confirmed configuration (Step 7)

❌ **Not Allowed:**
- Skipping any required questions
- Using default values without user selection
- Proceeding without confirmation

---

## Error Handling

**If user provides no answer:**
- Re-ask the question with more context
- Suggest the recommended option

**If user selects "Custom YYYY-MM":**
- Prompt for manual date entry
- Validate format: YYYY-MM (e.g., 2025-12)
- Validate date is not in the future

**If user selects incompatible options:**
- Alert user to incompatibility
- Ask to revise selection
- Example: "WW" country code doesn't work with Android category format
