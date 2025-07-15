/**
 * helpers.js
 * Generic helper functions reused across controllers / views.
 */

/**
 * Capitalize the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
exports.capitalize = (str = '') =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/**
 * Format a JS Date to dd‑mm‑yyyy (simple, locale‑agnostic).
 * @param {Date|string|number} date
 * @returns {string}
 */
exports.formatDate = (date) => {
  const d = new Date(date);
  return `${String(d.getDate()).padStart(2, '0')}-${String(
    d.getMonth() + 1
  ).padStart(2, '0')}-${d.getFullYear()}`;
};

/**
 * Simple role checker for EJS views
 *   <%= isRole(user, 'guide') ? '...' : '' %>
 */
exports.isRole = (user, role) => user?.role === role;
