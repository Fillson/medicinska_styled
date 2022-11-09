import { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import LogoImage from "../public/mfo_logo.png";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: white;
  z-index: 10;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: bold;
  }

  .logo {
    width: 150px;
    height: auto;
    z-index: 10;
    cursor: pointer;
  }

  nav a {
    padding: 1rem 2rem;
  }

  .menuToggle {
    display: none;
  }

  .menuToggle div {
    display: grid;
    margin: 0.5rem 0;
    width: 2rem;
    height: 0.12rem;
    background: black;
    transition: 0.2s ease-in-out;
    z-index: 10;
  }

  .menuToggle .rotateMinus {
    position: absolute;
    transform: rotate(-45deg);
    margin: 0;
  }

  .menuToggle .rotatePlus {
    transform: rotate(45deg);
    margin: 0;
  }

  @media (max-width: 700px) {
    nav {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      padding-top: 10rem;
      transform: translateX(100%);
      transition: 0.2s ease-in-out;
      background: #2b8a3e;
      z-index: 10;
    }

    nav a {
      border-bottom: solid black 1px;
    }

    .logo {
      width: 100px;
    }

    .menuOpen {
      transform: translateX(0%);
    }

    .menuToggle {
      display: block;
    }
  }
`;

const Header = () => {
  const nav = useRef();
  const middleLine = useRef();
  const rotateMinus = useRef();
  const rotatePlus = useRef();

  const toggleMenu = () => {
    nav?.current?.classList?.toggle("menuOpen");
    middleLine?.current?.classList?.toggle("hidden");
    rotateMinus?.current?.classList?.toggle("rotateMinus");
    rotatePlus?.current?.classList?.toggle("rotatePlus");
  };

  Router.events.on("routeChangeComplete", () => {
    if (nav?.current?.classList?.contains("menuOpen")) toggleMenu();
  });
  return (
    <StyledHeader>
      <div className='wrapper'>
        <Link href='/' className='.logo'>
          <Image src={LogoImage} height={50} width={50} alt='logga' />
        </Link>

        <nav ref={nav}>
          <Link href='/om-mfo'>Om MFÖ</Link>
          <Link href='/utskott'>Utskott</Link>
          <Link href='/medlem'>Medlem</Link>
          <Link href='/kontakt'>Kontakt</Link>
        </nav>

        <div onClick={toggleMenu} className='menuToggle'>
          <div ref={rotateMinus}></div>
          <div ref={middleLine}></div>
          <div ref={rotatePlus}></div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
