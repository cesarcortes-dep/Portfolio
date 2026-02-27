function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx  bx-medal-star-alt-2 about__icon"></i>
        <h3 className="about__title">My Experience</h3>
        <span className="about__subtitle">
          5+ years of experience in JavaScript, React, and React Native
          development.
        </span>
      </div>

      <div className="about__box">
        <i className="bx  bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Frontend Focus</h3>
        <span className="about__subtitle">
          Building responsive, scalable, and user-centered web interfaces.
        </span>
      </div>

      <div className="about__box">
        <i className="bx  bx-git-pull-request-closed about__icon"></i>
        <h3 className="about__title">Projects Delivered</h3>
        <span className="about__subtitle">
          Multiple successful projects across web and mobile platforms.
        </span>
      </div>
    </div>
  );
}

export default Info;
