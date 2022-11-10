import React from "react";
import About from "../components/OmMFÖ/Styrelsen/About";
import { styrelsen } from "../components/OmMFÖ/Styrelsen/styrelsenData";
import CardsContainer from "../components/OmMFÖ/Styrelsen/CardsContainer";

const Styrelsen = () => {
  return (
    <>
      <About />
      <CardsContainer styrelsen={styrelsen} />
    </>
  );
};

export default Styrelsen;
