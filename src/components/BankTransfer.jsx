import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { makePaymentRequest } from '../utils/api';
import {toast} from "react-hot-toast";

const BankTransfer = ({ config, onSuccess, onError, isProcessing, setIsProcessing, initialResponse }) => {
  const [transferDetails, setTransferDetails] = useState(sessionStorage.getItem('novac-transfer-details') ? JSON.parse(sessionStorage.getItem('novac-transfer-details')) : null);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const initiateBankTransfer = useCallback(async () => {
    setIsProcessing(true);

    try {
      const payload = {
        ...config,
        publicKey: config.publicKey,
        email: config.email,
        amount: config.amount,
        currency: config.currency,
        reference: config.reference,
        paymentMethod: 'bank_transfer',
        metadata: config.metadata,
        customerName: config.customerName,
        customerPhone: config.customerPhone,
      };

      const response = await makePaymentRequest(payload, initialResponse);

      sessionStorage.setItem('novac-transfer-details', JSON.stringify({
        accountNumber: response.accountNumber || '0123456789',
        accountName: response.accountName || 'Novac Payment Limited',
        bankName: response.bankName || 'Access Bank',
        amount: config.amount,
        reference: config.reference,
        expiresInSeconds: response.expiresInSeconds || 20 * 60
      }));

      setTransferDetails({
        accountNumber: response.accountNumber || '0123456789',
        accountName: response.accountName || 'Novac Payment Limited',
        bankName: response.bankName || 'Access Bank',
        amount: config.amount,
        reference: config.reference,
        expiresInSeconds: response.expiresInSeconds || 20 * 60
      });

      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
      toast.error(error.message || 'Failed to generate transfer details');
      onError({
        message: error.message || 'Failed to generate transfer details',
        type: 'bank_transfer_error'
      });
    }
  }, [config, onError, setIsProcessing]);

  useEffect(() => {
    initiateBankTransfer();
  }, []);

  useEffect(() => {
    if (!transferDetails) return;
    const expiresIn = transferDetails.expiresInSeconds || 20 * 60;
    setCountdown(expiresIn);
  }, [transferDetails]);

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const formattedAmount = useMemo(() => {
    const amount = Number(config.amount) || 0;
    try {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: config.currency || 'NGN',
        minimumFractionDigits: 2
      }).format(amount);
    } catch (err) {
      return `${config.currency || 'NGN'} ${amount.toLocaleString()}`;
    }
  }, [config.amount, config.currency]);

  const formatCountdown = (seconds) => {
    if (seconds === null) return '--';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.max(seconds % 60, 0);
    return `${minutes}m ${secs.toString().padStart(2, '0')}s`;
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(field);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // Fallback for browsers that don't support clipboard API
        alert('Copy failed. Please copy manually.');
      });
  };

  const handleConfirmPayment = () => {
    // In production, this would verify payment status with the API
    onSuccess({
      reference: config.reference,
      status: 'pending',
      message: 'Payment initiated. Awaiting confirmation.'
    });
  };

  if (isProcessing) {
    return (
      <div className="novac-loading">
        <div className="novac-spinner"></div>
        <p>Generating transfer details...</p>
      </div>
    );
  }

  if (!transferDetails) {
    return (
      <div className="novac-error-state">
        <p>Unable to generate transfer details. Please try again.</p>
      </div>
    );
  }

  return (
    <section className="novac-bank-transfer" aria-label="Bank transfer details">
      <div className="novac-bank-transfer__intro">
          <h3 className="novac-bank-transfer__title">Transfer to the bank details displayed below</h3>
      </div>

      <div className="novac-bank-transfer__card">
        <dl className="novac-bank-transfer__grid">
          <div className="novac-bank-transfer__field">
            <dt>Amount</dt>
            <dd>{formattedAmount}</dd>
          </div>

          <div className="novac-bank-transfer__field">
            <dt>Account Number</dt>
            <dd>
              <span>{transferDetails.accountNumber}</span>
              <button
                type="button"
                className={`novac-copy-btn ${copied === 'account' ? 'is-copied' : ''}`}
                onClick={() => copyToClipboard(transferDetails.accountNumber, 'account')}
                title="Copy account number"
              >
                <span className="sr-only">Copy account number</span>
                {copied === 'account' ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M7 13h10v1h-10v-1zm15-11v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 15.135c-1.073 1.355-2.448 2.763-3.824 3.865h3.824v-3.865zm0-14.135h-4l-2 2h-3.898l-2.102-2h-4v18h7.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-9.543zm-13 12h5v-1h-5v1zm0-4h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill={"#252264"} width="14" height="14" viewBox="0 0 24 24"><path d="M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>}
              </button>
            </dd>
          </div>

          <div className="novac-bank-transfer__field">
            <dt>Bank</dt>
            <dd>{transferDetails.bankName}</dd>
          </div>

          <div className="novac-bank-transfer__field">
            <dt>Beneficiary Name</dt>
            <dd>{transferDetails.accountName}</dd>
          </div>
        </dl>

        {/*<div className="novac-bank-transfer__meta">*/}
        {/*  <span className="novac-bank-transfer__meta-label">Reference</span>*/}
        {/*  <span className="novac-bank-transfer__meta-value">{transferDetails.reference}</span>*/}
        {/*</div>*/}
      </div>

      <p className="novac-bank-transfer__expiry">
        The account number above expires after <strong>{formatCountdown(countdown)}</strong>
      </p>

      <button
        type="button"
        className="novac-bank-transfer__cta novac-submit-btn"
        onClick={handleConfirmPayment}
      >
        I have made this payment!
      </button>

      <p className="novac-bank-transfer__footnote">
        Please pay the exact amount of {formattedAmount}.
      </p>
    </section>
  );
};

export default BankTransfer;
