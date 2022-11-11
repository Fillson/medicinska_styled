import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  width: 100%;
  padding: 0;
  color: white;

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
  return <StyledAbout>About</StyledAbout>;
};

export default About;
