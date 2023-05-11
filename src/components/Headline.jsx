import { Link } from "react-router-dom";

const Headline = () => (
  <section className="headline container">
    <figure className="headline-figure">
    </figure>

    <div className="headline-act">
      <div>
        <h1 className="white-text">Let's go <br />It's Google I/O <br />June 24, 2023</h1>
        <div>
          <p className="white-text small-text">Join in the city of Maiduguri</p>
          <p className="white-text small-text">Venue coming soon!</p>
        </div>
      </div>

      <Link to="/" className="btn btn2 black-text">Notify me</Link>
    </div>
  </section>
);

export default Headline;
