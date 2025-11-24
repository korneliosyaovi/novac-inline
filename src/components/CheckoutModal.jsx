import React, { useState } from 'react';
import CardPayment from './CardPayment';
import Otp from './Otp';
import BankTransfer from './BankTransfer';
import UssdPayment from './UssdPayment';
import { formatAmount } from '../utils/helpers';

// https://www.app.novacpayment.com/_next/static/media/loader.07fd30ec.gif

const CheckoutModal = ({ config, onClose }) => {
  const [activeTab, setActiveTab] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const tabs = [];
  
  if (config.paymentMethods.includes('card')) {
    tabs.push({ id: 'card', label: 'Card', icon: '💳' });
  }
  if (config.paymentMethods.includes('bank_transfer')) {
    tabs.push({ id: 'bank_transfer', label: 'Bank Transfer', icon: '🏦' });
  }
  if (config.paymentMethods.includes('ussd')) {
    tabs.push({ id: 'ussd', label: 'USSD', icon: '📱' });
  }

  const handlePaymentSuccess = (response) => {
    setIsProcessing(false);
    config.onSuccess(response);
    setTimeout(() => onClose(), 1500);
  };

  const handlePaymentError = (error) => {
    setIsProcessing(false);
    config.onError(error);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !isProcessing) {
      onClose();
    }
  };

  return (
    <div className="novac-modal-overlay" onClick={handleOverlayClick}>
      <div className="novac-modal">
        <div className="novac-modal-header">
          <div className="novac-header-content">
            <h2 className="novac-title">Complete Payment</h2>
            <p className="novac-amount">{formatAmount(config.amount, config.currency)}</p>
          </div>
          <button
            className="novac-close-btn"
            onClick={onClose}
            disabled={isProcessing}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="novac-merchant-info">
          <p className="novac-email">{config.email}</p>
          {config.customerName && (
            <p className="novac-customer-name">{config.customerName}</p>
          )}
        </div>

        <div className="novac-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`novac-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => !isProcessing && setActiveTab(tab.id)}
              disabled={isProcessing}
            >
              <span className="novac-tab-icon">{tab.icon}</span>
              <span className="novac-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="novac-tab-content">
          {activeTab === 'card' && (
            <CardPayment
              config={config}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
            />
          )}
          {activeTab === 'bank_transfer' && (
            <BankTransfer
              config={config}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
            />
          )}
          {activeTab === 'ussd' && (
            <UssdPayment
              config={config}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
            />
          )}
        </div>

        <div className="novac-footer">
          <div className="novac-security-badge">
            <span className="novac-lock-icon">🔒</span>
            <span className="novac-security-text">Secured by Novac Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
