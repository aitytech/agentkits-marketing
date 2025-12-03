# Command: cm:plan

Create a comprehensive, research-backed campaign brief that leverages accumulated knowledge and templates.

## Purpose

Transform a campaign idea into a detailed, actionable brief by:
1. Researching similar past campaigns in the project
2. Analyzing target audience and competitive landscape
3. Generating structured campaign brief with all essential sections
4. Creating execution checklist
5. Leveraging templates and patterns from previous campaigns (compounding effect)

## Usage

```bash
/cm:plan "<campaign-name>" [options]
```

### Parameters

- **campaign-name** (required): Clear, descriptive campaign name
  - Examples: "Q2 Product Launch", "Holiday Promotion 2025", "Rebranding Campaign"

### Options

- `--budget <amount>`: Campaign budget in dollars
  - Example: `--budget 50000`
  - Default: Prompts user if not provided

- `--duration <timeframe>`: Campaign duration
  - Example: `--duration "6 weeks"` or `--duration "Q2 2025"`
  - Default: Prompts user if not provided

- `--goal <objective>`: Primary campaign goal
  - Example: `--goal "500 trial signups"`
  - Default: Prompts user if not provided

- `--audience <personas>`: Target audience (comma-separated)
  - Example: `--audience "Startup Founder, Marketing Manager"`
  - Default: Uses all personas from CLAUDE.md

- `--channels <list>`: Preferred channels (comma-separated)
  - Example: `--channels "email, LinkedIn, blog"`
  - Default: Recommends based on past performance

## Examples

### Basic Usage
```bash
/cm:plan "Q3 Feature Launch"
```
*Will prompt for budget, duration, and other details interactively*

### Complete Specification
```bash
/cm:plan "Q2 FocusFlow 2.0 Launch" --budget 50000 --duration "6 weeks" --goal "500 trial signups" --audience "Startup Founder, Marketing Manager" --channels "paid search, LinkedIn, content marketing"
```

### Quick Launch Campaigns
```bash
/cm:plan "Flash Sale Weekend" --budget 5000 --duration "72 hours" --goal "100 sales"
```

## What This Command Does

### Step 1: Research Phase

**Analyze Project History:**
- Search for previous campaigns in `campaigns/` folder
- Identify similar campaign types
- Extract successful patterns and tactics
- Note what worked and what didn't

**Research Questions:**
- Have we run similar campaigns before?
- What budget allocations worked best?
- Which channels delivered best ROI?
- What messaging resonated with target personas?

**Compounding Effect:**
- Campaign 1: Limited history, general best practices
- Campaign 5: Rich history, specific patterns recognized
- Campaign 10: Deep insights, predictive recommendations

### Step 2: Audience & Competitive Analysis

**Audience Research:**
- Review target persona profiles (from CLAUDE.md)
- Analyze persona-specific messaging from past campaigns
- Identify pain points and motivations
- Recommend messaging angles

**Competitive Landscape:**
- Search for competitive intelligence in `research/` folder
- Identify key differentiators
- Note competitive positioning opportunities
- Recommend defensive and offensive strategies

### Step 3: Brief Generation

Create comprehensive brief with these sections:

**1. Campaign Overview**
- Campaign name and tagline
- Duration and key dates
- Budget allocation
- Team roles and responsibilities

**2. Goals & Success Metrics**
- Primary goal (with specific target)
- Secondary goals
- Key Performance Indicators (KPIs)
- Success criteria

**3. Target Audience**
- Primary persona(s) with profiles
- Secondary audience(s)
- Persona-specific messaging angles
- Key pain points to address

**4. Competitive Positioning**
- Key competitors
- Our differentiation
- Competitive advantages
- Positioning statement

**5. Strategic Approach**
- Core message and value proposition
- Key themes and narratives
- Proof points and social proof
- Creative direction

**6. Channel Strategy**
- Recommended channels with rationale
- Budget allocation by channel
- Expected performance by channel
- Channel-specific tactics

**7. Content Plan**
- Content types needed
- Quantity by format and channel
- Content calendar outline
- Resource requirements

**8. Execution Timeline**
- Week-by-week plan
- Key milestones
- Dependencies and critical path
- Launch date and promotion schedule

**9. Budget Breakdown**
- Channel-by-channel allocation
- Content production costs
- Tool and platform costs
- Contingency budget (10%)

**10. Risks & Mitigation**
- Potential risks identified
- Mitigation strategies
- Contingency plans
- Decision triggers

