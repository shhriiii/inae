import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="overlay">
        <h1 className="hero-title">
          INAE Youth Conclave 2026
        </h1>

        <p className="hero-subtitle">
          Youth Engineering for India’s Sustainable Self-Reliance
        </p>

        <h3 className="hero-date">
          25–26 September 2026
        </h3>

        <p className="hero-org">
          National Institute of Technology Raipur, Chhattisgarh, India
        </p>
      </div>

    </section>
  );
};

export default Hero;