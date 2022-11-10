import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledCardsContainer = styled.section`
  width: 100%;
  padding: 3rem;

  .container {
    max-width: 1600px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (max-width: 700px) {
    .container {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;

const cardsInfo = [
  {
    title: "Styrelsen",
    text: "Bli medlem i medicinska föreningen - För ett bättre studentliv",
    href: "/",
  },
  {
    title: "Bli Medlem",
    text: "Bli medlem i medicinska föreningen - För ett bättre studentliv",
    href: "/",
  },
  {
    title: "Engagera dig",
    text: "Bli medlem i medicinska föreningen - För ett bättre studentliv",
    href: "/",
  },
  {
    title: "Evenemang",
    text: "Medicinska förening styr upp flera roliga evenmang för dig som student",
    href: "/",
  },
];

const CardsContainer = () => {
  return (
    <StyledCardsContainer>
      <div className='container'>
        {cardsInfo.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              href={card.href}
            />
          );
        })}
      </div>
    </StyledCardsContainer>
  );
};

export default CardsContainer;
