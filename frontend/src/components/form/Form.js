import React from 'react'
import Button from '../button/Button'
import StyledForm, { StyledDiv } from './StyledForm'
import { Link } from 'react-router-dom'

const Form = ({ buttonText, buttonType, children, questionToUser, linkText, title, redirectLink }) => {
    return (
        <StyledForm>
            <h1>{title}</h1>
            {children}
            <StyledDiv alignItems="center">
                <Button type={buttonType} width="12.5rem"><b>{buttonText}</b></Button>
                <span>
                    {questionToUser} <Link to={`/${redirectLink}`}>{linkText}</Link>
                </span>
            </StyledDiv>
        </StyledForm>
    )
}

export default Form