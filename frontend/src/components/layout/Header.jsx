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
    <HeaderDiv>
      <LogoSlogan>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/">
          <Slogan>{slogan[randomSloganIndex]}</Slogan>
        </Link>
      </LogoSlogan>
      <Nav />
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
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

  @media only screen and (max-width: 600px) {
    span {
      display: none;
    }
  }
`;
