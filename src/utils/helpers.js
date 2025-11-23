/**
 * Helper utilities
 */

/**
 * Format amount with currency
 */
export const formatAmount = (amount, currency = 'NGN') => {
  const currencySymbols = {
    NGN: '₦',
    USD: '$',
    GBP: '£',
    EUR: '€'
  };

  const symbol = currencySymbols[currency] || currency;
  return `${symbol}${amount.toLocaleString()}`;
};

/**
 * Truncate text with ellipsis
 */
export const truncate = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Check if browser supports required features
 */
export const checkBrowserSupport = () => {
  const features = {
    fetch: typeof fetch !== 'undefined',
    promise: typeof Promise !== 'undefined',
    localStorage: typeof localStorage !== 'undefined',
    clipboard: typeof navigator.clipboard !== 'undefined'
  };

  const unsupported = Object.entries(features)
    .filter(([, supported]) => !supported)
    .map(([feature]) => feature);

  return {
    supported: unsupported.length === 0,
    unsupported
  };
};

/**
 * Format date to readable string
 */
export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Mask sensitive data
 */
export const maskCardNumber = (cardNumber) => {
  const cleaned = cardNumber.replace(/\s/g, '');
  const lastFour = cleaned.slice(-4);
  const masked = '*'.repeat(cleaned.length - 4) + lastFour;
  return masked.match(/.{1,4}/g).join(' ');
};

/**
 * Generate random ID
 */
export const generateId = (prefix = 'id') => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export default {
  formatAmount,
  truncate,
  debounce,
  checkBrowserSupport,
  formatDate,
  maskCardNumber,
  generateId
};
