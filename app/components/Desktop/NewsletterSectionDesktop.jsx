import styles from './NewsletterSectionDesktop.module.css';

export default function NewsletterSectionDesktop() {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerContent}>
        <div className={styles.leftColumn}>
          <div className={styles.logoWrap}>
            <span className={styles.logoIcon}></span>
            <span className={styles.logoText}>LUXORT</span>
          </div>
          <div className={styles.slogan}>
            Luxort combines timeless elegance with modern luxury, offering unparalleled comfort and unforgettable experiences.
          </div>
        </div>
        <div className={styles.rightColumns}>
          <div className={styles.linksColumn}>
            <div className={styles.linksHeader}>Quick Links</div>
            <ul className={styles.linksList}>
              <li>Home</li>
              <li>About Us</li>
              <li>Events</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <div className={styles.linksHeader}>Social Media</div>
            <ul className={styles.linksList}>
              <li>X</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span className={styles.copyright}>
          © 2025 Luxort, All Right Reserved
        </span>
        <span className={styles.policyLinks}>
          <span>Terms & Conditions</span>
          <span style={{ margin: '0 14px' }}></span>
          <span>Privacy Policy</span>
        </span>
      </div>
    </footer>
  );
}
