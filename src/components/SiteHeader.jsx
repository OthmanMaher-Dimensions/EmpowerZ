"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './SiteHeader.module.css';

const SiteHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Re-initialize static menu on mount/navigation
        if (window.initMobileMenu) {
            window.initMobileMenu();
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]); // Re-run on path change

    const navLinks = [
        { name: 'What We Offer', href: '/what-we-offer' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us', href: '/contact-us' }
    ];

    const isActive = (path) => pathname === path;

    return (
        <header
            id="site-header"
            className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''} ${isScrolled ? 'scrolled-mode' : ''}`}
        >
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <img src="/assets/logo.png" alt="EmpowerZ Logo" className={styles.logo} />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link
                                href="/"
                                className={isActive('/') ? styles.navLinkHome : styles.navLink}
                            >
                                Home
                            </Link>
                        </li>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={isActive(link.href) ? styles.navLinkHome : styles.navLink}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Actions (Login) */}
                <div className={styles.desktopActions}>
                    <Link href="/#login" className={styles.loginBtn}>
                        Login
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    id="mobile-menu-toggle"
                    className={styles.mobileToggle}
                    type="button"
                    aria-label="Toggle menu"
                    style={{ cursor: 'pointer', zIndex: 2147483647, position: 'relative' }}
                >
                    <Menu size={32} style={{ pointerEvents: 'none' }} />
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu-overlay"
                className={styles.mobileMenu}
            >
                <ul className={styles.mobileNavList}>
                    <li>
                        <Link
                            href="/"
                            className={`mobile-menu-link ${isActive('/') ? styles.mobileNavLinkHome : styles.mobileNavLink}`}
                        >
                            Home
                        </Link>
                    </li>
                    {navLinks.map((link, i) => (
                        <li key={link.name} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <Link
                                href={link.href}
                                className={`mobile-menu-link ${isActive(link.href) ? styles.mobileNavLinkHome : styles.mobileNavLink}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Login Button */}
                <Link href="/#login" className={`mobile-menu-link ${styles.mobileLoginBtn}`}>
                    Login
                </Link>
            </div>
        </header>
    );
};
export default SiteHeader;
