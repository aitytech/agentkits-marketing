---
description: Create viral-potential content
argument-hint: [topic] [platform]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `social-media`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of viral content do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Single content piece with hooks
- **Recommended** - Multi-format with variants
- **Complete** - Full campaign with strategy
- **Custom** - I'll specify what I need

---

### Step 2: Ask Target Platform

**Question:** "Which platform is this content for?"
**Header:** "Platform"
**MultiSelect:** false

**Options:**
- **Twitter/X** - Short-form, threads
- **LinkedIn** - Professional, thought leadership
- **TikTok/Reels** - Video, trending
- **Multi-Platform** - Adapted for each

---

### Step 3: Ask Viral Trigger

**Question:** "What emotion should drive sharing?"
**Header:** "Trigger"
**MultiSelect:** false

**Options:**
- **Awe** - Wonder, transformation reveals
- **Humor** - Relatable, funny situations
- **Utility** - Helpful tips, life hacks
- **Controversy** - Bold takes, debate starters

---

### Step 4: Ask Content Format

**Question:** "What format should the content take?"
**Header:** "Format"
**MultiSelect:** false

**Options:**
- **Text Post** - Written content
- **Thread/Carousel** - Multi-part story
- **Video Script** - Talking head or B-roll
- **Mixed** - Multiple formats

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Viral Content Configuration

| Parameter | Value |
|-----------|-------|
| Topic | [description] |
| Platform | [selected platform] |
| Viral Trigger | [selected trigger] |
| Format | [selected format] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this viral content?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create content** - Start creation
- **No, change settings** - Go back to modify

---

## Viral Triggers

| Trigger | Emotion | Example |
|---------|---------|---------|
| Awe | Wonder | Transformation reveals |
| Humor | Joy | Relatable situations |
| Controversy | Curiosity | Hot takes |
| Utility | Gratitude | Life hacks, tips |
| Identity | Belonging | "Tag someone who..." |

---

## Workflow

1. **Viral Pattern Analysis**
   - Current trending formats
   - Successful content patterns
   - Platform algorithm preferences

2. **Hook Creation**
   - Multiple hook options
   - Pattern interrupts
   - Curiosity gaps

3. **Content Development**
   - Core message
   - Supporting elements
   - CTA for engagement

4. **Optimization**
   - Hashtag strategy
   - Posting timing
   - Engagement tactics

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Content creation | `copywriter` | Primary task |
| Trend research | `researcher` | Pattern analysis |
| Platform optimization | `brainstormer` | Format adaptation |

---

## Output Format

### Basic Scope

```markdown
## Viral Content: [Topic]

### Hook Options
1. [Hook 1]
2. [Hook 2]
3. [Hook 3]

### Content
[Full content]

### Engagement CTA
[CTA]

### Hashtags
[Relevant hashtags]
```

### Recommended Scope

[Include Basic + Multiple content versions + Platform adaptations + Posting strategy]

### Complete Scope

[Include all + Campaign framework + A/B variants + Trend analysis + Engagement playbook]

---

## Output Location

Save content to: `./docs/social/viral-[topic]-[YYYY-MM-DD].md`
