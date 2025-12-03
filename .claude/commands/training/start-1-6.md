# /training:start-1-6 - Project Memory (CLAUDE.md)

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Teach students about CLAUDE.md and how to maintain persistent project context.

### Lesson Overview

---

**Module 1.6: Project Memory**

CLAUDE.md is like giving Claude a persistent briefing document. Every time you work on this project, Claude reads this file first and applies those guidelines.

**Duration:** ~20 minutes

---

### Step 1: Show Current CLAUDE.md

Read the project's CLAUDE.md:

```
Read the CLAUDE.md file in this project
```

Walk through each section:
- Role & Responsibilities
- Workflows (Marketing, Sales, CRM)
- Marketing Agents
- Skills Catalog
- Command Categories
- Documentation Management

### Step 2: Explain How It Works

When CLAUDE.md exists, Claude automatically:
- Knows which agents are available
- Understands the workflow structure
- References appropriate commands
- Follows marketing rules
- Uses the right skills

You don't need to remind Claude each time - it's automatic!

### Step 3: Key CLAUDE.md Sections

Explain critical sections:

**Workflows:**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**Agent Mapping:**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Intent detection, scoring
- `email-wizard` - Sequences, automation
...
```

**Command Categories:**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### Step 4: Test Context Awareness

Without mentioning brand guidelines, ask:

```
Write a short LinkedIn post about remote team productivity
```

Point out how the output automatically matches:
- Brand voice from guidelines
- Target persona language
- Key messaging framework

### Step 5: Understand Workflow References

Show how workflows are referenced:

```
Read .claude/workflows/primary-workflow.md
```

Explain:
- Marketing pipeline stages
- Agent responsibilities at each stage
- Quality gates and checkpoints

### Step 6: The Marketing Rules

Show the marketing rules:

```
Read .claude/workflows/marketing-rules.md
```

Explain key rules:
- Token efficiency
- Multi-language support
- Quality standards
- Skill activation

### Step 7: Project Context Benefits

Summarize benefits:
- Consistent brand voice automatically
- Correct agent selection
- Proper command usage
- Workflow compliance
- Quality standards enforcement

### Step 8: Maintenance Tips

Explain ongoing maintenance:
- Update as new campaigns launch
- Add learnings from successful content
- Reference new documentation
- Keep agent list current

### What's Next

Tell them:
- CLAUDE.md ensures consistency without repetition
- **Module 1 almost complete!**
- **Next:** `/training:start-1-7` - Navigation & Search
- Final skills before advanced applications

## Key Teaching Points
- CLAUDE.md gives Claude persistent context
- Includes workflows, agents, commands, rules
- Claude automatically applies to all work
- Workflows define marketing processes
- Marketing rules ensure quality standards
