import { useState } from "react";
import "./MediaCoverage.css";

const MediaCoverage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const newsItems = [
    {
      title: "The Hitavada",
      image: "hitavada.jpg",
      alt: "YEISS 2026 coverage in The Hitavada",
    },
    {
      title: "Dainik Bhaskar",
      image: "dainik-bhaskar.jpg",
      alt: "YEISS 2026 coverage in Dainik Bhaskar",
    },
  ];

  return (
    <>
      <section className="media-coverage">
        <div className="media-coverage-container">

          <h2>In the News</h2>

          <p className="media-subtitle">
            YEISS 2026 featured in leading newspapers
          </p>

          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div
                className={`news-card news-card-${index}`}
                key={item.title}
                onClick={() => setSelectedImage(item)}
              >
                <div className="news-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.alt}
                  />

                  <div className="view-overlay">
                    <span>Click to View</span>
                  </div>
                </div>

                <p>{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="news-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="news-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            &times;
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.alt}
            className="news-modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default MediaCoverage;