import {useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../assets/styles/Hero.module.css";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const bigCircle1Controls = useAnimation();
  const bigCircle2Controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      bigCircle1Controls.start({
        y: offset * 1, // سریع‌تر از نقاط
        transition: { type: "spring", stiffness: 50, damping: 10 }
      });

      bigCircle2Controls.start({
        y: offset * 0.5,
        transition: { type: "spring", stiffness: 50, damping: 10 }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ bigCircle1Controls, bigCircle2Controls]);

  return (
    <section className={styles.heroSection}>
            {/* دایره‌های ریز بالا سمت چپ */}
            <motion.div
                className={styles.movingDots}
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* خطوط کراس پایین سمت راست */}
            <div className={styles.linesContainer}>
                <div className={`${styles.verticalLine} ${styles.line1}`}></div>
                <div className={`${styles.verticalLine} ${styles.line2}`}></div>
                <div className={`${styles.verticalLine} ${styles.line3}`}></div>
                <div className={`${styles.verticalLine} ${styles.line4}`}></div>
                <div className={`${styles.verticalLine} ${styles.line5}`}></div>


                <div className={`${styles.horizontalLine} ${styles.line1}`}></div>
                <div className={`${styles.horizontalLine} ${styles.line2}`}></div>
                <div className={`${styles.horizontalLine} ${styles.line3}`}></div>
                <div className={`${styles.horizontalLine} ${styles.line4}`}></div>
                <div className={`${styles.horizontalLine} ${styles.line5}`}></div>
            </div>

            {/* دایره‌های بزرگ با انیمیشن */}
            <div className={styles.largeCircles}>
                <motion.div
                className={`${styles.bigCircle} ${styles.bigCircle1}`}
                animate={bigCircle1Controls}
                />
                <motion.div
                className={`${styles.bigCircle} ${styles.bigCircle2}`}
                animate={bigCircle2Controls}
                />
                <motion.div
                className={`${styles.bigCircle} ${styles.bigCircle3}`}
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* متن وسط */}
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                  <Typewriter
                    options={{
                      strings: ['LANSOW'],
                      autoStart: true,
                      pauseFor: 5000,
                      loop: true,
                    }}
                  />
                </h1>
                <h2 className={styles.name}>mahdi davoodi</h2>
                <p className={styles.role}>Junior Front-End Developer</p>
            </div>

            {/* آیکون اسکرول پایین */}
            <div className={styles.scrollIcon}>
                <span>↓</span>
            </div>
    </section>
  );
};

export default Hero;
