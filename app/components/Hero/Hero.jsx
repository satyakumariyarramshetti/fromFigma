import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          <span className="welcome-text">WELCOME TO</span>
          <br />
          <span className="luxort-text">LUXORT</span>
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <p className="hero-description">
          Discover a world where luxury and comfort blend seamlessly, offering unforgettable
          experiences in a setting of elegance and tranquility.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">BOOK YOUR STAY</button>
          <button className="secondary-btn">EXPLORE OUR SUITES</button>
        </div>
      </div>
    </section>
  );
}
