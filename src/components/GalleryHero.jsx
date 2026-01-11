import styles from './GalleryHero.module.css';
import SiteHeader from './SiteHeader';

const GalleryHero = () => {
    return (
        <section className={styles.section}>
            <SiteHeader />
            <div className={styles.container}>
                <h1 className={styles.title}>Our Visual Journey</h1>
                <p className={styles.subtitle}>
                    Explore moments from our events, workshops, and community gatherings.
                </p>
                {/* Mobile Social Icons Row */}
                <div className={styles.mobileSocials}>
                    {[
                        { img: '/assets/icon-youtube-gold.png', href: '#' },
                        { img: '/assets/icon-x-gold.png', href: '#' },
                        { img: '/assets/icon-facebook-gold.png', href: '#' },
                        { img: '/assets/icon-instagram-gold.png', href: '#' },
                        { img: '/assets/icon-linkedin-gold.png', href: '#' }
                    ].map((item, i) => (
                        <a key={i} href={item.href} className={styles.socialIconLink}>
                            <img src={item.img} alt="Social Icon" className={styles.socialIconImg} />
                        </a>
                    ))}
                </div>
            </div>
            {/* Social Sidebar */}
            <div className={styles.socialSidebar}>
                {[
                    { img: '/assets/icon-youtube-gold.png', href: '#' },
                    { img: '/assets/icon-x-gold.png', href: '#' },
                    { img: '/assets/icon-facebook-gold.png', href: '#' },
                    { img: '/assets/icon-instagram-gold.png', href: '#' },
                    { img: '/assets/icon-linkedin-gold.png', href: '#' }
                ].map((item, i) => (
                    <a key={i} href={item.href} className={styles.socialIconLink}>
                        <img src={item.img} alt="Social Icon" className={styles.socialIconImg} />
                    </a>
                ))}
            </div>
            {/* Background Image / Overlay */}
            <div className={styles.bgImage}></div>
            <div className={styles.overlay}></div>
        </section>
    );
};

export default GalleryHero;
