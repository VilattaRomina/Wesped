import React from "react";
import styled from "styled-components";
import Button from "../../button/Button";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link, useLocation } from 'react-router-dom'
import validator from 'validator'

const Nav = (props) => {

  const location = useLocation();

  const isHome = validator.equals(location.pathname, '/')
  const isLogin = validator.equals(location.pathname, '/login')
  const isRegister = validator.equals(location.pathname, '/registro')

  console.log(location.pathname);

  return (
    <IconContext.Provider value={{ size: "2.5rem", color: "#545776" }}>
      <StyledNav>
        {
          (isLogin || isHome) &&
          <Link to="/registro">
            <Button width="12.5rem" theme="primary">
              Crear cuenta
            </Button>
          </Link>
        }
        {
          (isRegister || isHome) &&
          <Link to="/login">
            <Button width="12.5rem" theme="primary">
              Ingresar
            </Button>
          </Link>
        }
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
