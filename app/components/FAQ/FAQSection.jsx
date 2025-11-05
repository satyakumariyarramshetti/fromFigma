import styles from './FAQSection.module.css';

export default function FAQSection() {
  return (
    <div className={styles.faqBg}>
      <div className={styles.faqContent}>
        <div className={styles.faqLabel}>FAQ</div>
        <div className={styles.faqTitle}>Frequently Asked Questions</div>
        <div className={styles.faqBox}>
          <div className={`${styles.faqCard} ${styles.faqOpen}`}>
            <div className={styles.questionRow}>
              <div>What are the check-in and check-out times?</div>
              <div className={styles.arrow}>&#8964;</div>
            </div>
            <div className={styles.answer}>
              Our check-in time is from 3:00 PM &amp; check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.
            </div>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.questionRow}>
              <div>Does the hotel offer airport transportation?</div>
              <div className={styles.arrow}>&#8964;</div>
            </div>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.questionRow}>
              <div>Does the hotel have dining options?</div>
              <div className={styles.arrow}>&#8964;</div>
            </div>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.questionRow}>
              <div>Do you host weddings or special events?</div>
              <div className={styles.arrow}>&#8964;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
