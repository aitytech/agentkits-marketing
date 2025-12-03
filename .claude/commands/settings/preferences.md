---
description: Configure your default preferences for AgentKits Marketing
argument-hint: [view|set|reset] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals` skill.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What would you like to do with your preferences?"
**Header:** "Action"
**MultiSelect:** false

**Options:**
- **View current** - See your saved preferences
- **Set up** - Configure your defaults (Recommended)
- **Reset** - Clear all custom preferences
- **Edit one** - Change specific setting

---

### Step 2: Ask Language Preference

**Question:** "What is your preferred language for responses?"
**Header:** "Language"
**MultiSelect:** false

**Options:**
- **Auto-detect** - Match the language I use (Recommended)
- **English** - All responses in English
- **Vietnamese** - Phản hồi bằng tiếng Việt
- **Japanese** - 日本語で応答

---

### Step 3: Ask Timezone

**Question:** "What is your timezone?"
**Header:** "Timezone"
**MultiSelect:** false

**Options:**
- **UTC** - Coordinated Universal Time
- **America/New_York** - US Eastern (EST/EDT)
- **Asia/Tokyo** - Japan Standard Time (JST)
- **Asia/Ho_Chi_Minh** - Vietnam Time (ICT)

---

### Step 4: Ask Default Scope

**Question:** "When commands offer scope options, what's your default?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Recommended** - Balanced depth (best for most users)
- **Basic** - Quick results, minimal questions
- **Complete** - Comprehensive analysis, all options
- **Always ask** - Let me choose each time

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Preferences Configuration

| Setting | Value |
|---------|-------|
| Language | [selected language] |
| Timezone | [selected timezone] |
| Default Scope | [selected scope] |
| Confirmation | Always (default) |
```

**Question:** "Save these preferences?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, save preferences** - Update settings file
- **No, change settings** - Go back to modify

---

## Workflow

1. **Read Current State**
   - Check for existing preferences file
   - Load current settings if available
   - Show current values in questions

2. **Collect Preferences**
   - Walk through each preference question
   - Apply smart defaults
   - Validate selections

3. **Save Configuration**
   - Write to `.claude/user-preferences.yml`
   - Timestamp the update
   - Confirm save success

4. **Apply Settings**
   - Settings take effect immediately
   - Future commands use these defaults
   - Can be overridden per-command

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Config validation | `project-manager` | Validate settings |
| First-time setup | `brainstormer` | Onboarding guidance |
| Preference sync | `docs-manager` | Documentation update |

---

## Preferences File

Settings saved to `.claude/user-preferences.yml`:

```yaml
# AgentKits Marketing User Preferences
# Last Updated: [TIMESTAMP]

language: auto          # en, vi, ja, auto
timezone: UTC          # IANA timezone
date_format: YYYY-MM-DD
default_scope: recommended  # basic, recommended, complete, ask
confirmation: always    # always, basic_skip, never
remember_choices: true

recent:
  report_month: null
  content_type: null
  target_audience: null
  channels: []
```

---

## Output Format

### View Scope

```markdown
## Your Current Preferences

| Setting | Value |
|---------|-------|
| Language | [language] |
| Timezone | [timezone] |
| Default Scope | [default_scope] |
| Confirmation | [confirmation] |
| Remember Choices | [remember_choices] |

**To change:** Run `/settings:preferences set`
```

### Set Up Scope

[Include View + Interactive setup + Confirmation + Save]

### Reset Scope

```markdown
## Preferences Reset

All preferences have been reset to defaults:
- Language: Auto-detect
- Timezone: UTC
- Default Scope: Recommended
- Confirmation: Always
```

---

## Reset Confirmation

If user selects "Reset":

**Question:** "Reset all preferences to defaults?"
**Header:** "Reset"
**MultiSelect:** false

**Options:**
- **Yes, reset** - Clear all custom preferences
- **No, cancel** - Keep current settings

---

## Output Location

Save preferences to: `./.claude/user-preferences.yml`
