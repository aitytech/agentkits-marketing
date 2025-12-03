# Primary Marketing Workflow

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.

## Marketing Automation Pipeline

Research → Insights → Creative → Plan → Create → Edit → Publish → Measure

### Phase 1: Research
- Delegate to `researcher` agent for market analysis
- Delegate to `attraction-specialist` for competitor intel
- Use `research` skill for methodology
- Output: Research reports in `./research/` directory

### Phase 2: Insights
- Delegate to `lead-qualifier` for audience analysis
- Synthesize research findings
- Identify opportunities and gaps
- Output: Insights summary

### Phase 3: Creative
- Delegate to `brainstormer` for ideation
- Delegate to `copywriter` for messaging concepts
- Use `content-strategy` skill
- Output: Creative brief

### Phase 4: Plan
- Delegate to `planner` agent for campaign planning
- Create content calendar
- Define KPIs and success metrics
- Output: Campaign plan in `./plans/`

### Phase 5: Create
- Delegate to `copywriter` for content creation
- Delegate to `email-wizard` for email sequences
- Delegate to `sales-enabler` for sales collateral
- Use `ai-multimodal` for visual content
- Output: Content assets

### Phase 6: Edit
- Review and optimize content
- A/B variant creation
- CRO optimization
- Output: Optimized content

### Phase 7: Publish
- Use MCP integrations for distribution
- Schedule across channels
- Coordinate launch timing
- Output: Published content

### Phase 8: Measure
- Gather performance data via MCP integrations
- Delegate to analytics agents
- Calculate ROI and attribution
- Output: Performance reports

### Feedback Loop
- Insights from Measure feed back to Research
- Continuous optimization cycle
- Document learnings in `./docs/`

---

## Campaign Development Process

#### 1. Campaign Research
- Before you start, delegate to `researcher` agent to conduct market and competitive analysis
- When researching, use multiple `researcher` agents in parallel to gather data on different aspects
- Identify target audience, competitors, and market opportunities
- **[IMPORTANT]** Document research findings in `./research/` directory

#### 2. Campaign Planning
- Delegate to `planner` agent to create campaign plan with TODO tasks in `./plans/` directory
- Define campaign objectives, KPIs, and success metrics
- Create content calendar and timeline
- Identify required channels and resources

#### 3. Content Creation
- Delegate to `copywriter` for content creation
- Delegate to `email-wizard` for email sequences
- Delegate to `sales-enabler` for sales collateral
- **DO NOT** create duplicate content, repurpose existing content across channels
- **[IMPORTANT]** After creating content, review for brand consistency

#### 4. Content Quality
- After content creation, delegate to `copywriter` agent for quality review
- Follow brand voice guidelines and style guide
- Ensure content passes readability tests
- Optimize for SEO and conversion

#### 5. Distribution
- Use MCP integrations for multi-channel distribution
- Schedule content for optimal engagement times
- Coordinate launches across platforms
- Document channel-specific adaptations

#### 6. Performance Analysis
- When analyzing campaign performance, delegate to analytics tools
- Track KPIs and compare to benchmarks
- Identify optimization opportunities
- Document learnings and recommendations
