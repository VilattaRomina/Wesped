import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background: #ffffff;
  border: 1px solid #1dbeb4;
  border-radius: 5px;
  color: #1dbeb4;
  padding: 10px;
  width: 200px;
  margin: 0px 5px;
  cursor: pointer;
  &:hover {
    background-color: #1DBEB4;
    color: #fff;
  }
  &:active{
    background-color: #37d3c9;
  }
`;
