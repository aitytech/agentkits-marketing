# Command & Agent Improvement Plan

Based on research from [Anthropic Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [PromptHub](https://www.prompthub.us/blog/prompt-engineering-for-ai-agents), [OpenAI Best Practices](https://platform.openai.com/docs/guides/prompt-engineering).

---

## Executive Summary

This plan outlines enterprise-grade improvements to AgentKits Marketing commands and agents based on 2024-2025 AI agent best practices.

### Key Improvement Areas
1. **Context Engineering** - Optimal token usage, progressive disclosure
2. **Structured Reasoning** - Chain-of-thought, task decomposition
3. **Tool Usage Patterns** - Examples, error handling
4. **Quality Checkpoints** - Validation, self-review
5. **MCP Integration** - Data source references

---

## Research Findings

### From Anthropic (Context Engineering)
> "Good context engineering means finding the smallest possible set of high-signal tokens that maximize the likelihood of some desired outcome."

**Application:**
- Load only relevant skills per task
- Progressive context loading (start minimal, expand as needed)
- Clear scope boundaries for each agent

### From PromptHub (Agent Design)
> "Start with single-responsibility agents, each with one clear goal and narrow scope."

**Application:**
- Each agent has ONE primary responsibility
- Modular systems for complex workflows
- Clear handoff protocols between agents

### From UiPath (Reliable Agents)
> "Build robust evaluation datasets with at least 30 evaluation cases per agent."

**Application:**
- Add example inputs/outputs to agents
- Include edge case handling
- Add self-validation steps

---

## Improvement Categories

### Category 1: Agent Enhancements

#### A. Add Structured Reasoning Sections
```markdown
## Reasoning Process
1. **Understand** - What is being asked?
2. **Analyze** - What context/data is needed?
3. **Plan** - What steps will I take?
4. **Execute** - Perform the task
5. **Validate** - Check quality and completeness
```

#### B. Add Tool Usage Patterns
```markdown
## Tool Usage Guidelines
- Use TodoWrite for multi-step tasks (3+ steps)
- Use Read before making assumptions about files
- Use Glob/Grep for codebase exploration
- Verify links before including in outputs
```

#### C. Add Quality Checkpoints
```markdown
## Self-Validation Checklist
Before delivering output:
- [ ] Addresses user's actual request
- [ ] Follows brand guidelines
- [ ] Uses verified data (or flags as estimates)
- [ ] Output format matches expectations
- [ ] Language matches user's language
```

#### D. Add Error Handling
```markdown
## When Stuck or Uncertain
1. Ask clarifying questions via AskUserQuestion
2. State assumptions explicitly
3. Provide partial results with clear gaps
4. Suggest alternative approaches
```

### Category 2: Command Enhancements

#### A. Add Context Loading Instructions
```markdown
## Context Loading (Execute First)
1. Read `./README.md` for project context
2. Read `./docs/brand-guidelines.md` for voice
3. Load relevant skill: `.claude/skills/{skill}/SKILL.md`
4. Check for existing work in `./docs/` or `./content/`
```

#### B. Add Structured Output Schemas
```markdown
## Output Schema
Use schema from `.claude/skills/schemas/output-schemas.yaml`:
- Schema: `campaign-brief`
- Required fields: [list]
- Format: Markdown
```

#### C. Add Validation Steps
```markdown
## Pre-Delivery Validation
1. Run through quality checklist
2. Verify all links/references
3. Check brand voice compliance
4. Ensure actionable next steps
```

---

## Implementation Priority

### High Priority (Immediate Impact)

| File | Change | Reason |
|------|--------|--------|
| All agents | Add reasoning process | Improves output quality |
| All agents | Add quality checklist | Reduces errors |
| All commands | Add context loading | Better outputs |
| Core agents | Add tool usage patterns | Better tool selection |

### Medium Priority (Enhancement)

| File | Change | Reason |
|------|--------|--------|
| All agents | Add error handling | Graceful failures |
| Commands | Add output schemas | Consistent outputs |
| Agents | Add edge case handling | Robustness |

### Low Priority (Polish)

| File | Change | Reason |
|------|--------|--------|
| Training commands | Update examples | Better onboarding |
| Settings | Add preferences | Customization |

---

## Specific Agent Improvements

### copywriter.md
- Add: Example output formats for each content type
- Add: A/B testing framework for variations
- Add: Platform-specific character limits

### seo-specialist.md
- Already comprehensive, add: Competitive analysis workflow
- Add: Content refresh decision tree

### lead-qualifier.md
- Add: Lead scoring calculation examples
- Add: Segment size estimation guidelines

### conversion-optimizer.md
- Add: Heatmap interpretation guide
- Add: Statistical significance calculator reference

### researcher.md
- Add: Research methodology options
- Add: Source credibility evaluation

### brainstormer.md
- Add: Ideation techniques library
- Add: Decision matrix template

### email-wizard.md
- Add: Deliverability checklist
- Add: Subject line testing framework

### planner.md
- Add: Campaign timeline templates
- Add: Resource allocation guidelines

---

## Specific Command Improvements

### content/* commands
- Add: SEO optimization step
- Add: Brand voice check
- Add: Internal linking recommendations

### cro/* commands
- Add: Benchmark references from skill data
- Add: A/B test planning integration
- Add: Statistical significance requirements

### campaign/* commands
- Add: Budget allocation framework
- Add: Channel mix recommendations
- Add: Success metrics definition

### seo/* commands
- Add: Competitor gap analysis
- Add: SERP feature opportunities
- Add: Technical SEO checklist

### sales/* commands
- Add: Buyer journey stage identification
- Add: Objection handling library reference
- Add: Follow-up timing recommendations

---

## New Standard Sections

### For All Agents
```markdown
## Context Loading
[What files/skills to load first]

## Reasoning Process
[Step-by-step thinking]

## Tool Usage
[When to use which tools]

## Quality Checklist
[Pre-delivery validation]

## Edge Cases
[How to handle unusual situations]
```

### For All Commands
```markdown
## Prerequisites
[What must exist before running]

## Context Loading
[Files to read first]

## Workflow Steps
[Ordered process]

## Output Schema
[Expected format]

## Validation
[Quality checks]

## Next Steps
[What to do after]
```

---

## Implementation Order

### Phase 1: Core Agent Updates (10 agents)
1. copywriter.md - Most used
2. seo-specialist.md - Complex workflows
3. researcher.md - Research quality
4. conversion-optimizer.md - CRO accuracy
5. email-wizard.md - Deliverability focus
6. brainstormer.md - Ideation structure
7. planner.md - Planning rigor
8. lead-qualifier.md - Scoring accuracy
9. sales-enabler.md - Sales alignment
10. attraction-specialist.md - TOFU quality

### Phase 2: Core Command Updates
1. content/* - Blog, landing, email
2. cro/* - Page, form, popup
3. campaign/* - Plan, brief, analyze
4. seo/* - Keywords, optimize, audit

### Phase 3: Supporting Updates
1. Remaining agents
2. Remaining commands
3. Training updates
