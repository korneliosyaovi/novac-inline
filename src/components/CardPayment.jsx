import React, { useState } from 'react';
import { makePaymentRequest } from '../utils/api';
import { validateCardNumber, validateCVV, validateExpiry } from '../utils/validation';

const CardPayment = ({ config, onSuccess, onError, isProcessing, setIsProcessing }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }

    // Format expiry date with slash
    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
    }

    // Limit CVV to numbers only
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }

    const cardNumber = formData.cardNumber.replace(/\s/g, '');
    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
    }

    if (!validateExpiry(formData.expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date';
    }

    if (!validateCVV(formData.cvv)) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      const cardNumber = formData.cardNumber.replace(/\s/g, '');
      const [expiryMonth, expiryYear] = formData.expiryDate.split('/');

      const payload = {
        publicKey: config.publicKey,
        email: config.email,
        amount: config.amount,
        currency: config.currency,
        reference: config.reference,
        paymentMethod: 'card',
        cardDetails: {
          cardNumber,
          expiryMonth,
          expiryYear: `20${expiryYear}`,
          cvv: formData.cvv,
          cardholderName: formData.cardholderName
        },
        metadata: config.metadata
      };

      const response = await makePaymentRequest(payload);
      onSuccess(response);
    } catch (error) {
      onError({
        message: error.message || 'Payment failed. Please try again.',
        type: 'card_error'
      });
    }
  };

  return (
    <form className="novac-payment-form" onSubmit={handleSubmit}>
      <div className="novac-form-group">
        <label htmlFor="cardholderName" className="novac-label">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          className={`novac-input ${errors.cardholderName ? 'error' : ''}`}
          value={formData.cardholderName}
          onChange={handleInputChange}
          placeholder="John Doe"
          disabled={isProcessing}
          autoComplete="cc-name"
        />
        {errors.cardholderName && (
          <span className="novac-error-text">{errors.cardholderName}</span>
        )}
      </div>

      <div className="novac-form-group">
        <label htmlFor="cardNumber" className="novac-label">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className={`novac-input ${errors.cardNumber ? 'error' : ''}`}
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
          disabled={isProcessing}
          autoComplete="cc-number"
        />
        {errors.cardNumber && (
          <span className="novac-error-text">{errors.cardNumber}</span>
        )}
      </div>

      <div className="novac-form-row">
        <div className="novac-form-group">
          <label htmlFor="expiryDate" className="novac-label">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            className={`novac-input ${errors.expiryDate ? 'error' : ''}`}
            value={formData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            maxLength="5"
            disabled={isProcessing}
            autoComplete="cc-exp"
          />
          {errors.expiryDate && (
            <span className="novac-error-text">{errors.expiryDate}</span>
          )}
        </div>

        <div className="novac-form-group">
          <label htmlFor="cvv" className="novac-label">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className={`novac-input ${errors.cvv ? 'error' : ''}`}
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            maxLength="4"
            disabled={isProcessing}
            autoComplete="cc-csc"
          />
          {errors.cvv && (
            <span className="novac-error-text">{errors.cvv}</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="novac-submit-btn"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CardPayment;
