"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'What We Offer', href: '/what-we-offer' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' }
  ];

  const isActive = (path) => pathname === path;

  const toggleMenu = (e) => {
    // Debugging flag using window for browser agent
    if (typeof window !== 'undefined') window.burgerClicked = true;
    console.log("Toggling menu. Current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Ensure component render is logged
  console.log("Header rendering. Menu Open:", isMobileMenuOpen);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''} ${isMobileMenuOpen ? styles.headerMobileOpen : ''}`}
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
          className={styles.mobileToggle}
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
          style={{ cursor: 'pointer', zIndex: 2147483647, position: 'relative' }}
        >
          {isMobileMenuOpen ?
            <X size={32} style={{ pointerEvents: 'none' }} /> :
            <Menu size={32} style={{ pointerEvents: 'none' }} />
          }
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
      >
        <ul className={styles.mobileNavList}>
          <li>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={isActive('/') ? styles.mobileNavLinkHome : styles.mobileNavLink}
            >
              Home
            </Link>
          </li>
          {navLinks.map((link, i) => (
            <li key={link.name} style={{ transitionDelay: `${i * 0.1}s` }}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={isActive(link.href) ? styles.mobileNavLinkHome : styles.mobileNavLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Login Button */}
        <Link href="/#login" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileLoginBtn}>
          Login
        </Link>
      </div>
    </header>
  );
};
export default Header;
