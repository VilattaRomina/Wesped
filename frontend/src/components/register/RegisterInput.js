import React from 'react'
import Input from '../input/Input'
import { StyledLabel } from './StyledRegisterInput'
import { StyledDiv } from '../form/StyledForm'

const RegisterInput = () => {
  return (
    <>
      <StyledDiv>
        <StyledLabel htmlFor="name">Nombre</StyledLabel>
        <Input width="14rem" type="text" id="name" />
        <StyledLabel htmlFor="surname">Contraseña</StyledLabel>
        <Input width="14rem" type="text" id="surname" />
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
        <StyledLabel htmlFor="password">Confirmar contraseña</StyledLabel>
        <Input width="28rem" type="password" id="password" />
      </StyledDiv>
    </>
  )
}

export default RegisterInput