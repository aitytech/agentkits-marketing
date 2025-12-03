---
description: Utilize tools of Model Context Protocol (MCP) servers
argument-hint: [task]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `analytics-attribution` skill.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Data Reliability

**CRITICAL**: MCP tools provide verified real-time data. Never fabricate results.

- ✅ **MCP data is trusted** - use it directly in reports
- ⚠️ **If tool fails** - show error, don't substitute fake data
- ❌ **Never guess** metrics that MCP should provide

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of MCP task do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Quick Query** - Single data pull
- **Standard** - Query with analysis
- **Comprehensive** - Multi-source with report
- **Custom** - I'll specify what I need

---

### Step 2: Ask Integration Type

**Question:** "Which integration category?"
**Header:** "Category"
**MultiSelect:** false

**Options:**
- **Analytics** - GA, Search Console, attribution
- **SEO** - Semrush, DataForSEO, keywords
- **App Intel** - SensorTower, app analytics
- **CRM/Ads** - HubSpot, Meta, social

---

### Step 3: Ask Data Need

**Question:** "What data do you need?"
**Header:** "Data"
**MultiSelect:** true

**Options:**
- **Metrics** - Numbers, KPIs, performance
- **Rankings** - Position, keyword, competitive
- **Contacts** - Leads, customers, segments
- **Content** - Posts, campaigns, creatives

---

### Step 4: Ask Time Frame

**Question:** "What time period?"
**Header:** "Period"
**MultiSelect:** false

**Options:**
- **Real-time** - Current/latest data
- **Last Week** - Past 7 days
- **Last Month** - Past 30 days
- **Custom** - I'll specify dates

---

### Step 5: Confirmation

**Display summary:**

```markdown
## MCP Task Configuration

| Parameter | Value |
|-----------|-------|
| Task | [description] |
| Category | [selected category] |
| Data Types | [selected data] |
| Period | [selected period] |
| Scope | [Quick/Standard/Comprehensive] |
```

**Question:** "Execute this MCP task?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, execute** - Run MCP queries
- **No, change settings** - Go back to modify

---

## Available Integrations

Check `.claude/skills/integrations/_registry.md` for full list.

| Service | Use For | Example |
|---------|---------|---------|
| `sensortower` | App analytics, ASO | "Get app rankings for competitor" |
| `google-search-console` | SEO, search data | "Get search performance last week" |
| `google-analytics` | Web analytics | "Get traffic report for this month" |
| `semrush` | SEO, keywords, backlinks | "Get keyword overview for term" |
| `dataforseo` | SERP, keyword data | "Get SERP results for query" |
| `meta-ads` | Facebook/Instagram ads | "Get campaign insights" |
| `hubspot` | CRM, contacts, deals | "Get leads from last week" |
| `slack` | Team notifications | "Post message to channel" |
| `notion` | Documentation | "Create page in database" |
| `asana` | Task management | "Create task for campaign" |
| `twitter` | Social media | "Search tweets about topic" |
| `tiktok` | Video trends | "Get trending videos" |

---

## Workflow

1. **Identify Integration**
   - Match task to appropriate MCP server
   - Check integration capabilities
   - Verify required credentials

2. **Execute Query**
   - Call appropriate MCP tool
   - Handle any errors gracefully
   - Collect response data

3. **Process Results**
   - Format data appropriately
   - Calculate derived metrics
   - Prepare summary

4. **Report Output**
   - Present concise summary
   - Highlight key findings
   - Note any limitations

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Data orchestration | `mcp-manager` | Complex queries |
| Results analysis | `researcher` | Deep insights |
| Report formatting | `copywriter` | Summary writing |

---

## Output Format

### Quick Query Scope

```markdown
## MCP Query Result: [Task]

### Data Retrieved
[Key metrics/data points]

### Source
✅ [MCP Server Name]
```

### Standard Scope

[Include Quick + Data analysis + Key insights + Recommendations]

### Comprehensive Scope

[Include all + Multi-source data + Cross-analysis + Detailed report + Action items]

---

## Error Handling

**Server not found:** Check `.mcp.json` config
**Auth error:** Verify API token/credentials
**Tool not found:** Check integration docs for available tools

### Fallback

If MCP server not available:
1. Check `.claude/.mcp.json` configuration
2. Verify environment variables set
3. For custom servers: Verify build completed

---

## Output Location

Save results to: `./docs/mcp/query-[task]-[YYYY-MM-DD].md`
