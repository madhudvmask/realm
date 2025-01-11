import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './wedo.scss';


export default function Wedo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="wedo-wrapper">
      <div className="container">
        <div className="row">
          <div className="header">
            <h2>WHAT WE DO</h2>
            <h3>
              We offer custom paintings, sculptures, art installations, wall murals, and sculptures.
            </h3>
          </div>
          <div className="slider">
            <Slider {...settings}>
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="slide">
                  <div className="slide-content">
                    <img
                      src={`/images/6_Art_Realm_What-We-Do_Tile${index}.png`}
                      alt="painting"
                    />
                    <h3>Painting</h3>
                    <div className="hover-data">
                      <p>Hovered Data</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
