---
name: marketing-analytics
description: >
  Analyze marketing performance data using Coupler.io MCP tools (list-dataflows, get-schema, get-data). Use when the user asks to pull or analyze data from Coupler.io dataflows/data sets, generate marketing performance reports, understand campaign ROI, or investigate changes in business metrics. Make sure to use this skill whenever the user mentions Coupler.io data, marketing dashboards, channel comparisons, campaign analysis, or asks questions like "why did conversions drop",
  "which channel has best ROI", "where should I spend more", "what's working",
  "show me my marketing numbers", "pull my latest data", even if they don't
  explicitly say "marketing analytics". For deep paid-ads-only analysis (per-platform
  ad efficiency, budget pacing, brand vs non-brand, ad fatigue), use the ppc-analytics
  skill instead — this skill owns the cross-channel view.
metadata:
  title: "Marketing Performance Analytics"
  short_description: "Shows which marketing channels and campaigns bring results, what changed, and where to spend more."
  version: 0.1.1
  category: marketing-and-ads
  sources:
    - Google Ads
    - Facebook Ads (Meta Ads)
    - LinkedIn Ads
    - Google Analytics 4 (GA4)
---

# Marketing Performance Analytics

Shows which marketing channels and campaigns bring results, what changed, and where to spend more. Marketing Performance Analytics is a Coupler.io AI agent skill that works with live data from Google Ads, Facebook Ads (Meta Ads), LinkedIn Ads, and Google Analytics 4 (GA4).

Analyze marketing performance across channels using data from Coupler.io dataflows. This skill guides you through retrieving data, computing key metrics, detecting anomalies, and presenting actionable insights — all in language a marketing manager can act on.

## Step 0: Connect (HARD GATE)

Every analysis needs a live connection to the user's marketing data through Coupler.io. **No live connection, no analysis** — no pasted dashboard screenshots, no channel-performance numbers from memory or an earlier conversation, no benchmarking against generic industry-average CTR/CPA figures in place of the user's actual connected data.

Call `list-dataflows` to check. If it returns nothing, or nothing relevant to what the user is asking about, stop and point the user at the `create-dataflow` skill to connect their marketing data — don't try to walk them through the connection flow yourself.

Once at least one relevant dataflow exists, proceed to Step 1.

## Step 1: Discover and Select Data Sources

Every analysis starts by connecting to the user's data through Coupler.io MCP tools.

### 1a. Discover available dataflows

Call `list-dataflows` to see what marketing data the user has connected. Each dataflow represents a data pipeline (e.g., "Google Ads → Claude", "Mailchimp Campaigns", "GA4 Traffic").

### 1b. Select relevant dataflows with the user

The number of available dataflows determines how you present the selection:

**Fewer than 5 dataflows:** List them all by name and source type. Ask the user to confirm which ones to include in the analysis.

**5–20 dataflows:** Group them by apparent channel or source (the dataflow names usually encode this — "google_ads_campaigns", "mailchimp_weekly", etc.). Present the groups with counts. Let the user select entire groups or individual flows.

**More than 20 dataflows:** Do not list them all. Instead, infer which are relevant from the user's request (e.g., "budget allocation" → look for flows with spend/cost columns). Present only the candidates — up to 5–7 — with a one-line rationale for each:

```bash
I found 3 dataflows likely relevant to your budget question (out of 24 total):
  1. google_ads_campaigns — has spend and conversion columns
  2. meta_ads_weekly — has spend, impressions, and ROAS columns
  3. linkedin_sponsored — has cost and lead columns

Should I include all three, or add/remove any?
```

The key: present your *reasoning* for the selection, not just the options. "I picked these because your question is about conversions and these are the only flows with conversion-related columns" gives the user something to correct. A raw list of 20 dataflow names gives them homework.

**This is a hard gate: do not proceed to Step 1c until the user has confirmed which dataflows to include.** The reason this matters: if you pick the wrong dataflows, the entire analysis is wasted work — and the user won't realize until the end that you analyzed the wrong data. A 10-second confirmation here prevents a 5-minute redo later. Even if you're confident you know which dataflows are right, present your selection and ask. The only exception is if there's exactly 1 dataflow and the user's request unambiguously refers to it.

### 1c. Get dataflow details

For each selected dataflow, call `get-dataflow` with its ID. This returns:

- `last_successful_execution_id` — needed for querying data
- `schedule` — how often the data refreshes (mention this to the user so they know how fresh the data is)
- `sources` — details about what's connected and whether it's healthy

