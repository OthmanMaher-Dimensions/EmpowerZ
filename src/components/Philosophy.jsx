"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Philosophy.module.css';

const Philosophy = ({
  quoteIntro = "The business magnate, Henry Ford, once said:",
  quoteText = "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young",
  beliefTitle = "And We Believe It Too",
  ctaText = "Sign Up Now",
  henryFordImage = "/assets/henry-ford.png",
  polaroid1Image = "/assets/first-people.png",
  polaroid1Text = "Special discounts you won't find anywhere else.",
  polaroid2Image = "/assets/second-people.png",
  polaroid2Text = "FREE online and in-person training courses for members only",
  polaroid3Image = "/assets/third-people.png",
  polaroid3Text = "Exclusive networking events with peers, like-minded people and professionals.",
  polaroid4Image = "/assets/fourth-people.png",
  polaroid4Text = "Paid internship opportunities with our patrons and partners.",
  arrowCurveImage = "/assets/arrow-curve.png",
  arrowLastImage = "/assets/arrow-last.png",
  style = {}
}) => {
  return (
    <section className={styles.section} id="philosophy" style={style}>
      <div className={styles.container}>

        {/* Top Quote Section */}
        <div className={styles.quoteWrapper}>
          <div className={styles.quoteHeader}>
            <img
              src={henryFordImage}
              alt="Henry Ford"
              className={`${styles.henryFordImage} ${styles.sketch}`}
            />
            <p className={styles.quoteIntro}>{quoteIntro}</p>
          </div>
          <blockquote className={styles.quoteText}>
            <span className={styles.quoteMark}>“</span>
            {quoteText}
            <span className={styles.quoteMark}>”</span>
          </blockquote>
        </div>

        {/* Beliefs & Polaroids Grid */}
        <div className={styles.beliefSection}>

          {/* Decorative Elements */}
          <div className={styles.beliefBadge}>
            {beliefTitle}
          </div>

          <img src={arrowCurveImage} className={`${styles.arrowCurve} ${styles.arrowStart}`} alt="" />
          <img src={arrowLastImage} className={`${styles.arrowCurve} ${styles.arrowEnd}`} alt="" />

          {/* Polaroids */}
          <div className={styles.polaroidContainer}>

            {/* Item 1 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src={polaroid1Image}
                  alt="Late night office work"
                  className={styles.polaroidImage}
                />
              </div>
              <p className={styles.polaroidText}>
                {polaroid1Text}
              </p>
            </div>

            {/* Item 2 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src={polaroid2Image}
                  alt="Team collaboration"
                  className={styles.polaroidImage}
                />
              </div>
              <p className={styles.polaroidText}>
                {polaroid2Text}
              </p>
            </div>

            {/* Item 3 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src={polaroid3Image}
                  alt="Focused learning"
                  className={styles.polaroidImage}
                  style={{ filter: 'hue-rotate(15deg)' }}
                />
              </div>
              <p className={styles.polaroidText}>
                {polaroid3Text}
              </p>
            </div>

            {/* Item 4 */}
            <div className={styles.polaroidItem}>
              <div className={styles.polaroidFrame}>
                <img
                  src={polaroid4Image}
                  alt="Team collaboration"
                  className={styles.polaroidImage}
                  style={{ filter: 'grayscale(0.2)' }}
                />
              </div>
              <p className={styles.polaroidText}>
                {polaroid4Text}
              </p>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaWrapper}>
          <Link href="/apply-member" className={styles.ctaButton}>
            {ctaText} <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
