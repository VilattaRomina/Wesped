import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

const Nav = () => {
  return (
    <IconContext.Provider value={{size:"2.5rem", color: "#545776"}}>
      <StyledNav>
        <Button>Crear cuenta</Button>
        <Button>Ingresar</Button>
        <BiMenu className="react-icon" />
      </StyledNav>
    </IconContext.Provider>
  );
};

export default Nav;

const StyledNav = styled.nav`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-right: 1rem;

  .react-icon {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    justify-content: end;

    button {
      display: none;
    }

    .react-icon {
      display: initial;
    }
  }
`;
