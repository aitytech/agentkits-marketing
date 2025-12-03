// iOS App Store Category ID to Name mappings
// Source: Apple App Store Connect API

export const IOS_CATEGORIES = {
  // Main Categories
  6000: 'Business',
  6001: 'Weather',
  6002: 'Utilities',
  6003: 'Travel',
  6004: 'Sports',
  6005: 'Social Networking',
  6006: 'Reference',
  6007: 'Productivity',
  6008: 'Photo & Video',
  6009: 'News',
  6010: 'Navigation',
  6011: 'Music',
  6012: 'Lifestyle',
  6013: 'Health & Fitness',
  6014: 'Games',
  6015: 'Finance',
  6016: 'Entertainment',
  6017: 'Education',
  6018: 'Books',
  6020: 'Medical',
  6021: 'Newsstand',
  6022: 'Catalogs',
  6023: 'Food & Drink',
  6024: 'Shopping',

  // Game Subcategories
  7001: 'Action',
  7002: 'Adventure',
  7003: 'Arcade',
  7004: 'Board',
  7005: 'Card',
  7006: 'Casino',
  7009: 'Family',
  7011: 'Music',
  7012: 'Puzzle',
  7013: 'Racing',
  7014: 'Role Playing',
  7015: 'Simulation',
  7016: 'Sports',
  7017: 'Strategy',
  7018: 'Trivia',
  7019: 'Word'
};

export const GAME_CATEGORY_IDS = {
  ALL_GAMES: '6014',
  ACTION: '7001',
  ADVENTURE: '7002',
  ARCADE: '7003',
  BOARD: '7004',
  CARD: '7005',
  CASINO: '7006',
  FAMILY: '7009',
  MUSIC: '7011',
  PUZZLE: '7012',
  RACING: '7013',
  ROLE_PLAYING: '7014',
  SIMULATION: '7015',
  SPORTS: '7016',
  STRATEGY: '7017',
  TRIVIA: '7018',
  WORD: '7019'
};

export function getCategoryName(categoryId) {
  const id = typeof categoryId === 'string' ? parseInt(categoryId) : categoryId;
  return IOS_CATEGORIES[id] || `Category ${id}`;
}

export function getGenreFromApp(app) {
  if (!app.categories || app.categories.length === 0) return 'Unknown';
  return getCategoryName(app.categories[0]);
}

export function getSubgenreFromApp(app) {
  if (!app.categories || app.categories.length < 2) return null;
  return getCategoryName(app.categories[1]);
}
