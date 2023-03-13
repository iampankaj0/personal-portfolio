import React from "react";

const ModalDetails = ({toggleTab, title}) => {
  return (
    <div className="services__modal-content">
      <i
        className="uil uil-times services__modal-close"
        onClick={() => toggleTab(0)}
      ></i>
      <h3 className="services__modal-title">{title}</h3>
      <p className="services__modal-description">
        Service with more than two years of experience. Providing quality work
        to clients & companies.
      </p>

      <ul className="services__modal-servies grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">I develope the user interface.</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Web page developement.</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            I create UX elements interactions.
          </p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">I position your company brand.</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Design and mockups of products for companies.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ModalDetails;
