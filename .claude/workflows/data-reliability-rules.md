# Data Reliability Rules

> **MANDATORY**: All agents, commands, and skills must follow these rules. Non-compliance is unacceptable.

## Core Principle

**NEVER fabricate, assume, or generate fake data. Only use verified data from trusted sources.**

---

## Data Source Hierarchy

### Tier 1: MCP Integrations (Highest Trust)
Real-time data from configured MCP servers:

| Data Type | MCP Server | Tool Examples |
|-----------|------------|---------------|
| App Intelligence | `sensortower` | `get_app_metadata`, `get_rankings` |
| Search Performance | `google-search-console` | `get_search_analytics` |
| Web Analytics | `google-analytics` | `run_report`, `get_realtime` |
| SEO Keywords | `semrush` | `keyword_overview`, `domain_overview` |
| SERP Data | `dataforseo` | `serp_api`, `keyword_data` |
| Ad Performance | `meta-ads` | `get_campaign_insights` |
| CRM Data | `hubspot` | `get_contacts`, `get_deals` |
| Social Metrics | `twitter`, `tiktok` | Platform-specific tools |

### Tier 2: Project Files (High Trust)
Data from project documentation:
- `./docs/` - Brand guidelines, strategies
- `./data/` - CSV, JSON data files
- `./reports/` - Historical reports
- `README.md` - Project context

### Tier 3: Web Search (Medium Trust)
Live web searches with source verification:
- Use `WebSearch` tool with citations
- Always include source URLs
- Cross-reference multiple sources
- Mark as "web-sourced" in output

### Tier 4: User Input (Variable Trust)
Data provided by user in conversation:
- Accept as given for user's own data
- Request verification for critical metrics
- Note source as "user-provided"

---

## Forbidden Actions

### NEVER Do These:

1. **Fabricate Numbers**
   - ❌ "Your CTR is 2.5%" (without data source)
   - ❌ "Estimated 10,000 monthly searches" (without tool)
   - ❌ "Revenue increased 25%" (without analytics)

2. **Assume Metrics**
   - ❌ Fill in placeholder percentages
   - ❌ Generate sample performance data
   - ❌ Create mock analytics reports

3. **Invent Competitor Data**
   - ❌ Guess competitor traffic
   - ❌ Fabricate domain authority
   - ❌ Assume keyword rankings

4. **Generate Fake Examples**
   - ❌ "For example, Company X gets 50K visits"
   - ❌ Sample data tables with numbers
   - ❌ Hypothetical case studies

---

## Required Actions

### ALWAYS Do These:

1. **Check MCP First**
   ```
   Before reporting any metric:
   1. Check if MCP server is available for this data
   2. Call the appropriate MCP tool
   3. If successful: Use real data
   4. If failed: Report "DATA NOT AVAILABLE"
   ```

2. **Cite Sources**
   ```markdown
   ## Traffic Analysis
   **Source:** Google Analytics (via MCP)
   **Date:** 2026-01-09

   Sessions: 12,456
   Users: 8,234
   ```

3. **Handle Missing Data**
   ```markdown
   ## Keyword Rankings
   **Status:** ⚠️ DATA NOT AVAILABLE
   **Reason:** Semrush MCP not configured
   **Action Required:** Configure SEMRUSH_API_KEY in environment
   ```

4. **Request User Data**
   ```markdown
   ## Campaign Performance

   To complete this report, please provide:
   - [ ] Ad spend for last 30 days
   - [ ] Conversion data from CRM
   - [ ] Revenue attribution data
   ```

---

## Data Quality Indicators

Use these indicators in all reports:

| Indicator | Meaning |
|-----------|---------|
| ✅ **VERIFIED** | Data from MCP/API with timestamp |
| 📊 **FROM FILE** | Data from project files |
| 🔍 **WEB SOURCE** | Data from web search (cite URL) |
| 👤 **USER PROVIDED** | Data given by user |
| ⚠️ **NOT AVAILABLE** | Cannot retrieve, need config |
| ❌ **NOT FOUND** | Searched but no data exists |

---

## Report Templates

### When Data IS Available:
```markdown
## SEO Performance Report
**Source:** Google Search Console (MCP) ✅ VERIFIED
**Period:** Last 7 days
**Generated:** 2026-01-09

| Metric | Value |
|--------|-------|
| Impressions | 45,234 |
| Clicks | 1,234 |
| CTR | 2.73% |
| Avg Position | 12.4 |
```

### When Data is NOT Available:
```markdown
## SEO Performance Report
**Status:** ⚠️ DATA NOT AVAILABLE

### Reason
Google Search Console MCP not configured.

### To Enable This Report
1. Set `GOOGLE_APPLICATION_CREDENTIALS` environment variable
2. Configure service account in Google Cloud Console
3. Verify `.mcp.json` includes `google-search-console` server

### Alternative
Provide data manually or upload CSV from Search Console export.
```

### When Data is Partial:
```markdown
## Marketing Performance
**Data Completeness:** 60%

### Available Data ✅
| Source | Status | Data |
|--------|--------|------|
| Google Analytics | ✅ Connected | Traffic, users |
| Search Console | ✅ Connected | Search metrics |

### Missing Data ⚠️
| Source | Status | Action Needed |
|--------|--------|---------------|
| Meta Ads | ❌ Not configured | Add META_ACCESS_TOKEN |
| HubSpot | ❌ Not configured | Add HUBSPOT_ACCESS_TOKEN |

### Report (Partial)
[Only include data from connected sources]
```

---

## MCP Integration Protocol

### Before Any Data Report:

```
Step 1: Identify required data sources
Step 2: Check MCP availability via mcp-manager
Step 3: Call MCP tools for available sources
Step 4: For unavailable sources, clearly mark as NOT AVAILABLE
Step 5: Never fill gaps with assumptions
```

### MCP Tool Calling Pattern:

```markdown
## Data Collection

### Attempting to retrieve SEO data...

**google-search-console:**
- Status: ✅ Connected
- Data: [Real metrics here]

**semrush:**
- Status: ❌ Not configured
- Data: NOT AVAILABLE
- Required: Set SEMRUSH_API_KEY

**dataforseo:**
- Status: ❌ Not configured
- Data: NOT AVAILABLE
- Required: Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD
```

---

## Compliance Checklist

Before submitting any report, verify:

- [ ] All numbers come from verified sources
- [ ] Each metric has source citation
- [ ] Missing data is clearly marked
- [ ] No placeholder or example numbers
- [ ] No fabricated competitor data
- [ ] No assumed percentages or growth rates
- [ ] All MCP sources attempted before marking unavailable

---

## Enforcement

**This document is MANDATORY for:**
- All marketing agents
- All analytics commands
- All research tasks
- All reporting functions

**Non-compliance results in:**
- Unreliable outputs
- User distrust
- Poor decision-making
- System integrity failure

---

## Quick Reference

```
DATA AVAILABLE?
│
├─ YES (MCP connected) ──► Use real data with ✅ VERIFIED
│
├─ YES (File exists) ────► Use file data with 📊 FROM FILE
│
├─ YES (Web search) ─────► Use with 🔍 WEB SOURCE + URL
│
├─ NO (Not configured) ──► Show ⚠️ NOT AVAILABLE + setup steps
│
└─ NO (Doesn't exist) ───► Show ❌ NOT FOUND + alternatives
```

**Remember: An honest "not available" is infinitely better than a fabricated number.**
