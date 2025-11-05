import "../../styles/Gallery.css";

export default function GalleryT() {
  return (
    <section className="gallery-section">
      <div className="gallery-images">
        <div className="gallery-image img1"></div>
        <div className="gallery-image img2"></div>
        <div className="gallery-image img3"></div>
        <div className="gallery-image img4"></div>
      </div>

      <div className="gallery-navigation">
        <div className="gallery-left">
          <span className="gallery-index">01</span> WEDDINGS
        </div>
        <div className="gallery-right">NEXT →</div>
      </div>
    </section>
  );
}



