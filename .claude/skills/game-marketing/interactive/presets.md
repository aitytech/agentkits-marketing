# Analysis Presets

**Purpose:** Pre-configured analysis scopes for common use cases

---

## Quick Analysis (2 charts)
- **Countries:** US
- **Platforms:** iOS
- **Genres:** All Games, Puzzle
- **Depth:** Top 20
- **Charts:** 2 (current + previous)
- **MCP Calls:** ~6
- **Use For:** Fast insights, testing, quick check

---

## Standard Analysis (8 charts) ⭐ Recommended
- **Countries:** US, Global
- **Platforms:** iOS
- **Genres:** All Games, Puzzle, Strategy, Simulation
- **Depth:** Top 20
- **Charts:** 8 combinations
- **MCP Calls:** ~20
- **Use For:** Regular reporting, comprehensive view

---

## Full Analysis (16 charts)
- **Countries:** US, Global
- **Platforms:** iOS, Android
- **Genres:** All Games, Puzzle, Strategy, Simulation
- **Depth:** Top 20
- **Charts:** 16 combinations
- **MCP Calls:** ~40
- **Use For:** Complete market intelligence

---

## Category Mappings

### iOS
```javascript
{
  'All Games': '6014',
  'Puzzle': '7012',
  'Strategy': '7016',
  'Simulation': '7014',
  'RPG': '7013',
  'Action': '7003',
  'Casino': '7007',
  'Sports': '7015'
}
```

### Android
```javascript
{
  'All Games': 'GAME',
  'Puzzle': 'GAME_PUZZLE',
  'Strategy': 'GAME_STRATEGY',
  'Simulation': 'GAME_SIMULATION',
  'RPG': 'GAME_ROLE_PLAYING',
  'Action': 'GAME_ACTION',
  'Casino': 'GAME_CASINO',
  'Sports': 'GAME_SPORTS'
}
```

---

## Chart Type Options

### Top Free (Default)
- **ID:** `topfreeapplications`
- **Best For:** Download rankings, market share

### Top Grossing
- **ID:** `topgrossingapplications`
- **Best For:** Revenue analysis, monetization

### Top Paid
- **ID:** `toppaidapplications`
- **Best For:** Premium games analysis
