// import { useState } from "react";
// import "./Committee.css";

// const Committee = () => {
//   const [activeTab, setActiveTab] = useState("advisory");

// const advisory = [
//   { name: "Prof. Rajeev Prakash", role: "Director, IIT Bhilai" },
//   { name: "Prof. Sachchidanand Shukla", role: "Vice-Chancellor, RSU Raipur" },
//   { name: "Prof. Alok Kumar Chakrawal", role: "Vice-Chancellor, GGV Bilaspur, Chhattisgarh" },
//   { name: "Dr. Om Prakash Vyas", role: "Director, Dr. SPM IIIT, Naya Raipur" },
//   { name: "Dr. Prashant Kavishwar", role: "Director, CGCOST, Chhattisgarh Government" },
//   { name: "Dr. S. Gupta", role: "Dean Academics, NIT Raipur" },
//   { name: "Lt. Gen. Ashok Jindal (Retd.)", role: "Director, AIIMS" },
//   { name: "Shri Sushanta Kumar Kar", role: "Deputy Superintending Archaeologist, ASI Raipur" },
//   { name: "Prof. (Dr.) Girish Chandel", role: "VC, IGKV Raipur, Chhattisgarh" },
// ];

// const organizing = [
//   { name: "Dr. N. V. Ramana Rao", role: "Chief Patron - Director, NIT Raipur" },
//   { name: "Dr. Sivaji Chakravorti ", role: "Chief Patron - Vice President, INAE" },

//   { name: "Prof. G.P.S.C Mishra", role: "Patron - Dean R & C, NIT Raipur" },
//   { name: "Prof. Shubhrata Gupta", role: "Patron - Dean Academics, NIT Raipur" },

//   { name: "Prof. N.D. Londhe", role: "Co-Patron - Registrar, NIT Raipur" },
//   { name: "Col Shobhit Rai", role: "Co-Patron - Deputy Executive Director, INAE" },

//   { name: "Prof. Samir Bajpai", role: "Chair - Head, CDC, NIT Raipur" },

//   { name: "Dr. Archana Sharma", role: "Co-Chair - ANRF PM Professor, NIT Raipur" },

//   { name: "Dr. Toshan Meenpal", role: "Chairperson - Associate Professor, ECE, NIT Raipur" },

//   { name: "Dr. Sanjeev Kumar", role: "Organizing Secretary - Assistant Professor, Mechanical Engg, NIT Raipur" },
//   { name: "Dr. Ashish Dash", role: "Organizing Secretary - Assistant Professor, Mining Engg, NIT Raipur" },
//   { name: "Dr. Jitendra Rout", role: "Organizing Secretary - Assistant Professor, CSE, NIT Raipur" },
//   { name: "Dr. Chandan Kumar", role: "Organizing Secretary - Assistant Professor, Civil Engg, NIT Raipur" },
//   { name: "Dr. Madhukrishna Priyadarsini", role: "Organizing Secretary - Assistant Professor, CSE, NIT Raipur" },
// ];

//   return (
//     <section className="committee">

//       <h2>Committees</h2>

//       {/* 🔥 TAB BUTTONS */}
//       <div className="tabs">
//         <button
//           className={activeTab === "advisory" ? "active" : ""}
//           onClick={() => setActiveTab("advisory")}
//         >
//           Advisory Committee
//         </button>

//         <button
//           className={activeTab === "organizing" ? "active" : ""}
//           onClick={() => setActiveTab("organizing")}
//         >
//           Organizing Committee
//         </button>
//       </div>

//       {/* 🔥 CONTENT */}
//       <div className="committee-container">
//         {(activeTab === "advisory" ? advisory : organizing).map((m, i) => (
//           <div className="committee-card" key={i}>
//             <h3>{m.name}</h3>
//             <p>{m.role}</p>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default Committee;
import { useState } from "react";
import "./Committee.css";

