import "./Speakers.css";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Anil Kakodkar",
      role: "Former Director and distinguished Scientist, Bhabha Atomic Research Centre (BARC), Trombay, Mumbai. Chairman of the Board of Governors, IIT Bombay. Atomic Energy Commission of India.",
      img: "https://www.rknec.edu/wp-content/uploads/2023/12/Dr.-Anil-Kakodkar.jpg",
    },

    {
      name: "Dr. B.K. Das",
      role: "Distinguished Scientist and the Director General for Electronics and Communication Systems (ECS), Defence Research and Development Organization (DRDO) India.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPFQzY2vlaEEw-IiPaUulEtVP-d5v0gzr_0jV-OsTrA&s=10",
    },

    {
      name: "Dr. A.K. Tyagi",
      role: "Director, Chemistry Group, BARC, Mumbai. Senior Professor (Chemistry), Homi Bhabha National Institute (HBNI), Mumbai. Prestigious Vigyan Shri Award from the Hon'ble President of India.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvK8dImtsXwEMQ9J5vOpOMDfNVGpuPtS-YCQNUdDYLg&s",
    },

    {
      name: "Prof. Bhim Singh",
      role: "Prime Minister Professor, NSUT Delhi. ANRF National Science Chair & Emeritus Professor, Electrical Engineering at the Indian Institute of Technology Delhi (IIT Delhi). Prestigious Vigyan Shri Award from the Hon'ble President of India.",
      img: "https://media.licdn.com/dms/image/v2/D4D03AQEE6MIhtcq1HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688587792016?e=2147483647&v=beta&t=qd1HKNY-e3QQoPmGoPeugKnka2Mx0xkNxTQ7nP7lcUA",
    },

    {
      name: "Dr. Prashant Kawishwar",
      role: "Director General, CCOST Chhattisgarh.",
      img: "https://i.pinimg.com/736x/e5/ea/27/e5ea27bdef62163995e3c5525b800268.jpg",
    },

    {
      name: "Dr. Rohit Kumar Gupta",
      role: "General Manager, Liquid Propulsion Systems Centre (LPSC), ISRO, Valiamala, Kerala, India.",
      img: "https://i.pinimg.com/736x/e4/72/ce/e472cee284e8a33f613f9d441c74ce23.jpg",
    },

    {
      name: "Dr. Biswajyoti Basu",
      role: "Former Outstanding Scientist and Associate Director, NMRL (DRDO), Ambernath, Mumbai.",
      img: "https://i.pinimg.com/736x/84/46/6c/84466ce501d8adcc6bb264bd0ef68ac4.jpg",
    },

    {
      name: "Dr. Sivaji Chakravorti",
      role: "Vice President, INAE.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8z_x-MQo0zAfmvF3aSI8u7jef34SYGTrKWQ&s",
    },

    {
      name: "Dr. Dinesh Kumar Aswal",
      role: "Chairman, NDMA.",
      img: "https://ndma.gov.in/sites/default/files/inline-images/M-DK-Aswal.jpg",
    },
  ];

  return (
    <section className="speakers">
      <h2>Keynote Speakers</h2>

      <div className="speakers-container">
        {speakers.map((sp, index) => (
          <div className="speaker-card" key={index}>
            
            {sp.img ? (
              <img src={sp.img} alt={sp.name} />
            ) : (
              <div className="speaker-image-placeholder">
                Image
              </div>
            )}

            <h3>{sp.name}</h3>

            <p>{sp.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;