---
description: Comprehensive marketing audit across all channels
argument-hint: [brand-or-website]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `seo-mastery`, `analytics-attribution` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Audit Section | MCP Server | Fallback |
|---------------|------------|----------|
| SEO/Backlinks | `semrush` | ⚠️ NOT AVAILABLE |
| Search Rankings | `google-search-console` | ⚠️ NOT AVAILABLE |
| Traffic/Funnel | `google-analytics` | ⚠️ NOT AVAILABLE |
| Email Metrics | `hubspot` | ⚠️ NOT AVAILABLE |
| Social | `twitter`, `tiktok` | ⚠️ NOT AVAILABLE |

### Rules
1. **NEVER fabricate** audit scores or metrics (DA, traffic, rankings)
2. **Qualitative OK**: UX assessment, content quality review without MCP
3. **Quantitative requires MCP**: Show "⚠️ Requires [MCP]" for metrics sections
4. **WebFetch OK**: For public page speed, SSL checks via web tools

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of marketing audit do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Overview with quick wins
- **Recommended** - Full audit with priorities
- **Complete** - Comprehensive with action plan
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Audit Focus

**Question:** "Which areas should the audit prioritize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Website & SEO** - Technical, keywords, backlinks
- **Content** - Inventory, quality, gaps
- **Lead Gen** - Funnel, forms, conversion
- **Email & Social** - Channels, engagement

---

### Step 3: Ask Depth Level

**Question:** "How deep should the analysis go?"
**Header:** "Depth"
**MultiSelect:** false

**Options:**
- **Surface** - High-level assessment
- **Standard** - Detailed review
- **Deep Dive** - Comprehensive analysis
- **Continuous** - Ongoing monitoring setup

---

### Step 4: Ask Output Priority

**Question:** "What's the primary goal of this audit?"
**Header:** "Priority"
**MultiSelect:** false

**Options:**
- **Quick Wins** - Immediate improvements
- **Strategic** - Long-term planning
- **Competitive** - Market positioning
- **Growth** - Scaling readiness

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Marketing Audit Configuration

| Parameter | Value |
|-----------|-------|
| Brand/Website | [description] |
| Focus Areas | [selected focus] |
| Depth | [selected depth] |
| Priority | [selected priority] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Conduct this marketing audit?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, start audit** - Begin analysis
- **No, change settings** - Go back to modify

---

## Workflow

1. **Discovery Phase**
   - Identify brand/website context
   - Define audit scope and focus
   - Gather existing analytics access

2. **Technical Analysis**
   - Website health check
   - SEO technical audit
   - Page speed and UX review

3. **Content & Channel Audit**
   - Content inventory and quality
   - Social media presence
   - Email program review

4. **Conversion Analysis**
   - Funnel performance
   - Lead generation assessment
   - Competitive positioning

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Website/SEO audit | `attraction-specialist` | Technical review |
| Content analysis | `researcher` | Content inventory |
| Funnel analysis | `lead-qualifier` | Conversion review |
| Email audit | `email-wizard` | Email program |
| Social audit | `researcher` | Social presence |
| Competitive context | `researcher` | Market position |

---

## Output Format

### Basic Scope

```markdown
## Marketing Audit: [Brand]

### Health Score: [X]/100

### Top 3 Issues
1. [Issue 1]
2. [Issue 2]
3. [Issue 3]

### Quick Wins
- [Win 1]
- [Win 2]
- [Win 3]
```

### Recommended Scope

[Include Basic + Full area breakdowns + Priority matrix + 30-day action plan]

### Complete Scope

[Include all + Detailed metrics + Competitive benchmarks + Resource requirements + Quarterly roadmap]

---

