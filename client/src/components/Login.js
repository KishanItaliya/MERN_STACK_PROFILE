import React from "react";
import { NavLink } from "react-router-dom";
import signIn from "../images/login.svg";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import "../App.css";

const Login = () => {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <div className="login-form-container">
                <div className="signin-image">
                  <figure>
                    <img src={signIn} alt="signIn logo" />
                  </figure>
                  <NavLink to="/signup" className="signin-image-link mb-2">
                    Create an Account ?
                  </NavLink>
                </div>
                <form className="login-form" id="register-form">
                  <h2 className="form-title">Log In</h2>
                  <div className="form-group mt-3">
                    <label htmlFor="email">
                      <EmailIcon />
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="password">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      autoComplete="off"
                    />
                  </div>

                  <div className="submit-container">
                    <button
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
