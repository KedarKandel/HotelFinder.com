import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HotelFinder.com</span>
        </Link>

        <div className="navmenu">
        <Link to="/">
            <button className="navBtn">Home</button>
          </Link>
          <Link to="/register">
            <button className="navBtn">Register</button>
          </Link>
          <Link to="/login">
            <button className="navBtn">SignIn</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
