import React from 'react'
import styled from 'styled-components';
import Button from '../../UI/Button'

const Nav = () => {
  return (
    <StyledNav>
        <Button>Crear cuenta</Button>
        <Button>Ingresar</Button>
    </StyledNav>
  )
}

export default Nav;

const StyledNav = styled.nav`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`