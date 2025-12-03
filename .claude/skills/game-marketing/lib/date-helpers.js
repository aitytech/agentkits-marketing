/**
 * Date Helpers for Top Chart Analysis
 *
 * Provides dynamic date calculations for monthly chart comparisons.
 * NO HARDCODED DATES - all dates calculated from current system time.
 */

/**
 * Get current date in YYYY-MM-DD format
 * @returns {string} Current date
 */
export function getCurrentDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

/**
 * Get first day of previous month in YYYY-MM-DD format
 * @param {number} monthsAgo - How many months ago (1 = last month, 2 = 2 months ago)
 * @returns {string} Date in YYYY-MM-DD format
 */
export function getPreviousMonth(monthsAgo = 1) {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth() - monthsAgo, 1);

  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');

  return `${year}-${month}-01`;
}

/**
 * Get month name for display
 * @param {number} monthsAgo - How many months ago
 * @returns {string} Month name (e.g., "December 2025")
 */
export function getMonthName(monthsAgo = 1) {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth() - monthsAgo, 1);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return `${monthNames[targetDate.getMonth()]} ${targetDate.getFullYear()}`;
}

/**
 * Get default period for chart analysis
 * @returns {Object} {current: date, previous: date, currentLabel: string, previousLabel: string}
 */
export function getDefaultPeriod() {
  // Use previous month as "current" since current month data may be incomplete
  const current = getPreviousMonth(1);  // Last month
  const previous = getPreviousMonth(2); // 2 months ago

  return {
    current,
    previous,
    currentLabel: getMonthName(1),
    previousLabel: getMonthName(2),
    periodLabel: `${getMonthName(1)} vs ${getMonthName(2)}`
  };
}

/**
 * Get available month options for interactive selection
 * @param {number} count - Number of months to include
 * @returns {Array} Array of {label, value, description}
 */
export function getMonthOptions(count = 3) {
  const options = [];

  for (let i = 1; i <= count; i++) {
    const current = getMonthName(i);
    const previous = getMonthName(i + 1);
    const value = getPreviousMonth(i);

    options.push({
      label: i === 1 ? `Latest (${current})` : current,
      value,
      description: `${current} vs ${previous}`
    });
  }

  return options;
}

/**
 * Format date for SensorTower API
 * @param {string} dateString - YYYY-MM-DD format
 * @returns {string} YYYY-MM-DD (same format, for consistency)
 */
export function formatForAPI(dateString) {
  return dateString;
}

/**
 * Get short month abbreviation (for filenames)
 * @param {number} monthsAgo - How many months ago
 * @returns {string} Month abbreviation (e.g., "dec2025")
 */
export function getMonthAbbrev(monthsAgo = 1) {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth() - monthsAgo, 1);

  const monthAbbrevs = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];

  return `${monthAbbrevs[targetDate.getMonth()]}${targetDate.getFullYear()}`;
}

// Example usage:
// import { getDefaultPeriod, getMonthOptions } from './date-helpers.js';
//
// const period = getDefaultPeriod();
// console.log(period.periodLabel); // "December 2025 vs November 2025"
//
// const options = getMonthOptions(3);
// console.log(options[0]); // {label: "Latest (December 2025)", value: "2025-12-01", ...}
