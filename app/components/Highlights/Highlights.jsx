import styles from './Highlights.module.css';

export default function Highlights() {
  return (
    <div className={styles.highlightsSection}>
      <div className={styles.header}>
        <div className={styles.subtitle}>HOTEL HIGHLIGHTS</div>
        <h1 className={styles.title}>Experience the Extraordinary</h1>
        <div className={styles.desc}>
          Experience elegance and comfort in our Luxury Rooms &amp; Suites, where modern amenities and timeless design create the perfect retreat.
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.activeTab}`}>SWIMMING POOL</div>
        <div className={styles.tab}>FINE DINING RESTAURANTS</div>
        <div className={styles.tab}>LUXURY ROOMS &amp; SUITES</div>
        <div className={styles.tab}>SPA &amp; WELLNESS</div>
      </div>
      <div className={styles.tabContent}></div>
    </div>
  );
}
