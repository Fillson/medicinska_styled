import styled from "styled-components";
import Hero from "../../ui/Hero";

const StyledAbout = styled.section`
  width: 100%;
  padding: 0;
  color: white;

  .content {
    display: flex;
    flex-direction: column;
  }

  p {
    padding: 1rem 0;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className='wrapper'>
        <Hero image='/corpus-callosum/Corpus_Main.jpg' />
        <div className='content'>
          <div>
            <h3>Vad är Corpus Callosum</h3>
            <p>
              Corpus Callosum har startats som Medicinska Föreningens fjärde
              utskott. Dess syfte är att integrera terminerna bättre, samt att
              verka för nybildandet av traditioner på läkarprogrammet. Detta
              kommer ske genom att få terminerna att anordna studiesociala
              aktiviteter åt varandra. Ur ett organisatoriskt perspektiv består
              utskottet av två representanter från varje termin. Dessa personer
              har ansvaret för att aktiviteterna genomförs och att de sker
              enligt MFÖ:s stadgar och policy.
            </p>
          </div>
          <div>
            <h3>
              Inom utskottet finns också poster som har ett lite större ansvar:
            </h3>
            <p>
              De som sitter med i utskottet planerar de aktiviteter som
              utskottet vill delegera ut till terminerna. Det är även stort
              fokus på att förnya och utveckla aktiviteterna för att se till att
              studenterna bjuds på något nytt varje gång.
            </p>
            <p>
              Som Corpus-representant jobbar man även som en “klassförälder” och
              har i uppgift att sprida information och få ihop en arbetsgrupp
              när det är ens termins tur att anordna något.
            </p>
            <p>Utskottsansvarig: Oscar Lundberg</p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
