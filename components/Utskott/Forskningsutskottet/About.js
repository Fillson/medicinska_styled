import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Hero from "../../ui/Hero";

const StyledAbout = styled.section`
  color: black;
  padding: 0;

  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  a {
    text-decoration: underline;
    color: white;
  }

  p {
    padding: 0.5rem 0;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className='wrapper'>
        <Hero image='/forskningsutskottet/Forskning_Main.jpg' />
        <div className='content'>
          <div>
            <h3>Vad är forskningsutskottet?</h3>
            <p>
              Forskningsutskottet är ett utskott som ingår under Medicinska
              Föreningen Örebro och är ämnat för att uppmuntra ett tidigt
              engagemang inom forskning hos läkarstudenterna vid Örebro
              universitet.
            </p>
          </div>
          <div>
            <h3>Våra mål är:</h3>
            <p>
              Att bidra till att väcka ett tidigt intresse för forskning bland
              Örebros läkarstudenter. Forskande läkare är en väsentlig del av
              sjukvårdens kunskapsutveckling, något som i sin tur är viktigt för
              att säkerställa säker patientvård. Därför bör ett
              forskningsintresse bland medicinstudenter värnas om och främjas.
            </p>
            <p>
              Att göra det lättare för de studenter som är intresserade av
              forskning att komma i kontakt med forskare och skapa anknytningar
              till dem. Starka kontakter liksom en bra miljö och en god
              handledning är viktiga faktorer och en förutsättning för att skapa
              framtidens medicinska forskare.
            </p>
            <p>
              Att fungera som en kanal genom vilken läkarstudenterna kan få ta
              del av vad som händer i det medicinska forskningsfältet just nu.
              Utskottet ska stödja en uppdaterad kunskapsinhämtning och bidra
              till att breda studenternas vyer.
            </p>
            <p>
              Det finns inga begräsningar till hur dessa mål kan uppnås utan vi
              strävar alltid mot att utvecklas i vårt arbete för att förverkliga
              våra ambitioner. I dagsläget arbetar vi mot ovannämnda punkter
              genom att anordna diverse aktiviteter och projekt som på ett eller
              annat sätt kan anknytas till ett eller flera av målen. Exempel på
              aktiviteter och projekt är föreläsningar, seminarium,
              intervjuer/reportage med forskare,
              forskningshelger/mingelmiddagar, workshops, tävlingar, pentryhäng
              med tankeställande samtal med mera. På sikt vill vi även etablera
              ett system där det ska bli enklare för studenter som vill forska
              parallellt med studierna att finna möjligheter för det.
            </p>
          </div>
          <div>
            <h3>
              Vill du bli en del av vårt team eller har värdefulla synpunkter
              och önskemål?
            </h3>
            <p>
              Vill du bli en del av vårt team eller har värdefulla synpunkter
              och önskemål? Tveka inte att ta kontakt med oss! Vi har en sida på
              Facebook eller så är det bara att slänga iväg ett{" "}
              <Link href='mailto:forksningsutskottet@mforebro.se'>Mail</Link>.
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
