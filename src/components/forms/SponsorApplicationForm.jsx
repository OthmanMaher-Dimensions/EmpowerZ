"use client";

import React, { useState, useEffect } from 'react';
import styles from './FormComponents.module.css';

const STEPS = [
    { number: 1, label: 'Account Creation' },
    { number: 2, label: 'Sponsor Profile' },
    { number: 3, label: 'Sponsorship Details' },
    { number: 4, label: 'Company Info' },
    { number: 5, label: 'Review & Confirm' },
    { number: 6, label: 'Payment' }
];

const SponsorApplicationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        referralCode: '',
        // Step 2
        phone: '',
        country: '',
        // Step 3
        sponsorshipTier: 'silver',
        numberOfMembers: 1,
        // Step 4
        companyName: '',
        companyWebsite: '',
        position: '',
        // Payment
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // React State for data, but static JS for navigation visuals.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting Sponsor Application:', formData);
        alert('Sponsor Application Submitted Successfully!');
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formCard} id="sponsor-form-card">
                <div className={styles.formHeader}>
                    <h1 className={styles.title}>Sponsor a Member Application</h1>
                    <p className={styles.subtitle}>Help someone achieve their dreams by sponsoring their membership.</p>
                </div>

                {/* Stepper */}
                <div className={styles.stepper} id="sponsor-stepper">
                    {STEPS.map((step) => (
                        <div
                            key={step.number}
                            id={`sponsor-step-indicator-${step.number}`}
                            className={`${styles.stepItem} ${step.number === 1 ? styles.active : ''}`}
                            data-step={step.number}
                        >
                            <div className={styles.stepCircle}>
                                {step.number}
                            </div>
                            <span className={styles.stepLabel}>{step.label}</span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>

                    {/* STEP 1 */}
                    <div id="sponsor-step-1" className={styles.stepContent} style={{ display: 'block' }}>
                        <h2 className={styles.stepTitle}>Step 1 – Account Creation</h2>
                        <p className={styles.stepDescription}>Create your account to start sponsoring members.</p>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>First Name <span className={styles.required}>*</span></label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Last Name <span className={styles.required}>*</span></label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Email Address <span className={styles.required}>*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Password <span className={styles.required}>*</span></label>
                                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Confirm Password <span className={styles.required}>*</span></label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm password" className={styles.input} />
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div id="sponsor-step-2" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 2 – Sponsor Profile</h2>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Phone Number <span className={styles.required}>*</span></label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Country/Region <span className={styles.required}>*</span></label>
                                <input type="text" name="country" value={formData.country} onChange={handleInputChange} className={styles.input} />
                            </div>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div id="sponsor-step-3" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 3 – Sponsorship Details</h2>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Sponsorship Tier</label>
                                <select name="sponsorshipTier" value={formData.sponsorshipTier} onChange={handleInputChange} className={styles.select}>
                                    <option value="silver">Silver Sponsor</option>
                                    <option value="gold">Gold Sponsor</option>
                                    <option value="platinum">Platinum Sponsor</option>
                                </select>
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Number of Members to Sponsor</label>
                                <input type="number" name="numberOfMembers" value={formData.numberOfMembers} onChange={handleInputChange} min="1" className={styles.input} />
                            </div>
                        </div>
                    </div>

                    {/* STEP 4 */}
                    <div id="sponsor-step-4" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 4 – Company Info</h2>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Company Name</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Company Website</label>
                                <input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleInputChange} className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Your Position</label>
                                <input type="text" name="position" value={formData.position} onChange={handleInputChange} className={styles.input} />
                            </div>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div id="sponsor-step-5" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 5 – Review & Confirmation</h2>
                        <div className={`${styles.formGrid} ${styles.fullWidth}`}>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Full Name</span>
                                <span className={styles.summaryValue}>{formData.firstName} {formData.lastName}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Email</span>
                                <span className={styles.summaryValue}>{formData.email}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Sponsorship Plan</span>
                                <span className={styles.summaryValue}>{formData.sponsorshipTier} ({formData.numberOfMembers} members)</span>
                            </div>
                        </div>
                    </div>

                    {/* STEP 6 */}
                    <div id="sponsor-step-6" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 6 – Payment</h2>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Cardholder Name</label>
                                <input type="text" name="cardName" value={formData.cardName} onChange={handleInputChange} className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Card Number</label>
                                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Expiry Date</label>
                                <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>CVV</label>
                                <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} className={styles.input} />
                            </div>
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <div className={styles.actions}>
                        <button
                            type="button"
                            id="btn-prev-sponsor"
                            className={styles.backBtn}
                            style={{ opacity: 0.5, cursor: 'not-allowed' }}
                            disabled
                        >
                            Previous
                        </button>

                        <button
                            type="button"
                            id="btn-next-sponsor"
                            className={styles.nextBtn}
                        >
                            Next
                        </button>

                        <button
                            type="submit"
                            id="btn-submit-sponsor"
                            className={styles.nextBtn}
                            style={{ display: 'none' }}
                        >
                            Complete Sponsorship
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SponsorApplicationForm;
