"use client";

import styles from './SignUpProcess.module.css';
import Link from 'next/link';
import { ClipboardList, CreditCard, LogIn, ArrowRight } from 'lucide-react';

const SignUpProcess = ({
    title = "Sign Up Process",
    step1Number = "01",
    step1Title = "Sign Up",
    step1Desc = "Fill out the application form and make sure your answers reflect your needs to help us tailor our offerings to meet your needs and expectations.",
    step1Image = "/assets/register.png",
    step2Number = "02",
    step2Title = "Pay the Fees",
    step2Desc = "Pay the membership fees using our online encrypted payment gateway. If you have no access to online payments, please contact us for alternative payment methods.",
    step2Image = "/assets/card-payment.png",
    step3Number = "03",
    step3Title = "That's it! Welcome on Board",
    step3Desc = "Log in using your username and password, and access your dashboard, where you will find your digital membership card, available perks and benefits, and all notifications and resources at your fingertips.",
    step3Image = "/assets/sign-in.png",
    ctaText = "SIGN UP NOW",
    style = {}
}) => {
    return (
        <section className={styles.section} style={style}>
            {/* Header with Teal Accent */}
            <div className={styles.headerContainer}>
                <div className={styles.tealBar}></div>
                <h2 className={styles.title}>{title}</h2>
            </div>

            <div className={styles.stepsContainer}>
                {/* Step 01 */}
                <div className={styles.stepWrapper}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>{step1Number}</div>
                        <div className={styles.iconWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={step1Image} alt="Sign Up" width={96} height={96} style={{ objectFit: 'contain' }} />
                        </div>
                        <h3 className={styles.stepTitle}>{step1Title}</h3>
                    </div>
                    <p className={styles.stepDescription}>
                        {step1Desc}
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
                        <div className={styles.stepNumber}>{step2Number}</div>
                        <div className={styles.iconWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={step2Image} alt="Pay the Fees" width={96} height={96} style={{ objectFit: 'contain' }} />
                        </div>
                        <h3 className={styles.stepTitle}>{step2Title}</h3>
                    </div>
                    <p className={styles.stepDescription}>
                        {step2Desc}
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
                        <div className={styles.stepNumber}>{step3Number}</div>
                        <div className={styles.iconWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={step3Image} alt="Welcome on Board" width={96} height={96} style={{ objectFit: 'contain' }} />
                        </div>
                        <h3 className={styles.stepTitle}>{step3Title}</h3>
                    </div>
                    <p className={styles.stepDescription}>
                        {step3Desc}
                    </p>
                </div>
            </div>

            <div className={styles.ctaContainer}>
                <Link href="/apply-member" className={styles.ctaButton}>
                    {ctaText} <ArrowRight size={20} className={styles.btnArrow} />
                </Link>
            </div>
        </section>
    );
};

export default SignUpProcess;
