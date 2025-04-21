import React from "react";
import Service from "../service/Service";
import "./Services.css";

const Services = () => {
  let services = [
    {
      id: 1,
      name: "E-Commerce",
      image: <i className="fa-solid fa-cart-shopping fa-lg"></i>,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
      id: 2,
      name: "Responsive Desing",
      image: <i className="fa-solid fa-laptop-code fa-lg"></i>,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
      id: 3,
      name: "Web Security",
      image: <i className="fa-solid fa-lock fa-lg"></i>,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
  ];

  return (
    <div className="services">
      <h1>SERVICES</h1>
      <em>Lorem ipsum dolor sit amet consectetur.</em>
      <div className="services-item">
        {services.map((service) => (
          <Service
            key={service.id}
            icon={service.image}
            name={service.name}
            desc={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
