import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;

  .dropdownContent {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 180px;
    z-index: 10;
  }

  :hover .dropdownContent {
    display: block;
  }

  a {
    display: block;
  }
`;

const Dropdown = ({ links, title }) => {
  return (
    <StyledDropdown>
      <p>{title}</p>
      <div className='dropdownContent'>
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          );
        })}
      </div>
    </StyledDropdown>
  );
};

export default Dropdown;
