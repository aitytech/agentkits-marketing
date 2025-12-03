# Marketing Rules

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

## Content Quality Standards

### Readability
- All copy must pass readability test (Grade 6-8 level)
- Use short sentences and paragraphs
- Avoid jargon unless targeting technical audiences
- Write for scanning (headers, bullets, bold)

### Headlines
- Follow 4-U formula: Useful, Unique, Urgent, Ultra-specific
- Include power words that drive action
- Test multiple headline variations
- Keep under 60 characters for SEO

### CTAs
- CTAs must be action-oriented and specific
- Use first-person where appropriate ("Start my free trial")
- Create urgency without being pushy
- One primary CTA per page/email

### Messaging
- Lead with benefits, support with features
- Address objections proactively
- Use social proof strategically
- Match message to funnel stage

---

## Brand Consistency

### Voice & Tone
- Always check brand voice guidelines before writing
- Maintain consistent tone across channels
- Adapt tone for context (social vs formal docs)
- Document voice decisions for future reference

### Visual Standards
- Use approved brand assets only
- Follow color and typography guidelines
- Maintain consistent imagery style
- Ensure accessibility compliance

### Messaging Framework
- Align with positioning statement
- Use approved value propositions
- Maintain consistent terminology
- Reference messaging hierarchy

---

## Compliance

### Advertising
- Include required disclaimers for regulated industries
- Follow platform-specific ad policies (Meta, Google, LinkedIn)
- Disclose sponsored content and partnerships
- Maintain substantiation for claims

### Data Privacy
- Respect data privacy regulations (GDPR, CCPA)
- Include proper consent mechanisms
- Honor opt-out requests immediately
- Document data handling practices

### Email Marketing
- Follow CAN-SPAM/CASL requirements
- Include physical address
- Provide clear unsubscribe options
- Maintain list hygiene

---

## Performance Standards

### KPI Setting
- Set measurable KPIs for all campaigns
- Establish baseline metrics before launch
- Define success criteria upfront
- Create fallback plans for underperformance

### Attribution
- Track attribution across touchpoints
- Use UTM parameters consistently
- Document attribution model used
- Account for cross-device behavior

### Testing & Learning
- Run A/B tests with statistical significance
- Document learnings from all tests
- Share insights across campaigns
- Build on proven patterns

### Reporting
- Report on agreed-upon metrics
- Include context and insights, not just data
- Provide actionable recommendations
- Document methodology for repeatability

---

## Data Reliability (MANDATORY)

**CRITICAL**: See `./workflows/data-reliability-rules.md` for full rules.

### Core Rules
1. **NEVER fabricate data** - No fake numbers, metrics, or statistics
2. **Use MCP integrations** - Always attempt MCP tools before reporting data
3. **Cite sources** - Every metric must have source attribution
4. **Handle missing data** - Show "NOT AVAILABLE" with setup instructions

### Data Sources (Priority Order)
1. **MCP Servers** - Real-time API data (highest trust)
2. **Project Files** - `./docs/`, `./data/` files
3. **Web Search** - With URL citations
4. **User Input** - As provided by user

### Required Indicators
| Indicator | Use When |
|-----------|----------|
| ✅ VERIFIED | Data from MCP/API |
| 📊 FROM FILE | Data from project files |
| 🔍 WEB SOURCE | Data from web search |
| ⚠️ NOT AVAILABLE | MCP not configured |
| ❌ NOT FOUND | No data exists |

### MCP Integration
Before any analytics/performance report:
```
1. Check MCP server availability
2. Call appropriate tools (sensortower, google-analytics, etc.)
3. Use real data OR show "NOT AVAILABLE"
4. NEVER fill gaps with assumptions
```

---

## Agent Delegation Rules

### When to Delegate
- Use `attraction-specialist` for TOFU content and SEO
- Use `lead-qualifier` for lead scoring and segmentation
- Use `email-wizard` for email campaigns and sequences
- Use `sales-enabler` for sales collateral and case studies
- Use `continuity-specialist` for retention campaigns
- Use `upsell-maximizer` for expansion revenue

### Handoff Protocol
- Pass context and relevant data between agents
- Document decisions and rationale
- Maintain consistent brand voice across handoffs
- Review outputs for alignment before publishing
