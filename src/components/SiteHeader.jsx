"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './SiteHeader.module.css';
import { trackCta } from '../lib/trackCta';

const SiteHeader = ({ dynamicLinks: initialDynamicLinks }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [dynamicLinks, setDynamicLinks] = useState(initialDynamicLinks || []);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // If no initial links provided, fetch client-side as fallback
    useEffect(() => {
        if (!initialDynamicLinks || initialDynamicLinks.length === 0) {
            const fetchPages = async () => {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'}/api/public/pages`);
                    if (res.ok) {
                        const pages = await res.json();
                        const links = pages
                            .filter(p => p.slug !== 'home' && p.slug !== '/')
                            .map(p => ({
                                name: p.name,
                                href: `/${p.slug}`
                            }));
                        setDynamicLinks(links);
                    }
                } catch (error) {
                    console.error("Failed to fetch menu items:", error);
                }
            };
            fetchPages();
        }
    }, [initialDynamicLinks]);

    const STATIC_LINKS = [
        { name: 'Blogs', href: '/blogs' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact Us', href: '/contact-us' }
    ];

    // Combine: Home -> Dynamic Pages -> Static Links
    const navLinks = [
        ...dynamicLinks,
        ...STATIC_LINKS
    ];

    const isActive = (path) => pathname === path;

    const headerClasses = isMounted
        ? [
            styles.header,
            isScrolled ? styles.headerScrolled : null,
            mobileMenuOpen ? styles.headerMobileOpen : null
        ].filter(Boolean).join(' ')
        : styles.header;

    return (
        <>
            <header
                id="site-header"
                className={headerClasses}
                suppressHydrationWarning
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

                        <Link
                            href="/login"
                            className={styles.loginBtn}
                            aria-label="Login"
                            onClick={() => trackCta('Header - Login', 'Unknown')}
                        >
                            Login
                        </Link>
                        <Link
                            href="/apply-member"
                            className={styles.joinBtn}
                            aria-label="Join Now"
                            onClick={() => trackCta('Header - Join Now', 'Unknown')}
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={styles.mobileToggle}
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {isMounted && mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>

                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileMenu} ${isMounted && mobileMenuOpen ? styles.mobileMenuOpen : ''}`}
            >
                <ul className={styles.mobileNavList}>
                    <li>
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={isActive('/') ? styles.mobileNavLinkHome : styles.mobileNavLink}
                        >
                            Home
                        </Link>
                    </li>
                    {navLinks.map((link, i) => (
                        <li key={link.name} style={{ transitionDelay: `${i * 0.05}s` }}>
                            <Link
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={isActive(link.href) ? styles.mobileNavLinkHome : styles.mobileNavLink}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Actions */}
                <div className={styles.mobileActions}>
                    <Link
                        href="/apply-member"
                        className={styles.mobileJoinBtn}
                        aria-label="Mobile Join"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            trackCta('Mobile Menu - Join Now', 'Unknown');
                        }}
                    >
                        Join Now
                    </Link>
                    <Link
                        href="/login"
                        className={styles.mobileLoginBtn}
                        aria-label="Mobile Login"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            trackCta('Mobile Menu - Login', 'Unknown');
                        }}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
};
export default SiteHeader;
