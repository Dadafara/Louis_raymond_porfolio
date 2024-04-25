import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target="blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.github.com"
        className="home__social-icon"
        target="blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.facebook.com"
        className="home__social-icon"
        target="blank"
      >
        <i class="bx bxl-meta"></i>
      </a>
    </div>
  );
};

export default Social;
