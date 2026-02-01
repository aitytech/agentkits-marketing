---
description: "Your First Marketing Task"
version: "1.0.0"
brand: AgentKits Marketing by AityTech
---

# /training:start-0-2 - Your First Marketing Task

## Prerequisites

Before this lesson:
- [ ] Completed `/training:start-0-1` (Installation & Setup)
- [ ] Verified Claude Code is working
- [ ] Marketing kit files are accessible

## Context Loading

Reference these files:
1. `./README.md` - Product context
2. `./docs/brand-guidelines.md` - Brand standards template
3. `./docs/content-style-guide.md` - Content guidelines

---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Guide the student through their first real marketing task - creating brand guidelines using our commands.

### Lesson Overview

---

**Module 0.2: Your First Marketing Task**

Now let's do some real marketing work. We'll create brand guidelines for AgentKits using the `/brand:voice` command.

---

### Step 1: Explain Brand Guidelines

Explain why brand guidelines matter:
- Ensures consistency across all content
- Helps Claude (and humans) write in the right voice
- Documents key messages and terminology
- Prevents off-brand content

### Step 2: Use the Brand Voice Command

Guide them to use the actual system command:

```
/brand:voice "AgentKits - B2B team productivity coordination tool for remote teams"
```

Let Claude generate comprehensive brand guidelines, then review with the student.

### Step 3: Create Customer Personas

Now use the research command for personas:

```
/research:persona "Remote team managers at tech companies using AgentKits"
```

Explain:
- The `researcher` agent handles market research
- Personas help target content to specific audiences
- We'll use these personas throughout the course

### Step 4: Review What Was Created

Review the outputs together:

```
Show me what the brand:voice command created
```

Point out:
- Voice attributes and tone spectrum
- Messaging framework
- Words to use and avoid
- Integration with other agents

### Step 5: The Power of Context

Explain:
- These guidelines now exist in project context
- In future tasks, agents can reference them
- This is "context awareness" - one of Claude's superpowers
- We'll use these throughout the course

### Quick Exercise: Test Content Generation

Have them try using brand context:

```
/content:social "Remote team productivity tips" "linkedin"
```

Show how Claude uses the brand context automatically in content creation.

### Step 6: Explore Other Key Commands

Briefly demonstrate other commands they'll master:

**Campaign Planning:**
```
/campaign:plan "Q1 Product Launch"
```

**SEO Research:**
```
/seo:keywords "remote team productivity"
```

**Email Sequences:**
```
/sequence:welcome "AgentKits" "trial users"
```

### What's Next

Tell them:
- **Congratulations!** Module 0 complete!
- They've used real marketing commands and seen the system in action
- **Next:** `/training:start-1-1` - Welcome to Markit (Core Concepts begin)
- They'll dive deep into agents, workflows, and advanced commands

## Key Teaching Points
- Brand guidelines ensure consistency
- Use `/brand:voice` to create voice guidelines
- Use `/research:persona` for customer personas
- Context awareness means agents reference existing work
- Real commands (`/campaign:*`, `/content:*`, `/seo:*`) are what they'll master
