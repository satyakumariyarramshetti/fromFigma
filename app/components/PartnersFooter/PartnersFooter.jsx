import styles from './PartnersFooter.module.css';

export default function PartnersFooter() {
  return (
    <div className={styles.footerBg}>
      <div className={styles.title}>TRUSTED PARTNERS</div>
      <div className={styles.logosRow}>
        <div className={styles.logoItem}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>Capsule</span>
        </div>
        <div className={styles.logoItem}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>Biosynthesis</span>
        </div>
        <div className={styles.logoItem}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>Galileo</span>
        </div>
        <div className={styles.logoItem}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>Spherule</span>
        </div>
        <div className={styles.logoItem}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>FocalPoint</span>
        </div>
        <div className={styles.logoItem}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>Galileo</span>
        </div>
        <div className={styles.logoItem}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>Nietzsche</span>
        </div>
      </div>
    </div>
  );
}
