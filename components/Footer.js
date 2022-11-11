import Link from "next/link";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
  background: white;
  padding: 2rem;
  color: black;

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  nav {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  a {
    width: fit-content;
  }

  .social {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 700px) {
    .content {
      grid-template-columns: 1fr;
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className='wrapper'>
        <div className='content'>
          <div>
            <p>Medicinska Föreningen Örebro</p>
            <nav>
              <Link href='/'>Utskott</Link>
              <Link href='/kontakt'>Kontakt</Link>
              <Link href='/'>Om MFÖ</Link>
              <Link href='/'>Evenemang</Link>
            </nav>

            <div className='social'>
              <a href='https://www.facebook.com/mforebro'>
                <FaFacebookSquare size={30} />
              </a>
              <a href='https://www.instagram.com/mforebro'>
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          <div>
            <p>För att besöka oss :</p>
            <p>Örebro Universitet Medicinska Föreningen</p>
            <p>Örebro Campus USÖ</p>
            <p>701 82 Örebro</p>
          </div>

          <p>&copy; Medicinska Föreningen Örebro {new Date().getFullYear()}</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