### 1d. Understand the data structure

Call `get-schema` with the `executionId` (from `last_successful_execution_id`). This returns column definitions. Pay attention to:

- `columnName` — the actual column name used in SQL queries (typically `col_0`, `col_1`, etc.)
- `label` — the human-readable name (e.g., "Campaign Name", "Impressions", "Spend")

Build a mental mapping between labels and columnNames. You'll use columnNames in SQL but labels when communicating with the user.

### 1e. Sample the data

Always start with a sample query per dataflow:

```sql
SELECT * FROM data LIMIT 5
```

This verifies column contents match expectations before running complex queries. If anything looks off (empty columns, unexpected formats), flag it to the user before proceeding.

**Key SQL rules:**

- Use `columnName` values (col_0, col_1, ...) in SQL, not human-readable labels
- The table is always called `data`
- SQLite syntax applies (e.g., `||` for string concatenation, no `ILIKE`)
- Date functions: `date()`, `strftime()`, `julianday()` for date arithmetic
- Use `CAST(col_X AS REAL)` when aggregating numeric columns that may be stored as text
- Quoted strings: all string values are stored with embedded double quotes.
- Nullable strings: most columns can be NULL.

For error handling guidance (empty results, stale executions, schema mismatches), read `references/error-handling.md`.

## Coverage Verdict (say this out loud before analysing)

Before computing anything, tell the user which parts of a full cross-channel analysis the connected data can actually support. This is the first thing they hear about the analysis and it decides how much of Step 4 you can honestly run.

| Data area | If present, enables | If absent, means |
|---|---|---|
| Full channel breadth (Google Ads, Facebook Ads, LinkedIn Ads, GA4, etc.) | A complete channel comparison and budget-allocation view across every channel the user runs | Say plainly which channels are missing from the comparison in Step 4 — never silently compare only the connected channels as if they were the whole picture |
| Targets or goals | Comparing actuals against targets, not just period-over-period change, as called out in Step 4 and Rules & Edge Cases | Ask the user for targets, or state clearly that the comparison is period-over-period only because no target data is connected |
| Cross-channel attribution or overlap data | A causal read of channel interactions — e.g., confirming whether display awareness is actually driving search conversions, per the Cross-Channel Overview caveat | Treat isolated channel metrics as isolated, not causal, and say so explicitly rather than implying one channel's number stands alone |

Every missing channel or data type here is one Coupler.io dataflow away — point the user at the `create-dataflow` skill to add it rather than working around the gap.

**Early exit.** If only some channels are connected, don't wait for full connection before analyzing — proceed with what's available, but open with which channels are missing and why any channel-comparison or budget-allocation conclusion is partial as a result.

## Step 2: Compute Metrics via SQL

Always compute metrics via SQL in `get-data` rather than doing arithmetic in-context. The reason: floating-point aggregations over thousands of rows in-context are unreliable and slow. The Coupler.io SQL engine handles this correctly and efficiently.

For each channel present in the data, compute the relevant metrics. Read `references/channel-metrics.md` for the full catalog of metrics by channel, including definitions, formulas, and benchmark ranges.

**Combining datasets:** `get-data` reads one dataset at a time and cannot join across them. Query each separately and synthesize when you are comparing side by side or pulling something small. When the user wants to repeat an analysis that needs a real join (matching rows across datasets, or aggregating over the combined result), build it with `create-dataset` so it re-runs on every refresh; its inputs must all live in the same dataflow. For a one-off question, combine the results yourself, and if the data is too large for that, say so and suggest `create-dataset`. Explain what you're pulling from each source so the user understands the data lineage.

## Step 3: Draft Findings and Get User Feedback

Before generating a full report, present a brief summary of what you found — the 3–5 most important numbers, any anomalies, and which direction the data points. This gives the user a chance to steer you before you invest in formatting and recommendations.

Present it as: "Here's what I'm seeing in the data. Before I write up the full analysis, does this match your expectations? Anything you want me to dig deeper on?"

**Wait for the user's response before proceeding to the full report.**

## Step 4: Build the Analysis

Based on what the user asked for, follow the appropriate analysis path:

### Performance Reporting

Identify the reporting period (ask the user or infer from context — "last week", "this month", "Q1"). Use date columns to filter appropriately.

Structure the report as:

- **Key Metrics** — the 3–5 most important numbers with period-over-period change. Show the metric value, the change (absolute and percentage), and a directional indicator.
- **Trends** — metrics with consistent movement over 4+ periods. Flag inflection points.
- **Channel Breakdown** — compare channels on efficiency (CPA, ROAS) not just volume. Highlight best and worst performers.
- **Recommendations** — 2–3 specific actions citing the supporting data, prioritized by expected impact.

