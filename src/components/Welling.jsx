import React from "react";
import "./Welling.scss";

export default function Welling() {
  return (
    <section className="welling">
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
            <header>
                ART FOR WELLBEING
            </header>
            </div>           
            
        </div>
        <div className="row two-col-content">
        <div className="col-lg-6 data-col">              
              <h3>
              Art Therapy Sessions
              </h3>
              <h2>(by appointment only):</h2>
              <ul>
                <li>
                Themed workshops focusing on specific techniques or projects, such as watercolor landscapes, portrait painting, and mixed media art.
                </li>
                <li>
                Opportunity for artists of all levels to experiment and learn new skills. 
                </li>
                <li>
                 Great for those seeking short-term, intensive artistic experiences.
                </li>
              </ul>
            </div> 
            <div className="col-lg-6 data-col">              
              <h3>
              Mindful Art 
              </h3>
              <h2>(group sessions):</h2>
              <ul>
                <li>
                Combines mindfulness practices with art-making.
                </li>
                <li>
                Focus on the process rather than the outcome, promoting relaxation and presence.
                </li>
                <li>
                Includes activities like mandala creation, zen doodling, and nature-inspired art.
                </li>
              </ul>
            </div>         
            
        </div>
        <div className="row text-center">
            <h6 className="artFooter">
            Join us at Art Realm Studio to embark on a journey of creativity, self-expression, and artistic growth. Whether you’re a beginner or an experienced artist, there’s a place for you here to explore and develop your artistic talents in a supportive and inspiring environment.
            </h6>
        </div>
      </div>
    </section>
  );
}
