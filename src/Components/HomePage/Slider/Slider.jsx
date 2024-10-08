import React, { useState, useEffect } from "react";
import "./sliderStyle.css";
import { Link } from "react-router-dom";

const slides = [
  {
    h1Text: "Kärnan av vår Existens",
    pText: "Förstå vikten Ubuntu i vår filosofi. Lär dig hur detta begrepp präglar vårt sätt att Se på sammanhang enhet och vårt ömsesidiga beroende.",
    imgSrc: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1704056190/ook_wqz5hy.jpg"
  },
  {
    h1Text: " Massage & Cosmetics",

    pText: "Upptäck vårt djupa engagemang för att förena kropp, själ och sinne genom afrikansk massage och filosofin av Ubuntu.",
    imgSrc: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/m1_gs8swb.jpg"
  },
  {
    h1Text: "Harmoni med naturen",

    pText: "Utforska vårt engagemang för att leva i harmoni med den naturliga världen upptäckt hur vi integrerar Hållbarhet och miljömedvetenhet i vårt vardag.",
    imgSrc: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/sh2_th7a7o.webp"
  },

];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="slider-container">
      <img
        className="sliderImg"
        src={slides[currentSlideIndex].imgSrc}
        alt="Slider Background"
      />
      <div className="slides">
        <h1>{slides[currentSlideIndex].h1Text}</h1>
        <p>{slides[currentSlideIndex].pText}</p>
        <button className="bokanNu">
          <Link to={"https://www.bokadirekt.se/places/afro-roots-of-sweden-55964"} className="Nav-link"> Boka Nu </Link>
        </button>
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlideIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
