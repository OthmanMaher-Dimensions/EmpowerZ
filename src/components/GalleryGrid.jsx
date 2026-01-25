"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Folder, Image as ImageIcon } from 'lucide-react';
import styles from './GalleryGrid.module.css';

const GalleryGrid = () => {
    const [galleries, setGalleries] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState('folders'); // 'folders' or 'images'

    const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';

    const getImageUrl = (url) => {
        if (!url) return null;
        if (url.startsWith('http') || url.startsWith('https')) return url;
        if (url.startsWith('/uploads/')) return `${ADMIN_URL}${url}`;
        return url; // Internal assets like /assets/
    };

    useEffect(() => {
        fetchGalleries();
    }, []);

    const fetchGalleries = async () => {
        try {
            const res = await fetch(`${ADMIN_URL}/api/public/galleries`);
            if (res.ok) {
                const data = await res.json();
                setGalleries(data);
            }
        } catch (error) {
            console.error("Failed to fetch galleries", error);
        } finally {
            setLoading(false);
        }
    };

    const handleGalleryClick = async (galleryId) => {
        setLoading(true);
        try {
            const res = await fetch(`${ADMIN_URL}/api/public/galleries/${galleryId}`);
            if (res.ok) {
                const data = await res.json();
                setSelectedGallery(data);
                setGalleryImages(data.images || []);
                setView('images');
            }
        } catch (error) {
            console.error("Failed to fetch gallery details", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        setSelectedGallery(null);
        setGalleryImages([]);
        setView('folders');
    };

    if (loading && view === 'folders' && galleries.length === 0) {
        return (
            <section className={styles.section}>
                <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
                    <div className={styles.spinner}></div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Header / Navigation */}
                <div className={styles.header}>
                    {view === 'images' && (
                        <button onClick={handleBack} className={styles.backBtn}>
                            <ArrowLeft size={20} /> Back to Galleries
                        </button>
                    )}
                    <h2 className={styles.viewTitle}>
                        {view === 'folders' ? 'Photo Galleries' : selectedGallery?.name}
                    </h2>
                    {view === 'images' && selectedGallery && (
                        <div className={styles.galleryMeta}>
                            {selectedGallery.date && (
                                <span className={styles.metaItem}>
                                    {new Date(selectedGallery.date).toLocaleDateString()}
                                </span>
                            )}
                            {selectedGallery.location && (
                                <span className={styles.metaItem}>• {selectedGallery.location}</span>
                            )}
                            {selectedGallery.venue && (
                                <span className={styles.metaItem}>• {selectedGallery.venue}</span>
                            )}
                        </div>
                    )}
                </div>

                {/* FOLDERS VIEW */}
                {view === 'folders' && (
                    <div className={styles.grid}>
                        {galleries.length === 0 ? (
                            <div className={styles.emptyState}>No galleries found.</div>
                        ) : (
                            galleries.map((gallery) => (
                                <div
                                    key={gallery.id}
                                    className={styles.card}
                                    onClick={() => handleGalleryClick(gallery.id)}
                                >
                                    <div className={styles.imageWrapper}>
                                        {/* Show cover image or first image, else placeholder folder icon */}
                                        {gallery.coverImage || (gallery.images && gallery.images[0]?.url) || (gallery._count?.images > 0) ? (
                                            <img
                                                src={getImageUrl(gallery.coverImage || gallery.images?.[0]?.url) || '/assets/placeholder-gallery.jpg'}
                                                alt={gallery.name}
                                                className={styles.image}
                                                loading="lazy"
                                                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#334155' }}>
                                                <Folder size={64} color="#94a3b8" />
                                            </div>
                                        )}
                                        {/* Fallback div if image errors (managed via onError logic above mostly, or just ensuring placeholder logic) */}

                                        <div className={styles.overlay}>
                                            <span className={styles.caption}>{gallery._count?.images || 0} Items</span>
                                        </div>
                                    </div>
                                    <h3 style={{ marginTop: '1rem', color: '#fff', fontSize: '1.25rem', textAlign: 'center' }}>
                                        {gallery.name}
                                    </h3>
                                    <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                        {gallery.date && (
                                            <span>{new Date(gallery.date).toLocaleDateString()}</span>
                                        )}
                                        {gallery.location && (
                                            <span> • {gallery.location}</span>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* IMAGES VIEW */}
                {view === 'images' && (
                    <div className={styles.grid}>
                        {galleryImages.length === 0 ? (
                            <div className={styles.emptyState}>No images in this gallery.</div>
                        ) : (
                            galleryImages.map((img) => (
                                <div key={img.id} className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={getImageUrl(img.url)}
                                            alt={img.caption || 'Gallery Image'}
                                            className={styles.image}
                                            loading="lazy"
                                            onError={(e) => { e.target.src = '/assets/placeholder-gallery.jpg'; }}
                                        />
                                        {img.caption && (
                                            <div className={styles.overlay}>
                                                <span className={styles.caption}>{img.caption}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default GalleryGrid;
