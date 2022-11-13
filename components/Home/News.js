import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Slider from "react-slick";

const StyledNews = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: white;
    height: 300px;
    border-radius: var(--slightlyRounded);
  }

  p {
    padding: 1rem 0;
  }
  a {
    text-align: center;
    width: 8rem;
    padding: 0.5rem 0.5rem;
    border: 1px solid #2b8a3e;
    margin-bottom: 1rem;
    border-radius: var(--slightlyRounded);
  }
  .slick-slide {
    padding: 5px;
  }

  h2 {
    color: white;
    text-align: center;
  }
`;

const news = [
  {
    id: 0,
    title: "Ny Hemsida",
    text: "MFÖ har nu uppdaterat sin hemsida (äntligen)",
    date: new Date().toDateString(),
  },
  {
    id: 1,
    title: "Nytt utskott",
    text: "MFÖ kan glatt presentera att informatikutskottet nu också är en del av föreningen. Där ligger fokus på att skapa en bättre miljö för informatikstudenter.",
    date: new Date().toDateString(),
  },
  {
    id: 2,
    title: "test3",
    text: "test3",
    date: new Date().toDateString(),
  },
  {
    id: 3,
    title: "test3",
    text: "test3",
    date: new Date().toDateString(),
  },
  {
    id: 4,
    title: "test3",
    text: "test3",
    date: new Date().toDateString(),
  },
];

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // });

  if (!Array.isArray(news) || news.length <= 0) {
    return null;
  }
  return (
    <StyledNews>
      <h2>Nyheter</h2>
      <div>
        <Slider {...settings}>
          {news.map((newsEl, index) => {
            return (
              <div key={index} className='content'>
                <h3>{newsEl.title}</h3>
                <p>{newsEl.date}</p>
                <p>{newsEl.text}</p>
                <Link href={`/news/${newsEl.id}`}>Läs mer</Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </StyledNews>
  );
};

export default News;
