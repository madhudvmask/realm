import React from "react";
import "./Collections.scss";

const CollectionsList = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="collections art">
        <div className="container">
          <div className="row">
            {/* Image Column */}
            <div className="col-lg-6 img-col">
              <img
                src="/images/7_Art_Realm_Art-Classes_Image1.png"
                alt="Representation of art classes at Art Realm Studio"
              />
            </div>
            {/* Content Column */}
            <div className="col-lg-6 data-col padding-top">
              <h2>ART CLASSES AT ART REALM STUDIO</h2>
              <h3>
                Welcome to <span>Art Realm Studio</span>
              </h3>
              <p>
                Where creativity flourishes and imaginations come to life! Our art
                classes cater to all age groups, from young children to adults,
                providing a nurturing environment for artistic exploration and
                development.
              </p>
              <a href="#" className="btn-primary">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="collections children-art">
        <div className="container">
          <div className="row alt-row">
            {/* Content Column */}
            <div className="col-lg-6 data-col padding-top">
              <h2>CLASSES FOR CHILDREN (AGES 4-12)</h2>
              <h3>Exploring Art</h3>
              <div>
                <ul>
                  <li>
                    An introductory class where children can experiment with
                    different mediums such as watercolors, crayons, and clay.
                  </li>
                  <li>
                    Focus on basic techniques, color theory, and skill
                    development.
                  </li>
                  <li>
                    Encourages creative expression and confidence in their
                    artistic abilities.
                  </li>
                </ul>
              </div>
              <h3>Storytelling Through Art:</h3>
              <div>
                <ul>
                  <li>
                    Combines literature and art, allowing children to create
                    illustrations inspired by their favorite stories.
                  </li>
                  <li>Develops narrative skills and imagination.</li>
                  <li>
                    Engages children in group activities to foster collaboration
                    and communication.
                  </li>
                </ul>
              </div>
              {/* Uncomment the button if needed */}
              {/* <a href="#" className="btn-primary">
                Know More
              </a> */}
            </div>
            {/* Image Column */}
            <div className="col-lg-6 img-col">
              <img
                src="/images/Childrens_Image.png"
                alt="Children participating in art classes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="collections art section3">
        <div className="container">
          <div className="row">
            {/* Image Column */}
            <div className="col-lg-6 img-col">
              <img
                src="/images/Teens_image.png"
                alt="Representation of art classes at Art Realm Studio"
              />
            </div>
            {/* Content Column */}
            <div className="col-lg-6 data-col padding-top">
              <h2>CLASSES FOR TEENS (AGES 13-17)</h2>
              <h3>
              Foundations of Drawing and Painting:
              </h3>
              <ul>
                <li>
                Emphasis on fundamental drawing techniques, perspective, and composition.
                </li>
                <li>
                Introduction to various painting styles and mediums, including acrylics, oils, and pastels.
                </li>
                <li>
                Preparation for portfolio development for aspiring art students.
                </li>
                <li>
                Focus on basic techniques, color theory, and art history
                </li>
              </ul>
              <h3>
              Creative Thinking and Critical Thinking:
              </h3>
              <ul>
                <li>
                Exercises and projects designed to enhance creativity and problem-solving skills.
                </li>
                <li>
                Focus on innovative approaches to art-making and concept development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* Section 4 */}
       <section className="collections children-art mb100">
        <div className="container">
          <div className="row alt-row">
            {/* Content Column */}
            <div className="col-lg-6 data-col padding-top">
              <h2>CLASSES FOR ADULTS</h2>
              <h3>Beginner’s Art Class:</h3>
              <div>
                <ul>
                  <li>
                  Ideal for those who have always wanted to try their hand at art but didn’t know where to start.
                  </li>
                  <li>
                  Covers basic drawing, painting, and sculpting techniques.
                  </li>
                  <li>
                  Encourages a relaxed and supportive environment for creativity.
                  </li>
                </ul>
              </div>
              <h3>Advanced Techniques in Painting:</h3>
              <div>
                <ul>
                  <li>
                  For experienced artists looking to refine their skills and explore new styles.
                  </li>
                  <li>In-depth study of advanced painting techniques, including realism, abstract, and contemporary art. </li>
                  <li>
                  Individual guidance and feedback to help artists develop their unique voice.
                  </li>
                </ul>
              </div>
              <h3>Creative Workshops:</h3>
              <div>
                <ul>
                  <li>
                  Themed workshops focusing on specific techniques or projects, such as watercolor landscapes, portrait painting, and mixed media art.
                  </li>
                  <li> Opportunity for artists of all levels to experiment and learn new skills.</li>
                  <li>
                  Great for those seeking short-term, intensive artistic experiences.
                  </li>
                </ul>
              </div>
              {/* Uncomment the button if needed */}
              {/* <a href="#" className="btn-primary">
                Know More
              </a> */}
            </div>
            {/* Image Column */}
            <div className="col-lg-6 img-col">
              <img
                src="/images/Childrens_Image.png"
                alt="Children participating in art classes"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionsList;
