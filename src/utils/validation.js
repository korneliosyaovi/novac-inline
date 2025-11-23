/**
 * Validation utilities for payment forms
 */

/**
 * Validate credit card number using Luhn algorithm
 */
export const validateCardNumber = (cardNumber) => {
  // Remove spaces and dashes
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');

  // Check if it contains only digits
  if (!/^\d+$/.test(cleanNumber)) {
    return false;
  }

  // Check length (13-19 digits)
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false;
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * Validate CVV (3 or 4 digits)
 */
export const validateCVV = (cvv) => {
  return /^\d{3,4}$/.test(cvv);
};

/**
 * Validate expiry date (MM/YY format)
 */
export const validateExpiry = (expiry) => {
  if (!/^\d{2}\/\d{2}$/.test(expiry)) {
    return false;
  }

  const [month, year] = expiry.split('/').map(num => parseInt(num, 10));

  // Validate month
  if (month < 1 || month > 12) {
    return false;
  }

  // Validate year (not expired)
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (year < currentYear) {
    return false;
  }

  if (year === currentYear && month < currentMonth) {
    return false;
  }

  return true;
};

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number
 */
export const validatePhone = (phone) => {
  // Basic validation for Nigerian phone numbers
  const phoneRegex = /^(\+234|0)[789]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Get card type from card number
 */
export const getCardType = (cardNumber) => {
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');

  const patterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
    verve: /^506[01]/
  };

  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(cleanNumber)) {
      return type;
    }
  }

  return 'unknown';
};

export default {
  validateCardNumber,
  validateCVV,
  validateExpiry,
  validateEmail,
  validatePhone,
  getCardType
};
