import React, { useState } from "react";

const Course = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  <div className="qualification__sections ">
    <div className={`${showInfo ? "show-content" : ""} qualification__content`}>
      <div className="qualification__data">
        <div>
          <div
            className="resume__header"
            onClick={() => setShowInfo(!showInfo)}
          >
            <h3 className="qualification__title">{props.title}</h3>
            <span className="qualification__rounder">
              {showInfo ? "-" : "+"}
            </span>
            <span className="qualification__line"></span>
          </div>
          <span className="qualification__subtitle">{props.subtitle}</span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt">{props.date}</i>
          </div>
        </div>
        <div>
          <p className="resume__description">{props.description}</p>
        </div>
      </div>
    </div>
  </div>;
};

export default Course;
