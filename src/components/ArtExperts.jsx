import React from "react";
import "./twoCol.scss";

const ArtExperts = () => (
  <section className="twocolumn art">
    <div className="container">
      <div className="row">
        {/* Image Column */}
        <div className="col-lg-6 img-col">
          <img 
            src="/images/7_Art_Realm_Art-Classes_Image1.png" 
            alt="Art Class Representation" 
          />
        </div>
        {/* Content Column */}
        <div className="col-lg-6 data-col padding-top">
          <h2>Art Class</h2>
          <h3>
            Welcome to <span>Art Realm Studio,</span>
          </h3>
          <p>
            Where creativity flourishes and imaginations come to life! Our art
            classes cater to all age groups, from young children to adults,
            providing a nurturing environment for artistic exploration and
            development.
          </p>
          <a href="" className="btn-primary">
            Know More
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ArtExperts;
