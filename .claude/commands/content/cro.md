---
description: Analyze the current content and optimize for conversion
argument-hint: [url-or-content]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-psychology`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Analysis Scope

**Question:** "What level of CRO analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick issue scan and top fixes
- **Recommended** - Full analysis with prioritized actions
- **Complete** - Comprehensive with rewrite suggestions
- **Custom** - I'll select specific areas

---

### Step 2: Ask Content Type

**Question:** "What type of content are you optimizing?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Landing Page** - Conversion-focused page
- **Homepage** - Main site entry point
- **Product Page** - Product or service page
- **Blog/Article** - Content with CTAs

---

### Step 3: Ask Primary Goal

**Question:** "What's the primary conversion goal?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **Lead Capture** - Form submissions, email signups
- **Sales/Checkout** - Purchases, transactions
- **Demo/Trial** - Product demos, free trials
- **Engagement** - Clicks, downloads, shares

---

### Step 4: Ask Focus Areas

**Question:** "Which elements should we focus on?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Headlines & Copy** - Messaging optimization
- **CTAs & Forms** - Call-to-action improvements
- **Trust & Proof** - Social proof, testimonials
- **Layout & Flow** - Visual hierarchy, UX

---

### Step 5: Confirmation

**Display summary:**

```markdown
## CRO Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Content | [URL or description] |
| Type | [selected type] |
| Goal | [selected goal] |
| Focus Areas | [selected areas] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Run conversion analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze** - Start CRO analysis
- **No, change settings** - Go back to modify

---

## Conversion Optimization Framework

1. **Headline 4-U Formula**: Useful, Unique, Urgent, Ultra-specific
2. **Above-Fold Value**: Customer problem focus, zero scroll required
3. **CTA First-Person**: "Get MY Guide" vs "Get YOUR Guide" (90% more clicks)
4. **5-Field Maximum**: Every field kills conversions
5. **Message Match**: Ad copy = landing page headline
6. **Social Proof Near CTAs**: Testimonials at decision points
7. **PAS Framework**: Problem > Agitate > Solve
8. **Trust Signal Clustering**: Badges, guarantees visible together
9. **Mobile Thumb Zone**: CTAs where thumbs naturally rest
10. **Reading Level Grade 6**: 11-word sentences, short paragraphs

---

## Workflow

1. **Content Analysis**
   - If URL provided: Use WebFetch to analyze
   - If screenshot: Use multimodal analysis
   - Identify current conversion elements

2. **Issue Identification**
   - Apply CRO framework checklist
   - Prioritize by impact

3. **Optimization Recommendations**
   - Specific fixes with examples
   - Before/after suggestions
   - Quick wins first

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| CRO analysis | `conversion-optimizer` | Primary analysis |
| Copy rewrite | `copywriter` | Messaging fixes |
| Psychology review | `brainstormer` | Persuasion elements |

---

## Output Format

### Basic Scope

```markdown
# CRO Analysis: [Content]

## Top 5 Issues
1. [Issue] - [Impact] - [Quick Fix]

## Priority Fixes
- [Fix 1 with example]
- [Fix 2 with example]
```

### Recommended Scope

[Include Basic + Full element analysis + Before/after copy + A/B test ideas]

### Complete Scope

[Include all + Complete rewrite suggestions + Implementation guide]

---

## Output Location

Save analysis to: `./docs/content/cro/[page-name]-cro-[YYYY-MM-DD].md`
