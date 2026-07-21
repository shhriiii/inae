import "./Speakers.css";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Biswajyoti Basu",
      role: " Former Outstanding Scientist and Associate Director, NMRL (DRDO) Ambernath Mumbai.",
      img: "https://i.pinimg.com/736x/84/46/6c/84466ce501d8adcc6bb264bd0ef68ac4.jpg"
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
    // {
    //   name: "Prof. B. Mahadevan",
    //   role: "IIM Bangalore",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV-stIga-BsnQ99Guz_PBa0VH181aM2g7eg&s"
    // },
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