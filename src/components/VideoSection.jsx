import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2>YEISS 2026</h2>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/6Zsn5f2uYCw?autoplay=1&mute=1&loop=1&playlist=6Zsn5f2uYCw&controls=1&rel=0"
          title="YEISS 2026"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;