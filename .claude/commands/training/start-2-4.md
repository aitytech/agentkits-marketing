# /training:start-2-4 - Analyze Campaign Data

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Teach data analysis, insight extraction, and executive reporting using analytics commands.

### Lesson Overview

---

**Module 2.4: Analyze Campaign Data**

Data analysis is often time-consuming. Let's master turning data into actionable insights and compelling reports.

**Duration:** ~35 minutes

---

### Step 1: ROI Analysis

Use analytics commands:

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

Review ROI calculation:
- Total spend by channel
- Revenue attributed
- ROAS by channel
- Cost per acquisition

### Step 2: Funnel Analysis

Analyze conversion funnel:

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

Review funnel metrics:
- Traffic by source
- Conversion rates at each stage
- Drop-off points
- Optimization opportunities

### Step 3: Performance Reporting

Generate performance reports:

**Weekly Report:**
```
/report:weekly "AgentKits" "current week"
```

**Monthly Report:**
```
/report:monthly "AgentKits" "current month"
```

### Step 4: Channel Performance

Analyze by channel:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

Create channel comparison:
- Traffic contribution
- Lead quality
- Conversion rates
- Cost efficiency

### Step 5: Content Performance

Analyze content effectiveness:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

Key metrics:
- Traffic by content piece
- Engagement (time, scroll, shares)
- Conversion rate
- Lead quality

### Step 6: Lead Quality Analysis

Use lead scoring to analyze:

```
/crm:score "analyze lead quality by source and campaign"
```

Review:
- MQL rate by source
- SQL conversion by campaign
- Average lead score trends

### Step 7: Executive Summary

Create executive-ready summary:

```
Create an executive summary of Q1 marketing performance:

STRUCTURE:
1. Headline metrics (vs targets)
2. Top 3 wins with data
3. Top 3 challenges with impact
4. Channel performance snapshot (table)
5. Key learnings (3 insights)
6. Q2 recommendations (prioritized)
7. Budget request with justification

Keep it to ONE PAGE maximum.
```

### Step 8: Data-to-Action Framework

Teach the insight framework:

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### Step 9: Operational Checklists

Use analytics checklists:

```
/checklist:analytics-monthly "current month" "AgentKits"
```

Review monthly analytics tasks:
- Data quality checks
- Platform verification
- Reporting accuracy
- Attribution validation

### Step 10: Reporting Templates

Explain reusable reporting:

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Calculate ROI
2. /analytics:funnel "funnel" - Analyze funnel
3. /report:weekly "client" "week" - Generate report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Generate report
```

### What's Next

Tell them:
- They can now turn data into decisions
- Reports that executives actually read
- **Next:** `/training:start-2-5` - Competitive Analysis
- Research competitors and find advantages

## Key Teaching Points
- `/analytics:*` commands analyze performance
- `/report:*` commands generate reports
- ROI and funnel analysis are foundational
- Executive summaries must be concise
- Data-to-action framework ensures accountability
