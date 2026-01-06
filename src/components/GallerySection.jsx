"use client";

import React from 'react';
import styles from './GallerySection.module.css';

const GallerySection = () => {
    // 6 repetitions of the same image as requested
    const images = [
        "/assets/gallery-img.png",
        "/assets/gallery-2.png",
        "/assets/gallery-3.png",
        "/assets/gallery-4.png",
        "/assets/gallery-5.png",
        "/assets/gallery-6.png"
    ];

    return (
        <section className={styles.gallerySection}>
            <div className={styles.galleryGrid}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className={styles.galleryImage}
                    />
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
