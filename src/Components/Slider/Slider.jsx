import { useState, useEffect } from "react";
import "./sliderStyle.css"
const Slider = ()=>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { content: <div>Slide 1</div> },
        { content: <div>Slide 2</div> },
        { content: <div>Slide 3</div> },
      ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleCircleClick = (index) => {
    setCurrentSlide(index);
  };

    return (

       
        <div className="slider-container">
    <img className="sliderImg" src="https://images.unsplash.com/photo-1617952986600-802f965dcdbc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className="slides">
        <h1> Message & Comestic</h1>
        <p>Uppstäck vårt djupa engagemang för att förena kropp, själ och sinne gemom afrikansk massage och filosofin av Ubuntu </p>
        <button>Boka Nu</button>
      </div>
      {/*<div className="circles">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`circle ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>*/
}
    </div>

    )
}


export default Slider;