## Detailed Output Template
```markdown
# Marketing Audit: [Brand/Website]
**Date:** [Date]
**Auditor:** [Name/Tool]

---

## Executive Summary

### Overall Health Score: [X]/100

| Area | Score | Priority |
|------|-------|----------|
| Website & UX | X/100 | 🔴/🟡/🟢 |
| SEO | X/100 | 🔴/🟡/🟢 |
| Content | X/100 | 🔴/🟡/🟢 |
| Social Media | X/100 | 🔴/🟡/🟢 |
| Email Marketing | X/100 | 🔴/🟡/🟢 |
| Lead Generation | X/100 | 🔴/🟡/🟢 |
| Analytics | X/100 | 🔴/🟡/🟢 |

### Top 3 Urgent Issues
1. [Issue 1] - Impact: [High/Med]
2. [Issue 2] - Impact: [High/Med]
3. [Issue 3] - Impact: [High/Med]

### Top 3 Quick Wins
1. [Win 1] - Effort: [Low] - Impact: [High]
2. [Win 2] - Effort: [Low] - Impact: [High]
3. [Win 3] - Effort: [Low] - Impact: [Med]

---

## Website & UX Audit

### Technical Health
| Check | Status | Issue |
|-------|--------|-------|
| Mobile responsive | ✅/❌ | [Details] |
| Page speed (mobile) | X sec | Target: <3s |
| Page speed (desktop) | X sec | Target: <2s |
| SSL certificate | ✅/❌ | |
| Core Web Vitals | Pass/Fail | [Details] |
| 404 errors | X found | [List] |
| Broken links | X found | [List] |

### UX Assessment
| Element | Rating | Notes |
|---------|--------|-------|
| Navigation | 1-5 | [Notes] |
| CTA clarity | 1-5 | [Notes] |
| Value proposition | 1-5 | [Notes] |
| Trust signals | 1-5 | [Notes] |
| Mobile experience | 1-5 | [Notes] |

### Recommendations
- [ ] [Recommendation 1]
- [ ] [Recommendation 2]

---

## SEO Audit

### Technical SEO
| Factor | Status | Action |
|--------|--------|--------|
| Sitemap | ✅/❌ | [Action] |
| Robots.txt | ✅/❌ | [Action] |
| Schema markup | ✅/❌ | [Action] |
| Canonical tags | ✅/❌ | [Action] |
| Meta titles | X% optimized | [Action] |
| Meta descriptions | X% optimized | [Action] |
| H1 tags | X% present | [Action] |
| Image alt text | X% present | [Action] |

### Keyword Performance
| Keyword | Position | Volume | Opportunity |
|---------|----------|--------|-------------|
| [Keyword 1] | X | X/mo | [Notes] |
| [Keyword 2] | X | X/mo | [Notes] |

### Backlink Profile
- Domain Authority: X
- Total backlinks: X
- Referring domains: X
- Toxic links: X (disavow needed?)

### Recommendations
- [ ] [SEO recommendation 1]
- [ ] [SEO recommendation 2]

---

## Content Audit

### Content Inventory
| Type | Count | Avg Performance | Gap |
|------|-------|-----------------|-----|
| Blog posts | X | X views | [Gap] |
| Landing pages | X | X% conv | [Gap] |
| Case studies | X | X downloads | [Gap] |
| Videos | X | X views | [Gap] |
| Lead magnets | X | X downloads | [Gap] |

### Content Quality
| Metric | Score | Benchmark |
|--------|-------|-----------|
| Avg word count | X | 1500+ |
| Readability | Grade X | Grade 8 |
| Freshness (avg age) | X months | <12 mo |
| Internal linking | X avg | 3-5 |

### Content Gaps
- [Topic gap 1]
- [Topic gap 2]
- [Funnel stage gap]

### Recommendations
- [ ] [Content recommendation 1]
- [ ] [Content recommendation 2]

---

## Social Media Audit

### Presence Overview
| Platform | Followers | Engagement | Posting Freq |
|----------|-----------|------------|--------------|
| LinkedIn | X | X% | X/week |
| Twitter/X | X | X% | X/week |
| Instagram | X | X% | X/week |
| Facebook | X | X% | X/week |

### Profile Optimization
| Platform | Bio | Link | CTA | Branding |
|----------|-----|------|-----|----------|
| LinkedIn | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| Twitter/X | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |

### Content Performance
- Best performing content type: [Type]
- Best posting time: [Day/Time]
- Engagement vs competitors: [Above/Below avg]

### Recommendations
- [ ] [Social recommendation 1]
- [ ] [Social recommendation 2]

---

## Email Marketing Audit

### List Health
| Metric | Value | Benchmark |
|--------|-------|-----------|
| List size | X | - |
| Growth rate | X%/mo | 3-5% |
| Bounce rate | X% | <2% |
| Unsubscribe rate | X% | <0.5% |
| Inactive % | X% | <30% |

### Performance
| Metric | Actual | Benchmark |
|--------|--------|-----------|
| Open rate | X% | 25% |
| Click rate | X% | 3% |
| Conversion rate | X% | 1% |

### Automation
| Sequence | Exists | Performance |
|----------|--------|-------------|
| Welcome | ✅/❌ | [Metrics] |
| Nurture | ✅/❌ | [Metrics] |
| Re-engagement | ✅/❌ | [Metrics] |
| Onboarding | ✅/❌ | [Metrics] |

### Recommendations
- [ ] [Email recommendation 1]
- [ ] [Email recommendation 2]

---

## Lead Generation Audit

### Funnel Analysis
| Stage | Volume | Conv Rate | Benchmark |
|-------|--------|-----------|-----------|
| Visitors | X | - | - |
| Leads | X | X% | 3% |
| MQLs | X | X% | 20% |
| SQLs | X | X% | 30% |
| Customers | X | X% | 25% |

### Lead Capture
| Element | Present | Quality |
|---------|---------|---------|
| Lead magnets | ✅/❌ | [Score] |
| Forms | ✅/❌ | [Score] |
| CTAs | ✅/❌ | [Score] |
| Pop-ups | ✅/❌ | [Score] |
| Chat | ✅/❌ | [Score] |

### Recommendations
- [ ] [Lead gen recommendation 1]
- [ ] [Lead gen recommendation 2]

---

## Analytics Audit

### Tracking Setup
| Tool | Installed | Configured |
|------|-----------|------------|
| Google Analytics | ✅/❌ | ✅/❌ |
| Tag Manager | ✅/❌ | ✅/❌ |
| Conversion tracking | ✅/❌ | ✅/❌ |
| UTM usage | ✅/❌ | ✅/❌ |
| CRM integration | ✅/❌ | ✅/❌ |

### Data Quality
- [ ] Goals configured
- [ ] Events tracking
- [ ] E-commerce tracking
- [ ] Cross-domain tracking

---

## Priority Action Plan

### Immediate (Week 1)
1. [Critical fix 1]
2. [Critical fix 2]

### Short-term (Month 1)
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

### Medium-term (Quarter 1)
1. [Strategic initiative 1]
2. [Strategic initiative 2]

### Resource Needs
- [Resource 1]
- [Resource 2]
```

---

## Output Location

Save audit to: `./docs/audits/full-[brand]-[YYYY-MM-DD].md`
