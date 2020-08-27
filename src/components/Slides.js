import React, { useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    // setCurrentSlide(currentSlide - 1);
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(slides.length - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const resetSlides = () => {
    if (currentSlide > 0) {
      setCurrentSlide(0);
    }
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={resetSlides}
          disabled={currentSlide === 0}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
