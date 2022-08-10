import React from 'react'
import Input from '../input/Input'
import { StyledLabel } from './StyledRegisterInput'
import { StyledDiv } from '../form/StyledForm'
import classes from './register.module.css'

const RegisterInput = () => {
  return (
    <>
      <StyledDiv>
        <div className={classes.A}>
          <div className={classes.B}>
            <StyledLabel htmlFor="name">Nombre</StyledLabel>
            <Input width="13.5rem" type="text" id="name" />
          </div>

          <div className={classes.B}>
            <StyledLabel htmlFor="surname">Apellido</StyledLabel>
            <Input width="13.5rem" type="text" id="surname" />
          </div>
        </div>
      </StyledDiv>

      <StyledDiv>
        <StyledLabel htmlFor="email">Correo electrónico</StyledLabel>
        <Input width="28rem" type="email" id="email" />
      </StyledDiv>
      <StyledDiv>
        <StyledLabel htmlFor="password">Contraseña</StyledLabel>
        <Input width="28rem" type="password" id="password" />
      </StyledDiv>
      <StyledDiv>
        <StyledLabel htmlFor="confirm-password">Confirmar contraseña</StyledLabel>
        <Input width="28rem" type="password" id="confirm-password" />
      </StyledDiv>
    </>
  )
}

export default RegisterInput