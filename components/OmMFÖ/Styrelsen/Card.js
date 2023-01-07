import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  background-color: #176e6b;
  align-items: left;

  img {
    border-radius: 0.5rem;
    height: 100%;
  }

  div {
    width: 100%;
    height: 350px;
  }

  a {
    text-decoration: underline;
    color: white;
  }

  h3 {
    font-weight: bold;
    text-align: center;
    font-size: 1.3rem;
    padding: 4px;
    color: white;
  }
  h4 {
    margin: 0;
  }

  p {
    text-align: left;
    padding: 4px;
    color: white;
  }
`;

const Card = ({ name, role, description, mail, image }) => {
  return (
    <StyledCard>
      <div>
        <Image
          className="nextImage"
          src={image}
          alt="/"
          width={250}
          height={250}
        />
      </div>
      <h3>{role}</h3>
      <h4>{name}</h4>
      <p>{description}</p>
      <Link href={`mailto:${mail}`}>{mail}</Link>
    </StyledCard>
  );
};

export default Card;
