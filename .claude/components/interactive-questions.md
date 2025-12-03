# Interactive Questions Component

> Reusable patterns for user-friendly parameter collection

**Version:** 1.0.0
**Last Updated:** 2026-01-25

---

## Overview

This component provides standardized patterns for collecting user input through interactive questions. All commands and agents should follow these patterns for consistent UX.

---

## Core Principles

1. **Always use `AskUserQuestion` tool** - Never rely on free-form text for structured inputs
2. **2-4 options per question** - Users can always select "Other" for custom input
3. **Max 5-7 questions per flow** - Keep flows concise
4. **Progressive disclosure** - One question at a time
5. **Confirm before execution** - Show summary, get approval

### Option Count Rules

| Question Type | Min | Max | Notes |
|--------------|-----|-----|-------|
| Single select | 2 | 4 | "Other" is implicit, always available |
| Multi-select | 2 | 4 | Group related items if exceeding |
| Confirmation | 2 | 2 | Yes/No only |

---

## Standard Question Format

### Basic Question Structure

```javascript
AskUserQuestion({
  questions: [{
    question: "Clear, specific question ending with ?",
    header: "ShortLabel",  // Max 12 characters
    multiSelect: false,    // true for multiple selections
    options: [
      { label: "Option 1 (Recommended)", description: "Why choose this" },
      { label: "Option 2", description: "Brief explanation" },
      { label: "Option 3", description: "Brief explanation" },
      { label: "Option 4", description: "Brief explanation" }
    ]
  }]
})
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Header | CamelCase, max 12 chars | "TimeRange", "Audience" |
| Label | Title Case, concise | "Last 30 Days" |
| Description | Sentence case, helpful | "Most common reporting period" |

---

## Preset Pattern

For complex commands, offer preset configurations:

```javascript
AskUserQuestion({
  questions: [{
    question: "What level of analysis do you need?",
    header: "Scope",
    multiSelect: false,
    options: [
      {
        label: "Basic",
        description: "Quick results, minimal parameters"
      },
      {
        label: "Recommended",
        description: "Balanced depth and speed - best for most cases"
      },
      {
        label: "Complete",
        description: "Comprehensive analysis, all parameters"
      },
      {
        label: "Custom",
        description: "I'll select each parameter individually"
      }
    ]
  }]
})
```

### Preset Configurations

| Preset | Use Case | Questions |
|--------|----------|-----------|
| Basic | Quick tasks, familiar users | 1-2 questions |
| Recommended | Default for most users | 3-4 questions |
| Complete | Detailed control needed | 5-7 questions |
| Custom | Power users | All available questions |

---

## Multi-Select Pattern

When users can select multiple options:

```javascript
AskUserQuestion({
  questions: [{
    question: "Which channels should we include?",
    header: "Channels",
    multiSelect: true,  // Enable multiple selection
    options: [
      { label: "Email", description: "Email marketing campaigns" },
      { label: "Social", description: "Social media platforms" },
      { label: "Paid Ads", description: "PPC and display advertising" },
      { label: "Organic", description: "SEO and content marketing" }
    ]
  }]
})
```

---

## Confirmation Pattern

Always confirm before execution:

```markdown
## Configuration Summary

| Parameter | Value |
|-----------|-------|
| Scope | [Selected scope] |
| Time Period | [Selected period] |
| Channels | [Selected channels] |
| Output | [Expected output] |

**Estimated processing:** [Time estimate if applicable]
```

```javascript
AskUserQuestion({
  questions: [{
    question: "Proceed with this configuration?",
    header: "Confirm",
    multiSelect: false,
    options: [
      { label: "Yes, proceed", description: "Start the analysis/generation" },
      { label: "No, change settings", description: "Go back and modify parameters" }
    ]
  }]
})
```

---

## Contextual Options Pattern

Generate options based on previous answers:

```markdown
### Example: Content Type Based on Goal

If user selected "Lead Generation" as goal:
- Options: Ebook, Whitepaper, Webinar, Free Tool

If user selected "Brand Awareness" as goal:
- Options: Blog Post, Infographic, Video, Social Campaign
```

### Implementation

```javascript
// After receiving goal answer
const goalBasedOptions = {
  "Lead Generation": [
    { label: "Ebook", description: "In-depth downloadable guide" },
    { label: "Whitepaper", description: "Research-backed content" },
    { label: "Webinar", description: "Live or recorded presentation" },
    { label: "Free Tool", description: "Interactive calculator or template" }
  ],
  "Brand Awareness": [
    { label: "Blog Post", description: "SEO-optimized article" },
    { label: "Infographic", description: "Visual data representation" },
    { label: "Video", description: "Engaging video content" },
    { label: "Social Campaign", description: "Multi-platform social push" }
  ]
};
```

---

## Error Handling

### No Selection Made

If user doesn't select anything, re-ask with guidance:

```javascript
AskUserQuestion({
  questions: [{
    question: "Please select an option to continue. Which do you prefer?",
    header: "Required",
    // ... options with "Recommended" clearly marked
  }]
})
```

### Invalid Custom Input

If "Other" selected but input is unclear:

```javascript
AskUserQuestion({
  questions: [{
    question: "Could you clarify? Please provide [specific detail needed]",
    header: "Clarify",
    options: [
      { label: "[Interpreted option 1]", description: "Did you mean this?" },
      { label: "[Interpreted option 2]", description: "Or this?" },
      { label: "Let me rephrase", description: "I'll provide more detail" }
    ]
  }]
})
```

---

## Language Support

Always detect and match user's language:

```markdown
**CRITICAL**: Respond in the same language the user is using.

- If user writes in Vietnamese → Questions in Vietnamese
- If user writes in Japanese → Questions in Japanese
- Default to English if unclear
```

### Localized Options Example

```javascript
// English
{ label: "Last 30 Days", description: "Most recent month" }

// Vietnamese
{ label: "30 Ngày Qua", description: "Tháng gần nhất" }

// Japanese
{ label: "過去30日", description: "直近1ヶ月" }
```

---

## Integration with Date Helpers

For date-related questions, always use `date-helpers.md` first:

```markdown
### Step 0: Get Current Date
**Reference:** `./.claude/components/date-helpers.md`

Execute date calculation BEFORE asking time-related questions.
```

---

## Best Practices Checklist

Before implementing interactive questions:

- [ ] Maximum 5-7 questions per flow
- [ ] Each question has 2-4 options + implicit "Other"
- [ ] Headers are under 12 characters
- [ ] Descriptions explain WHY to choose each option
- [ ] One option marked as "Recommended" when appropriate
- [ ] Confirmation step before execution
- [ ] Error handling for invalid inputs
- [ ] Language matches user's language
- [ ] Date questions use date-helpers.md
