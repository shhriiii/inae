import { Link } from "react-router-dom";

const ArticlePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Short Article Submission</h2>

      <Link to="/submission/article/abstract">
        <button>Abstract Submission</button>
      </Link>

      <br /><br />

      <Link to="/submission/article/full">
        <button>Full Length Paper</button>
      </Link>
    </div>
  );
};

export default ArticlePage;