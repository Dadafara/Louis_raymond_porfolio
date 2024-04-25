import React, { useState } from "react";
import "../../assets/css/qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Story</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Ecole Nationale d'Informatique
                </h3>
                <span className="qualification__subtitle">
                  Optention displôme Master
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* education */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Ferber Enterprises</h3>
                <span className="qualification__subtitle">
                  developper backend
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>

            {/* education */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Ecole Nationale D'informatique
                </h3>
                <span className="qualification__subtitle">Lincence</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* experience */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Developper</h3>
                <span className="qualification__subtitle">Vue.js</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">jlsjljlsjljjsljsljl</h3>
                <span className="qualification__subtitle">
                  Optention displôme Master SQLLJQLSJLFJQMLSJLG JSQLMJGLJ
                  SQMLJML SJDK MGGGGGGGGGGGGG GGGGGGGGGGGG GGGGGGGGGGGGGGG GGG
                  GGGGG GGGEIM OIMIMO
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* education */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Ferber Enterprises</h3>
                <span className="qualification__subtitle">
                  developper backend
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>

            {/* education */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Ecole Nationale D'informatique
                </h3>
                <span className="qualification__subtitle">Lincence</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* experience */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Developper</h3>
                <span className="qualification__subtitle">Vue.js</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
