import React, { useState } from "react";
import "./services.css";

export const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Web Developer</h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button">
            View More{" "}
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>{" "}
          </span>
          {/* ------------------- */}
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
              Web Developer responsible for the design and construction of websites. Ensuring that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues.
              </p>
              <ul className="services__modal-services grid">
                {/* ------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I develop the user's interface.
                  </p>
                </li>
                {/* ------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I write well designed, testable, efficient code by using
                    best software development practices
                  </p>
                </li>
                {/* ------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I create website layout/user interface by using standard
                    HTML/CSS practices
                  </p>
                </li>
                {/* ------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I cooperate with web designers to match visual design intent
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product Designer</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>{" "}
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than a 1 year of experience.
                <br />
                Providing quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                {/* ----------------------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Identify opportunities for new products.
                  </p>
                </li>
                {/* ----------------------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Research materials and techniques
                  </p>
                </li>
                {/* ----------------------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Gather feedback from product users
                  </p>
                </li>
                {/* ----------------------------------- */}
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Set design requirements based on information from internal
                    teams and user research.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
