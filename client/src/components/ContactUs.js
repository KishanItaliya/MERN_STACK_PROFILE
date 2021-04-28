import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../App.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="row">
                <div className="contact_info_item col-xl-4 col-md-12 col-sm-12">
                  <div className="contact_info_content_container">
                    <PhoneIcon />
                    <div className="contact_info_content">
                      <div className="contact_info_title">Phone</div>
                      <div className="contact_info_text">+919723592915</div>
                    </div>
                  </div>
                </div>

                <div className="contact_info_item col-xl-4 col-md-12 col-sm-12">
                  <div className="contact_info_content_container">
                    <EmailIcon />
                    <div className="contact_info_content">
                      <div className="contact_info_title">Email</div>
                      <div className="contact_info_text">
                        kishanpitaliya@gmail.com
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact_info_item col-xl-4 col-md-12 col-sm-12">
                  <div className="contact_info_content_container">
                    <LocationOnIcon />
                    <div className="contact_info_content">
                      <div className="contact_info_title">Address</div>
                      <div className="contact_info_text">Surat,GJ,India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="contact_form">
                <div className="contact_form_container">
                  <div className="contact_form_title text-white">
                    <h3>Get In Touch</h3>
                  </div>
                  <form id="contact_form" className="mt-3">
                    <div className="contact_form_field">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name"
                        placeholder="Your Name"
                        required="true"
                        autoComplete="off"
                      />

                      <input
                        type="email"
                        id="contact_form_email"
                        className="contact_form_email"
                        placeholder="Your Email"
                        required="true"
                        autoComplete="off"
                      />

                      <input
                        type="number"
                        id="contact_form_phone"
                        className="contact_form_phone"
                        placeholder="Your Phone Number"
                        required="true"
                        autoComplete="off"
                      />
                    </div>
                    <div className="contact_form_text mt-3">
                      <textarea className="" placeholder="Message" rows="5" />
                    </div>

                    <div className="contact_form_button mt-2">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
