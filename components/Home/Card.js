import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.div`
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

  img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  :hover {
    transform: scale(1.05);
    transition-duration: 300ms;
  }

  a {
    text-align: center;
    width: 8rem;
    padding: 1rem 2rem;
    border: 1px solid #2b8a3e;
    margin-bottom: 1rem;
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
  }

  p {
    text-align: center;
    padding: 4px;
  }
`;

const Card = ({ title, text, href }) => {
  return (
    <StyledCard>
      <Image
        className='nextImage'
        src='https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='/'
        width={250}
        height={250}
      />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={href}>Läs mer</a>
    </StyledCard>
  );
};

export default Card;
