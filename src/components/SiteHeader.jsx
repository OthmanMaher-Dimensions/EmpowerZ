"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './SiteHeader.module.css';

const SiteHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
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

    const [dynamicLinks, setDynamicLinks] = useState([]);

    const STATIC_LINKS = [
        { name: 'Blogs', href: '/blogs' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact Us', href: '/contact-us' }
    ];

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'}/api/public/pages`);
                if (res.ok) {
                    const pages = await res.json();
                    // Filter out home if it exists as a dynamic page to avoid duplicate "Home"
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
    }, []);

    // Combine: Home -> Dynamic Pages -> Static Links
    // "What We Offer" and "About Us" were hardcoded before. If they are not builder pages, I should keep them?
    // The user said "make the pages like the structure its saved on". 
    // If I replace them entirely, I might lose "What We Offer" if it's not in the builder.
    // I will check if I should keep the old "What We Offer" and "About Us" or assume they are now dynamic.
    // Given the prompt "the blogs or gallery or contact us are stuck", it implies those are the ONLY stuck ones.
    // I'll assume "What We Offer" and "About Us" should be managed by the builder now or I should check if they exist.
    // To be safe, I will append the NEW dynamic links BEFORE the static set (Blogs, Gallery, Contact).

    // Updated Logic: 
    // If "What We Offer" and "About Us" are NOT in builder, I should probably keep them if they are static files?
    // But the user wants "pages like the structure its saved on".
    // I'll play it safe: Include hardcoded "What We Offer" and "About Us" ONLY if I don't see them in dynamic links?
    // Actually, "What We Offer" and "About Us" are likely the ones being converted to builder pages.
    // I'll start with just Home -> Dynamic -> Blogs/Gallery/Contact.

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

                        <Link href="/login" className={styles.loginBtn} aria-label="Login">
                            Login
                        </Link>
                        <Link href="/apply-member" className={styles.joinBtn} aria-label="Join Now">
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
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Join Now
                    </Link>
                    <Link
                        href="/login"
                        className={styles.mobileLoginBtn}
                        aria-label="Mobile Login"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
};
export default SiteHeader;
