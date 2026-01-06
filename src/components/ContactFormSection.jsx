"use client";

import React from 'react';
import styles from './ContactFormSection.module.css';

const ContactFormSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.formWrapper}>
                    <p className={styles.introText}>
                        For all other inquiries, please email my AMAZING team via the form below and they will get back to you within 2 business days.
                    </p>

                    <form className={styles.form}>
                        <div className={styles.row}>
                            <input type="text" placeholder="First Name" className={styles.input} />
                            <input type="text" placeholder="Last Name" className={styles.input} />
                        </div>
                        <div className={styles.row}>
                            <input type="email" placeholder="Email" className={styles.input} />
                            <input type="tel" placeholder="Phone" className={styles.input} />
                        </div>
                        <div className={styles.fullRow}>
                            <input type="text" placeholder="Topic" className={styles.input} />
                        </div>
                        <div className={styles.fullRow}>
                            <textarea placeholder="Message" className={styles.textarea} rows={4} />
                        </div>

                        <div className={styles.buttonWrapper}>
                            <button type="submit" className={styles.submitButton}>
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
