import React from "react";
import Card from "./card";
import { cv } from "../../Data";
import "../../assets/css/resume.css";

const Resume = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Resume</h2>
      <span className="section__subtitle">My Story</span>

      <div className="resume__container container grid">
        {/* education */}
        <div className="resume__group">
          <h3 className="resume__heading">Education</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "Master") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        {/* experience */}
        <div className="resume__group">
          <h3 className="resume__heading">Experience</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
