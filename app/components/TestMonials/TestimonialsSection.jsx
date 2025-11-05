import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <div className={styles.testimonialsBg}>
      <div className={styles.left}>
        <div className={styles.label}>TESTIMONIALS</div>
        <div className={styles.newstitle}>What Our Guests Say</div>
        <div className={styles.subtitle}>
          Exceptional Experiences, Shared by Those Who’ve Lived Them.
        </div>
        <button className={styles.button}>READ MORE TESTIMONIALS</button>
      </div>
      <div className={styles.right}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Jerome Bell</div>
                <div className={styles.country}>Israel</div>
              </div>
            </div>
            <div className={styles.cardBody}>
              Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!
            </div>
            <div className={styles.cardDate}>5/27/19</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Savannah Nguyen</div>
                <div className={styles.country}>Poland</div>
              </div>
            </div>
            <div className={styles.cardBody}>
              Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!
            </div>
            <div className={styles.cardDate}>9/18/23</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Courtney Henry</div>
                <div className={styles.country}>Monaco</div>
              </div>
            </div>
            <div className={styles.cardBody}>
              Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!
            </div>
            <div className={styles.cardDate}>1/15/20</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Ronald Richards</div>
                <div className={styles.country}>Guinea</div>
              </div>
            </div>
            <div className={styles.cardBody}>
              Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!
            </div>
            <div className={styles.cardDate}>5/19/25</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Arlene McCoy</div>
                <div className={styles.country}>Saint Barthelemy</div>
              </div>
            </div>
            <div className={styles.cardBody}>
              Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!
            </div>
            <div className={styles.cardDate}>5/19/12</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Eleanor Pena</div>
                <div className={styles.country}>Sao Tome and Principe</div>
              </div>
            </div>
            <div className={styles.cardBody}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
