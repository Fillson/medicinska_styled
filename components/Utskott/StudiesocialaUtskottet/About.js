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
        <Hero image='/studiesociala-utskottet/Studiesoc_Main.jpg' />
        <div className='content'>
          <div>
            <h3>Vad är studiesociala utskottet?</h3>
            <p>
              Studiesociala utskottet är det utskott som anordnar event och
              arbetar för att få en bra studiesocial miljö på läkarprogrammet.
              Vi anordnar bland annat olika typer av sittningar, läkarpubar,
              pubrundor och den årliga Medicinaregasquen, vilket är en bal på
              Örebro slott! Studiesociala utskottet är därför det perfekta
              forumet för Dig som har en rolig idé som Du vill förverkliga. Inom
              utskottet har vi ett bra kontaktnät med olika ställen runt om i
              Örebro och vi har även haft bra samarbeten med olika sektioner och
              andra föreningar. Vi är ett utskott med engagerade från diverse
              olika terminer på läkarprogrammet. Utskottet består av en
              utskottsansvarig (Sofia Larsson), en ansvarig för respektive
              evenemang, samt ytterligare engagerade eldsjälar som jobbar ihop
              för att skapa en rolig studietid för alla läkarstudenter!
            </p>
          </div>
          <div>
            <h3>Vill du engagera dig?</h3>
            <p>
              Tveka inte att höra av dig till utskottsansvarig eller till den
              som är ansvarig för just det evenemanget du vill vara med och
              anordna!
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