**11. Measurement & Reporting**
- Tracking methodology
- Reporting cadence
- Dashboard/tools to use
- Success criteria validation

**12. Execution Checklist**
- Pre-launch todos
- Launch day checklist
- Ongoing management tasks
- Post-campaign analysis

### Step 4: Leverage Templates

**Template Usage:**
- If templates exist in `templates/campaign-briefs/`, use them
- Adapt template sections to specific campaign
- Fill in campaign-specific details
- Maintain consistent structure

**Compounding Effect:**
- First time: Creates template while building brief
- Subsequent times: Starts from template, customizes
- Over time: Templates become more sophisticated

### Step 5: Create Execution Todos

Generate actionable checklist:

**Pre-Launch (4-2 weeks before):**
- [ ] Finalize campaign messaging
- [ ] Create content calendar
- [ ] Design creative assets
- [ ] Set up tracking and analytics
- [ ] Brief stakeholders

**Launch Prep (2 weeks - 1 day before):**
- [ ] Create all content assets
- [ ] Review with subagents
- [ ] Set up ad campaigns
- [ ] Test all links and tracking
- [ ] Prepare launch day schedule

**Launch Day:**
- [ ] Publish blog post
- [ ] Send email blast
- [ ] Launch paid ads
- [ ] Post social media
- [ ] Monitor initial performance

**Ongoing (During campaign):**
- [ ] Daily performance monitoring
- [ ] Weekly optimization
- [ ] Respond to engagement
- [ ] Adjust based on data

**Post-Launch:**
- [ ] Final performance analysis
- [ ] Campaign retrospective
- [ ] Update templates
- [ ] Document learnings

### Step 6: Save & Organize

**File Structure Created:**
```
campaigns/
└── q2-focusflow-2-0-launch/
    ├── brief.md                    # Complete campaign brief
    ├── research-summary.md         # Competitive & audience research
    ├── execution-checklist.md      # Todos for execution
    ├── timeline.md                 # Week-by-week schedule
    └── content/                    # Folder for campaign assets
        ├── email/
        ├── social/
        ├── ads/
        └── blog/
```

## Output

### Console Output

```
🎯 Creating campaign plan: "Q2 FocusFlow 2.0 Launch"

📚 Researching past campaigns...
   Found 3 similar campaigns
   Extracted 12 successful patterns
   Identified top-performing channels: LinkedIn (ROI: 8:1), Email (ROI: 12:1)

🎭 Analyzing target audience...
   Primary: Startup Founder (40% budget recommended)
   Secondary: Marketing Manager (40% budget recommended)
   Tertiary: Solopreneur (20% budget recommended)

💡 Generating campaign brief...
   ✅ Campaign overview
   ✅ Goals & metrics
   ✅ Target audience
   ✅ Competitive positioning
   ✅ Strategic approach
   ✅ Channel strategy ($50K allocated)
   ✅ Content plan (42 assets across 5 channels)
   ✅ Execution timeline (6 weeks)
   ✅ Budget breakdown
   ✅ Risks & mitigation
   ✅ Measurement plan
   ✅ Execution checklist (48 tasks)

💾 Saving campaign plan...
   📁 campaigns/q2-focusflow-2-0-launch/brief.md
   📁 campaigns/q2-focusflow-2-0-launch/research-summary.md
   📁 campaigns/q2-focusflow-2-0-launch/execution-checklist.md
   📁 campaigns/q2-focusflow-2-0-launch/timeline.md

✨ Campaign plan complete!

📊 Compounding Stats:
   Past campaigns analyzed: 3
   Patterns leveraged: 12
   Template efficiency: 65% pre-filled
   Estimated time saved: 4 hours vs from-scratch

🚀 Next Steps:
   1. Review the campaign brief: campaigns/q2-focusflow-2-0-launch/brief.md
   2. Refine messaging and positioning
   3. Get stakeholder approval
   4. Ready to execute? Use: /cm:execute campaigns/q2-focusflow-2-0-launch/brief.md
```

### Brief Example

**campaigns/q2-focusflow-2-0-launch/brief.md:**

