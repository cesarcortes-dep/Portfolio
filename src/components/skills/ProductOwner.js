import React from "react";

export const ProductOwner = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Product Owner</h3>

      <div className="skills__box">
        <div className="skills__group">
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Strategizing and presenting <br/>ideas to stakeholders.</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Defining product features <br/> according to customer needs.</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Leading the development process.</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Managing and prioritizing product backlog items.</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
