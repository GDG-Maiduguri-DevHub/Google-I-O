import success from '../assets/images/success.svg';

const Success = (props) => {
  const {closeSuccess} = props;

  return (
    <section className="form-section popup">
      <figure className="pop-img">
        <img src={success} alt="Success emoji" />
      </figure>

      <div className="black-text">
        <h2>Congratulations</h2>
        <h4>You will be notified on any updates on IO Extended 2023.</h4>
      </div>

      <div className="btn-logo" onClick={closeSuccess}>
        <button className="btn btn1 white-text">Done</button>
      </div>
    </section>
  );
};

export default Success;
