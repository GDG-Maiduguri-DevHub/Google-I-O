import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import iologo from "../assets/images/io.svg";

const Header = (props) => (
  <header className="container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="GDG logo" />
      </Link>
    </div>

    <div className="io-logo">
        <img src={iologo} alt="Google I/O logo" />
    </div>

    {props.showBtn != "true" && <div className="btn-div">
      <Link to="*" className="btn btn1 white-text">
        Notify me
      </Link>
    </div>}
  </header>
);

export default Header;
