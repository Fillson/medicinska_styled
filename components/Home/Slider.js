import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
import Image from "next/image";

const StyledSlider = styled.div`
  max-width: 100%;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
  margin-bottom: 7rem;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgb(0 0 0 / 0.53);
  }

  .slider {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    position: absolute;
    z-index: 3;
  }

  .content h2 {
    color: white;
    font-size: 3rem;
  }

  .content p {
    color: white;
    text-align: center;
    font-size: 2.3rem;
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

  .imageSlide {
    object-fit: cover;
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

  @media (max-width: 700px) {
    height: 340px;
  }
`;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // });

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
        <div className='content'>
          <h2>Välkommen Till Medicinska Föreningen</h2>
          <p>För ett bättre studentliv</p>
        </div>

        {slides.map((slide, index) => {
          return (
            <div key={index} className={index === current ? "show" : "hide"}>
              <FaAngleLeft onClick={prevSlide} className='iconLeft' size={50} />
              {index === current && (
                <div className='nextImage'>
                  <Image
                    fill
                    className='imageSlide'
                    src={slide.image}
                    alt='/'
                  />
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
