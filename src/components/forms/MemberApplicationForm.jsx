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

const INTERESTS = [
    "Prompt Engineering", "Public Speaking", "Business English", "Branding",
    "Digital Marketing", "Storytelling", "Feasibility Study", "Writing Reports",
    "Power BI", "Data Analysis", "Soft Skills", "Game Design",
    "Project Management", "Animation", "UX/UI Design", "Graphic Design",
    "AI (Artificial Intelligence)", "Negotiation Skills", "Translation",
    "IELTS / TOEFL Preparation", "Entrepreneurship", "Emotional Intelligence",
    "Interview and Presentation Skills", "PMP Preparation", "Customer Service"
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
        membershipType: 'standard',
        duration: '12_months',
        areasOfInterest: [],
        supportingDocument: null,
        // Step 4
        occupation: '',
        industry: '',
        linkedin: '',
        // Step 6
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const triggerToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleInterestToggle = (interest) => {
        setFormData(prev => {
            const currentInterests = prev.areasOfInterest;
            if (currentInterests.includes(interest)) {
                return { ...prev, areasOfInterest: currentInterests.filter(i => i !== interest) };
            } else {
                if (currentInterests.length >= 3) {
                    triggerToast("You can select up to 3 areas of interest.");
                    return prev;
                }
                return { ...prev, areasOfInterest: [...currentInterests, interest] };
            }
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            supportingDocument: file ? file.name : null
        }));
    };

    const nextStep = () => setCurrentStep(prev => prev < STEPS.length ? prev + 1 : prev);
    const prevStep = () => setCurrentStep(prev => prev > 1 ? prev - 1 : prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting Application:', formData);
        triggerToast('Application Submitted Successfully!');
    };

    return (
        <div className={styles.pageContainer}>
            {/* Toast Notification */}
            {showToast && (
                <div className={styles.toast}>
                    <span className={styles.toastIcon}>⚠️</span>
                    <span>{toastMessage}</span>
                </div>
            )}

            <div className={styles.formCard} id="member-form-card">
                <div className={styles.formHeader}>
                    <h1 className={styles.title}>Online Membership Application Form</h1>
                </div>

                {/* Stepper */}
                <div className={styles.stepper} id="member-stepper">
                    {STEPS.map((step) => (
                        <div
                            key={step.number}
                            className={`${styles.stepItem} ${currentStep >= step.number ? (currentStep === step.number ? styles.active : styles.completed) : ''}`}
                            onClick={() => setCurrentStep(step.number)} /* Allow navigation for testing */
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
                    {currentStep === 1 && (
                        <div className={styles.stepContent}>
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
                    )}

                    {/* STEP 2 */}
                    {currentStep === 2 && (
                        <div className={styles.stepContent}>
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
                    )}

                    {/* STEP 3 - Membership Details */}
                    {currentStep === 3 && (
                        <div className={styles.stepContent}>
                            <h2 className={styles.stepTitle}>Step 3 – Membership Details</h2>
                            <p className={styles.stepDescription}>Select your areas of interest and plan.</p>

                            <div className={styles.formGrid}>
                                {/* Areas of Interest */}
                                <div className={`${styles.inputGroup} ${styles.fullWidth}`} style={{ marginBottom: '1.5rem' }}>
                                    <label className={styles.label}>Areas of Interest (Select up to 3) <span className={styles.required}>*</span></label>
                                    <div className={styles.interestsGrid}>
                                        {INTERESTS.map((interest) => (
                                            <div
                                                key={interest}
                                                className={`${styles.interestItem} ${formData.areasOfInterest.includes(interest) ? styles.selected : ''}`}
                                                onClick={() => handleInterestToggle(interest)}
                                            >
                                                <div className={`${styles.checkbox} ${formData.areasOfInterest.includes(interest) ? styles.checked : ''}`} style={{
                                                    width: '18px', height: '18px',
                                                    background: formData.areasOfInterest.includes(interest) ? '#fec23d' : 'rgba(2, 6, 23, 0.5)',
                                                    borderColor: formData.areasOfInterest.includes(interest) ? '#fec23d' : '#334155',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }}>
                                                    {formData.areasOfInterest.includes(interest) && <span style={{ color: '#020617', fontSize: '12px', fontWeight: 'bold' }}>✓</span>}
                                                </div>
                                                <span className={styles.interestLabel}>{interest}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem' }}>
                                        Selected: {formData.areasOfInterest.length} / 3
                                    </p>
                                </div>

                                {/* Upload Document */}
                                <div className={`${styles.inputGroup} ${styles.fullWidth}`} style={{ marginBottom: '1.5rem' }}>
                                    <label className={styles.label}>Upload Supporting Document (if needed)</label>
                                    <div className={styles.fileUploadWrapper}>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className={styles.fileInput}
                                            accept=".pdf,.doc,.docx,.jpg,.png"
                                        />
                                        {formData.supportingDocument && (
                                            <p style={{ marginTop: '0.5rem', color: '#fec23d', fontSize: '0.9rem' }}>
                                                Selected: {formData.supportingDocument}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Existing Fields */}
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
                    )}

                    {/* STEP 4 */}
                    {currentStep === 4 && (
                        <div className={styles.stepContent}>
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
                    )}

                    {/* STEP 5 */}
                    {currentStep === 5 && (
                        <div className={styles.stepContent}>
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
                                    <span className={styles.summaryLabel}>Selected Interests</span>
                                    <span className={styles.summaryValue}>{formData.areasOfInterest.join(', ') || 'None'}</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span className={styles.summaryLabel}>Membership</span>
                                    <span className={styles.summaryValue}>{formData.membershipType} ({formData.duration})</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 6 */}
                    {currentStep === 6 && (
                        <div className={styles.stepContent}>
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
                    )}

                    {/* ACTIONS */}
                    <div className={styles.actions}>
                        <button
                            type="button"
                            onClick={prevStep}
                            className={styles.backBtn}
                            style={{ opacity: currentStep === 1 ? 0.5 : 1, cursor: currentStep === 1 ? 'not-allowed' : 'pointer' }}
                            disabled={currentStep === 1}
                        >
                            Previous
                        </button>

                        {currentStep < 6 && (
                            <button
                                type="button"
                                onClick={nextStep}
                                className={styles.nextBtn}
                            >
                                Next
                            </button>
                        )}

                        {currentStep === 6 && (
                            <button
                                type="submit"
                                className={styles.nextBtn}
                            >
                                Complete Payment
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MemberApplicationForm;
