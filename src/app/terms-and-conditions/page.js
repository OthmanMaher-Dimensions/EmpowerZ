import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import { getNavLinks } from '../../lib/getNavLinks';
import Footer from '../../components/Footer';
import styles from '../../components/LegalPage.module.css';

const TermsAndConditions = async () => {
    const navLinks = await getNavLinks();
    return (
        <main className={styles.pageContainer}>
            <SiteHeader dynamicLinks={navLinks} />

            <div className={styles.contentContainer}>
                <h1 className={styles.title}>Terms and Conditions</h1>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Introduction</h2>
                    <p className={styles.text}>
                        Welcome to EmpowerZ! These Terms and Conditions outline the rules and regulations for the use of EmpowerZ's Website and Services.
                    </p>
                    <p className={styles.text}>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use EmpowerZ if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Membership & Services</h2>
                    <p className={styles.text}>
                        EmpowerZ offers various membership tiers and educational services. By subscribing to our services, you agree to pay the fees associated with your selected tier.
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>All memberships are non-transferable unless explicitly stated otherwise.</li>
                        <li className={styles.listItem}>We reserve the right to modify or discontinue any aspect of our services at any time.</li>
                        <li className={styles.listItem}>Access to premium content is limited to active members only.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. User Responsibilities</h2>
                    <p className={styles.text}>
                        As a user of our platform, you agree to use our services only for lawful purposes due to the nature of our community content.
                    </p>
                    <p className={styles.text}>
                        You must not use our website to harass, abuse, or harm another person or group, or to post any content that is offensive or illegal.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
                    <p className={styles.text}>
                        Unless otherwise stated, EmpowerZ and/or its licensors own the intellectual property rights for all material on EmpowerZ. All intellectual property rights are reserved.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Contact Us</h2>
                    <p className={styles.text}>
                        If you have any questions about these Terms and Conditions, please contact us via our Contact page or email.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default TermsAndConditions;
