import React from "react";
import styled from "styled-components";

const StyledFaq = styled.section`
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

  h1 {
    padding: 0.5rem 0;
  }
`;

const Faq = () => {
  return (
    <StyledFaq>
      <div className='wrapper'>
        <div className='content'>
          <h1>För nya studenter vid läkarprogrammet</h1>
          <div>
            <h3>Vart är läkarstudenternas campus?</h3>
            <p>
              Örebro Universitet består av tre stycken campus nämligen campus
              Almby/Universitetet, campus USÖ och campus Grythyttan.
              Läkarstudenterna har ett eget campus nere vid sjukhuset som är det
              som kallas campus USÖ eller X-huset. Här är läkarstudenterna
              merparten av sin studietid vilket gör att många av
              läkarstudenterna föredrar att bo mer centralt. Läkarstudenterna
              har dock några föreläsningar och laborationer vid campus
              Almby/Universitetet så det funkar att även bo där. Det är ca 3 km
              mellan Universitet och Campus USÖ.
            </p>
          </div>
          <div>
            <h3>Vad menas med rekommenderad litteratur?</h3>
            <p>
              På läkarprogrammet i Örebro använder vi oss av rekommenderad eller
              obligatorisk litteratur. Precis som det låter så kräver
              kursledningen att du införskaffar den litteratur som benämns som
              obligatorisk. Glöm inte att köpa den senaste upplagan. Den
              rekommenderade litteraturen fungerar mer som en lista med böcker
              som kursledningen godkänt för just den aktuella kursen. Böcker på
              rekommenderadlistan kan användas att referera till om man ex
              överklagar ett tentabeslut där man anser att man angett rätt svar
              men inte fått poäng. På kursintroduktionen av varje tema brukar
              rekommenderad litteratur går igenom och kursledningen tipsar om
              vad som kan vara värt att tänka på gällande val av böcker.
            </p>
          </div>
          <div>
            <h3>Behöver Jag köpa alla böcker innan skolstart?</h3>
            <p>
              Vi från medicinska föreningen håller i en litteraturinfokväll för
              att studenterna som börjar termin på läkarprogrammet.
              Litteraturinfot brukar ligga under de första veckorna av terminen
              och under denna kväll har vi en liten “föreläsning” om de olika
              typerna av litteratur som finns och vad man skall tänka på. När du
              skall köpa böcker kan du använda dig av de vanliga sajterna på
              nätet, campusbokhandeln eller läkarprogrammets egna köp och sälj
              sida på facebook.
            </p>
          </div>
          <div>
            <h3>Finns det något upprop man måste närvara på?</h3>
            <p>
              Nej, läkarprogrammet i Örebro tillämpar inget regelrätt upprop.
              Under den första dagen får ni en generell informationsgenomgång om
              Universitetet i Aula Nova på campus Almby, detta sker på
              förmiddagen tillsammans med flera andra program. På eftermiddagen
              får ni mer specifik information om enbart läkarprogrammet
              tillsammans med dina blivande kursare, även detta sker på Campus
              Almby, men i Bilbergska huset.
            </p>
          </div>
        </div>
      </div>
    </StyledFaq>
  );
};

export default Faq;
