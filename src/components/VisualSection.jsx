// VisualSection.jsx
import { motion } from "framer-motion";
import styles from "../assets/styles/VisualSection.module.css";
import heroimage from "../assets/images/lansow.png"

const VisualSection = () => {
  return (
    <section className={styles.visualSection}>
      {/* متن‌های زاویه‌دار سفید پشت عکس */}
      <div className={styles.wordsContainer}>
        <motion.h2
          className={`${styles.word} ${styles.word1}`}
          initial={{ opacity: 0, y: 100, x: -100, rotateZ: -25 }}
          whileInView={{ opacity: 1, y: 0, x: 0}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          .Code
        </motion.h2>
        <motion.h2
          className={`${styles.word} ${styles.word2}`}
          initial={{ opacity: 0, y: 100, x: -100, rotateZ: -10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          .Design
        </motion.h2>
        <motion.h2
          className={`${styles.word} ${styles.word3}`}
          initial={{ opacity: 0, y: 100, x: 100, rotateZ: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          .Create
        </motion.h2>
                <motion.h2
          className={`${styles.word} ${styles.word4}`}
          initial={{ opacity: 0, y: 100, x: 100, rotateZ: 10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          .work
        </motion.h2>
      </div>

      {/* عکس کاراکتر با گرادیانت پایین */}
      <motion.div
        className={styles.imageContainer}
        initial={{ y: 200, opacity: .2 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={heroimage}
          alt="Lansow Character"
          className={styles.heroImage}
        />
        <div className={styles.gradientOverlay}></div>
      </motion.div>
    </section>
  );
};

export default VisualSection;