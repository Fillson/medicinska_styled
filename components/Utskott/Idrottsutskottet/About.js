import React from "react";
import styled from "styled-components";
import Hero from "../../ui/Hero";

const StyledAbout = styled.section`
  width: 100%;
  padding: 0;
  color: black;

  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  p {
    padding: 0.5rem 0;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className='wrapper'>
        <Hero image='/idrottsutskottet/Idrottsutskottet_Main.jpeg' />
        <div className='content'>
          <div>
            <h3>Vad är idrottsutskottet?</h3>
            <p>
              Tycker du om idrott eller allmänt gött häng? Välkommen till
              idrottsutskottet! Idrottsutskottet är MFÖs senaste utskott med
              huvudfokus att anordna idrottsinriktade aktiviteter. Det kan vara
              allt ifrån gemensamma träningar, prova på grejer, friluftsdagar
              till sportpubar framför Champions League. Vi har numera även
              huvudansvaret för uttagning och anordnande av Medicinar-SM som är
              en idrottstävling mellan alla 7 lärosäten med läkarprogram. I.o.m
              att utskottet är så nystartat finns det stora möjligheter att vara
              med och arbeta fram aktiviteter, vi är öppen för allt! Låter det
              intressant? Gå med i ”MFÖ: idrottsutskottet!” För mer info!
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
