import React from "react";
import { NavLink } from "react-router-dom";
import signUp from "../images/signup.svg";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import WorkIcon from "@material-ui/icons/Work";
import LockIcon from "@material-ui/icons/Lock";
import "../App.css";

const SignUp = () => {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <div className="register-form-container">
                <form className="register-form" id="register-form">
                  <h2 className="form-title">Sign up</h2>
                  <div className="form-group mt-3">
                    <label htmlFor="name">
                      <PersonIcon />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      autoComplete="off"
                    />
                  </div>

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
                    <label htmlFor="phone">
                      <PhoneIcon />
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="work">
                      <WorkIcon />
                    </label>
                    <input
                      type="text"
                      name="work"
                      id="work"
                      placeholder="Your Profession"
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

                  <div className="form-group mt-3">
                    <label htmlFor="cpassword">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Confirm Your Password"
                      autoComplete="off"
                    />
                  </div>

                  <div className="submit-container">
                    <button
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="signup-image">
                  <figure>
                    <img src={signUp} alt="signIn logo" />
                  </figure>
                  <NavLink to="/login" className="signup-image-link">
                    I am already register ?
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
