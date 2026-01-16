"use client";

import React, { useState, useEffect } from 'react';
import styles from './FormComponents.module.css';

const COUNTRIES = [
    { name: 'Select a country', price: 0 },
    { name: 'Jordan', price: 100 },
    { name: 'Egypt', price: 80 },
    { name: 'Saudi Arabia', price: 150 },
    { name: 'UAE', price: 200 },
    { name: 'Iraq', price: 90 },
    { name: 'Lebanon', price: 95 },
    { name: 'Palestine', price: 85 }
];

const SponsorApplicationForm = () => {
    const [memberCount, setMemberCount] = useState(1);
    const [category, setCategory] = useState("Non-Student");
    const [selectedCountryName, setSelectedCountryName] = useState("Select a country");
    const [basePrice, setBasePrice] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const country = COUNTRIES.find(c => c.name === selectedCountryName);
        setBasePrice(country ? country.price : 0);
    }, [selectedCountryName]);

    const increment = () => setMemberCount(prev => prev + 1);
    const decrement = () => setMemberCount(prev => (prev > 1 ? prev - 1 : 1));

    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleCountryChange = (e) => setSelectedCountryName(e.target.value);

    // Pricing Logic
    const discountRate = category === "Student" ? 0.5 : 0;
    const discountedPricePerMember = basePrice * (1 - discountRate);
    const total = discountedPricePerMember * memberCount;

    // Formatting currency
    // Using USD for simplicity, or just symbol
    const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formCard}>
                <div className={styles.formHeader}>
                    <h1 className={styles.title}>Sponsor a Member</h1>
                    <p className={styles.subtitle}>Investing in learning and skill development is a strategic necessity. Sponsor a member now.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGrid}>
                        {/* Number of Sponsored Members */}
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Number of Sponsored Members</label>
                            <div className={styles.counterWrapper}>
                                <button type="button" onClick={decrement} className={styles.counterBtn}>-</button>
                                <div className={styles.counterValue}>{memberCount}</div>
                                <button type="button" onClick={increment} className={styles.counterBtn}>+</button>
                            </div>
                        </div>

                        {/* Category */}
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Category</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Non-Student"
                                        checked={category === "Non-Student"}
                                        onChange={handleCategoryChange}
                                        className={styles.radioInput}
                                    />
                                    Non-Student
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Student"
                                        checked={category === "Student"}
                                        onChange={handleCategoryChange}
                                        className={styles.radioInput}
                                    />
                                    Student (50% discount)
                                </label>
                            </div>
                        </div>

                        {/* Country */}
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Country</label>
                            <select
                                className={styles.select}
                                value={selectedCountryName}
                                onChange={handleCountryChange}
                            >
                                {COUNTRIES.map((c) => (
                                    <option key={c.name} value={c.name}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Pricing Summary */}
                    <div className={styles.priceSummary}>
                        <div className={styles.priceRow}>
                            <span className={styles.label}>Base Price / Member</span>
                            <span className={styles.summaryValue}>{formatCurrency(basePrice)}</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span className={styles.label}>Category Discount</span>
                            <span className={styles.summaryValue}>{discountRate * 100}%</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span className={styles.label}>Subtotal ({memberCount} members)</span>
                            <span className={styles.summaryValue}>{formatCurrency(total)}</span>
                        </div>

                        <div className={`${styles.priceRow} ${styles.total}`}>
                            <span>Total</span>
                            <span>{formatCurrency(total)}</span>
                        </div>
                    </div>

                    <div className={styles.actions} style={{ justifyContent: 'center', borderTop: 'none', marginTop: '2rem' }}>
                        <button type="submit" className={styles.nextBtn} style={{ width: '100%' }}>
                            Sponsor Now — Go to Payment
                        </button>
                    </div>
                </form>
            </div>

            {/* Modal */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalIcon}>
                            🚀
                        </div>
                        <h2 className={styles.modalTitle}>Coming Soon!</h2>
                        <p className={styles.modalText}>
                            We're working hard to integrate our secure payment gateway.
                            Please check back shortly to complete your sponsorship!
                        </p>
                        <button onClick={closeModal} className={styles.modalButton}>
                            Got it!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SponsorApplicationForm; // Re-export
