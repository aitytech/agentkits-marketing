---
description: Perform comprehensive SEO audit
argument-hint: [url-or-sitemap]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `seo-mastery`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md` and `./.claude/components/date-helpers.md`

---

## Interactive Parameter Collection

### Step 0: Get Current Date (MANDATORY)

**Execute BEFORE asking any questions:**

```bash
# Get current date info
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_MONTH_NAME=$(date +"%B %Y")

# Baseline dates for comparison
DAYS_30_AGO=$(date -v-30d +%Y-%m-%d 2>/dev/null || date -d "-30 days" +%Y-%m-%d)
DAYS_90_AGO=$(date -v-90d +%Y-%m-%d 2>/dev/null || date -d "-90 days" +%Y-%m-%d)
PREV_MONTH=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")

echo "SEO Audit Date: $CURRENT_DATE"
```

---

### Step 1: Ask Audit Scope

**Question:** "What level of SEO audit do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick health check, critical issues
- **Recommended** - Full audit with prioritized fixes
- **Complete** - Comprehensive with competitor analysis
- **Custom** - I'll select specific audit areas

---

### Step 2: Ask Audit Focus

**Question:** "Which areas should we audit?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Technical SEO** - Speed, crawlability, Core Web Vitals
- **On-Page SEO** - Titles, metas, content optimization
- **Content Quality** - Thin content, gaps, keyword mapping
- **Off-Page & Links** - Backlink profile, authority, toxic links

---

### Step 3: Ask Baseline Period (DYNAMIC - use Step 0 values)

**Question:** "Compare against which baseline?"
**Header:** "Baseline"
**MultiSelect:** false

**Options (generated from Step 0):**
- **vs Last 30 days** - [DAYS_30_AGO] baseline
- **vs Last 90 days** (Recommended) - [DAYS_90_AGO] baseline
- **vs Last Month ([PREV_MONTH])** - Month-over-month
- **No baseline** - Current snapshot only

---

### Step 4: Ask Priority Output

**Question:** "How should we prioritize recommendations?"
**Header:** "Priority"
**MultiSelect:** false

**Options:**
- **Impact/Effort Matrix** (Recommended) - Quick wins first
- **By Issue Severity** - Critical → High → Medium → Low
- **By SEO Category** - Technical → On-Page → Content → Links
- **Custom priority** - I'll specify order

---

### Step 5: Confirmation

**Display summary:**

```markdown
## SEO Audit Configuration

| Parameter | Value |
|-----------|-------|
| Target | [URL or sitemap] |
| Focus Areas | [selected areas] |
| Baseline | [selected comparison] |
| Priority Method | [selected priority] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Proceed with SEO audit?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, run audit** - Start SEO audit
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Data | MCP Server | Required |
|------|------------|----------|
| Rankings | `google-search-console` | For position data |
| Backlinks | `semrush` | For link profile |
| Keywords | `semrush`, `dataforseo` | For keyword analysis |

### Rules
1. **NEVER fabricate** SEO metrics (DA, rankings, traffic)
2. **Technical checks OK**: WebFetch for page speed, SSL, mobile
3. **If no MCP**: Show "⚠️ Ranking data requires GSC/Semrush MCP"

---

## Workflow

1. **Technical SEO Analysis**
   - Site speed assessment
   - Mobile-friendliness check
   - Crawlability analysis
   - Schema markup review
   - Core Web Vitals evaluation

2. **On-Page Analysis**
   - Title tag optimization
   - Meta description review
   - Heading structure analysis
   - Content quality assessment
   - Internal linking audit

3. **Content Analysis**
   - Thin content identification
   - Duplicate content check
   - Content gap analysis
   - Keyword mapping review

4. **Off-Page Analysis**
   - Backlink profile overview
   - Domain authority assessment
   - Toxic link identification

5. **Competitive Positioning**
   - SERP position tracking
   - Share of voice analysis
   - Competitor comparison

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| SEO audit | `attraction-specialist` | Full audit |
| Technical analysis | `seo-specialist` | Technical issues |
| Content gaps | `researcher` | Content analysis |
| Competitive intel | `researcher` | Competitor comparison |

---

## Output Format

### Basic Scope

```markdown
# SEO Audit: [URL]
**Date:** [CURRENT_DATE]

## Health Score: [X/100]

## Critical Issues
| Issue | Impact | Pages Affected | Fix |
|-------|--------|----------------|-----|
| [Issue 1] | High | X | [Quick fix] |

## Quick Wins (Impact/Effort)
1. [High impact, low effort fix]
2. [High impact, low effort fix]

## Data Sources
- ✅ [MCP used] or ⚠️ [Not available]
```

### Recommended Scope

[Include Basic + Full Technical Audit + On-Page Analysis + Content Review + Prioritized Roadmap]

### Complete Scope

[Include all + Competitor Analysis + Link Building Strategy + 90-Day Action Plan]

---

## Output Location

Save audit to: `./docs/seo/audits/[domain]-audit-[YYYY-MM-DD].md`
