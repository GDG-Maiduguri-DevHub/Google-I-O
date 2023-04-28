import { Link } from "react-router-dom";

const Counter = () => (
  <section className="counter container">
    <div className="clock">
      <div className="day clock-item white-text">
        <div className="boxes">
          <div className="green">5</div>
          <div className="green">6</div>
        </div>
        <p className="white-text small-text">Days</p>
      </div>

      <div className="day clock-item white-text">
        <div className="boxes">
          <div className="red">3</div>
          <div className="red">3</div>
        </div>
        <p className="white-text small-text">Hours</p>
      </div>

      <div className="day clock-item white-text">
        <div className="boxes">
          <div className="blue">1</div>
          <div className="blue">2</div>
        </div>
        <p className="white-text small-text">Minutes</p>
      </div>

      <div className="day clock-item white-text">
        <div className="boxes">
          <div className="yellow">4</div>
          <div className="yellow">0</div>
        </div>
        <p className="white-text small-text">Seconds</p>
      </div>
    </div>

    <div className="counter-act black-text">
      <div>
        <h3>For Sponsorship</h3>
        <p>Join to build the tech community</p>
        <Link to="/" className="btn btn2">Sponsor Now!</Link>
      </div>
    </div>
  </section>
);

export default Counter;
