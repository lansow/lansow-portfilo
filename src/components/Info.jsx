import styles from "../assets/styles/InfoSection.module.css";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <section className={styles.InfoSection}>
      {/* نوار عمودی */}
      <div className={styles.linesContainer}>
        <div className={styles.verticalLine}>
          <div className={styles.circle + " " + styles.circleTop}></div>
          <div className={styles.circle + " " + styles.circleBottom}></div>
        </div>
      </div>

      {/* کارت‌های اطلاعاتی */}
      <div className={styles.cardsContainer}>
        <motion.div
          className={`${styles.card} ${styles.left}`}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Title 1</h3>
          <p>Description goes here.</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.right}`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Title 2</h3>
          <p>Another description.</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.left}`}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Title 3</h3>
          <p>More details...</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.right}`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Title 4</h3>
          <p>Insights!</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.left}`}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Title 5</h3>
          <p>Final thoughts.</p>
        </motion.div>
      </div>
    </section>
  );
}
