"use client";

import React from 'react';
import styles from './GalleryGrid.module.css';

const galleryImages = [
    { src: '/assets/about/about-hero-bg.jpg', alt: 'EmpowerZ Community Gathering' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Making an Impact' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Industry Meetups' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Career Fairs' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Leadership Summits' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Community Event' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Workshop Session' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Networking Night' },
    { src: '/assets/about/about-hero-bg.jpg', alt: 'Youth Conference' },
];

const GalleryGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {galleryImages.map((img, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={styles.image}
                                    loading="lazy"
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.caption}>{img.alt}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryGrid;
