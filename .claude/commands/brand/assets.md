---
description: Manage and organize brand assets
argument-hint: [action] [asset-type]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `brand-building` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of asset management do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Asset inventory and organization
- **Recommended** - Full audit with recommendations
- **Complete** - Comprehensive with governance
- **Custom** - I'll specify what I need

---

### Step 2: Ask Action Type

**Question:** "What action do you need to perform?"
**Header:** "Action"
**MultiSelect:** false

**Options:**
- **Inventory** - Catalog existing assets
- **Organize** - Structure and categorize
- **Audit** - Review quality and compliance
- **Governance** - Create management policies

---

### Step 3: Ask Asset Types

**Question:** "Which asset types should we focus on?"
**Header:** "Assets"
**MultiSelect:** true

**Options:**
- **Logos** - Logo files and variations
- **Colors** - Color palette files
- **Typography** - Font files and specs
- **Imagery** - Photos, graphics, icons

---

### Step 4: Ask Output Format

**Question:** "How should the asset management be delivered?"
**Header:** "Format"
**MultiSelect:** false

**Options:**
- **Inventory List** - Spreadsheet format
- **Folder Structure** - Organized directory
- **Usage Guide** - Documentation
- **Full Package** - All deliverables

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Brand Asset Configuration

| Parameter | Value |
|-----------|-------|
| Action | [selected action] |
| Asset Types | [selected assets] |
| Output Format | [selected format] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Manage brand assets with this configuration?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, proceed** - Start management
- **No, change settings** - Go back to modify

---

## Workflow

1. **Asset Inventory**
   - Logos (all formats/sizes)
   - Color palette files
   - Typography files
   - Photography/imagery
   - Templates and icons

2. **Categorization**
   - By asset type
   - By use case
   - By channel
   - By format

3. **Quality Audit**
   - File quality check
   - Brand compliance
   - Version currency
   - Gap identification

4. **Governance Setup**
   - Usage guidelines
   - Version control
   - Distribution method
   - Update process

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Asset organization | `project-manager` | Primary task |
| Compliance review | `brand-voice-guardian` | Quality check |
| Documentation | `docs-manager` | Usage guides |

---

## Output Format

### Basic Scope

```markdown
## Brand Asset Inventory

### Logos
| File | Format | Size | Location |
|------|--------|------|----------|
| [Name] | [Format] | [Dims] | [Path] |

### Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|

### Typography
| Font | Weight | Usage |
|------|--------|-------|

### Gaps Identified
- [Missing asset 1]
- [Missing asset 2]
```

### Recommended Scope

[Include Basic + Folder structure + Naming conventions + Metadata tags + Usage guidelines]

### Complete Scope

[Include all + Governance policies + Version control + Distribution workflow + Audit schedule]

---

## Output Location

Save asset inventory to: `./docs/brand/assets-[YYYY-MM-DD].md`
