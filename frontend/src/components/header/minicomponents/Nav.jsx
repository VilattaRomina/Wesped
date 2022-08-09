import React from "react";
import styled from "styled-components";
import Button from "../../button/Button";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

const Nav = (props) => {
  return (
    <IconContext.Provider value={{ size: "2.5rem", color: "#545776" }}>
      <StyledNav>
        <Button width="12.5rem" theme="primary">
          Crear cuenta
        </Button>
        {!props.isLogin && (
          <Button width="12.5rem" theme="primary">
            Ingresar
          </Button>
        )}
        <BiMenu className="react-icon" />
      </StyledNav>
    </IconContext.Provider>
  );
};

export default Nav;

const StyledNav = styled.nav`
  gap: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
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
