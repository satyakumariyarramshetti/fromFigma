import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.sidebar}>
        <div className={styles.aboutTitle}>ABOUT LUXORT</div>
        <div className={styles.quoteSection}>
          <p className={styles.quoteText}>
            Luxort is where elegance meets comfort, creating unforgettable moments with every stay. Welcome to your perfect escape.
          </p>
          <div className={styles.founderSection}>
            <div className={styles.founderAvatar}></div>
            <div>
              <div className={styles.founderName}>Roberto Poliye</div>
              <div className={styles.founderRole}>Founder of Luxort</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in Luxury Hospitality
        </h1>
        <p className={styles.description}>
          At Luxort, we redefine the meaning of luxury hospitality. our hotel offers a seamless blend of classic sophistication and modern comfort, providing guests with an unparalleled experience.
        </p>
        <div className={styles.gallery}>
          <div className={styles.cardLarge}></div>
          <div className={styles.cardSmall}></div>
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.cardIndex}>01</span>
          <span>COMFY AREA</span>
          <span className={styles.nextButton}>NEXT →</span>
        </div>
        <div className={styles.carouselNav}>
          <span className={styles.active}></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.arrows}>
          <span className={styles.leftArrow}>&lt;</span>
          <span className={styles.rightArrow}>&gt;</span>
        </div>
      </div>
    </div>
  );
}
