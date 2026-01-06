"use client";

import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        // ... (data remains same, assuming I don't need to re-write it if I target correctly, but replace_file_content replaces chunk)
        {
            id: 1,
            name: "Sonia Gibson",
            role: "STAGE Workshop Attendee,",
            date: "June 2024",
            quote: "This platform helped me get clarity, confidence, and community...all in one place.",
            image: "/assets/testimonial-person.png"
        },
        {
            id: 2,
            name: "Shane Stone",
            role: "STAGE Workshop Attendee,",
            date: "June 2024",
            quote: "I landed my first job after graduation, and I know this community gave me the edge.",
            image: "/assets/testimonial-person.png"
        },
        {
            id: 3,
            name: "Aleksandra Pinneri",
            role: "Adelaide's leading Hair & Makeup Artist Stage Virtual Masterclass, October 2024",
            date: "",
            quote: "The discounts alone paid for the membership. But the knowledge and network? Priceless.",
            image: "/assets/testimonial-person.png"
        }
    ];

    const [imgIndex, setImgIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false); // Default to false (Desktop First)

    React.useEffect(() => {
        const handleResize = () => {
            // Treating < 768px as mobile to ensure single slide view on smaller devices only
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setImgIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setImgIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    SEE WHAT OUR <br />
                    MEMBERS REALLY SAY...
                </h2>

                <div className={styles.contentWrapper}>
                    {/* Navigation Arrows - Show on Mobile too now? User said "one slide only" -> needs nav. 
                        Previously hidden on mobile in CSS. Need to unhide. */}
                    <button
                        className={`${styles.navButton} ${styles.prevBtn}`}
                        onClick={prevSlide}
                        aria-label="Previous"
                        style={{ display: isMobile ? 'flex' : '' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19L8 12L15 5V19Z" fill="#ff007f" />
                        </svg>
                    </button>

                    <div className={styles.cardsGrid} style={{
                        gridTemplateColumns: isMobile ? '1fr' : undefined,
                        display: isMobile ? 'block' : 'grid'
                    }}>
                        {isMobile ? (
                            // Mobile: Show only active slide
                            <div className={styles.card}>
                                <img
                                    src="/assets/quote-icon.png"
                                    alt="Quote"
                                    className={styles.quoteIcon}
                                />
                                <div className={styles.cardHeader}>
                                    <img
                                        src={testimonials[imgIndex].image}
                                        alt={testimonials[imgIndex].name}
                                        className={styles.userImage}
                                    />
                                    <div className={styles.userInfo}>
                                        <h3 className={styles.userName}>{testimonials[imgIndex].name}</h3>
                                        <p className={styles.userRole}>{testimonials[imgIndex].role}</p>
                                        {testimonials[imgIndex].date && <span className={styles.date}>{testimonials[imgIndex].date}</span>}
                                    </div>
                                </div>
                                <div className={styles.quoteContent}>
                                    <p className={styles.quoteText}>{testimonials[imgIndex].quote}</p>
                                </div>
                            </div>
                        ) : (
                            // Desktop: Show Grid
                            testimonials.map((item) => (
                                <div key={item.id} className={styles.card}>
                                    <img
                                        src="/assets/quote-icon.png"
                                        alt="Quote"
                                        className={styles.quoteIcon}
                                    />
                                    <div className={styles.cardHeader}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={styles.userImage}
                                        />
                                        <div className={styles.userInfo}>
                                            <h3 className={styles.userName}>{item.name}</h3>
                                            <p className={styles.userRole}>{item.role}</p>
                                            {item.date && <span className={styles.date}>{item.date}</span>}
                                        </div>
                                    </div>
                                    <div className={styles.quoteContent}>
                                        <p className={styles.quoteText}>{item.quote}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.nextBtn}`}
                        onClick={nextSlide}
                        aria-label="Next"
                        style={{ display: isMobile ? 'flex' : '' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19V5Z" fill="#ff007f" />
                        </svg>
                    </button>
                </div>

                <button className={styles.ctaButton}>
                    Start Your Journey to Exclusive Perks
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
