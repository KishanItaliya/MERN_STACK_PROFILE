import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const location = useLocation();
  const currentTab = (path) => {
    if (location.pathname === path) {
      return {
        color: "#3a9fbf",
      };
    } else {
      return {
        color: "#FFF",
      };
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="nav-logo ml-5" />
        </NavLink>
        <button
          className="navbar-toggler navbar-button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="nav-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active mr-3">
              <NavLink className="nav-link" to="/" style={currentTab("/")}>
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink
                className="nav-link"
                to="/about"
                style={currentTab("/about")}
              >
                AboutMe
              </NavLink>
            </li>

            <li className="nav-item mr-3">
              <NavLink
                className="nav-link"
                to="/contact"
                style={currentTab("/contact")}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink
                className="nav-link"
                to="/login"
                style={currentTab("/login")}
              >
                LogIn
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink
                className="nav-link"
                to="/signup"
                style={currentTab("/signup")}
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
