import React, {useEffect, useState} from 'react';
import CardPayment from './CardPayment';
import BankTransfer from './BankTransfer';
import UssdPayment from './UssdPayment';
import { formatAmount } from '../utils/helpers';
import {generateTransactionId, initiatePaymentRequest} from "../utils/api";
import {Toaster} from "react-hot-toast";

// https://www.app.novacpayment.com/_next/static/media/loader.07fd30ec.gif

const CheckoutModal = ({ config, onClose }) => {
  const [activeTab, setActiveTab] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [initialResponse, setInitialResponse] = useState(null);
  // const [startVerifying, setStartVerifying] = useState(false);

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

  useEffect(async () => {
    const full_name = (config.customerName || '').split(' ');
    const initiateResponse = await initiatePaymentRequest({
      publicKey: config.publicKey,
      transactionReference: config.reference || generateTransactionId(),
      amount: config.amount,
      currency: config.currency,
      checkoutCustomerData: {
        email: config.email,
        firstName: full_name[0] || 'Anonymous',
        lastName: full_name[1] || 'Anonymous',
        phoneNumber: config.customerPhone || ''
      },
      checkoutCustomizationData: {
        logoUrl: config.customization?.logoUrl || '',
        checkoutModalTitle: config.customization?.title || 'Novac Payment',
        paymentDescription: config.customization?.description || 'Complete your payment securely'
      }
    });
    setInitialResponse(initiateResponse);
  }, [config]);

  return (
    <div className="novac-modal-overlay" onClick={handleOverlayClick}>
      <div><Toaster position="top-right" /></div>
      {/* Test Environment Banner */}
      <div className="novac-test-banner">
        <span className="novac-test-banner-icon">⚠️</span>
        <span className="novac-test-banner-text">
            You are currently in test environment, all transactions are for testing purposes only!
          </span>
      </div>
      <div className="novac-modal">

        <div className="novac-modal-header" style={{ background: `${ config.customization?.background || '#EEEDFD' }`, color: `${ config.customization?.color || '#15142B' }`  }}>
          <div className="novac-header-content">
            <p className="novac-amount" style={{ color: `${ config.customization?.color || '#15142B' }` }}>{formatAmount(config.amount, config.currency)}</p>
            <h2 className="novac-title" style={{ color: `${ config.customization?.color || '#15142B' }` }}>{ config.customization?.title || 'Payment Modal' }</h2>
            <p className="novac-email" style={{ color: `${ config.customization?.color || '#15142B' }` }}>{config.email}</p>
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
              initialResponse={initialResponse}
            />
          )}
          {activeTab === 'bank_transfer' && (
            <BankTransfer
              config={config}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
              initialResponse={initialResponse}
            />
          )}
          {activeTab === 'ussd' && (
            <UssdPayment
              config={config}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
              initialResponse={initialResponse}
            />
          )}
        </div>
      </div>

      <div className="novac-security-badge">
        <span className="novac-lock-icon">🔒</span>
        <span className="novac-security-text">Secured by Novac Payment</span>
      </div>
    </div>
  );
};

export default CheckoutModal;
