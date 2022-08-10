import React from "react";
import Input from "../../components/input/Input";
import { StyledLabel, StyledDiv } from "./StyledLoginInput";

const LoginForm = () => {
  return (
    <StyledDiv alignItems="start">
      <StyledLabel htmlFor="email">Correo electrónico</StyledLabel>
      <Input width="28rem" type="text" id="email" />
      <StyledLabel htmlFor="password">Contraseña</StyledLabel>
      <Input width="28rem" type="password" id="password" />
    </StyledDiv>
  );
};

export default LoginForm;
