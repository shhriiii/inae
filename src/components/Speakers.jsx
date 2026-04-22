import "./Speakers.css";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. (Ms) Tessy Thomas",
      role: " 'Missile Woman' of India', Former Director General of Aeronautical Systems, DRDO",
      img: "https://femina.wwmindia.com/thumb/content/2022/nov/tessy-thumnail1668671022.jpg?width=1200&height=900"
    },
    {
      name: "Dr. Sivaji Chakravorti ",
      role: "Vice President INAE",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8z_x-MQo0zAfmvF3aSI8u7jef34SYGTrKWQ&s"
    },
    {
      name: "Dr. Dinesh Kumar Aswal",
      role: "Chairman NDMA",
      img: "https://ndma.gov.in/sites/default/files/inline-images/M-DK-Aswal.jpg"
    },
    {
      name: "Prof. B. Mahadevan",
      role: "IIM Bangalore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV-stIga-BsnQ99Guz_PBa0VH181aM2g7eg&s"
    },
  ];

  return (
    <section className="speakers">
      <h2>Keynote Speakers</h2>

      <div className="speakers-container">
        {speakers.map((sp, index) => (
          <div className="speaker-card" key={index}>
            <img src={sp.img} alt={sp.name} />
            <h3>{sp.name}</h3>
            <p>{sp.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;