import React from "react";
import styled from "styled-components";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

const StyledMail = styled.div`
  p {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

const Mail = ({ title, email }) => {
  return (
    <StyledMail>
      <p>{title}</p>
      <p>
        <HiMail size={30} />
        <Link className='mail' href={`mailto:${email}`}>
          {email}
        </Link>
      </p>
    </StyledMail>
  );
};

export default Mail;
