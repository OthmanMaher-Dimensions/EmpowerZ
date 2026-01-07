"use client";

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Left: Brand Logo */}
                    <div className={styles.brand}>
                        <img src="/assets/logo.png" alt="EmpowerZ" className={styles.brandLogo} style={{ height: '50px', width: 'auto' }} />
                    </div>

                    {/* Center: Links */}
                    <div className={styles.links}>
                        <span>EMPOWER Z 2025 ©</span>
                        <span className={styles.separator}>|</span>
                        <a href="/terms-and-conditions">TERMS & CONDITIONS</a>
                        <span className={styles.separator}>|</span>
                        <a href="/privacy-policy">PRIVACY POLICY</a>
                    </div>

                    {/* Right: Powered By */}
                    <div className={styles.poweredBy}>
                        POWERED BY
                        <a href="https://lingoshack.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/lingo-logo.png"
                                alt="Lingo Shack"
                                className={styles.lingoLogo}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
