"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './ForgotPassword.module.css';

const ForgotPasswordPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logoText}>EMPOWERZ</div>
                <h1 className={styles.title}>Reset Password</h1>
                <p className={styles.subtitle}>
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className={styles.input}
                        />
                    </div>

                    <button type="button" className={styles.submitButton}>
                        Send Reset Link
                    </button>

                    <Link href="/login" className={styles.backLink}>
                        <ArrowLeft size={18} /> Back to Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
