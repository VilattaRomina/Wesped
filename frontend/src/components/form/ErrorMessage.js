import React from 'react'
import styled from 'styled-components'

const ErrorMessage = ({ children, isError }) => {
    return (
        <StyledErrorMessage isError={isError}>
            {children}
        </StyledErrorMessage>
    )
}

export default ErrorMessage

const StyledErrorMessage = styled.div`
    color: red;
    display: ${props => props.isError ? "inline" : "none"};
    font-style: italic;
`