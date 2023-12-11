import React, { useState, useEffect } from "react";
import "./sliderStyle.css";
import { Link } from "react-router-dom";

const slides = [
  {
    h1Text: "Kärnan av Vår Existens",
    pText: "Förstå vikten Ubuntu i vår filosofi. Lär dig hur detta begrepp präglar vårt sätt att Se på sammanhang enhet och vårt ömsesidiga beroende.",
    imgSrc: "noWay"
  },
  {
    h1Text: " Massage & Cosmetics",
   
    pText: "Upptäck vårt djupa engagemang för att förena kropp, själ och sinne genom afrikansk massage och filosin av Ubuntu",
    imgSrc: "noWay"
  },
];

const Slider = () => {
  const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[count]);

  const { h1Text, pText } = currentSlide;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % slides.length);
      setCurrentSlide(slides[count]); // Issue: should be setCount((prevCount) => (prevCount + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  const handleCircleClick = (index) => {
    setCount(index);
    setCurrentSlide(slides[index]);
  };

  return (
    <div className="slider-container">
      <img
        className="sliderImg"
        src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702332335/main_gqbtfk.avif"
        alt="Slider Background"
      />
      <div className="slides">
        <h1>{h1Text}</h1>
        <p>{pText}</p>
        <button className="bokanNu">
          <Link to={"/Booking"}  className="Nav-link"> Boka Nu </Link></button>
      </div>
      
    </div>
  );
};

export default Slider;
