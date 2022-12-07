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
        <Hero image='/kirurgiska-utskottet/Kirurgiska_Main.jpg' />
        <div className='content'>
          <div>
            <h3>Vad är Kirurgiska utskottet?</h3>
            <p>
              Kirurgiska utskottet (KirU) grundades januari 2015 av Carolina
              Nilsson och Jonatan Regander och blev det tredje av sitt slag i
              Sverige, med många internationella förlagor. Sedan dess har
              utskottet växt otroligt mycket och precis som tanken var i början
              erbjuder KirU nu en mängd olika aktiviteter för Örebros
              läkarstudenter. Vi vet att många läkarstudenter tidigt får upp
              ögonen för kirurgi och vill få möjlighet att utforska denna
              fascinerande disciplin ytterligare. Det är här KirU kommer in i
              bilden.
            </p>
          </div>
          <div>
            <h3>Verksamhet & Vision</h3>
            <p>
              Kirurgiska utskottet vill agera plattform för kirurgiintresserade
              läkarstudenter. Verksamheten ska vara länken mellan kliniker med
              kirurgisk aktivitet och intresserade läkarstudenter. Utskottet
              vill anordna kirurgiskt inriktade föreläsningar och workshops
              öppna för alla läkarsudenter.
            </p>
            <p>
              Målsättningen är att kunna erbjuda aktiviteter som är intressanta
              och givande för alla läkarstudenter oavsett vilken termin man går.
              Förhoppning är att detta ska kunna bana vägen så att kontakten med
              de kirurgiska specialiteterna under utbildningen blir mer givande,
              då man genom KirUs försorg till exempel kan skaffa sig basal
              kunskap om bland annat sterilteknik och suturering.
            </p>
          </div>
          <div>
            <h3>Aktiviter erbjudna av KirU</h3>
            <p>
              Akut och trauma (AoT): erbjuder föreläsningar och workshops
              kopplat till akut och trauma och anestesi, exempelvis ATLS
              konceptet.
            </p>
            <p>
              Avancerad workshop (AWS): workshop med fokus på avancerade
              kirurgiska tekniker exempelvis ligera på djupet. Workshopen kräver
              att man tidigare gått på BWS samt FWS, dvs. förkunskaper krävs.
            </p>
            <p>
              Föreläsningar: allt från vanliga kirurgiska ingrepp i klinisk
              praxis till ny/innovativ kirurgi och forskning.
            </p>
            <p>
              Journal Club (JC): föreläsnings- och diskussionsforum om kirurgisk
              forskning exempelvis nya rön, innovativa metoder och lokal
              forskning på USÖ med inbjuden expert.
            </p>
            <p>
              Kirurgisk anatomi: föreläsnings- och diskussionsforum med fokus på
              anatomi utifrån ett kirurgiskt perspektiv.
            </p>
            <p>
              Workshop i basal sutureringsteknik (BWS): här får man bland annat
              en ”crash course” i suturering och sterilteknik under handledning
              av yrkesverksam kirurg samt flertalet studenthandledare.
            </p>
            <p>
              Workshop i fördjupad suturerings- och knytteknik (FWS): en längre
              workshop med fokus på, vilket dess namn antyder, fördjupad
              kunskap. Även denna workshop är under ledning av kliniskt verksam
              kirurg.
            </p>
            <p>
              After workshop: en arbetsgrupp som ansvarar för sociala evenemang
              både inom utskottet, men även för utomstående.
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
