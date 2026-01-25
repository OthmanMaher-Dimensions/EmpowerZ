"use client";

import React from 'react';
import styles from './ContactFormSection.module.css';

const ContactFormSection = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
    });
    const [status, setStatus] = React.useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
            const res = await fetch(`${adminUrl}/api/public/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                // Track successful submission
                // Dynamic import to avoid SSR issues if any, or just standard import
                import('../lib/trackCta').then(({ trackCta }) => {
                    trackCta('Contact Form - Submit Success', 'Contact Us');
                });

                setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    topic: '',
                    message: ''
                });
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.formWrapper}>
                    <p className={styles.introText}>
                        For all other inquiries, please email my AMAZING team via the form below and they will get back to you within 2 business days.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className={styles.input}
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className={styles.input}
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.row}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.fullRow}>
                            <input
                                type="text"
                                name="topic"
                                placeholder="Topic"
                                className={styles.input}
                                value={formData.topic}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.fullRow}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                className={styles.textarea}
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {status.message && (
                            <div className={status.type === 'success' ? styles.successMessage : styles.errorMessage} style={{ marginBottom: '1rem', color: status.type === 'success' ? 'green' : 'red' }}>
                                {status.message}
                            </div>
                        )}

                        <div className={styles.buttonWrapper}>
                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
