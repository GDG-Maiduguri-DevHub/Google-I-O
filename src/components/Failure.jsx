import success from '../assets/images/error.svg';

const Failure = (props) => {
  const {closeFailure, closeForm} = props;

  return (
    <section className="form-section popup">
      <figure className="pop-img">
        <img src={success} alt="Success emoji" />
      </figure>

      <div className="black-text">
        <h2>Sorry Error</h2>
        <h4>You form data might have been incorrectly filled, kindly check again.</h4>
      </div>

      <div className="btn-logo">
        <button className="btn btn1 white-text" onClick={() => {closeFailure(); closeForm();}}>Return Home</button>

        <button className="btn btn1 white-text" onClick={closeFailure}>Try Again</button>
      </div>
    </section>
  );
};

export default Failure;
