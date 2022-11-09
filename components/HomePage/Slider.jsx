import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
import Image from "next/image";

const StyledSlider = styled.div`
  max-width: 100%;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgb(0 0 0 / 0.3);
  }

  .slider {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider h1 {
    position: absolute;
    color: white;
    z-index: 3;
  }

  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0;
  }

  .iconLeft {
    position: absolute;
    top: 50%;
    left: 15px;
    color: white;
    cursor: pointer;
    user-select: none;
    z-index: 2;
  }

  .iconRight {
    position: absolute;
    top: 50%;
    right: 15px;
    color: white;
    cursor: pointer;
    user-select: none;
    z-index: 2;
  }
`;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <StyledSlider>
      <div className='overlay' />
      <div className='slider'>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={index === current ? "show" : "hide"}>
              <FaAngleLeft onClick={prevSlide} className='iconLeft' size={50} />
              <h1>{slide.text}</h1>
              {index === current && (
                <div className='nextImage'>
                  <Image fill src={slide.image} alt='/' />
                </div>
              )}
              <FaAngleRight
                onClick={nextSlide}
                className='iconRight'
                size={50}
              />
            </div>
          );
        })}
      </div>
    </StyledSlider>
  );
};

export default Slider;
