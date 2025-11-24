import React from "react";

const Success = () => {
    return (
        <div className="novac-success-container">
            <div className="novac-success-icon">
                <span className="novac-success-icon-inner">✕</span>
            </div>
            <h2 className="novac-success-title">Payment Successful</h2>
            <p className="novac-success-message">
                Your payment has been completed successfully. Thank you for your purchase!
            </p>
            <p className="novac-success-submessage">
                You can now securely close this tab.
            </p>
        </div>
    );
}


export default Success