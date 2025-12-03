# /training:start-1-3 - First Marketing Tasks

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Guide students through real marketing tasks: multi-channel copy, competitive analysis, and content planning using actual system commands.

### Lesson Overview

---

**Module 1.3: First Marketing Tasks**

Now let's do real marketing work. You'll complete three common tasks that every marketer does regularly.

**Duration:** ~30 minutes

---

### Task 1: Multi-Channel Copy Generation

Generate copy for multiple channels using content commands:

**LinkedIn Post:**
```
/content:social "AgentKits launch announcement - team productivity coordination for remote teams" "linkedin"
```

**Blog Post:**
```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team coordination"
```

**Email:**
```
/content:email "product announcement" "existing subscribers"
```

Review the outputs together. Show iteration:

```
Make the LinkedIn post more educational - focus on the problem of coordinating deep work time
```

### Task 2: Competitive Analysis

Use the competitive analysis command:

```
/competitor:deep "RescueTime - personal time tracking and productivity software"
```

Explain what the `researcher` agent analyzes:
- Target audience
- Key features and positioning
- Pricing model
- Strengths and weaknesses
- Market opportunities

Ask follow-up:
```
Based on this analysis, what's AgentKits's biggest competitive advantage?
```

### Task 3: Content Calendar

Use the campaign calendar command:

```
/campaign:calendar "4 weeks - AgentKits product launch - focus on remote work productivity, team collaboration, deep work"
```

Review the generated calendar:
- Blog post topics with SEO keywords
- Social media themes by platform
- Email newsletter schedule
- Content goals for each piece

### Step 4: Expand One Piece

Take a topic and expand it using content commands:

```
/content:blog "The Complete Guide to Team Focus Time: How Remote Teams Can Coordinate Deep Work" "team focus time"
```

### Step 5: SEO Optimization

Use SEO commands to optimize:

```
/seo:keywords "remote team productivity"
```

Then:
```
/seo:optimize "the blog post we just created" "team focus time"
```

### Step 6: Review with Specialists

Use reviewer agents (explain these will be covered in detail later):

```
Review the blog post from three perspectives:
1. Brand Voice Guardian - does it match our voice?
2. SEO Specialist - is it optimized for search?
3. Conversion Optimizer - will it drive action?
```

### Celebrate

Point out what they just accomplished:
- Multi-channel copy generation using `/content:*` commands
- Competitive analysis using `/competitor:deep`
- Content calendar using `/campaign:calendar`
- SEO keyword research using `/seo:keywords`
- Full blog post with SEO optimization

### What's Next

Tell them:
- **Next:** `/training:start-1-4` - Using Agents for Marketing
- They'll learn about the 18 specialized agents and how to leverage them

## Key Teaching Points
- Real commands handle real marketing tasks
- `/content:*` commands create platform-specific content
- `/competitor:deep` provides competitive intelligence
- `/campaign:calendar` creates content calendars
- `/seo:*` commands handle search optimization
- Always provide context (brand, audience, goals)
