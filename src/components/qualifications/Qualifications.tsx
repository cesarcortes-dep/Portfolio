import { useState } from "react";
import "./Qualifications.css";

function Qualifications() {
  const [toggleSate, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleSate === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> {""}
            Experience
          </div>
          
          <div
            className={
              toggleSate === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleSate === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Technology in Systems Management
                </h3>
                <span className=" qualification__subtitle">
                  Medellin, Colombia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Feb 2017-Oct 2023
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleSate === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  WEB UI Developer for Ara Teams Operations
                </h3>
                <span className="qualification__subtitle">
                  Globant - Colombia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Feb. 2025 – Dec. 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  WEB UI Developer for RSM Task Management
                </h3>
                <span className="qualification__subtitle">
                  Globant - Colombia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jun. 2024 – Nov. 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>

            {/* Tercera experiencia - Lado derecho */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  WEB UI Developer for Command Alkon
                </h3>
                <span className="qualification__subtitle">
                  Globant - Colombia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Dec. 2023 – Jun. 2024
                </div>
              </div>
            </div>

            {/* Cuarta experiencia - Lado izquierdo */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-End Developer</h3>
                <span className="qualification__subtitle">
                  Virtual Data-Crud - Medellin
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Ap. 2022 – Ag. 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>

            {/* Quinta experiencia - Lado derecho */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Product Owner for Sambil
                </h3>
                <span className="qualification__subtitle">
                  Design Solutions - Medellin
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jan. 2023 – Jun. 2023
                </div>
              </div>
            </div>

            {/* Sexta experiencia - Lado izquierdo */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  WordPress Developer for Castaño Hoyos
                </h3>
                <span className="qualification__subtitle">
                  Design Solutions - Medellin
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jan. 2023 – Jul. 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
