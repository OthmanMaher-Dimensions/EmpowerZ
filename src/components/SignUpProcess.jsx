"use client";

import styles from './SignUpProcess.module.css';
import Link from 'next/link';
import { ClipboardList, CreditCard, LogIn, ArrowRight } from 'lucide-react';

const SignUpProcess = () => {
    return (
        <section className={styles.section}>
            {/* Header with Teal Accent */}
            <div className={styles.headerContainer}>
                <div className={styles.tealBar}></div>
                <h2 className={styles.title}>Sign Up Process</h2>
            </div>

            <div className={styles.stepsContainer}>
                {/* Step 01 */}
                <div className={styles.stepWrapper}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>01</div>
                        <div className={styles.iconWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/register.png" alt="Sign Up" width={96} height={96} style={{ objectFit: 'contain' }} />
                        </div>
                        <h3 className={styles.stepTitle}>Sign Up</h3>
                    </div>
                    <p className={styles.stepDescription}>
                        Fill out the application form and make sure your answers reflect your needs to help us tailor our offerings to meet your needs and expectations.
                    </p>
                </div>

                {/* Arrow 1 */}
                <div className={styles.arrowContainer}>
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 40L24 20L0 0V40Z" fill="white" />
                    </svg>
                </div>

                {/* Step 02 */}
                <div className={styles.stepWrapper}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>02</div>
                        <div className={styles.iconWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/card-payment.png" alt="Pay the Fees" width={96} height={96} style={{ objectFit: 'contain' }} />
                        </div>
                        <h3 className={styles.stepTitle}>Pay the Fees</h3>
                    </div>
                    <p className={styles.stepDescription}>
                        Pay the membership fees using our online encrypted payment gateway. If you have no access to online payments, please contact us for alternative payment methods.
                    </p>
                </div>

                {/* Arrow 2 */}
                <div className={styles.arrowContainer}>
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 40L24 20L0 0V40Z" fill="white" />
                    </svg>
                </div>

                {/* Step 03 */}
                <div className={styles.stepWrapper}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>03</div>
                        <div className={styles.iconWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/sign-in.png" alt="Welcome on Board" width={96} height={96} style={{ objectFit: 'contain' }} />
                        </div>
                        <h3 className={styles.stepTitle}>That's it! Welcome on Board</h3>
                    </div>
                    <p className={styles.stepDescription}>
                        Log in using your username and password, and access your dashboard, where you will find your digital membership card, available perks and benefits, and all notifications and resources at your fingertips.
                    </p>
                </div>
            </div>

            <div className={styles.ctaContainer}>
                <Link href="/apply-member" className={styles.ctaButton}>
                    SIGN UP NOW <ArrowRight size={20} className={styles.btnArrow} />
                </Link>
            </div>
        </section>
    );
};

export default SignUpProcess;