```markdown
# Campaign Brief: Q2 FocusFlow 2.0 Launch

## Campaign Overview

**Campaign Name:** Q2 FocusFlow 2.0 Launch
**Tagline:** "Focus Forward with AI-Powered Productivity"
**Duration:** 6 weeks (April 15 - May 31, 2025)
**Budget:** $50,000
**Campaign Owner:** Marketing Team
**Status:** Planning

## Goals & Success Metrics

### Primary Goal
Generate 500 trial signups for FocusFlow 2.0

### Secondary Goals
- Create $100,000 in qualified pipeline
- Increase brand awareness by 50%
- Achieve 20% trial-to-paid conversion rate

### Key Performance Indicators (KPIs)
- Trial signups: 500 (target)
- Cost per trial: < $100
- Website traffic: +50% (7,500 → 11,250 visits)
- Email list growth: +2,000 subscribers
- Social engagement: +75%

### Success Criteria
- ✅ Reach 500 trials by end of Week 6
- ✅ Maintain cost per trial under $100
- ✅ Achieve 20%+ trial-to-paid conversion
- ✅ Generate positive ROI within 90 days

## Target Audience

### Primary: Startup Founder (40% of budget - $20K)

**Profile:**
- Age: 28, startup founder
- Company: 10-person tech startup
- Pain: Team scattered across tools, losing focus
- Goal: Simple platform for team productivity
- Decision Style: Fast, tries new tools quickly

**Messaging Angle:**
"Get your 10-person team focused in 10 minutes. No complex setup, no training needed. Just instant productivity."

**Key Messages:**
- 10-minute setup (vs competitors' 2+ hours)
- AI prioritization (unique feature)
- Free trial, no credit card
- Built for startups like yours

### Secondary: Marketing Manager (40% of budget - $20K)

**Profile:**
- Age: 38, team manager at mid-size company
- Manages: 15 remote employees
- Pain: Can't see what team is working on
- Goal: Better visibility and accountability
- Decision Style: Careful, needs proof and ROI

**Messaging Angle:**
"Save 6+ hours per week on status meetings. Get real-time team visibility without the meetings."

**Key Messages:**
- ROI justification ($1,800/month time saved)
- Case studies from similar companies
- Team dashboard for visibility
- 30-day money-back guarantee

### Tertiary: Solopreneur (20% of budget - $10K)

**Profile:**
- Age: 32, freelance consultant
- Manages: 3-5 client projects simultaneously
- Pain: Juggling deadlines, using spreadsheets
- Goal: Stay organized without complexity
- Decision Style: Budget-conscious, needs simplicity

**Messaging Angle:**
"Manage all your client projects in one place. Simple enough for solo use, powerful enough to scale."

**Key Messages:**
- Affordable pricing ($15/month solo tier)
- Multi-project management
- Free tier available
- Professional client reporting

## Competitive Positioning

### Key Competitors
1. **Asana** - Market leader, complex, 2+ hour setup
2. **Monday.com** - Feature-heavy, overwhelming UI
3. **ClickUp** - Too many features, steep learning curve

### Our Differentiation
1. **Simplicity**: 10-minute setup vs 2+ hours
2. **AI Prioritization**: Unique feature (tells you what to work on)
3. **Modern**: Built for remote-first teams
4. **Right-Sized**: Not overwhelming, just right for 10-50 person teams

### Positioning Statement
"FocusFlow is the simple, AI-powered productivity platform for modern remote teams who want to get focused fast without the complexity of enterprise tools."

### Competitive Advantages
- ✅ 10-minute setup (fastest in market)
- ✅ AI task prioritization (unique)
- ✅ Better pricing for small teams
- ✅ Modern, intuitive UX

## Strategic Approach

### Core Message
"Get your team focused and moving forward with AI-powered productivity."

### Key Themes
1. **Speed & Simplicity**: "10 minutes to productivity"
2. **AI Innovation**: "AI that actually helps you prioritize"
3. **Built for Remote**: "Finally, productivity for how we work now"

### Proof Points
- 5,000+ remote teams using FocusFlow
- 4.8/5 star rating (2,500+ reviews)
- Average user saves 2 hours per day
- 10-minute average setup time

### Creative Direction
- Clean, modern visual style
- Focus on forward momentum (arrows, progress)
- Energetic, optimistic tone
- Demo-first (show, don't just tell)

## Channel Strategy

### Budget Allocation ($50,000)

1. **Paid Search** - $15,000 (30%)
   - Target: "team productivity software", "task management app"
   - Expected: 200 trials @ $75 CPA
   - Rationale: High intent, proven ROI (past: 8:1)

2. **LinkedIn Ads** - $12,000 (24%)
   - Target: Managers, founders at 10-100 person companies
   - Expected: 120 trials @ $100 CPA
   - Rationale: Best B2B channel (past: 6:1 ROI)

3. **Content Marketing** - $10,000 (20%)
   - 8 blog posts, 2 guides, 1 webinar
   - Expected: 100 organic trials
   - Rationale: Compounds over time, builds SEO

4. **Email Campaigns** - $5,000 (10%)
   - 5-email launch sequence to 20K list
   - Expected: 60 trials from existing leads
   - Rationale: Highest ROI (past: 12:1)

5. **Partnerships** - $5,000 (10%)
   - Co-marketing with Slack, Notion
   - Expected: 15 trials + brand exposure
   - Rationale: Credibility and reach

6. **Events/Webinars** - $3,000 (6%)
   - 2 webinars: "AI Productivity" & "Remote Teams"
   - Expected: 5 trials + qualified leads
   - Rationale: High-quality leads

## Content Plan

### Content Requirements (42 total assets)

**Email (5 assets):**
- Welcome email (trial signup)
- Day 1: Feature education
- Day 3: Team collaboration
- Day 5: Integrations showcase
- Day 7: Conversion push

**Blog Posts (8 assets):**
- How to improve team productivity (pillar)
- AI task prioritization guide
- Remote team management tips
- FocusFlow vs Asana comparison
- 10-minute productivity wins
- Team dashboard benefits
- Integration spotlight series (3 posts)

**Social Media (15 assets):**
- LinkedIn posts (5)
- Twitter threads (3)
- Instagram/Facebook (5)
- Short-form video clips (2)

**Paid Ads (10 assets):**
- Google Search ads (3 variants)
- LinkedIn Sponsored Content (3 variants)
- Display ads (2 formats)
- Retargeting ads (2 variants)

**Landing Pages (2 assets):**
- Primary: Trial signup page
- Secondary: Webinar registration

**Other (2 assets):**
- Case study: Startup success story
- Webinar: AI-powered productivity

### Content Calendar Outline

**Weeks 1-2: Pre-Launch**
- Blog content production
- Email sequence creation
- Ad creative development
- Social media asset creation

**Week 3: Soft Launch**
- Blog posts go live
- Email warmup begins
- Organic social posts

**Week 4: Main Launch**
- Press release
- Email blast to full list
- Paid ads launch
- Social media amplification

**Weeks 5-6: Amplification**
- Case studies published
- Webinars conducted
- Continued paid ads
- Optimization based on data

## Execution Timeline

### Week 1-2: Pre-Launch (April 1-14)
- Finalize messaging and positioning
- Create all content assets
- Design ad creatives
- Set up tracking and analytics
- Brief team and stakeholders
- Review content with subagents

### Week 3: Soft Launch (April 15-21)
- Publish blog posts
- Start email warmup
- Organic social posting
- Monitor initial response
- Refine based on feedback

### Week 4: Main Launch (April 22-28)
- Press release distribution
- Email blast to full list (20K)
- Launch all paid ad campaigns
- Social media amplification
- Partnerships announce
- Monitor closely, optimize

### Week 5: Amplification (April 29-May 5)
- Publish case studies
- Host first webinar
- Continue paid ads (optimize)
- Engagement and response
- Mid-campaign analysis

### Week 6: Final Push (May 6-12)
- Host second webinar
- Limited-time offer messaging
- Maximize ad spend (if performing)
- Social proof emphasis
- Urgency messaging

### Week 7: Wrap-Up (May 13-31)
- Campaign conclusion
- Final performance analysis
- Post-campaign retrospective
- Update templates and learnings
- Plan next campaign

## Budget Breakdown

| Channel | Budget | % of Total | Expected Trials | CPA | Expected ROI |
|---------|--------|------------|----------------|-----|--------------|
| Paid Search | $15,000 | 30% | 200 | $75 | 8:1 |
| LinkedIn Ads | $12,000 | 24% | 120 | $100 | 6:1 |
| Content Marketing | $10,000 | 20% | 100 | $100 | Organic+ |
| Email Campaigns | $5,000 | 10% | 60 | $83 | 12:1 |
| Partnerships | $5,000 | 10% | 15 | $333 | Brand+ |
| Events/Webinars | $3,000 | 6% | 5 | $600 | Qualified |
| **Total** | **$50,000** | **100%** | **500** | **$100 avg** | **7:1** |

### Additional Costs
- Content production: Included
- Design/creative: Included
- Tools/platforms: Existing subscriptions
- Contingency (10%): $5,000

## Risks & Mitigation

### Risk 1: Paid ads underperform
**Likelihood:** Medium
**Impact:** High
**Mitigation:**
- Daily performance monitoring
- A/B test ad creative and copy
- Pivot budget to top performers within week 1
- Pause underperformers quickly

### Risk 2: Message doesn't resonate
**Likelihood:** Low
**Impact:** High
**Mitigation:**
- A/B test messaging angles
- Monitor engagement signals
- Survey trial users for feedback
- Iterate messaging weekly

### Risk 3: Competitive response
**Likelihood:** Medium
**Impact:** Medium
**Mitigation:**
- Battle cards ready for sales team
- Emphasize unique AI feature
- Monitor competitor activity
- Have backup messaging angles

### Risk 4: Budget pacing issues
**Likelihood:** Low
**Impact:** Medium
**Mitigation:**
- Weekly budget review
- Front-load spend to learn fast
- Contingency fund available
- Reallocation flexibility built in

## Measurement & Reporting

### Tracking Setup
- Google Analytics 4 (website traffic, conversions)
- HubSpot (email performance, lead attribution)
- Ad platform dashboards (Google Ads, LinkedIn Campaign Manager)
- Custom dashboard (aggregate view)

### Reporting Cadence
- **Daily**: Key metrics review (trials, spend, CPA)
- **Weekly**: Full channel analysis, optimization decisions
- **Bi-weekly**: Stakeholder update report
- **Post-campaign**: Comprehensive analysis and retrospective

### Dashboard Metrics
- Trial signups (daily, by source)
- Cost per acquisition (by channel)
- Budget pacing vs plan
- Conversion funnel (traffic → trial → paid)
- Channel performance comparison
- Top-performing content/ads

### Success Validation
Week 3 checkpoint: 100 trials (on track)
Week 5 checkpoint: 350 trials (on track)
Week 7 final: 500 trials (success!)

## Compounding Insights

### Leveraged from Past Campaigns
- ✅ LinkedIn ads outperform Facebook (reallocated $5K)
- ✅ Curiosity-based email subject lines (+15% open rate)
- ✅ "Save 2 hours/day" messaging resonates strongly
- ✅ Startup Founder converts 2x better than initially expected
- ✅ Video ads drive 40% higher CTR

### To Document for Next Campaign
- [ ] Final ROI by channel
- [ ] Top-performing ad creative
- [ ] Best converting landing page elements
- [ ] Email subject line winners
- [ ] Messaging angles that resonated
- [ ] Persona-specific insights

## Approval & Sign-Off

**Created:** [Date]
**Created By:** CM Plugin
**Reviewed By:** [Marketing Manager Name]
**Approved By:** [CMO Name]
**Status:** Ready for Execution

---

**🚀 Ready to execute?**

Next command: `/cm:execute campaigns/q2-focusflow-2-0-launch/brief.md`

This will generate all 42 content assets across channels using parallel subagents!
```

