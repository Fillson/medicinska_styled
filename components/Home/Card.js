import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.div`
  /* box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%); */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1rem; /* 16px */
  margin-bottom: 1rem; /* 16px */
  border-radius: 0.5rem;
  color: black;
  background-color: white;
  align-items: center;
  gap: 1rem;

  img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  /* :hover {
    transform: scale(1.05);
    transition-duration: 300ms;
  } */

  a {
    text-align: center;
    width: 8rem;
    padding: 0.8rem 2rem;
    /* border: 1px solid #2b8a3e; */
    background-color: #30a730;
    color: white;
    border-radius: var(--slightlyRounded);
  }

  div {
    width: 100%;
    height: auto;
  }

  h3 {
    font-weight: bold;
    text-align: center;
    padding-top: 8px;
    padding: 4px;
    color: #30a730;
    font-size: 1.5rem;
  }

  p {
    text-align: center;
    padding: 4px;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .textDiv {
    width: 220px;
    margin-bottom: 10px;
  }

  .nextImage {
    height: 100%;
    width: 70%;
  }
`;

const Card = ({ title, text, href, image }) => {
  return (
    <StyledCard>
      <Image
        className='nextImage'
        src={image}
        alt='/'
        width={250}
        height={250}
      />
      <h3>{title}</h3>
      <div className='textDiv'>
        <p>{text}</p>
      </div>
      <a href={href}>Läs mer</a>
    </StyledCard>
  );
};

export default Card;

