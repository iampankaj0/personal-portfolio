import React, { useState } from "react";
import ModalDetails from "./ModalDetails";
import "./services.scss";

const Services = () => {
  const [toggleState, settoggleState] = useState(0);

  const toggleTab = (index) => {
    settoggleState(index);
  };

  return (
    <div className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid service__icon"></i>
            <h3 className="services__title">
              Website <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow service__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit service__icon"></i>
            <h3 className="services__title">
              Software <br /> Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>

        <div
          className={
            toggleState !== 0
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          {toggleState === 1 ? (
            <ModalDetails toggleTab={toggleTab} title="Website Designer" />
          ) : toggleState === 2 ? (
            <ModalDetails toggleTab={toggleTab} title="Ui/Ux Developer" />
          ) : (
            toggleState === 3 && (
              <ModalDetails toggleTab={toggleTab} title="Software Developer" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
