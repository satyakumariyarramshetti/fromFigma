// pages/events-section.js
import styles from './EventsSection.module.css'
export default function EventsSection() {
  return (
    <div className={styles.wrapper}>
      {/* Left Side Vertical Header */}
      <div className={styles.leftHeader}>
        <span>| UNFORGETTABLE EVENTS AT LUXORT</span>
      </div>

      <div className={styles.rightContent}>
        <h1>
          Celebrate Life’s Finest Moments <br/>
          in Style and Elegance
        </h1>
        <p>
          At Luxort, we create extraordinary settings for unforgettable events. Whether you're planning an 
          <br/>intimate gathering or a grand celebration.
        </p>
      </div>

     
    </div>
  )
}
