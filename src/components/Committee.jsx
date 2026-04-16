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

const organizing = [
  { name: "Dr. N. V. Ramana Rao", role: "Chief Patron - Director, NIT Raipur" },
  { name: "Prof. Shivaji Chakraborty", role: "Chief Patron - Vice President, INAE" },

  { name: "Prof. G.P.S.C Mishra", role: "Patron - Dean R & C, NIT Raipur" },
  { name: "Prof. Shubhrata Gupta", role: "Patron - Dean Academics, NIT Raipur" },

  { name: "Prof. N.D. Londhe", role: "Co-Patron - Registrar, NIT Raipur" },
  { name: "Col Shobhit Rai", role: "Co-Patron - Deputy Executive Director, INAE" },

  { name: "Prof. Samir Bajpai", role: "Chair - Head, CDC, NIT Raipur" },

  { name: "Dr. Archana Sharma", role: "Co-Chair - ANRF PM Professor, NIT Raipur" },

  { name: "Dr. Toshan Meenpal", role: "Chairperson - Associate Professor, ECE, NIT Raipur" },

  { name: "Dr. Sanjeev Kumar", role: "Organizing Secretary - Assistant Professor, Mechanical Engg, NIT Raipur" },
  { name: "Dr. Ashish Dash", role: "Organizing Secretary - Assistant Professor, Mining Engg, NIT Raipur" },
  { name: "Dr. Jitendra Rout", role: "Organizing Secretary - Assistant Professor, CSE, NIT Raipur" },
  { name: "Dr. Chandan Kumar", role: "Organizing Secretary - Assistant Professor, Civil Engg, NIT Raipur" },
  { name: "Dr. Madhukrishna Priyadarsini", role: "Organizing Secretary - Assistant Professor, CSE, NIT Raipur" },
];

  return (
    <section className="committee">

      <h2>Committees</h2>

      {/* 🔥 TAB BUTTONS */}
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

      {/* 🔥 CONTENT */}
      <div className="committee-container">
        {(activeTab === "advisory" ? advisory : organizing).map((m, i) => (
          <div className="committee-card" key={i}>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Committee;
