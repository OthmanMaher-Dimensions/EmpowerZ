"use client";

import React from 'react';
import Link from 'next/link';
// Removed ArrowLeft since "Back to Home" is removed
import styles from './Login.module.css';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            {/* Removed Back to Home Link */}

            <div className={styles.loginCard}>
                {/* Left Side - Image */}
                <div className={styles.imageSide}>
                    <img
                        src="/assets/hero-bg.png"
                        alt="EmpowerZ Community"
                        className={styles.bgImage}
                    />
                    <div className={styles.imageOverlay} />

                    <div className={styles.imageContent}>
                        <h2 className={styles.imageTitle}>Unlock Your Potential</h2>
                        <p className={styles.imageSubtitle}>
                            Connect, grow, and access exclusive opportunities with your EmpowerZ membership.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className={styles.formSide}>
                    <div className={styles.logoContainer}>
                        <Link href="/">
                            <img src="/assets/logo.png" alt="EmpowerZ Logo" className={styles.logo} />
                        </Link>
                    </div>
                    <h1 className={styles.formTitle}>Member Portal</h1>
                    <p className={styles.formSubtitle}>
                        Welcome back! Please login to access your account.
                    </p>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.actions}>
                            <label className={styles.rememberMe}>
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <Link href="/forgot-password" className={styles.forgotPassword}>
                                Forgot Password
                            </Link>
                        </div>

                        <button type="button" className={styles.submitButton}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
