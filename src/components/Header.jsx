import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import iologo from "../assets/images/io.svg";

const Header = (props) => {
  const {openForm} = props;

  return (
    <header className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="GDG logo" />
        </Link>
      </div>

      <div className="io-logo">
        <img src={iologo} alt="Google I/O logo" />
      </div>

      <div className="btn-div">
        <button onClick={openForm} className="btn btn1 white-text">
          Notify me
        </button>
      </div>
    </header>
  );
};

export default Header;
