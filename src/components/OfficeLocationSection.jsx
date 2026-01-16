"use client";

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './OfficeLocationSection.module.css';

const OfficeLocationSection = ({ offices = [] }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>Our Offices</h2>
                </div>

                <div className={styles.officesGrid}>
                    {offices.length > 0 ? (
                        offices.map((office) => (
                            <div key={office.id} className={styles.officeCard}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.countryName}>{office.country}</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.detailRow}>
                                        <MapPin className={styles.icon} />
                                        <p className={styles.detailText}>{office.address}</p>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <Phone className={styles.icon} />
                                        <p className={styles.detailText}>{office.phone}</p>
                                    </div>
                                    {office.email && (
                                        <div className={styles.detailRow}>
                                            <Mail className={styles.icon} />
                                            <p className={styles.detailText}>{office.email}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.detailText}>No office locations found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OfficeLocationSection;
