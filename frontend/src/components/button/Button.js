import React from "react";
import { StyledButton } from "./StyledButton"

const Button = (props) => {
    return (
        <StyledButton type={props.type} width={props.width} theme={props.theme}>
            {props.children}
        </StyledButton>
    );
};

export default Button;

