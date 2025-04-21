import React from "react";
import "./Portfolio.css";
import PortfolioItem from "../portfolioItem/PortfolioItem";

const Portfolio = () => {
  let portfolioCards = [
    {
      id: 1,
      name: "Threads",
      desc: "Illustration",
      image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
    },
    {
      id: 2,
      name: "Explore",
      desc: "Graphic Design",
      image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
    },
    {
      id: 3,
      name: "Finish",
      desc: "Identity",
      image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
    },
    {
      id: 4,
      name: "Lines",
      desc: "Branding",
      image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
    },
    {
      id: 5,
      name: "Southwest",
      desc: "Website Design",
      image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
    },
    {
      id: 6,
      name: "Window",
      desc: "Photography",
      image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
    },
  ];

  return (
    <div className="portfolio-head">
      <h2>Portfolio</h2>
      <em>Lorem ipsum dolor sit amet consectetur.</em>

      <div className="portfolio-items">
        {portfolioCards.map((card) => (
          <PortfolioItem
            key={card.id}
            name={card.name}
            desc={card.desc}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
