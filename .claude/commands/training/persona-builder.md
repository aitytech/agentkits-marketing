# /training:persona-builder - Interactive Persona Builder

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Guide non-developer users through creating a buyer persona step-by-step using the **Interactive UX Pattern**. Ask questions with 2-4 clickable options at each step. This is a hands-on, beginner-friendly training session.

### Welcome Message

---

**Interactive Persona Builder**

I'll guide you through creating a detailed buyer persona for your product or service. No marketing experience needed - just answer a few questions by choosing from the options I provide.

**What you'll create:**
- A complete buyer persona profile
- Key messaging points for this persona
- Channel recommendations

**Duration:** ~15 minutes

Let's begin!

---

### Step 1: Business Type

**IMPORTANT**: Use the AskUserQuestion tool to ask:

**Question:** "What type of product or service are you marketing?"

**Options:**
1. **SaaS / Software** - Cloud software, apps, digital tools
2. **E-commerce** - Physical products, online store
3. **Professional Services** - Consulting, agency, coaching
4. **Other** - Let user specify

---

### Step 2: Target Audience

**IMPORTANT**: Use the AskUserQuestion tool to ask:

**Question:** "Who is your primary target audience?"

**Options:**
1. **B2B Decision Makers** - Managers, directors, executives at companies (Recommended for SaaS)
2. **B2B End Users** - Individual employees, team members
3. **B2C Consumers** - Individual consumers for personal use
4. **Other** - Let user specify

---

### Step 3: Company Size (if B2B)

If B2B was selected, use the AskUserQuestion tool:

**Question:** "What company size do you typically target?"

**Options:**
1. **Startups** - 1-20 employees, founders/early team
2. **SMB** - 20-200 employees, growing teams (Recommended)
3. **Mid-Market** - 200-2000 employees, department heads
4. **Enterprise** - 2000+ employees, procurement involved

---

### Step 4: Primary Pain Point

**IMPORTANT**: Use the AskUserQuestion tool:

**Question:** "What's the #1 problem your product solves?"

**Options:**
1. **Save Time** - Automation, efficiency, productivity
2. **Save Money** - Cost reduction, better ROI
3. **Reduce Risk** - Compliance, security, reliability
4. **Grow Revenue** - More sales, leads, customers

---

### Step 5: Decision Criteria

**IMPORTANT**: Use the AskUserQuestion tool:

**Question:** "What matters most to your buyers when choosing a solution?"

**Options:**
1. **Price / Value** - Budget-conscious, ROI-focused
2. **Features / Capability** - Power users, specific needs (Recommended)
3. **Ease of Use** - Non-technical, quick adoption
4. **Trust / Brand** - Established players, references

---

### Step 6: Persona Preset

**IMPORTANT**: Use the AskUserQuestion tool:

**Question:** "Which persona archetype fits your ideal customer best?"

**Options:**
1. **Manager Maria** - B2B manager, team lead, results-focused (Recommended for B2B)
2. **Startup Sam** - Founder, wears many hats, growth-focused
3. **Solo Steve** - Solopreneur, budget-conscious, DIY
4. **Custom** - Build from scratch based on previous answers

---

### Generate Persona

Based on all answers, generate a complete persona using this format:

```markdown
## [Persona Name]
**Role:** [Job Title based on answers]
**Company:** [Type/Size based on answers]

### Demographics
- Age: [Appropriate range]
- Education: [Appropriate level]
- Experience: [Years in role]
- Reports to: [Who they report to]

### Goals
1. [Primary goal aligned with pain point]
2. [Secondary goal aligned with decision criteria]
3. [Career/personal goal]

### Challenges
1. [Main pain point from Step 4]
2. [Related challenge]
3. [Obstacle to achieving goals]

### How [Product] Helps
- Solves [pain point 1] by [specific solution]
- Enables [goal] through [feature]
- Reduces [challenge] with [benefit]

### Objections & Responses
- "[Budget concern]" → [Value-focused response]
- "[Time to implement]" → [Ease of adoption response]
- "[Risk of change]" → [Trust-building response]

### Preferred Channels
- **Discovery:** [Where they research]
- **Content:** [What they consume]
- **Social:** [Where they network]

### Messaging That Resonates
- Lead with: [Primary benefit]
- Emphasize: [Key differentiator]
- Prove with: [Evidence type]

### Characteristic Quote
"[Statement that captures their mindset]"
```

---

### Confirm & Save

After generating, ask:

**Question:** "Would you like to save this persona?"

**Options:**
1. **Save to docs/** - Save as `docs/personas/[name].md`
2. **Refine further** - Adjust specific sections
3. **Create another persona** - Start over for different segment
4. **Done** - Finish the training

---

### Celebration & Next Steps

Congratulate them:

**You've created your first buyer persona!**

This persona will help you:
- Write targeted marketing copy
- Choose the right channels
- Handle objections in sales

**What's next:**
- `/content:blog` - Create content for this persona
- `/campaign:brief` - Plan a campaign targeting them
- `/research:persona` - Create additional personas
- `/training:help` - See all available training

---

## Key Teaching Points

1. **Interactive UX Pattern**: Always use AskUserQuestion with 2-4 options
2. **Presets help beginners**: Offer recommended options with (Recommended) label
3. **Build progressively**: Each answer informs the next question
4. **Confirm before action**: Ask before saving or major actions
5. **Celebrate completion**: Acknowledge their achievement
6. **Provide next steps**: Guide them to related commands
