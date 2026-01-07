"use client";

import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import styles from '../../components/LegalPage.module.css';

const PrivacyPolicy = () => {
    return (
        <main className={styles.pageContainer}>
            <SiteHeader />

            <div className={styles.contentContainer}>
                <h1 className={styles.title}>Privacy Policy</h1>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                    <p className={styles.text}>
                        At EmpowerZ, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by EmpowerZ and how we use it.
                    </p>
                    <p className={styles.text}>
                        We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                    <p className={styles.text}>
                        We use the information we collect in various ways, including to:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Provide, operate, and maintain our website</li>
                        <li className={styles.listItem}>Improve, personalize, and expand our website</li>
                        <li className={styles.listItem}>Understand and analyze how you use our website</li>
                        <li className={styles.listItem}>Communicate with you, either directly or through one of our partners</li>
                        <li className={styles.listItem}>Send you emails regarding your membership and updates</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Data Protection</h2>
                    <p className={styles.text}>
                        We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Sharing Your Personal Information</h2>
                    <p className={styles.text}>
                        We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Changes to This Privacy Policy</h2>
                    <p className={styles.text}>
                        EmpowerZ has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
