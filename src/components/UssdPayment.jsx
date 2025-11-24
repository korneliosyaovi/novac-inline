import React, {useEffect, useState} from 'react';
import {getUssdBanks, makePaymentRequest} from '../utils/api';
import {toast} from "react-hot-toast";

const UssdPayment = ({ config, onSuccess, onError, isProcessing, setIsProcessing, initialResponse }) => {
  const [selectedBank, setSelectedBank] = useState('');
  const [ussdCode, setUssdCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [banks, setBanks] = useState(sessionStorage.getItem('novac-ussd-banks') ? JSON.parse(sessionStorage.getItem('novac-ussd-banks')) :[]);
  const [banksLoading, setBanksLoading] = useState(false);
  const [banksError, setBanksError] = useState('');
  const [expiresInSeconds, setExpiresInSeconds] = useState(null);
  const [copied, setCopied] = useState(false);

  // Fetch banks when publicKey becomes available
  useEffect(() => {
    let mounted = true;
    const loadBanks = async () => {
      setBanksError('');
      if (!config || !config.publicKey) return;
      setBanksLoading(true);
      try {
        const res = await getUssdBanks(config.publicKey);

        // API may return different shapes: array, { data: [...] }, { banks: [...] }, { data: { banks: [...] } }
        // Also handle res.data.bankDetails which is the shape you provided
        let list = [];
        if (Array.isArray(res)) {
          list = res;
        } else if (Array.isArray(res?.data?.bankDetails)) {
          list = res.data.bankDetails;
        } else if (Array.isArray(res?.data)) {
          list = res.data;
        } else if (Array.isArray(res?.data?.banks)) {
          list = res.data.banks;
        } else if (Array.isArray(res?.banks)) {
          list = res.banks;
        } else if (res && typeof res === 'object') {
          // try to find an array value inside the object (one level deep)
          const possible = Object.values(res).find(v => Array.isArray(v));
          if (Array.isArray(possible)) list = possible;
          // also try nested data object
          if (!list.length && res.data && typeof res.data === 'object') {
            const nested = Object.values(res.data).find(v => Array.isArray(v));
            if (Array.isArray(nested)) list = nested;
          }
        }

        // Normalize each bank to { key, name, ussd }
        const normalized = (list || []).map((b, idx) => ({
          key: String(b?.bank_code ?? b?.bankCode ?? b?.code ?? b?.id ?? b?.slug ?? b?.name ?? idx),
          name: String(b?.bank_name ?? b?.bankName ?? b?.name ?? b?.label ?? `Bank ${idx + 1}`),
          ussd: String(b?.ussd_string ?? b?.ussdCode ?? b?.ussd_code ?? b?.ussd ?? b?.ussdPrefix ?? '')
        }));

        if (mounted) {
          sessionStorage.setItem('novac-ussd-banks', JSON.stringify(normalized));
          setBanks(normalized);
        }
      } catch (err) {
        if (mounted) setBanks([]);
        setBanksError(err?.message || 'Failed to load banks');
        if (onError) onError({ message: err.message || 'Failed to load banks', type: 'fetch_banks' });
      } finally {
        if (mounted) setBanksLoading(false);
      }
    };

    loadBanks();
    return () => { mounted = false; };
  }, [config?.publicKey]);

  const handleBankSelect = async (bank) => {
    // bank is already normalized: { key, name, ussd }
    const bankCode = bank?.key;
    const ussdPrefix = bank?.ussd ?? '';

    setSelectedBank(bankCode);
    setIsProcessing(true);

    try {
      const payload = {
        publicKey: config.publicKey,
        email: config.email,
        amount: config.amount,
        currency: config.currency,
        reference: config.reference,
        paymentMethod: 'ussd',
        bankCode: bankCode,
        metadata: config.metadata
      };

      const response = await makePaymentRequest(payload, initialResponse);

      // Generate USSD code (handle different property names safely)
      const paymentCode = response?.paymentCode ?? response?.data?.paymentCode ?? response?.payment_code ?? response?.code ?? '';
      const expirySeconds = response?.expiresInSeconds ?? response?.expirySeconds ?? response?.expires_in ?? 30 * 60;

      // If the bank provided a full ussd string (e.g. '*123*1#'), use it as-is.
      // If the ussd string contains a placeholder like {amount}, replace it.
      // Otherwise, compose using prefix + paymentCode + amount.
      let code;
      if (ussdPrefix && ussdPrefix.includes('{amount}')) {
        code = ussdPrefix.replace('{amount}', String(config.amount));
      } else if (ussdPrefix && ussdPrefix.includes('#')) {
        code = ussdPrefix;
      } else {
        code = `${ussdPrefix}${paymentCode || '000'}*${config.amount}#`;
      }
      setUssdCode(code);
      setShowCode(true);
      setExpiresInSeconds(expirySeconds);
      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
      toast.error(error.message || 'Failed to generate USSD code');
      if (onError) onError({
        message: error.message || 'Failed to generate USSD code',
        type: 'ussd_error'
      });
    }
  };

  const handleConfirmPayment = () => {
    // In production, this would poll the API to check payment status
    onSuccess({
      reference: config.reference,
      status: 'pending',
      message: 'USSD payment initiated. Please complete on your device.'
    });
  };

  const copyUssdCode = () => {
    navigator.clipboard.writeText(ussdCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        alert('Copy failed. Please write down the code manually.');
      });
  };

  useEffect(() => {
    if (!showCode || expiresInSeconds === null) return;
    if (expiresInSeconds <= 0) return;
    const timer = setInterval(() => {
      setExpiresInSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [showCode, expiresInSeconds]);

  const formatCountdown = (seconds) => {
    if (seconds === null) return '--:--';
    const mins = Math.floor(seconds / 60);
    const secs = Math.max(seconds % 60, 0);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (showCode) {
    return (
      <div className="novac-ussd-code">
        <p className="novac-ussd-code__instruction">
          Please use this USSD code to complete your transaction
        </p>

        <div className="novac-ussd-code__display">
          <span className="novac-ussd-code__value">{ussdCode}</span>
          <button
            className={`novac-copy-btn novac-copy-btn--inline ${copied ? 'is-copied' : ''}`}
            onClick={copyUssdCode}
            title="Copy USSD code"
          >
            <span className="sr-only">Copy USSD code</span>
            {copied ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M7 13h10v1h-10v-1zm15-11v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 15.135c-1.073 1.355-2.448 2.763-3.824 3.865h3.824v-3.865zm0-14.135h-4l-2 2h-3.898l-2.102-2h-4v18h7.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-9.543zm-13 12h5v-1h-5v1zm0-4h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill={"#252264"} width="14" height="14" viewBox="0 0 24 24"><path d="M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>}
          </button>
        </div>

        <p className="novac-ussd-code__expiry">
          USSD expires after {formatCountdown(expiresInSeconds)}
        </p>

        <button
          type="button"
          className="novac-submit-btn novac-ussd-code__cta"
          onClick={handleConfirmPayment}
        >
          I have made Payment
        </button>
      </div>
    );
  }

  return (
    <div className="novac-ussd-payment">
      <div className="novac-info-box">
        <p className="novac-info-text">
          Choose your preferred bank for payment
        </p>
      </div>

      {banksLoading ? (
        <div className="novac-loading">
          <div className="novac-spinner"></div>
          <p>Loading banks...</p>
        </div>
      ) : banksError ? (
        <div className="novac-warning-box">
          <p className="novac-warning-text">{banksError}</p>
        </div>
      ) : banks.length === 0 ? (
        <div className="novac-info-box">
          <p className="novac-info-text">No USSD banks available for this merchant.</p>
        </div>
      ) : (
          <select
              className="novac-bank-select"
              value={selectedBank}
              onChange={(e) => {
                const bank = banks.find((b) => b.key === e.target.value);
                if (bank) handleBankSelect(bank);
              }}
              disabled={isProcessing}
          >
            <option value="">Select a bank</option>
            {banks.map((bank) => (
                <option key={bank.key} value={bank.key}>
                  {bank.name}
                </option>
            ))}
          </select>
      )}

      {isProcessing && (
        <div className="novac-loading">
          <div className="novac-spinner"></div>
          <p>Generating USSD code...</p>
        </div>
      )}
    </div>
  );
};

export default UssdPayment;