const Committee = () => {
  const [activeTab, setActiveTab] = useState("advisory");

  const advisory = [
    { name: "Prof. Rajeev Prakash", role: "Director, IIT Bhilai" },
    { name: "Prof. Sachchidanand Shukla", role: "Vice-Chancellor, RSU Raipur" },
    { name: "Prof. Alok Kumar Chakrawal", role: "Vice-Chancellor, GGV Bilaspur, Chhattisgarh" },
    { name: "Dr. Om Prakash Vyas", role: "Director, Dr. SPM IIIT, Naya Raipur" },
    { name: "Dr. Prashant Kavishwar", role: "Director, CGCOST, Chhattisgarh Government" },
    { name: "Dr. S. Gupta", role: "Dean Academics, NIT Raipur" },
    { name: "Lt. Gen. Ashok Jindal (Retd.)", role: "Director, AIIMS" },
    { name: "Shri Sushanta Kumar Kar", role: "Deputy Superintending Archaeologist, ASI Raipur" },
    { name: "Prof. (Dr.) Girish Chandel", role: "VC, IGKV Raipur, Chhattisgarh" },
  ];

  const organizingMain = [
    { name: "Dr. N. V. Ramana Rao", role: "Chief Patron - Director, NIT Raipur" },
    { name: "Dr. Sivaji Chakravorti", role: "Chief Patron - Vice President, INAE" },
    { name: "Prof. G.P.S.C Mishra", role: "Patron - Dean R & C, NIT Raipur" },
    { name: "Prof. Shubhrata Gupta", role: "Patron - Dean Academics, NIT Raipur" },
    { name: "Prof. N.D. Londhe", role: "Co-Patron - Registrar, NIT Raipur" },
    { name: "Col Shobhit Rai", role: "Co-Patron - Deputy Executive Director, INAE" },
    { name: "Prof. Samir Bajpai", role: "Chair - Head, CDC, NIT Raipur" },
    { name: "Dr. Archana Sharma", role: "Co-Chair - ANRF PM Professor, NIT Raipur" },
    { name: "Dr. Toshan Meenpal", role: "Chairperson - Associate Professor, ECE, NIT Raipur" },
  ];

  const organizingSecretaries = [
        {
      name: "Dr. Toshan Meenpal",
      role: "Chairperson - Associate Professor, ECE, NIT Raipur",
      image: "data:image/jpeg;base64,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",
      email: "tmeenpal.etc@nitrr.ac.in",
    },
    {
      name: "Dr. Sanjeev Kumar",
      role: "Assistant Professor, Mechanical Engg, NIT Raipur",
      image: "https://media.licdn.com/dms/image/v2/C5603AQFjjDq2ZQjbSQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1581433818219?e=2147483647&v=beta&t=UuTxl1CTEcCYrhkv3cP8nxmNxxR8q78ZUFcYqO8pfVc",
      email: "skumar.me@nitrr.ac.in",
    },
    {
      name: "Dr. Ashish Dash",
      role: "Assistant Professor, Mining Engg, NIT Raipur",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyNMkrVRDK7AJOqNvcUcba8CxaPJNoc2dcA&s",
      email: "akdash.min@nitrr.ac.in",
    },
    {
      name: "Dr. Jitendra Rout",
      role: "Assistant Professor, CSE, NIT Raipur",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQEwrwlJd7Izfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1640620740035?e=1778716800&v=beta&t=6aLNSlX6fRcDK1IcvuhmWRDqTELBRtYM3uHTDUzx4bY",
      email: "jkrout.cs@nitrr.ac.in",
    },
    {
      name: "Dr. Chandan Kumar",
      role: "Assistant Professor, Civil Engg, NIT Raipur",
      image: "https://nitrr.ac.in/civil/Chandan%20Kumar%20Singh_Civil%20Engg..jpg",
      email: "cksingh.ce@nitrr.ac.in",
    },
    {
      name: "Dr. Madhukrishna Priyadarsini",
      role: "Assistant Professor, CSE, NIT Raipur",
      image: "https://media.licdn.com/dms/image/v2/C5103AQEzXj7dlfsGqQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1532673749105?e=2147483647&v=beta&t=XuecyFIYSNb4ChZj-hnsbsKwD7DSLRU978KPFpV6NYc",
      email: "mpriyadarsini.cse@nitrr.ac.in",
    },
  ];

  return (
    <section className="committee">
      <h2>Committees</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "advisory" ? "active" : ""}
          onClick={() => setActiveTab("advisory")}
        >
          Advisory Committee
        </button>

        <button
          className={activeTab === "organizing" ? "active" : ""}
          onClick={() => setActiveTab("organizing")}
        >
          Organizing Committee
        </button>
      </div>

      <div className="committee-container">

        {/* Advisory */}
        {activeTab === "advisory" &&
          advisory.map((m, i) => (
            <div className="committee-card" key={i}>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}

        {/* Organizing */}
        {activeTab === "organizing" && (
          <>
            {organizingMain.map((m, i) => (
              <div className="committee-card" key={i}>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}

            {/* Subsection */}
            <div className="subsection-title">
              <h3>Organizing Secretaries</h3>
            </div>

            {organizingSecretaries.map((m, i) => (
              <div className="committee-card secretary-card" key={"sec-" + i}>
                <img src={m.image} alt={m.name} className="sec-img" />
                <h3>{m.name}</h3>
                <p>{m.role}</p>
                <p className="email">
                  📧 <a href={`mailto:${m.email}`}>{m.email}</a>
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Committee;