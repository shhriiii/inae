import "./Institute.css";

const Institute = () => {
  return (
    <section className="institute">

      <div className="institute-container">

        {/* LEFT IMAGE */}
        <div className="institute-image">
          <img
            src="https://www.nitrr.ac.in/img/7.jpg"
            alt="NIT Raipur"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="institute-content">
          <h2>About NIT Raipur</h2>

          <p>
           National Institute of Technology Raipur (Formerly Government Engineering College Raipur), situated in the capital of a newly Incepted state of Chhattisgarh, has proven to be "avant-grade" in the field of science and technology over the past few decades in this region.
          </p>

          <p>
With a sweet memory of the foundation ceremony by our Hon'ble President Dr. Rajendra Prasad on 14th September 1956, the institute started with two departments namely Metallurgical Engineering and Mining Engineering. Later the inauguration of the Institute building was done by our Hon'ble Prime Minister Pt. Jawahar Lal Nehru on 14th March 1963.
          </p>

          <p>
           From 1st December 2005, the institute has become the National Institute of Technology. The institution has grown in tandem with the major surrounding industries – The Bhilai Steel Plant, SECL BALCO and NTPC Korba. It currently offers 12 Undergraduate, 6 Postgraduate courses including MCA and M.Tech in Applied Geology.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Institute;
