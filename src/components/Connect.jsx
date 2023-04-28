import { Link } from "react-router-dom";

const Connect = () => (
  <section className="container connect white-text">
    <div className="connect-item">
      <div className="connect-act center-left">
        <h2>Connect with developers</h2>
        <p>Join developer communities around the world for networking, meetups, collaboration, and more.</p>
        <Link to="/" className="btn btn2">Join our community</Link>
      </div>
    </div>
    <div className="art-pic"></div>
  </section>
);

export default Connect;
