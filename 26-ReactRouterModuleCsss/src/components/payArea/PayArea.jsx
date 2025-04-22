import React from "react";
import style from "./PayArea.module.css";
import PayBtn from "../payBtn/PayBtn";

const PayArea = () => {
  let payCard = [
    {
      id: 1,
      plan: "Free",
      price: "$0 / mo.",
      users: "1 user",
      info: `5GB storage
Unlimited public projects
Community access
Unlimited private projects
Dedicated support
Free linked domain
Monthly status reports`,
    },
    {
      id: 2,
      plan: "Pro",
      price: "$9 / mo.",
      users: "5 users",
      info: `5GB storage
Unlimited public projects
Community access
Unlimited private projects
Dedicated support
Free linked domain
Monthly status reports`,
    },
    {
      id: 3,
      plan: "Enterprise",
      price: "$49 / mo.",
      users: "Unlimited users",
      info: `5GB storage
Unlimited public projects
Community access
Unlimited private projects
Dedicated support
Unlimited linked domains
Monthly status reports`,
    },
  ];

  let plan = "Choose plan";

  return (
    <div className={style.pay_area}>
      <div className={style.head_text}>
        <h1>Pay as you grow</h1>
        <p>With our no hassle pricing plans</p>
      </div>
      <div className={style.cards_area}>
        {payCard.map((card) => (
          <div key={card.id} className={style.card}>
            <p>{card.plan}</p>
            <h3>{card.price}</h3>
            <p>{card.users}</p>
            <div className={style.info}>{card.info}</div>
            <PayBtn plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayArea;
