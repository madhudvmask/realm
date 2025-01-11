import React from "react";
import "./Registration.scss";

export default function Registration() {
  return (
    <>
    <section className="registration-wrapper">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-md-12">
            <header>
              <h3>Registration Open for Art Classes at Art Realm Studio</h3>
              <p>
                We are excited to announce that registration is now open for our
                upcoming art classes at Art Realm Studio! Join us to explore
                your creativity and develop your artistic skills in a nurturing
                and inspiring environment. Our classes cater to all age groups,
                ensuring that everyone can find a perfect fit.
              </p>
            </header>
          </div>
        </div>

        {/* Registration Methods and Schedule */}
        <div className="row">
          {/* Registration Instructions */}
          <div className="col-md-6">
            <div className="htr-wrapper">
              <h6>HOW TO REGISTER:</h6>
              <ol>
                <li>
                  Visit Our Studio: Stop by Art Realm Studio to register in
                  person. We will be happy to assist you with class selection
                  and any questions you may have.
                </li>
                <li>
                  Online Registration: Visit our website{" "}
                  <a
                    href="https://www.artrealm.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.artrealm.in
                  </a>{" "}
                  to sign up for classes through our Google form.{" "}
                  <a
                    href="https://forms.gle/jnED3bL3UYYZZo3J7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to access the form
                  </a>
                  . Our easy-to-use online system allows you to browse available
                  classes and register at your convenience.
                </li>
                <li>
                  Phone Registration: Call us at 9686978377 to register over
                  the phone. We will be available from 9 AM to 5 PM, Monday to
                  Friday, to help you with the registration process.
                </li>
              </ol>
            </div>
          </div>

          {/* Class Schedule */}
          <div className="col-md-6">
            <div className="schedule">
              <h2>Saturday Class Schedule</h2>

              {/* Children's Classes */}
              <div className="schedule-item">
                <div className="icon">                
                  <img src="/images/Children.png" alt="Children Icon" />
                </div>
                <div className="details">
                  <h3>Children's Classes:</h3>
                  <p>Exploring Art:</p>
                  <p>
                    <span>Morning:</span> 10:00 AM - 11:00 AM
                  </p>
                  <p>
                    <span>Late Morning:</span> 11:15 AM - 12:15 PM
                  </p>
                </div>
              </div>

              {/* Teens' Classes */}
              <div className="schedule-item">
                <div className="icon">
                  <img src="/images/Teens.png" alt="Teens Icon" />
                </div>
                <div className="details">
                  <h3>Teens' Classes:</h3>
                  <p>Foundations of Drawing and Painting:</p>
                  <p>
                    <span>Afternoon:</span> 3:00 PM - 4:15 PM
                  </p>
                </div>
              </div>

              {/* Adults' Classes */}
              <div className="schedule-item">
                <div className="icon">
                  <img src="/images/Adults.png" alt="Adults Icon" />
                </div>
                <div className="details">
                  <h3>Adults' Classes:</h3>
                  <p>Beginner's Art Class:</p>
                  <p>
                    <span>Evening:</span> 4:30 PM - 6:00 PM
                  </p>
                  <p>Advanced Techniques in Painting:</p>
                  <p>
                    <span>Evening:</span> 4:30 PM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* Creative Workshops */}
              <div className="schedule-item">
                <div className="icon">
                  <img src="/images/CreativeMock.png" alt="Workshops Icon" />
                </div>
                <div className="details">
                  <h3>Creative Workshops:</h3>
                  <p>Monthly on Saturdays, 10 AM - 3 PM</p>
                  <p>(Check website for specific dates and themes)</p>
                </div>
              </div>

              {/* Art for Wellbeing */}
              <div className="schedule-item">
                <div className="icon">
                  <img src="/images/ArtWell.png" alt="Wellbeing Icon" />
                </div>
                <div className="details">
                  <h3>Art for Wellbeing:</h3>
                  <p>Art Therapy Sessions: By appointment only</p>
                  <p>Mindful Art: (Check website for specific dates and themes)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="fees-wrapper">
    <div className="container">
      <div className="row">
        {/* Fees and Discounts Section */}
        <div className="col-md-6">
          <div className="fees-discounts">
            <h3>Fees and Discounts</h3>
            <table className="fees-table">
              
              <tbody>
                <tr>
                  <td>Children's Classes</td>
                  <td>1000 <span>rupees per month</span></td>
                </tr>
                <tr>
                  <td>Teens' Classes</td>
                  <td>1400 <span>rupees per month</span></td>
                </tr>
                <tr>
                  <td>Adults' Classes</td>
                  <td>2000 <span>rupees per month</span></td>
                </tr>
                <tr>
                  <td>Creative Workshops</td>
                  <td><span>As per the workshop</span></td>
                </tr>
                <tr>
                  <td>Art Therapy Sessions</td>
                  <td>1000 <span>rupees per session</span></td>
                </tr>
                <tr>
                  <td>Mindful Art</td>
                  <td><span>As per session</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="col-md-6">
          <div className="additional-info">
            <p>
              <strong>Registration Fee:1500 rupees across all age
              groups</strong> 
            </p>
            <p>
              <strong>Family/Sibling Discount:</strong> Enroll two or more
              family members and receive a 10% discount on total class fees.
            </p>

            <p>
              <strong>What to Bring</strong> 
            </p>
            <ul>
              <li>
                All necessary art supplies (crayons, color pencils,
                watercolors) for children’s and teens’ classes should be
                brought by the students.
              </li>
              <li>
                Adults are encouraged to bring their own materials, though
                basic supplies will be available for beginners.
              </li>
              <li>
                For workshops, specific supply lists will be provided upon
                registration.
              </li>
            </ul>

            <p>
              Join us at Art Realm Studio to discover the joy of creating art
              and to connect with a community of fellow artists. Whether
              you're looking to learn new skills, enhance your existing
              talents, or simply enjoy the therapeutic benefits of art, we
              have a class for you.
            </p>
            <p>
              <strong>Register today and let your artistic journey begin!</strong> <br/>For
              more information, visit our website or contact us directly. We
              look forward to welcoming you to Art Realm Studio!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}
