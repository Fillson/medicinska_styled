import React from "react";
import styled from "styled-components";

const StyledWelcome = styled.section`
  text-align: center;
  padding: 2rem 1rem;

  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #30a730;
  }

  .contentP {
    width: 850px;
    margin: 0 auto;
  }
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <div className='content'>
        <h2>Bli en del av Örebros bästa studentförening!</h2>
        <div className='contentP'>
          <p>
            Medicinska föreningen Örebro bildades den 7 maj 2012 av
            läkarstudenter vid Örebro Universitet med syfte att främja gemenskap
            bland läkarstudenter samt göra det lättare att anordna aktiviteter
            för läkarstudenterna. Medicinska föreningen Örebro är en ideell
            förening som har sitt säte i Örebro och verkar i huvudsak för
            läkarstudenter vid Örebro Universitet.
          </p>
        </div>
      </div>
    </StyledWelcome>
  );
};

export default Welcome;

