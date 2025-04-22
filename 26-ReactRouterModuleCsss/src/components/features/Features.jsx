import React from "react";
import style from './Features.module.css';
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import Feature from "../feature/Feature";

const Features = () => {
  const features = [
    {
      id: 1,
      name: "Featured title 1",
      image: <IoFolderOpenOutline />,
      description: "Paragraph of text beneath the heading to explain the heading."
    },
    {
      id: 2,
      name: "Featured title 2",
      image: <MdOutlineHomeWork />,
      description: "Paragraph of text beneath the heading to explain the heading."
    },
    {
      id: 3,
      name: "Featured title 3",
      image: <LuSettings2 />,
      description: "Paragraph of text beneath the heading to explain the heading."
    },
  ];

  return (
    <div className={style.features}>
      {features.map((feature) => (
        <Feature
          key={feature.id}
          icon={feature.image}
          name={feature.name}
          desc={feature.description}
        />
      ))}
    </div>
  );
};

export default Features;
