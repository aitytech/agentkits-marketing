# Anomaly Detection Framework

How to identify, classify, and investigate unusual patterns in marketing data.

## Baseline Comparison Methods

Compare current period metrics against one or more of these baselines. Use whichever the data supports — if data only goes back a few weeks, you can't do YoY.

| Baseline | What it catches | When to use |
|----------|----------------|-------------|
| **Prior period** (last week/month) | Sudden changes | Always — this is the default comparison |
| **Same period last year** | Changes that account for seasonality | When data goes back 12+ months |
| **Trailing average** (4-week or 3-month rolling) | Changes adjusted for recent trend | When you want to filter out week-to-week noise |

If no historical data is available for comparison, say so explicitly. Don't invent a baseline.

## Severity Classification

| Deviation from baseline | Severity | What to do |
|------------------------|----------|------------|
| 10–20% | **Informational** | Mention it. Monitor next period to see if it continues. |
| 20–50% | **Warning** | Investigate likely causes. Recommend the user check specific things. |
| >50% | **Critical** | Prioritize investigation. Recommend immediate review. |

Apply these thresholds to the absolute deviation — a 30% drop and a 30% spike are both warnings. For metrics with naturally high variance (e.g., daily social impressions), use the trailing average as the baseline to avoid false alarms.

## Root Cause Investigation

When you detect an anomaly, work through these diagnostic questions in order:

### 1. Is it a data problem?

Check first before assuming the business changed:
- Did the dataflow run successfully? (Check execution status from `get-dataflow`)
- Are there gaps in the date range? (`SELECT DISTINCT date_col FROM data ORDER BY date_col`)
- Does the row count look normal compared to prior periods?
- Did column formats change? (e.g., a metric that was in dollars is now in cents)

If the data looks incomplete or malformed, tell the user: "Before I interpret this drop, I want to flag that the data looks [incomplete/different]. It's possible the change is real, but it's also possible it's a sync issue."

### 2. Is it isolated or broad?

- **One metric, one channel**: Likely a specific cause (ad paused, creative rotated, landing page changed)
- **One metric, multiple channels**: Likely an external factor (tracking broke, attribution changed, market event)
- **Multiple metrics, one channel**: Likely a channel-level issue (budget change, account problem, algorithm update)
- **Multiple metrics, multiple channels**: Likely systemic (website down, seasonal shift, measurement change)

### 3. What changed?

Ask the user about recent changes. Frame it specifically:
- "Did you launch, pause, or change budget on any campaigns in the last [period]?"
- "Were there any website changes (new landing pages, tracking updates, checkout flow changes)?"
- "Any external events that might affect demand (holiday, competitor launch, industry news)?"

Don't ask vague questions like "did anything change?" — prompt them with the categories most likely to explain what you see.

### 4. Is it a lag effect?

Some metrics have delayed effects:
- **SEO changes** take 2–8 weeks to show up in organic traffic
- **Brand campaigns** may not affect conversions for days or weeks
- **Email list changes** affect deliverability gradually
- **Seasonal patterns** can start shifting weeks before the calendar event

If the timing doesn't line up with an obvious cause, suggest looking back further for the root.

## Presenting Anomaly Findings

Structure your findings as:

**What I see:** The specific metric, the deviation, and the time frame.
> "Email open rates dropped from 28% to 19% between March 1–7 and March 8–14. That's a 32% decline — a warning-level deviation."

**What might be causing it:** Your best hypotheses, ordered by likelihood.
> "Most likely: the two sends last week both went to the full list rather than segments, which typically depresses open rates. Less likely but worth checking: deliverability — have you seen any bounce rate increases?"

**What to investigate next:** Specific actions, not general suggestions.
> "Check the bounce rate for those two sends. If it's above 3%, run your list through a verification tool. If bounce rate is normal, the issue is likely subject line or send frequency."

If nothing unusual is found across all dataflows, say so clearly: "I scanned all [N] dataflows for the past [period] and nothing deviates significantly from recent trends. Your metrics are tracking within normal ranges." Do not fabricate issues to fill the report.
