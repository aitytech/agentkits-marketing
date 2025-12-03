# /training:start-0-1 - Installation & Setup

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Guide the student through verifying their Claude Code installation and marketing kit setup.

### Lesson Overview

Say something like:

---

**Module 0.1: Installation & Setup**

Before we dive into marketing workflows, let's make sure everything is set up correctly.

---

### Step 1: Verify Claude Code

Ask them to confirm:
- They're running this inside Claude Code (not the web chat)
- They have a Claude Pro or Max subscription

If they're not sure, explain:
- Claude Code is the terminal/CLI version
- It can read, write, and edit files directly
- It's different from claude.ai web chat

### Step 2: Check Marketing Kit Files

Run these checks WITH the student (actually execute them):

```
Show me the contents of this directory
```

They should see:
- `.claude/` folder with agents, commands, skills, workflows
- `docs/` folder with documentation
- `CLAUDE.md` file (the project memory)
- `README.md` file

### Step 3: Explore System Structure

Show them the marketing kit structure:

```
List all folders in .claude/
```

Explain each component:
- `agents/` - 18 specialized marketing agents
- `commands/` - 76 slash commands organized by function
- `skills/` - Marketing domain knowledge
- `workflows/` - Core marketing, sales, and CRM workflows

### Step 4: Explore Available Commands

Show them command categories:

```
List all folders in .claude/commands/
```

Explain key command groups:
- `campaign/` - `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`
- `content/` - `/content:blog`, `/content:social`, `/content:email`, `/content:landing`
- `seo/` - `/seo:keywords`, `/seo:audit`, `/seo:optimize`
- `analytics/` - `/analytics:roi`, `/analytics:funnel`, `/analytics:report`
- `sales/` - `/sales:pitch`, `/sales:outreach`, `/sales:battlecard`

### Step 5: Test Your First Command

Have them try a real command:

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

Celebrate their first command execution!

### Step 6: Review Documentation

Show them key docs:

```
Read docs/usage-guide.md (first 50 lines)
```

Explain:
- `docs/usage-guide.md` - Complete system reference
- `docs/brand-guidelines.md` - Brand standards template
- `docs/content-style-guide.md` - Writing standards
- `docs/campaign-playbooks.md` - Campaign templates
- `docs/channel-strategies.md` - Platform tactics
- `docs/analytics-setup.md` - Tracking configuration

### What's Next

Tell them:
- **Next lesson:** `/training:start-0-2` - Your First Marketing Task
- They just verified their setup and ran their first command!
- This is exactly how the rest of the course works

## Key Teaching Points
- Claude Code works directly with files
- The marketing kit has 18 agents, 76 commands, and comprehensive documentation
- Every lesson involves hands-on command execution
- Verify things actually worked (read back files)
