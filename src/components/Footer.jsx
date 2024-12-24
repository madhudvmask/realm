import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    const emailParams = {
      from_name: formData.firstName,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: "madhu.dvmask@gmail.com",
    };

    emailjs
      .send(
        "service_nyityxa", // Replace with your EmailJS service ID
        "template_bv4lysj", // Replace with your EmailJS template ID
        emailParams,
        "I8_mGLJg9zlj4WBHV" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ firstName: "", email: "", phone: "", message: "" });
          setLoading(false); // Hide loader
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send the message. Please try again.");
          setLoading(false); // Hide loader
        }
      );
  };

  return (
    <footer>
      <div className="container" id="footer">
        <div className="row">
          <div className="contact-form col-md-6">
            <h3>CONTACT US</h3>
            <h2>Get in Touch</h2>
            <p>Let's Turn Your Vision Into Reality.</p>

            <form onSubmit={handleSubmit}>
              <div className="row1">
                <div className="form-group">
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder=" "
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                  <label htmlFor="first-name">First Name*</label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                  <label htmlFor="email">Email*</label>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit phone number."
                  />
                  <label htmlFor="phone">Phone Number*</label>
                </div>
              </div>
              <div className="row2">
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  ></textarea>
                  <label htmlFor="message">Message*</label>
                </div>
              </div>
              <div className="row3">
                {status && <p className="msgStatus">{status}</p>}
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info col-md-6">
            <div className="info-wrapper">
              {/* Contact info remains unchanged */}
              <p>
                <span>
                  <img
                    alt="14_Website_Icon1.png"
                    src="../../public/images/14_Website_Icon1.png"
                  />
                </span>
                <span>
                  <a
                    href="https://www.artrealm.in"
                    style={{ color: "inherit" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.artrealm.in
                  </a>
                </span>
              </p>
              <p>
                <span>
                  <img
                    alt="14_Mail_Icon2"
                    src="../../public/images/14_Mail_Icon2.png"
                  />
                </span>
                <span>
                  <ul>
                    <li>
                      <a
                        href="mailto:info@artrealm.in"
                        style={{ color: "inherit" }}
                      >
                        info@artrealm.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:gagana@artrealm.in"
                        style={{ color: "inherit" }}
                      >
                        gagana@artrealm.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:business@artrealm.in"
                        style={{ color: "inherit" }}
                      >
                        business@artrealm.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:director@artrealm.in"
                        style={{ color: "inherit" }}
                      >
                        director@artrealm.in
                      </a>
                    </li>
                  </ul>
                </span>
              </p>
              <p>
                <span>
                  <img
                    alt="14_Mail_Icon2"
                    src="../../public/images/14_Location_Icon3.png"
                  />
                </span>
                <span>
                  ART REALM
                  <br />
                  #3 & 4, Asha Township,
                  <br />
                  Doddagubbi, Bengaluru - 560077
                </span>
              </p>
              <p>
                <span>
                  <img
                    alt="14_Mail_Icon2"
                    src="../../public/images/14_Call_Icon4.png"
                  />
                </span>
                <span>
                  <a href="tel:9686978377" style={{ color: "inherit" }}>
                    968 697 8377
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <a href="#">Design by 888-Creation/2024</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
