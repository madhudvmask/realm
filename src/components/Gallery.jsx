import React from "react";
import "./artgallery.scss";

const ArtGallery = () => {
  return (
    <div className="art-gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h2>More Collection</h2>
        <h3 className="gallery-header">
          The Perfect Blend of Imagination and Art.
        </h3>

        <div className="gallery-grid">
          <div className="grid-item item-1"></div>
          <div className="grid-item item-2"></div>
          <div className="grid-item item-3"></div>
          <div className="grid-item item-4"></div>
        </div>
        </div>
        <div className="col-md-12">
        <a href="" className="btn-primary">
            Know More
          </a>
        </div>
          </div>
        
        
      </div>
    </div>
  );
};

export default ArtGallery;
