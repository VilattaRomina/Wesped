import React from 'react'
import Button from '../button/Button'
import StyledForm, { StyledDiv } from './StyledForm'

const Form = ({ buttonText, buttonType, children, questionToUser, linkText, title, redirectLink }) => {
    return (
        <StyledForm>
            <h1>{title}</h1>
            {children}
            <StyledDiv alignItems="center">
                <Button type={buttonType} width="12.5rem"><b>{buttonText}</b></Button>
                <span>
                    {questionToUser} <a href={redirectLink}>{linkText}</a>
                </span>
            </StyledDiv>
        </StyledForm>
    )
}

export default Form