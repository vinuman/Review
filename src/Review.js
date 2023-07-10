import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handlePrevBtn = () => {
    if (index == people.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const handleNextBtn = () => {
    if (index == 0) {
      setIndex(people.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const handleSurpriseBtn = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setIndex(randomIndex);
  };
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name}></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button onClick={() => handlePrevBtn()} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => handleNextBtn()} className="next-btn">
          <FaChevronRight />
        </button>
        <button onClick={() => handleSurpriseBtn()} className="random-btn">
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