## Compounding Benefits

### First Campaign Using This Command
- **Time to create brief:** 2-3 hours
- **Research depth:** General best practices
- **Template usage:** Creates new template
- **Pattern recognition:** Limited historical data

### Fifth Campaign Using This Command
- **Time to create brief:** 45 minutes ⚡
- **Research depth:** Leverages 4 past campaigns
- **Template usage:** 65% pre-filled from template
- **Pattern recognition:** 12+ patterns identified

### Tenth Campaign Using This Command
- **Time to create brief:** 30 minutes ⚡⚡
- **Research depth:** Rich historical insights
- **Template usage:** 80% pre-filled, highly refined
- **Pattern recognition:** Predictive recommendations

**Total time saved over 10 campaigns:** ~20 hours

## Tips for Best Results

1. **Maintain CLAUDE.md**: Keep brand voice, personas, and competitive info up-to-date
2. **Save campaigns systematically**: Consistent naming and folder structure
3. **Run retrospectives**: Document learnings after each campaign
4. **Refine templates**: Update based on what works
5. **Build your library**: Each campaign adds to collective knowledge

## Related Commands

- `/cm:execute` - Execute the campaign plan (Coming Soon)
- `/cm:review` - Review campaign content (Coming Soon)

## Version History

- **v0.1.0**: Initial release with basic planning functionality
