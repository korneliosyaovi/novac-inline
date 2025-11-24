import React, { useState } from 'react';

const Pin = ({ formData, setFormData, handleSubmit }) => {
    const [pin, setPin] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!pin.trim()) {
            newErrors.pin = 'PIN is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePinChange = (e) => {
        setPin(e.target.value);
        setFormData({ ...formData, cardPin: e.target.value });
    };

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        handleSubmit(e);
    }

    return (
        <form onSubmit={handleSubmitInternal}>
            <div className="novac-form-group">
                <label htmlFor="pin" className="novac-label">Enter your 4 digit PIN to proceed</label>
                <input
                    type="text"
                    id="pin"
                    name="pin"
                    className={`novac-input ${errors.pin ? 'error' : ''}`}
                    onChange={handlePinChange}
                    value={pin}
                />

                {errors.pin && <span className="novac-error-text">{errors.pin}</span>}
                <button type="submit" className="novac-submit-btn">Submit</button>
            </div>
        </form>);
}

export default Pin;