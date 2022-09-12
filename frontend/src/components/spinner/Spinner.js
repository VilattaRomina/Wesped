import React from 'react'
import { StyledSpinnerContainer } from './StyledSpinner'

const Spinner = ({ children }) => {
    return (
        <StyledSpinnerContainer>
            {children}
        </StyledSpinnerContainer>
    )
}

export default Spinner