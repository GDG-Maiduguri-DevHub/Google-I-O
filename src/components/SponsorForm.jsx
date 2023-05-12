import logo from "../assets/images/logo.svg";
import iologo from "../assets/images/io.svg";
import { GrClose } from "react-icons/gr";

const SponsorForm = () => {

  return (
    <>
      <section className="form-section sponsor">
        <div className="close-btn">
          <GrClose />
        </div>

        <div className="io-logo end">
          <img src={iologo} alt="Google I/O logo" />
        </div>
        
        <div className="black-text">
          <h2>Be a Sponsor </h2>
          <h4>Wish to sponsor this event?, please fill  details below or  send us a mail.</h4>
        </div>

        <form action="">
          <div className="input-div">
            <label htmlFor="name">Name or Organization Name</label>
            <input type="text" id="name" name="name" placeholder="Please enter your name" required />
          </div>

          <div className="input-div">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write about how you wish to sponsor"></textarea>
          </div>

          <div className="input-div">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Please enter your email" required />
          </div>

          <div className="input-div">
            <label htmlFor="number">Phone number</label>
            <input type="tel" id="number" name="number" placeholder="+234 Enter phone number" required />
          </div>
          
          <div className="btn-logo">
            <div className="io-logo">
              <img src={logo} alt="GDG logo" />
            </div>

            <button className="btn btn1 white-text">Notify me</button>
          </div>
        </form>

        <p className="p">For sponsorship or partnership send us a mail via <span className="green-text">gdgmaiduguri@gmail.com</span></p>
      </section>
    </>
  );
};

export default SponsorForm;
