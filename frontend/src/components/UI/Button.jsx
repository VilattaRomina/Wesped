import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton type={props.type} width={props.width} theme={props.theme}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  border-radius: 5px;
  color: #1dbeb4;
  padding: 10px;
  width: ${(props) => props.width};
  margin: 0px 5px;
  cursor: pointer;
  ${(props) =>
    props.theme === "1"
      ? `background: #ffffff;
      height: 2.5rem;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
  border: 1px solid #1dbeb4;
  &:hover {
  background-color: #1dbeb4;
  color: #fff;
  }
  &:active {
  background-color: #37d3c9;
  }`
      : `background-color: #1dbeb4;
      color: #fff;
      border: none;
      height: 2.5rem;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: #32d3c8;
    color: #fff;
  }
  &:active {
    background-color: #44ddd3;
  }
  `}
`;
