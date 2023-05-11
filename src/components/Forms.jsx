import logo from "../assets/images/logo.svg";
import iologo from "../assets/images/io.svg";

const Form = () => (
  <>
    <section className="form-section">

      <div className="io-logo">
        <img src={iologo} alt="Google I/O logo" />
      </div>
      
      <div className="black-text">
        <h2>Get notified</h2>
        <h4>Get updates on the IO Extended 2023 event</h4>
      </div>

      <form action="">
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
    </section>
  </>
);

export default Form;
