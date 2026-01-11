"use client";

import React, { useState, useEffect } from 'react';
import styles from './FormComponents.module.css';

const STEPS = [
    { number: 1, label: 'Account Creation' },
    { number: 2, label: 'Personal Information' },
    { number: 3, label: 'Membership Details' },
    { number: 4, label: 'Professional Info' },
    { number: 5, label: 'Review & Confirm' },
    { number: 6, label: 'Payment' }
];

const MemberApplicationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        referralCode: '',
        isAbove16: false,
        agreedToTerms: false,
        // Step 2
        phone: '',
        dob: '',
        nationality: '',
        gender: '',
        // Step 3
        membershipType: 'standard', // default
        duration: '12_months',
        // Step 4
        occupation: '',
        industry: '',
        linkedin: '',
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

    // We no longer need React state for currentStep visual toggling, 
    // but we might keep 'currentStep' in state if we want to track it for data 
    // or just let static JS handle the active class.
    // However, for simplicity and to satisfy "keep everything related to events... in static js",
    // we will just render all steps.

    // No useEffect for events needed here if static JS handles everything.
    // We just render the static structure.

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would submit the data to the backend
        console.log('Submitting Application:', formData);
        alert('Application Submitted Successfully!');
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formCard} id="member-form-card">
                <div className={styles.formHeader}>
                    <h1 className={styles.title}>Online Membership Application Form</h1>
                </div>

                {/* Stepper - Static JS will toggle .active / .completed classes */}
                <div className={styles.stepper} id="member-stepper">
                    {STEPS.map((step) => (
                        <div
                            key={step.number}
                            id={`member-step-indicator-${step.number}`}
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
                    {/* Render ALL steps, hidden by default except step 1 */}

                    {/* STEP 1 */}
                    <div id="member-step-1" className={styles.stepContent} style={{ display: 'block' }}>
                        <h2 className={styles.stepTitle}>Step 1 – Account Creation</h2>
                        <p className={styles.stepDescription}>Please fill in your basic account information to get started.</p>
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
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Referral Code / How did you hear about us?</label>
                                <input type="text" name="referralCode" value={formData.referralCode} onChange={handleInputChange} placeholder="Referral Code" className={styles.input} />
                            </div>
                            <div className={`${styles.fullWidth}`}>
                                <label className={styles.checkboxGroup}>
                                    <input type="checkbox" name="isAbove16" checked={formData.isAbove16} onChange={handleInputChange} className={styles.checkbox} />
                                    <span className={styles.checkboxLabel}>I confirm that I am at least 16 years old</span>
                                </label>
                                <label className={styles.checkboxGroup}>
                                    <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleInputChange} className={styles.checkbox} />
                                    <span className={styles.checkboxLabel}>I agree to the <a href="/terms-and-conditions" className={styles.link}>Terms & Conditions</a> and <a href="/privacy-policy" className={styles.link}>Privacy Policy</a></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div id="member-step-2" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 2 – Personal Information</h2>
                        <p className={styles.stepDescription}>Tell us a bit more about yourself.</p>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Phone Number <span className={styles.required}>*</span></label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 234 567 890" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Date of Birth <span className={styles.required}>*</span></label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleInputChange} className={styles.select}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="prefer_not_to_say">Prefer not to say</option>
                                </select>
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Nationality <span className={styles.required}>*</span></label>
                                <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} placeholder="Enter your nationality" className={styles.input} />
                            </div>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div id="member-step-3" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 3 – Membership Details</h2>
                        <p className={styles.stepDescription}>Choose the plan that suits you best.</p>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Membership Type <span className={styles.required}>*</span></label>
                                <select name="membershipType" value={formData.membershipType} onChange={handleInputChange} className={styles.select}>
                                    <option value="standard">Standard Member</option>
                                    <option value="premium">Premium Member</option>
                                    <option value="student">Student Member</option>
                                </select>
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Duration</label>
                                <select name="duration" value={formData.duration} onChange={handleInputChange} className={styles.select}>
                                    <option value="12_months">12 Months</option>
                                    <option value="24_months">24 Months</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* STEP 4 */}
                    <div id="member-step-4" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 4 – Professional Info</h2>
                        <p className={styles.stepDescription}>Help us connect you with the right opportunities.</p>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Current Occupation <span className={styles.required}>*</span></label>
                                <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} placeholder="e.g. Software Engineer" className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Industry</label>
                                <input type="text" name="industry" value={formData.industry} onChange={handleInputChange} placeholder="e.g. Technology" className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>LinkedIn Profile URL</label>
                                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/..." className={styles.input} />
                            </div>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div id="member-step-5" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 5 – Review & Confirmation</h2>
                        <p className={styles.stepDescription}>Please review your information before proceeding to payment.</p>
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
                                <span className={styles.summaryLabel}>Phone</span>
                                <span className={styles.summaryValue}>{formData.phone}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Membership</span>
                                <span className={styles.summaryValue}>{formData.membershipType} ({formData.duration})</span>
                            </div>
                        </div>
                    </div>

                    {/* STEP 6 */}
                    <div id="member-step-6" className={styles.stepContent} style={{ display: 'none' }}>
                        <h2 className={styles.stepTitle}>Step 6 – Payment</h2>
                        <p className={styles.stepDescription}>Securely complete your membership purchase.</p>
                        <div className={styles.formGrid}>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Cardholder Name</label>
                                <input type="text" name="cardName" value={formData.cardName} onChange={handleInputChange} placeholder="Name on card" className={styles.input} />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Card Number</label>
                                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="0000 0000 0000 0000" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Expiry Date</label>
                                <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="MM/YY" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>CVV</label>
                                <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="123" className={styles.input} />
                            </div>
                        </div>
                    </div>


                    {/* ACTIONS */}
                    <div className={styles.actions}>
                        <button
                            type="button"
                            id="btn-prev"
                            className={styles.backBtn}
                            style={{ opacity: 0.5, cursor: 'not-allowed' }} // Initial state for step 1
                            disabled // Initially disabled
                        >
                            Previous
                        </button>

                        <button
                            type="button"
                            id="btn-next"
                            className={styles.nextBtn}
                        >
                            Next
                        </button>

                        <button
                            type="submit"
                            id="btn-submit"
                            className={styles.nextBtn}
                            style={{ display: 'none' }} // Hidden initially
                        >
                            Complete Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MemberApplicationForm;
