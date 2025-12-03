# Interactive Top Chart Analysis

**Purpose:** Dynamic parameter selection for `/game:topchart` command

**Status:** 📋 Specification Ready

---

## Quick Start

```bash
/game:topchart
```

User gets interactive selection UI:
1. Choose scope (Quick/Standard/Full/Custom)
2. If custom → select countries, platforms, genres, etc.
3. Confirm configuration
4. Generate analysis

---

## File Structure

```
.claude/skills/game-marketing/interactive/
├── README.md           # This file - Overview
├── presets.md          # Pre-configured scopes (Quick/Standard/Full)
├── flow.md             # User interaction workflow
└── questions.md        # AskUserQuestion configurations
```

---

## Usage Example

### Quick Analysis (2 clicks)
```
User: /game:topchart
→ Select: "Quick Analysis (2 charts)"
→ Confirm: "Yes, proceed"
✓ Report: docs/topchart-dec2024.md
```

### Custom Analysis (6 clicks)
```
User: /game:topchart
→ Select: "Custom"
→ Countries: "Vietnam (VN)"
→ Platforms: "iOS"
→ Genres: "Puzzle"
→ Month: "Latest"
→ Depth: "Top 20"
→ Confirm: "Yes"
✓ Report: Vietnam iOS Puzzle analysis
```

---

## Benefits

✅ **User Control** - Choose exactly what's needed
✅ **Efficiency** - Quick presets or detailed custom
✅ **Discovery** - See all available options
✅ **Cost Savings** - Only pull necessary data

---

## Implementation

**See:** `flow.md` for complete workflow

**Key Pattern:**
```javascript
// 1. Ask scope
const scope = await AskUserQuestion({...});

// 2. Get config (preset or custom)
const config = scope.isPreset ? PRESETS[scope] : await askCustom();

// 3. Confirm
const ok = await confirm(config);

// 4. Execute
if (ok) await executeAnalysis(config);
```

---

## Next Steps

- [ ] Implement AskUserQuestion integration
- [ ] Test interactive flow
- [ ] Add progress indicators
- [ ] Save user preferences

**Total New Code:** ~150 LOC (vs 500+ for hardcoded options)
