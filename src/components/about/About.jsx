import React, { useState } from "react";
import AboutImg from "../../assets/About.png";
import "../../assets/css/about.css";
import CV from "../../assets/Louis RAYMOND-CV.pdf";
import Info from "./Info";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img
          src={AboutImg}
          alt=""
          className={`about__img ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
          <a download="" href={CV} className="button button--flex">
            <span style={{ marginRight: "5px" }}>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                // fill="var(--container-color)"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
