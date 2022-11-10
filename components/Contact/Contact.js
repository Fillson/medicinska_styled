import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import Mail from "./mail";

const StyledContact = styled.section`
  padding: 0;
  color: white;

  .contact {
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: var(--maxWidth);
    margin: auto;
    padding: 2rem;
    gap: 3rem;
  }

  .contactWrapper {
    display: grid;
    gap: 2rem;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  .mail {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 1000px) {
    .contact {
      grid-template-columns: 1fr;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <div className='contact'>
        <div className='contactWrapper'>
          <Image
            src='/kontakt-logga.jpg'
            alt='/'
            className='nextImage'
            width={2000}
            height={2000}
          />
          <p>
            Vill Du komma i kontakt med oss i Medicinska Föreningen Örebro?
            Tveka inte att höra av Dig! Vi svarar gärna på frågor och tar gärna
            emot åsikter och önskemål om aktiviteter. Du kan även kontakta oss
            på vår{" "}
            <Link
              href='https://www.facebook.com/mforebro'
              className='facebookLink'
            >
              Facebook
            </Link>
            .
          </p>
          <div className='mail'>
            <Mail title='Medlemsansvarig' email='medlem@mforebro.se' />
            <Mail
              title='Studiesociala utskottet'
              email='studiesociala@mforebro.se'
            />
            <Mail
              title='Idrottsutskottet'
              email='idrottsutskottet@mforebro.se'
            />
            <Mail title='Corpos Callosum' email='corpuscallosum@mforebro.se' />
            <Mail title='Kirurgiska utskottet' email='kirurgiska@mforebro.se' />
            <Mail
              title='Forskningsutskottet'
              email='forskningsutskottet@mforebro.se'
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </StyledContact>
  );
};

export default Contact;
