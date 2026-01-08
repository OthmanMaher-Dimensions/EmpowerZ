import styles from './GalleryHero.module.css';

const GalleryHero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>Our Visual Journey</h1>
                <p className={styles.subtitle}>
                    Explore moments from our events, workshops, and community gatherings.
                </p>
            </div>
            {/* Background Image / Overlay */}
            <div className={styles.bgImage}></div>
            <div className={styles.overlay}></div>
        </section>
    );
};

export default GalleryHero;
