import React from "react";
import profile from "../images/profile.jpg";

const About = () => {
  return (
    <div>
      <div className="container emp-profile">
        <form method="" className="about_form">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="row">
                <div className="profile_pic_container col-md-3 col-sm-10">
                  <img src={profile} alt="profile logo" />
                </div>
                <div className="profile_content col-md-7 col-sm-10">
                  <div className="profile-head">
                    <h5>kishan italiya</h5>
                    <h6>MERN Developer</h6>
                    <p className="mt-3 mb-5">
                      RANKINGS: <span>5/10</span>
                    </p>

                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          href="#home"
                          data-toggle="tab"
                          role="tab"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          href="#profile"
                          data-toggle="tab"
                          role="tab"
                        >
                          Timeline
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-1 col-sm-2 profile-btn-container">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    value="Edit Profile"
                    name="btnAddMore"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-white">
              <div className="profile-work d-flex flex-column">
                <p>WORK LINK</p>
                <a
                  href="https://linkedin.com/in/kishan-italiya-097a60152"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/KishanItaliya" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-md-8 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>155648465113233332</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>Kishan Italiya</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>kishanpitaliya@gmail.com</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>9723592915</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>MERN Developer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>8$/hr</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>32</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6 about-info-text">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
