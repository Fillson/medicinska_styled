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

  .nextImage {
    padding: 0 1rem;
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
    text: "Här hittar du information om medlemmarna i styrelsen",
    href: "/",
    image: "/team.svg",
  },
  {
    title: "Bli Medlem",
    text: "Bli medlem i medicinska föreningen - För ett bättre studentliv",
    href: "/",
    image: "/join.svg",
  },
  {
    title: "Engagera dig",
    text: "Gå med i något av utskotten och engagera dig i MFÖ",
    href: "/",
    image: "/leader.svg",
  },
  {
    title: "Evenemang",
    text: "Medicinska förening styr upp flera roliga evenmang för dig som student",
    href: "/",
    image: "/party.svg",
  },
];

const CardsContainer = () => {
  return (
    <StyledCardsContainer>
      <div className="container">
        {cardsInfo.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              href={card.href}
              image={card.image}
            />
          );
        })}
      </div>
    </StyledCardsContainer>
  );
};

export default CardsContainer;
