import React from "react";
import styled from "styled-components";
import Logo from "./minicomponents/Logo";
import Nav from "./minicomponents/Nav";
import { Link } from "react-router-dom";

const Header = (props) => {
  const slogan = [
    "Sentite como en tu hogar",
    "Tu mejor descanso en un solo lugar",
    "Encuentra la estadía de tus sueños",
    "Las mejores estadías en un solo lugar",
  ];

  const randomSloganIndex = Math.round(Math.random() * 3);

  return (
    <StyledHeader>
      <LogoSlogan>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/">
          <Slogan>{slogan[randomSloganIndex]}</Slogan>
        </Link>
      </LogoSlogan>
      <Nav />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #fff;
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  @media only screen and (max-width: 414px) {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Slogan = styled.span`
  color: #545776;
  font-size: 20px;
  font-style: italic;E
  font-family: Roboto;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const LogoSlogan = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 414px) {
    span {
      display: none;
    }
  }
`;
