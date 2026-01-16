"use client";

import React from 'react';
import styles from './Footer.module.css';

const Footer = ({
    brandLogo = "/assets/logo.png",
    copyrightText = "EMPOWER Z 2025 ©",
    lingoLogo = "/assets/lingo-logo.png",
    style = {}
}) => {
    return (
        <footer className={styles.footer} style={style}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Left: Brand Logo */}
                    <div className={styles.brand}>
                        <img src={brandLogo} alt="EmpowerZ" className={styles.brandLogo} style={{ height: '50px', width: 'auto' }} />
                    </div>

                    {/* Center: Links */}
                    <div className={styles.links}>
                        <span>{copyrightText}</span>
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
                                src={lingoLogo}
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
