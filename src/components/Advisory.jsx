import "./Advisory.css";

const Advisory = () => {
  const members = [
    {
      name: "Prof. Rajeev Prakash",
      role: "Director, IIT Bhilai",
    },
    {
      name: "Prof. Sachchidanand Shukla",
      role: "Vice-Chancellor, RSU Raipur",
    },
    {
      name: "Prof. Alok Kumar Chakrawal",
      role: "Vice-Chancellor, GGV Bilaspur",
    },
    {
      name: "Dr. Om Prakash Vyas",
      role: "Director, IIIT Naya Raipur",
    },
    {
      name: "Dr. Prashant Kavishwar",
      role: "Director, CGCOST",
    },
    {
      name: "Dr. S. Gupta",
      role: "Dean Academics, NIT Raipur",
    },
    {
      name: "Lt. Gen. Ashok Jindal (Retd.)",
      role: "Director, AIIMS",
    },
    {
      name: "Shri Sushanta Kumar Kar",
      role: "Deputy Superintending Archaeologist, ASI Raipur",
    },
    {
      name: "Prof. Girish Chandel",
      role: "VC, IGKV Raipur",
    },
  ];

  return (
    <section className="advisory">
      <h2>Advisory Committee</h2>

      <div className="advisory-container">
        {members.map((m, index) => (
          <div className="advisory-card" key={index}>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advisory;