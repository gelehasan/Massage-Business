import { useState, useEffect } from "react";

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
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <div className="circles">
        {slides.map((_, index) => (
          <FaCircle
            key={index}
            className={`circle ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
    </div>
    )
}


export default Slider;
