import React from "react";
import Form from '../../components/form/Form'
import LoginInput from "./LoginInput";

const Login = () => {
  return (
    <Form buttonText="Ingresar" buttonType="submit" questionToUser="¿Aún no tienes cuenta?" title="Iniciar Sesión" linkText="Registrate" redirectLink="registro">
      <LoginInput />
    </Form>
  );
};

export default Login;
