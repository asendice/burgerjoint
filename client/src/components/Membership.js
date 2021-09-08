import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiRank3 } from "react-icons/gi";
import { GiShinyApple } from "react-icons/gi";
import { GiTrophiesShelf } from "react-icons/gi";

const Membership = () => {
  const rewards = [
    {
      title: "FREE BIRTHDAY BURGER",
      img: <FaBirthdayCake className="reward-img" />,
      description:
        "Choose from any of your favorite fire-grilled burgers (valid once during the month of your birthday)",
    },
    {
      title: "EVERY 10TH ITEM FREE",
      img: <GiGlassCelebration className="reward-img" />,
      description:
        "Mix and match burgers, salads, sandwiches and entrees (catering orders do not apply toward credit).",
    },
    {
      title: "$20 TOWARD 6TH VISIT",
      img: <GiTakeMyMoney className="reward-img" />,
      description:
        "When you visit 5x in the first 5 weeks. (Each purchase must include a burger, entree, full-sized salad or sandwich)",
    },
    {
      title: "MILITARY REWARDS",
      img: <GiRank3 className="reward-img" />,
      description:
        "Our chance to serve those who have served us proudly (US Only).",
    },
    {
      title: "TEACHER REWARDS",
      img: <GiShinyApple className="reward-img" />,
      description:
        "Enjoy surprises throughout the year as a small thanks for your bottomless dedication.",
    },
    {
      title: "SURPRISE REWARDS",
      img: <GiTrophiesShelf className="reward-img" />,
      description:
        "You and your taste buds will be delighted throughout the year with special offers and great deals.",
    },
  ];

  return (
    <>
      <div className="membership-top">
        <h1>Burger Joint Club</h1>
        <p>
          Tasty rewards like a Free Birthday Burger and 10th Item Free are just
          the beginning. A life of burger delight begins with one step. Join
          now.
        </p>
        <div className="join-btn">Join Now</div>
        <div className="sign-btn">Sign In</div>
      </div>
      <div className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="membership-bot">
        <h1>BECOME A CLUB MEMBER & ENJOY THESE REWARDS</h1>
        <div className="reward-grp">
          {rewards.map((item) => {
            return (
              <div key={item.title} className="reward">
                {item.img}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="sign-btn btn-org">Join Now</div>
      </div>
    </>
  );
};

export default Membership;
