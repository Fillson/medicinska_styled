import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledEvent = styled.div`
  display: flex;
  padding: 4rem;
  width: 100%;

  div {
    width: 100%;
  }

  h2 {
    text-align: center;
  }

  @media (max-width: 700px) {
    padding: 2rem;
    flex-direction: column;
  }
`;

const Event = ({ title, text, image }) => {
  return (
    <StyledEvent>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div>
        <Image
          src={image}
          alt='Läkarsyskon'
          height={2000}
          width={2000}
          className='nextImage'
        />
      </div>
    </StyledEvent>
  );
};

export default Event;
