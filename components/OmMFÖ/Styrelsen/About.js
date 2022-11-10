import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  color: white;
  padding: 4rem 2rem;
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }

  @media (max-width: 700px) {
    .intro {
      padding: 0;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className='wrapper'>
        <div className='intro'>
          <h1>Styrelsen</h1>
          <p>
            Styrelsen i medicinska föreningen Örebro består av 14 poster (se
            nedan) och är föreningens verkställande organ. Styrelsen leder
            Medincinska Föreningen Örebros arbete under verksamhetsåret och är
            ansvariga inför årsmöte samt beslutande frågor som behandlas mellan
            årsmötena. Styrelsen arbeter efter gällande stadga, budget och
            verksamhetsplan som beslutas om på årsmötet.
          </p>
        </div>
        <div></div>
      </div>
    </StyledAbout>
  );
};

export default About;
