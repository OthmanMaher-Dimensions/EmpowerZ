"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Philosophy.module.css';

const Philosophy = () => {
  return (
    <section className={styles.section} id="philosophy">
      <div className={styles.container}>

        {/* Top Quote Section */}
        <div className={styles.quoteWrapper}>
          <div className={styles.quoteHeader}>
            <img
              src="/assets/henry-ford.png"
              alt="Henry Ford"
              className={`${styles.henryFordImage} ${styles.sketch}`}
            />
            <p className={styles.quoteIntro}>The business magnate, Henry Ford, once said:</p>
          </div>
          <blockquote className={styles.quoteText}>
            <span className={styles.quoteMark}>“</span>
            Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young
            <span className={styles.quoteMark}>”</span>
          </blockquote>
        </div>

        {/* Beliefs & Polaroids Grid */}
        {/* Beliefs & Polaroids Grid */}
        <div className={styles.beliefSection}>

          {/* Decorative Elements */}
          <div className={styles.beliefBadge}>
            And We Believe It Too
          </div>

          <img src="/assets/arrow-curve.png" className={`${styles.arrowCurve} ${styles.arrowStart}`} alt="" />
          <img src="/assets/arrow-last.png" className={`${styles.arrowCurve} ${styles.arrowEnd}`} alt="" />

          {/* Polaroids */}
          <div className={styles.polaroidContainer}>

            {/* Item 1 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src="/assets/first-people.png"
                  alt="Late night office work"
                  className={styles.polaroidImage}
                />
              </div>
              <p className={styles.polaroidText}>
                Special discounts you won't find anywhere else.
              </p>
            </div>

            {/* Item 2 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src="/assets/second-people.png"
                  alt="Team collaboration"
                  className={styles.polaroidImage}
                />
              </div>
              {/* No text for second item as per reference */}
            </div>

            {/* Item 3 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src="/assets/third-people.png"
                  alt="Focused learning"
                  className={styles.polaroidImage}
                  style={{ filter: 'hue-rotate(15deg)' }}
                />
              </div>
              <p className={styles.polaroidText}>
                Exclusive networking events with peers, like-minded people and professionals.
              </p>
            </div>

            {/* Item 4 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src="/assets/fourth-people.png"
                  alt="Team collaboration"
                  className={styles.polaroidImage}
                  style={{ filter: 'grayscale(0.2)' }}
                />
              </div>
              <p className={styles.polaroidText}>
                Paid internship opportunities with our patrons and partners.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaWrapper}>
          <a href="#signup" className={styles.ctaButton}>
            Sign Up Now <ArrowRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
