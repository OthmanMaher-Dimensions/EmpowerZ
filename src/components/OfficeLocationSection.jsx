"use client";

import React from 'react';
import styles from './OfficeLocationSection.module.css';

const OfficeLocationSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.greenBlock}></div>
                    <h2 className={styles.title}>Our Offices</h2>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        title="Our Offices Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709664654321!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={styles.map}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocationSection;
