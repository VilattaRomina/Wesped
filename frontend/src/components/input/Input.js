import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StyledInput type={props.type} id={props.id} width={props.width} />;
};

export default Input;

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: 2.5rem;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  padding-inline-start: 1rem;
`;
