# Contributing to AgentKits Marketing

Thanks for your interest in contributing! This document provides guidelines for contributions.

## Ways to Contribute

### 1. Improve Existing Components

- **Skills**: Add frameworks, best practices, or examples to existing skills
- **Agents**: Improve agent prompts, add expertise, or fix issues
- **Commands**: Enhance command workflows or output formats
- **Workflows**: Optimize orchestration or add new patterns

### 2. Add New Components

- **New Skills**: Domain-specific knowledge (industry, platform, region)
- **New Commands**: Useful slash commands for common marketing tasks
- **New Agents**: Specialized agents for specific marketing functions

### 3. Bug Fixes & Documentation

- Fix typos, broken links, or formatting issues
- Improve documentation clarity
- Add examples or use cases

---

## Development Guidelines

### Skill File Structure

```
.claude/skills/
  skill-name/
    SKILL.md        # Main skill file
    references/     # Optional supporting docs
```

**SKILL.md format:**

```markdown
---
name: skill-name
description: One-line description for skill selection
---

# Skill Name

[Full instructions for the AI agent]

## When to Use This Skill
[Trigger conditions]

## Core Concepts
[Key knowledge]

## Best Practices
[Recommendations]
```

### Command File Structure

```
.claude/commands/
  category/
    command-name.md
```

**Command format:**

```markdown
---
description: What this command does
argument-hint: [optional-args]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using.

---

# Command Name

## Objective
[What this command achieves]

## Workflow
[Step-by-step process]

## Output
[Expected output format]

## Agents
Primary: `agent-name`
```

### Agent File Structure

```
.claude/agents/
  agent-name.md
```

**Agent format:**

```markdown
---
name: agent-name
description: Agent purpose and examples
model: sonnet
---

[Full agent prompt with expertise, workflow, output format]
```

---

## Pull Request Process

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/your-feature`
3. **Make changes** following the guidelines above
4. **Test** your changes work correctly
5. **Commit** with clear messages
6. **Push** and create a Pull Request

### PR Checklist

- [ ] Follows file structure conventions
- [ ] Includes `description` in frontmatter
- [ ] Works in multi-language contexts
- [ ] No breaking changes to existing functionality
- [ ] Updated relevant documentation

---

## Ideas for Contributions

### Skills
- Industry-specific: Healthcare, Finance, Real Estate, Education
- Platform-specific: TikTok, YouTube, Reddit, Discord
- Regional: APAC, EMEA, LATAM marketing practices
- Advanced: ML/AI marketing, Product-Led Growth, Community Building

### Commands
- `/content:video` - Video script writing
- `/social:community` - Community management
- `/growth:viral` - Viral loop design
- `/analytics:cohort` - Cohort analysis

### Agents
- `community-manager` - Discord/Slack community
- `video-creator` - Video content specialist
- `influencer-coordinator` - Influencer partnerships

---

## Code of Conduct

- Be respectful and constructive
- Focus on improving the project
- Credit original sources and inspirations

---

## Questions?

- Open an [Issue](https://github.com/agentkits/agentkits-marketing/issues)
- Start a [Discussion](https://github.com/agentkits/agentkits-marketing/discussions)

Thank you for contributing!
