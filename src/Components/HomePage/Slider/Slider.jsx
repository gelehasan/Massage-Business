import React, { useState, useEffect } from "react";
import "./sliderStyle.css";
import { Link } from "react-router-dom";

const slides = [
  {
    h1Text: "Kärnan av vår Existens",
    pText: "Förstå vikten Ubuntu i vår filosofi. Lär dig hur detta begrepp präglar vårt sätt att se på sammanhang, enhet och vårt ömsesidiga beroende.",
    imgSrc: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1704056190/ook_wqz5hy.jpg",
  },
  {
    h1Text: "Massage & Cosmetics",
    pText: "Upptäck vårt djupa engagemang för att förena kropp, själ och sinne genom afrikansk massage och filosofin av Ubuntu.",
    imgSrc: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/m1_gs8swb.jpg",
  },
  {
    h1Text: "Harmoni med naturen",
    pText: "Utforska vårt engagemang för att leva i harmoni med den naturliga världen — hur vi integrerar hållbarhet och miljömedvetenhet i vår vardag.",
    imgSrc: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/sh2_th7a7o.webp",
  },
];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img
        className="sliderImg"
        src={slides[currentSlideIndex].imgSrc}
        alt="Hero background"
      />
      <div className="slider-overlay" />
      <div className="slides">
        <h1>{slides[currentSlideIndex].h1Text}</h1>
        <p>{slides[currentSlideIndex].pText}</p>
        <Link to="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964">
          <button className="bokanNu">Boka Nu</button>
        </Link>
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlideIndex ? "active" : ""}`}
            onClick={() => setCurrentSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
