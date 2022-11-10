import React from "react";
import "./scrollUp.scss";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={scrollToTop} className="scrollup" title="scroll top">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;
