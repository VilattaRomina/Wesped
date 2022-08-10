import React from "react";
import styled from "styled-components";
import Button from "../../button/Button";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <IconContext.Provider value={{ size: "2.5rem", color: "#545776" }}>
      <StyledNav>
        <Link to="/registro">
          <Button width="12.5rem" theme="primary">
            Crear cuenta
          </Button>
        </Link>
        {!props.isLogin && (
          <Link to="/login">
            <Button width="12.5rem" theme="primary">
              Ingresar
            </Button>
          </Link>
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

  @media only screen and (max-width: 414px) {
    justify-content: end;

    button {
      display: none;
    }

    .react-icon {
      display: initial;
    }
  }
`;
