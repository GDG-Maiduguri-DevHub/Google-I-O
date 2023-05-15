import logo from "../assets/images/logo.svg";
import iologo from "../assets/images/io.svg";
import { GrClose } from "react-icons/gr";
import { useState } from "react";


const NotifyForm = (props) => {
  const {closeForm, openSuccess, openFailure} = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;
    let newVal = {
      [newKey]: val,
    }
    setFormData((state) => ({...state, ...newVal}));
  }

  const handleSUbmit = (e) => {
    e.preventDefault();

    fetch(`/api/notify`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res) => {
      if (res.ok) {
        closeForm();
        openSuccess();
      }
      else {
        openFailure();
      }
    })
  }

  return (
    <>
      <section className="form-section">
        <div className="close-btn" onClick={closeForm}>
          <GrClose />
        </div>

        <div className="io-logo end">
          <img src={iologo} alt="Google I/O logo" />
        </div>
        
        <div className="black-text">
          <h2>Get notified</h2>
          <h4>Get updates on the IO Extended 2023 event</h4>
        </div>

        <form action="" onSubmit={handleSUbmit}>
          <div className="input-div">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Please enter your name" onChange={handleChange} value={formData.name} required />
          </div>

          <div className="input-div">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Please enter your email" onChange={handleChange} value={formData.email} required />
          </div>

          <div className="input-div">
            <label htmlFor="number">Phone number</label>
            <input type="tel" id="number" name="phoneNumber" placeholder="Enter phone number (080....)" onChange={handleChange} value={formData.phoneNumber} required />
          </div>
          
          <div className="btn-logo">
            <div className="io-logo">
              <img src={logo} alt="GDG logo" />
            </div>

            <button className="btn btn1 white-text" type="submit">Notify me</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NotifyForm;
