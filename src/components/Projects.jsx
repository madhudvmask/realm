import React from 'react';
import './Projects.scss';

export default function Projects() {
  return (
    <section className="ongoing-projects">
      <div className="container">
        <div className="project-data row">
          <div className="project-list col-md-6">
            <h2>
            ONGOING PROJECTS
            </h2>
            <h3>
            Transforming Ideas into <br/>Living Art.
            </h3>
            <ul>
                <li>
                    <a href="#" className='active'>
                    Chin Lung Resto Bar,<br/> Indiranagar 
                    </a>
                </li>
                <li>
                    <a href="#">
                    Kalinga Bar and Kitchen, <br/>Indiranagar
                    </a>
                </li>
                
            </ul>
          </div>
          <div className="project-image col-md-6">
            <img src="/images/13_Art_Realm_Projects_P1.png" alt="ongoing projects" />
          </div>
        </div>
      </div>
    </section>
  );
}
