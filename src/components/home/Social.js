import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://instagram.com/_iampankaj"
        target="_blank"
        rel="noreferrer"
        className="home__social-icon"
        title="Instagram"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="#home"
        // target="_blank"
        rel="noreferrer"
        className="home__social-icon"
        title="Website"
      >
        <i className="uil uil-dribbble"></i>
      </a>
      <a
        href="https://github.com/iampankaj0"
        target="_blank"
        rel="noreferrer"
        className="home__social-icon"
        title="Github"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
