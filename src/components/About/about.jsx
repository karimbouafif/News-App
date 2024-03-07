import React from "react";
import "../../assets/sass/components/_card.scss";
import "../../assets/sass/layout/_grid.scss";
import "../../assets/sass/layout/_composition.scss";
// import image from "../../../public/nat5.jpg";
// import image1 from "../../../public/nat-6.jpg";
// import image2 from "../../../public/nat-7.jpg";
function About() {
 

  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
      Insights Beyond Borders: Navigate the World's Stories
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Tech News
          </h3>
          <p className="paragraph">
           Covering the latest developments in the tech industry, including product launches, mergers and acquisitions, and company news.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Events and Conferences
          </h3>
          <p className="paragraph">
           Coverage of major tech events, conferences, and expos, including keynote speeches, product announcements, and panel discussions.
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="/img-1.png"
              alt="Logo"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="/img-2.png"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="/img-3.png"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
