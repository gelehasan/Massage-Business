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
        <div>
            
        </div>
    )
}


export default Slider;
