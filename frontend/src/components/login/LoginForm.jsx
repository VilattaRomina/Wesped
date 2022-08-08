import React from "react";
import Input from "../UI/Input";
import { StyledLabel, StyledLoginForm, StyledDiv } from "./StyledLoginForm";
import Button from "../UI/Button";
import { Route } from "react-router-dom";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <StyledDiv justifyContent="start">
        <StyledLabel htmlFor="email">Correo electrónico</StyledLabel>
        <Input width="28rem" type="text" id="email" />
        <StyledLabel htmlFor="password">Contraseña</StyledLabel>
        <Input width="28rem" type="password" id="password" />
      </StyledDiv>
      <StyledDiv justifyContent="center">
        <Button width="12.5rem" type="submit">
          <b>Ingresar</b>
        </Button>
        <span>
          ¿Aún no tenes cuenta? <a href="#">Registrate</a>
        </span>
      </StyledDiv>
    </StyledLoginForm>
  );
};

export default LoginForm;
