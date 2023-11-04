import React, { useEffect, useState } from 'react';
import './Slideshow.css';

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        return newIndex;
      });

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += "active";
    };

    const interval = setInterval(showSlides, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="src/assets/1.jpg" style={{ width: '100%' }} />
      </div>

      <div className="mySlides fade">
        <img src="src/assets/2.jpg" style={{ width: '100%' }} />
      </div>
      <br/><br/>
    </div>
  );
}

export default Slideshow;
