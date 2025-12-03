---
description: Generate comprehensive brand book
argument-hint: [brand-name]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `brand-building`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of brand book do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Essential brand elements
- **Recommended** - Full brand book with applications
- **Complete** - Comprehensive with all assets
- **Custom** - I'll specify sections

---

### Step 2: Ask Brand Maturity

**Question:** "What's your brand's current state?"
**Header:** "Maturity"
**MultiSelect:** false

**Options:**
- **New Brand** - Starting from scratch
- **Refresh** - Updating existing brand
- **Expansion** - Adding to established brand
- **Documentation** - Codifying existing assets

---

### Step 3: Ask Focus Areas

**Question:** "Which sections should the brand book prioritize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Visual Identity** - Logo, colors, typography
- **Voice & Tone** - Messaging, writing style
- **Applications** - Digital, print, social
- **Guidelines** - Usage rules, do's/don'ts

---

### Step 4: Ask Asset Needs

**Question:** "What asset specifications do you need?"
**Header:** "Assets"
**MultiSelect:** false

**Options:**
- **Specs Only** - Color codes, font names
- **Guidelines** - Usage rules and examples
- **Templates** - Ready-to-use formats
- **Full Package** - All of the above

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Brand Book Configuration

| Parameter | Value |
|-----------|-------|
| Brand Name | [description] |
| Maturity | [selected maturity] |
| Focus Areas | [selected focus] |
| Asset Needs | [selected assets] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Generate this brand book?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate book** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Brand Essence**
   - Mission statement
   - Vision statement
   - Brand values
   - Brand promise
   - Positioning statement

2. **Visual Identity**
   - Logo usage guidelines
   - Color palette
   - Typography system
   - Imagery style

3. **Voice Guidelines**
   - Brand personality
   - Voice attributes
   - Tone variations

4. **Applications**
   - Digital formats
   - Print formats
   - Social media
   - Presentations

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Brand book creation | `copywriter` | Primary task |
| Visual specs | `docs-manager` | Asset documentation |
| Voice guidelines | `brand-voice-guardian` | Consistency |

---

## Output Format

### Basic Scope

```markdown
## Brand Book: [Brand]

### Brand Foundation
- Mission: [Statement]
- Vision: [Statement]
- Values: [List]

### Visual Identity
- Primary Color: [Hex]
- Secondary Colors: [Hex list]
- Typography: [Font names]

### Logo Usage
- Clear space: [Spec]
- Minimum size: [Spec]
```

### Recommended Scope

[Include Basic + Full visual guidelines + Voice & tone + Application examples + Usage rules]

### Complete Scope

[Include all + Asset library + Template package + Quick reference card + Brand story narrative]

---

## Output Location

Save brand book to: `./docs/brand/book-[brand]-[YYYY-MM-DD].md`
