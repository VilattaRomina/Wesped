import React from 'react'
import { StyledGreeting } from './StyledGreeting'

const Greeting = ({ username }) => {
    return (
        <StyledGreeting>
            <p>Hola,</p>
            <p>{username}</p>
        </StyledGreeting>
    )
}

export default Greeting