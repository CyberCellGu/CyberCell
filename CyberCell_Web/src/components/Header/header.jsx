import { useState } from "react";
import logo from "../../assets/cybercelllogoo.png";
import icon from "../../assets/hacker.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import logo from "../assets/cybercelllogoo.png";

const Header = ({ updateColor }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <img width={110} src={logo} alt="CyberCell Logo" />
      </a>
      <div className={`navbar ${navbarOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <HashLink to="/#games">Events</HashLink>
          </li>
          <li>
          
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="hacktivists">Hacktivists</Link>
          </li>
          <li>
            <HashLink>About</HashLink>
          </li>

          <button>
            <Link to="/login">LOGIN</Link>
          </button>

          <img
            style={{ cursor: "pointer" }}
            width={35}
            src={icon}
            alt="Hacker Icon"
            onClick={() => {
              updateColor("green");
            }}
          />
        </ul>
      </div>
      <div id="mobile" onClick={() => setNavbarOpen((prev) => !prev)}>
        <i id="bar" className={navbarOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};
export default Header;
