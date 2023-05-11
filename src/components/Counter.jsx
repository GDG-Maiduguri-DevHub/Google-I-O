import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const eventDate = new Date("2023/06/22 09:00:00");
  let [date, setDate] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });


  useEffect(() => {
    const timeout = setInterval(() => {
      let date = new Date();

      let diff = Math.abs(eventDate - date);

      // Calculate the number of days, hours, minutes, and seconds
      const nodays = (Math.floor(diff / (1000 * 60 * 60 * 24))).toString();
      diff -= parseInt(nodays) * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60)).toString();
      diff -= parseInt(hours) * (1000 * 60 * 60);

      const minutes = Math.floor(diff / (1000 * 60)).toString();
      diff -= parseInt(minutes) * (1000 * 60);

      const seconds = Math.floor(diff / 1000).toString();

      let newDate = {
        days: (nodays < 10 ? "0" + nodays : nodays),
        hours: (hours < 10 ? "0" + hours : hours),
        minutes: (minutes < 10 ? "0" + minutes : minutes),
        seconds: (seconds < 10 ? "0" + seconds : seconds)
      }

      setDate(newDate);

    }, 1000);

    return () => (clearInterval(timeout));
  }, [])
  return (
    <section className="counter container">
      <div className="clock">
        <div className="day clock-item white-text">
          <div className="boxes">
            <div className="green">{date.days[0]}</div>
            <div className="green">{date.days[1]}</div>
          </div>
          <p className="white-text small-text">Days</p>
        </div>

        <div className="day clock-item white-text">
          <div className="boxes">
            <div className="red">{date.hours[0]}</div>
            <div className="red">{date.hours[1]}</div>
          </div>
          <p className="white-text small-text">Hours</p>
        </div>

        <div className="day clock-item white-text">
          <div className="boxes">
            <div className="blue">{date.minutes[0]}</div>
            <div className="blue">{date.minutes[1]}</div>
          </div>
          <p className="white-text small-text">Minutes</p>
        </div>

        <div className="day clock-item white-text">
          <div className="boxes">
            <div className="yellow">{date.seconds[0]}</div>
            <div className="yellow">{date.seconds[1]}</div>
          </div>
          <p className="white-text small-text">Seconds</p>
        </div>
      </div>

      <div className="counter-act black-text">
        <div className="center-left">
          <h3>For Sponsorship</h3>
          <p>Join to build the tech community</p>
          <Link to="/" className="btn btn2">Sponsor Now!</Link>
        </div>
      </div>
    </section>
  );
};

export default Counter;
