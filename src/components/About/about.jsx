"use client"
import React from "react";
import { Typography, Button } from "@material-ui/core";
import "../../assets/sass/main.scss";
import { ArrowForward } from "@material-ui/icons";


function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <Typography variant="h2" className="heading-secondary">
          Insights Beyond Borders: Navigate the World's Stories
        </Typography>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <Typography variant="h3" className="heading-tertiary u-margin-bottom-small">
            Tech News
          </Typography>
          <Typography variant="body" className="paragraph">
            Covering the latest developments in the tech industry, including product launches, mergers and acquisitions, and company news.
          </Typography>

          <Typography variant="h3" className="heading-tertiary u-margin-bottom-small">
            Events and Conferences
          </Typography>
          <Typography variant="body" className="paragraph">
            Coverage of major tech events, conferences, and expos, including keynote speeches, product announcements, and panel discussions.
          </Typography>

          <Button href="#" className="btn-text">
            Learn more
            {/* You can add icons if needed */}
            <ArrowForward />
          </Button>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            {/* You can use Material-UI Image component or simply use img tag */}
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
