import React from "react";
import CV from "../../assets/Louis RAYMOND-CV.pdf";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Louis Raymond
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
        >
          <circle cx="12" cy="12" r="10" fill="#FFCC00" />
          <circle cx="8" cy="10" r="2" fill="#000" />
          <circle cx="16" cy="10" r="2" fill="#000" />
          <path d="M8 15h8c-2.67 1.33-5.33 1.33-8 0z" fill="#000" />
        </svg>
      </h1>
      <h3 className="home__subtitle">Developper Web</h3>
      <p className="home__description">
        I'm creative based in Madagascar and Iam developper man in the
        enterprises IA
      </p>
      <a href="#contact" className="button button--flex">
        <span style={{ marginRight: "5px" }}>Contact Me</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#fff"
            d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1zM9.616 16.318l-.318.318c-.28.28-.665.414-1.051.4-.377.009-.748-.126-1.041-.397L5.241 15.2c-.61-.61-.61-1.61 0-2.22l7.779-7.778c.61-.61 1.61-.61 2.22 0l1.04 1.041c.611.61.611 1.61 0 2.22l-5.225 5.225c-.286.287-.665.423-1.05.399-.377.012-.75-.12-1.047-.397zM15.785 9.413c-.205-.204-.48-.318-.765-.318-.286 0-.56.114-.766.318-.422.42-1.106.42-1.527-.001L9.16 5.488c-.418-.417-1.099-.42-1.522-.001-.208.204-.324.478-.324.766 0 .288.116.56.322.765l4.808 4.808c.21.21.492.318.77.318.278 0 .56-.107.769-.316.206-.206.322-.478.322-.765 0-.29-.117-.563-.324-.77z"
          />
        </svg>
      </a>
    </div>
  );
};

export default Data;
