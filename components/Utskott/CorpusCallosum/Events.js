import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Event from "./Event";

const StyledEvents = styled.section`
  padding: 1rem;

  h1 {
    text-align: center;
  }

  .wrapper {
    background-color: white;
    padding-top: 1rem;
  }

  .eventsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 700px) {
    background-color: white;

    .wrapper {
      padding-top: 0;
    }
  }
`;

const events = [
  {
    title: "Läkarsyskon",
    text: "Varje termin börjar ca 60-70 stycken nya läkarstudenter på programmet. Vi vill verka för att de får ett så bra mottagande och välkomnande som möjligt. Vi anordnar därför något som kallas läkarsyskon där ett värdpar i termin 4 är läkarsyskon åt en grupp på 3-4 stycken nystudenter. Värdparet bjuder sedan nystudenterna till sig där man får chans att lära känna varandra och få tips och idéer från sina äldrekursare. Oftast bjuds det även på någon form av aktivitet. Sedan bjuder nystudenterna hem värdparet till sig.",
    image: "/corpus-callosum/tour-de-med.jpeg",
  },
  {
    title: "Julpub Med Studiesoc",
    text: "Inför jul brukar Corpus callosum och studiesoc gemensamt anordna en julpub som brukar vara mycket uppskattat. Under kvällen kan man köpa tilltugg och något gott att dricka, sitta och umgås med vänner från yngre och äldre terminer samt lyssna på lite fina framträdanden. Massor av julmys helt enkelt.",
    image: "/corpus-callosum/tour-de-med.jpeg",
  },
  {
    title: "Kandidatsittning",
    text: "Efter termin sex och C-uppsats är gjord får man en kandidatexamen i medicin. Detta brukar firas med en kandidatsittning som anordnas av kära termin 5. Men vad blir det för typ av sittning? Det vet man aldrig. Vill man som kandidat ha en bra sittning gäller det nämligen att fjäska ordentligt för yngrekursarna.",
    image: "/corpus-callosum/kandidatsittning.jpeg",
  },
  {
    title: "Läkarkampen",
    text: "I april varje år går stapeln av för läkarkampen där alla terminerna tävlar mot varandra i olika aktiviteter. En fördel är att många från klassen deltar då vissa av grenarna tjänar man på att vara många. Efter att en vinnare har korats samlas man senare på kvällen för en avslutande sittning som anordnas av studiesoc.",
    image: "/corpus-callosum/lakarkampen.jpeg",
  },
];

const Events = () => {
  return (
    <StyledEvents>
      <div className='wrapper'>
        <h1>Aktiviteter som Anordnas av Corpus Callosum</h1>
        <div className='eventsContainer'>
          {events.map((el, index) => {
            return (
              <Event
                key={index}
                title={el.title}
                text={el.text}
                image={el.image}
              />
            );
          })}
        </div>
      </div>
    </StyledEvents>
  );
};

export default Events;
