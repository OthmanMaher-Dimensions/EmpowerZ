"use client";

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import styles from './OfficeLocationSection.module.css';

const OfficeLocationSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>Our Offices</h2>
                </div>

                <div className={styles.officesGrid}>
                    {/* Jordan */}
                    <div className={styles.officeCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.countryName}>Jordan</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.detailRow}>
                                <MapPin className={styles.icon} />
                                <p className={styles.detailText}>Amman, King Abdullah II St, Building 15</p>
                            </div>
                            <div className={styles.detailRow}>
                                <Phone className={styles.icon} />
                                <p className={styles.detailText}>+962 6 123 4567</p>
                            </div>
                        </div>
                    </div>

                    {/* Saudi Arabia */}
                    <div className={styles.officeCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.countryName}>Saudi Arabia</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.detailRow}>
                                <MapPin className={styles.icon} />
                                <p className={styles.detailText}>Riyadh, Olaya St, Tower 7</p>
                            </div>
                            <div className={styles.detailRow}>
                                <Phone className={styles.icon} />
                                <p className={styles.detailText}>+966 11 987 6543</p>
                            </div>
                        </div>
                    </div>

                    {/* Egypt */}
                    <div className={styles.officeCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.countryName}>Egypt</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.detailRow}>
                                <MapPin className={styles.icon} />
                                <p className={styles.detailText}>Cairo, New Cairo, 5th Settlement</p>
                            </div>
                            <div className={styles.detailRow}>
                                <Phone className={styles.icon} />
                                <p className={styles.detailText}>+20 2 2345 6789</p>
                            </div>
                        </div>
                    </div>

                    {/* United States */}
                    <div className={styles.officeCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.countryName}>United States</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.detailRow}>
                                <MapPin className={styles.icon} />
                                <p className={styles.detailText}>New York, 5th Ave, Suite 300</p>
                            </div>
                            <div className={styles.detailRow}>
                                <Phone className={styles.icon} />
                                <p className={styles.detailText}>+1 212 555 0199</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocationSection;
