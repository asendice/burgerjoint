import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import burger5 from "../instagram/burger5.jpeg";
import burger24 from "../instagram/burger24.jpeg";
import burger26 from "../instagram/burger26.jpeg";
import burger42 from "../instagram/burger42.jpeg";
import burger54 from "../instagram/burger54.jpeg";
import burger58 from "../instagram/burger58.jpeg";
import burger66 from "../instagram/burger66.jpeg";
import burger68 from "../instagram/burger68.jpeg";
import burger78 from "../instagram/burger78.jpeg";
import burger87 from "../instagram/burger87.jpeg";

const Gram = () => {
  const instaGramItems = [
    {
      img: burger5,
      msg: "burger bae ",
      likes: 263,
      comments: 11,
    },
    {
      img: burger24,
      msg: "burger on the brain",
      likes: 414,
      comments: 19,
    },
    {
      img: burger26,
      msg: "a burger without cheese is like a hug without a squeeze ",
      likes: 277,
      comments: 9,
    },
    {
      img: burger42,
      msg: "i’m into fitness…fitness whole burger in my mouth ",
      likes: 593,
      comments: 22,
    },
    {
      img: burger54,
      msg: "the best burgers are the ones shared with friends",
      likes: 400,
      comments: 13,
    },
    {
      img: burger58,
      msg: "the only bad burger is the one you didn’t eat",
      likes: 632,
      comments: 34,
    },
    {
      img: burger66,
      msg: "extra cheese, please ",
      likes: 255,
      comments: 4,
    },
    {
      img: burger68,
      msg: "eyes on the fries",
      likes: 194,
      comments: 3,
    },
    {
      img: burger78,
      msg: "we followed our hearts and it led us to burgers ",
      likes: 799,
      comments: 21,
    },
    {
      img: burger87,
      msg: "when life throws you a burger, eat it ",
      likes: 455,
      comments: 9,
    },
  ];

  return (
    <div className="gram-container">
      <div className="landing-section-title"> 
        #burgerjoint
        <FaInstagram />
        </div>
      <div className="img-container">
        {instaGramItems.map((gram) => {
          return (
            <>
              {/* <img
              className="gram-item"
              src={gram.img}
              // style={{ background: `url(${gram.img})` }}
            /> */}
              <div
                className="gram-item"
                style={{ backgroundImage: `url(${gram.img})` }}
              >
                <div className="gram-item-overlay">
                  <div className="likes-comments">
                    <FaRegHeart />
                    <h4>{gram.likes}</h4>
                    <FaRegComment />
                    <h4>{gram.comments}</h4>
                  </div>

                  <h4 className="gram-item-comment">{gram.msg}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Gram;
