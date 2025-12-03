---
description: Create brand voice guidelines
argument-hint: [brand-context]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `brand-building`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of brand voice guidelines do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Core voice attributes and examples
- **Recommended** - Full guidelines with tone variations
- **Complete** - Comprehensive with channel-specific guides
- **Custom** - I'll specify what I need

---

### Step 2: Ask Brand Personality

**Question:** "What personality best describes your brand?"
**Header:** "Personality"
**MultiSelect:** false

**Options:**
- **Professional** - Authoritative, trustworthy, expert
- **Friendly** - Approachable, warm, conversational
- **Bold** - Confident, disruptive, provocative
- **Innovative** - Forward-thinking, tech-savvy, modern

---

### Step 3: Ask Tone Spectrum

**Question:** "Where should your brand sit on the tone spectrum?"
**Header:** "Tone"
**MultiSelect:** false

**Options:**
- **Formal** - Corporate, polished, structured
- **Professional** - Balanced, clear, competent
- **Conversational** - Relaxed, natural, approachable
- **Casual** - Fun, playful, informal

---

### Step 4: Ask Primary Channels

**Question:** "Which channels need voice guidelines?"
**Header:** "Channels"
**MultiSelect:** true

**Options:**
- **Website** - Homepage, landing pages, product pages
- **Email** - Marketing, transactional, support
- **Social** - LinkedIn, Twitter, Instagram
- **Sales** - Proposals, presentations, outreach

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Brand Voice Configuration

| Parameter | Value |
|-----------|-------|
| Brand Context | [description] |
| Personality | [selected personality] |
| Tone Spectrum | [selected tone] |
| Channels | [selected channels] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create these brand voice guidelines?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create guidelines** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Brand Positioning Analysis**
   - Review brand mission/vision
   - Understand value proposition
   - Identify differentiators
   - Analyze target audience

2. **Voice Attribute Definition**
   - Core personality traits (3-5)
   - What we are / What we're not
   - Voice spectrum placement
   - Emotional qualities

3. **Tone Variations**
   - By channel
   - By situation
   - By audience segment
   - By content type

4. **Documentation**
   - Do's and Don'ts
   - Example copy
   - Quick reference

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Voice framework | `copywriter` | Primary task |
| Brand analysis | `researcher` | Positioning review |
| Consistency review | `brand-voice-guardian` | Quality check |

---

## Output Format

### Basic Scope

```markdown
## Brand Voice: [Brand]

### Voice Attributes
1. **[Attribute 1]** - [Description]
2. **[Attribute 2]** - [Description]
3. **[Attribute 3]** - [Description]

### We Sound Like
- [Example]
- [Example]

### We Never Sound Like
- [Example]
- [Example]

### Example Copy
**Headline:** [Example]
**CTA:** [Example]
```

### Recommended Scope

[Include Basic + Tone variations by channel + Do's/Don'ts + Grammar preferences + Full example library]

### Complete Scope

[Include all + Channel-specific guides + Situation playbooks + Error messages + Social templates + Email signatures]

---

## Output Location

Save guidelines to: `./docs/brand/voice-[brand]-[YYYY-MM-DD].md`
