import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
  return (
    <div className={styles.bg}>
      <div className={styles.centerBox}>
        <div className={styles.title}>
          GET EXCLUSIVE OFFERS,<br />
          EVENT UPDATES, AND INSIDER NEWS
        </div>
        <input
          className={styles.input}
          placeholder="Your email address..."
        />
        <button className={styles.button}>SUBMIT</button>
      </div>
    </div>
  );
}
