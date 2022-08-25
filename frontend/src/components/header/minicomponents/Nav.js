import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { usePathname } from "../../../hooks/hooks";
import { IconContext } from "react-icons";
import styled from "styled-components";
import Button from "../../button/Button";
import LoggedIn from "./loggedin/LoggedIn";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import BackgroundMenu from "./burgerMenu/BackgroundMenu";
import validator from 'validator'

const Nav = (props) => {
  const isHome = validator.equals(usePathname(), '/')
  const isLogin = validator.equals(usePathname(), '/login')
  const isRegister = validator.equals(usePathname(), '/registro')
  const isUserLogged = props?.loggedUser?.valid ?? false
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <IconContext.Provider value={{ size: "2.5rem", color: "#545776" }}>
      <StyledNav>

        {isUserLogged && <LoggedIn username={props.loggedUser.email} isLoggedUser={props.isLoggedUser} />}
        {
          ((isLogin || isHome) && !isUserLogged) &&
          <Link to="/registro">
            <Button width="12.5rem" theme="primary">
              Crear cuenta
            </Button>
          </Link>
        }
        {
          ((isRegister || isHome) && !isUserLogged) &&
          <Link to="/login">
            <Button width="12.5rem" theme="primary">
              Ingresar
            </Button>
          </Link>
        }
        <div className="react-icon">
          <BurgerMenu clicked={clicked} handleClick={handleClick} />
        </div>
        <BackgroundMenu className={`react-icon ${clicked ? "active" : ""}`} handleClick={handleClick}>
          <Link to="/registro" onClick={handleClick}>
            Crear cuenta
          <hr />
          </Link>
          <Link to="/login" onClick={handleClick}>
            Ingresar
          <hr />
          </Link>
        </BackgroundMenu>
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
