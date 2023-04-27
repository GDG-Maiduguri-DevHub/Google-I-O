import { Link } from "react-router-dom";

const Counter = () => (
  <section className="counter container">
    <div className="clock">
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <p>Days</p>
      </div>
    </div>

    <div className="counter-act">
      <h3>For Sponsorship</h3>
      <p>Join to build the tech community</p>
      <Link to="/">Sponsor Now!</Link>
    </div>
  </section>
);

export default Counter;
