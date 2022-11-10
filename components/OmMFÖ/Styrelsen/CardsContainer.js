import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledCardsContainer = styled.section`
  padding: 1rem;

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
const CardsContainer = ({ styrelsen }) => {
  return (
    <StyledCardsContainer>
      <div className='container'>
        {styrelsen.map((el, index) => {
          return (
            <Card
              key={index}
              role={el.role}
              image={el.image}
              name={el.name}
              description={el.description}
              mail={el.mail}
            />
          );
        })}
      </div>
    </StyledCardsContainer>
  );
};

export default CardsContainer;
