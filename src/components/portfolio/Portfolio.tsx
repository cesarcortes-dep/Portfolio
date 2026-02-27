import "./portfolio.css";
import Banner from "../../assets/banner-tiendas-ara.png";

const projects = [
  {
    id: 1,
    title: "Tiendas Ara Mobile App",
    href: "https://aratiendas.com/descarga-nuestra-app/",
    img: Banner,
  },
];

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent work</span>

      <div className="portfolio__container container grid">
        {projects.map((p) => (
          <article key={p.id} className="portfolio__card">
            <div className="portfolio__img">
              <img src={p.img} alt={p.title} />
            </div>

            <h3 className="portfolio__title">{p.title}</h3>

            <a
              href={p.href}
              className="button button--flex "
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
              <i className="uil uil-arrow-right portfolio__icon"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