Read `references/report-templates.md` for weekly, monthly, and quarterly report structures.

### Campaign Analysis

For campaign deep-dives, compute spend efficiency (CPA, ROAS, CPM), trace the funnel (impressions → clicks → conversions → revenue), identify the biggest drop-off, and compare creatives/variants side by side. Flag statistical concerns if sample sizes differ significantly.

For historical benchmarking, compare against the same period last month/year, the trailing 3-month average, and any targets the user mentions.

### Cross-Channel Overview

Query each relevant dataflow for the same time period. Normalize metrics to a common basis where possible (same currency, same date format). Build a channel comparison matrix showing investment, results, efficiency, and trend for each channel.

For budget allocation insights: identify channels with the best efficiency that could absorb more spend, flag declining-efficiency channels, and note channels with limited data. Be explicit about limitations — correlation isn't causation, and channel interactions (e.g., display awareness driving search conversions) mean isolated channel metrics can be misleading.

### Anomaly Detection and Metric Drops

Any time the analysis involves investigating a change, drop, spike, or anomaly in metrics — whether the user explicitly asks "what's going on?" or you're doing a conversion drop investigation, a performance decline analysis, or noticing unusual patterns during a routine report — read `references/anomaly-detection.md` before presenting findings. It contains the severity classification framework (informational / warning / critical), baseline comparison methods, and root cause investigation steps. Every deviation you report should be tagged with a severity level so the user knows how urgently to act. This applies to all analysis types, not just dedicated anomaly scans.

## Step 5: Present Results

Read `references/output-guidelines.md` for presentation principles: lead with the headline, use plain language, ensure every finding has a "So what?" and "Now what?", and structure for scannability.

For visualization guidance (tables vs. charts, chart type selection, executive summary cards), also consult `references/output-guidelines.md`.

**Before finalizing your output, do a quick pass for abbreviation expansion.** The first time you use any abbreviation (CPA, ROAS, CTR, CAC, CPM, MQL, SQL, LTV, etc.), expand it with a brief definition: "cost per acquisition (CPA) — total spend divided by conversions." After the first use, the abbreviation alone is fine. This is easy to forget when you're deep in analysis — that's why it's called out here at the output step, not just in Rules & Edge Cases. Marketing managers reading your output may not share your abbreviation vocabulary.

## Step 6: Archive Approved Output

If the user confirms the output is good (explicitly, or by not requesting changes), save a copy to `references/examples/` with a descriptive filename like `weekly-report-2024-03-15.md`. Future runs should read 1–2 recent examples from this directory as quality anchors — they show "what good looks like" for this user's preferences.

## Step 7: Post-Run Learning

If the user flags a recurring problem or states a new constraint:

1. Add it to the `## Rules & Edge Cases` section below.
2. If it relates to a reference file (e.g., channel metrics, report templates), update that file too.
3. Confirm the update with the user.

This ensures the skill improves with use rather than repeating the same mistakes.

## Rules & Edge Cases

- Always mention data freshness (when the dataflow last ran) before presenting metrics. A report built on 5-day-old data needs that context.
- Never present a metric without defining it on first use. Say "cost per acquisition (CPA) — total spend divided by conversions" the first time, then "CPA" is fine.
- Never fabricate data when a query returns empty results. Say what you looked for and that it wasn't available.
- When comparing periods, verify both periods have complete data. Don't compare a full week to a partial week without flagging it.
- If the user provides targets or goals, compare actuals against them — don't just show period-over-period.
- Round numbers appropriately: percentages to 1 decimal, currency to whole numbers for large values.
- If a dataflow's last execution failed or is stale (>7 days old for a daily-refresh flow), warn the user before proceeding.

## Next Question (REQUIRED)

End every run with exactly one forward-looking next analysis, drawn from what this run found. Never a menu — a second only if the data genuinely points two ways.

- "Google Ads is converting at $18 CPA versus Facebook's $42, and Facebook still holds 45% of spend — want me to build a budget-reallocation proposal shifting spend toward Google Ads?"
- "The conversion drop on March 3rd is flagged critical (down 34% day-over-day) — want me to drill into which campaign or channel drove it?"
- "LinkedIn Ads only has 12 days of connected data, too little to judge efficiency yet — want help setting up a longer-running LinkedIn dataflow so it can be included next time?"
