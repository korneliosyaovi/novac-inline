import React, { useEffect, useRef, useState } from "react";
import { verifyPayment } from "../utils/api";

const ConfirmTransaction = ({ reference, onSuccess, time_taken, publicKey }) => {
  // time_taken is expected in minutes; default to 0.5 minutes (30 seconds)
  const initialMinutes = typeof time_taken === 'number' && time_taken > 0 ? time_taken : 0.5;
  const [remainingSeconds, setRemainingSeconds] = useState(Math.round(initialMinutes * 60));
  const pollingRef = useRef(null);
  const tickerRef = useRef(null);
  const calledSuccessRef = useRef(false);

  // Helper to decide if verifyPayment response indicates success
  function isPaymentSuccessful(resp) {
    if (!resp) return false;
    // check common shapes: resp.status === true, resp.data?.status === 'success' etc.
    if (resp === true) return true;
    if (resp.status === true) return true;
    const dataStatus = resp?.data?.status ?? resp?.status ?? resp?.paymentStatus ?? resp?.statusText;
    if (typeof dataStatus === 'string') {
      const s = dataStatus.toLowerCase();
      if (s.includes('success') || s.includes('completed') || s.includes('paid')) return true;
    }
    return false;
  }

  useEffect(() => {
    let mounted = true;

    const stopAll = () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
      if (tickerRef.current) {
        clearInterval(tickerRef.current);
        tickerRef.current = null;
      }
    };

    const finishWithSuccess = () => {
      if (calledSuccessRef.current) return;
      calledSuccessRef.current = true;
      stopAll();
      try {
        onSuccess && onSuccess();
      } catch (e) {
        // swallow user callback errors
        // eslint-disable-next-line no-console
        console.error('onSuccess callback error', e);
      }
    };

    // Polling function - call verifyPayment and finish when confirmed
    const pollVerify = async () => {
      try {
        const resp = await verifyPayment(reference, publicKey);
        if (!mounted) return;
        if (isPaymentSuccessful(resp)) {
          finishWithSuccess();
        }
      } catch (err) {
        // ignore transient errors - will retry
        // eslint-disable-next-line no-console
        console.warn('verifyPayment error', err?.message || err);
      }
    };

    // Start an immediate verification then poll every 5 seconds
    pollVerify();
    pollingRef.current = setInterval(pollVerify, 5000);

    // Start countdown ticker every second
    tickerRef.current = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          // time's up
          // call onSuccess if payment not confirmed (fallback)
          if (!calledSuccessRef.current) {
            finishWithSuccess();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      mounted = false;
      stopAll();
    };

  }, [reference, publicKey]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div className="novac-confirm-container">
      <div className="novac-confirm-icon">
        <img src="https://www.app.novacpayment.com/_next/static/media/loader.07fd30ec.gif" alt="Loading..." />
      </div>
      <h2 className="novac-success-title">Confirming your transaction...</h2>
      <p className="novac-success-message">Please do not refresh or leave this page</p>
      <p className="novac-success-submessage">
        This process takes about{' '}
        {remainingSeconds > 0 ? (
          <span>
            {minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''}
            {minutes > 0 && seconds > 0 ? ' ' : ''}
            {seconds > 0 ? `${seconds} second${seconds > 1 ? 's' : ''}` : ''}
          </span>
        ) : (
          <span>0 seconds</span>
        )}
      </p>
    </div>
  );
};

export default ConfirmTransaction;
