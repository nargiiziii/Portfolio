import React from "react";
import style from "./Testimonials.module.css";
import TestimonItem from "../testimItem/TestimonItem";
import { BiSolidCommentDots } from "react-icons/bi";

const Tesmonials = () => {
  let testComments = [
    {
      id: 1,
      comment:
        "Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
      location: "- Client Name, Location",
      icon: <BiSolidCommentDots />,
    },
    {
      id: 2,
      comment:
        "The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
      location: "- Client Name, Location",
      icon: <BiSolidCommentDots />,
    },
  ];

  return (
    <div className={style.testimonials}>
      <div className={style.test_area}>
        <h1>Customer testimonials</h1>
        <p>Our customers love working with us</p>
      </div>

      <div className={style.testim_comments}>
        {testComments.map((testItem) => (
          <TestimonItem
            key={testItem.id}
            comment={testItem.comment}
            location={testItem.location}
            icon={testItem.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Tesmonials;
