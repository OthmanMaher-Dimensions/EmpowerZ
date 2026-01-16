"use client";

import React from 'react';
import styles from './GallerySection.module.css';

const GallerySection = ({
    images,
    style = {}
}) => {
    // Default images if none provided
    const defaultImages = [
        "/assets/gallery-img.png",
        "/assets/gallery-2.png",
        "/assets/gallery-3.png",
        "/assets/gallery-4.png",
        "/assets/gallery-5.png",
        "/assets/gallery-6.png"
    ];

    const displayImages = (images && images.length > 0) ? images : defaultImages;

    return (
        <section className={styles.gallerySection} style={style}>
            <div className={styles.galleryGrid}>
                {displayImages.map((src, index) => (
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
