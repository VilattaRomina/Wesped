import React from "react";
import { StyledButton } from "./StyledButton"

const Button = (props) => {
    return (
        <StyledButton type={props.type || "button"} width={props.width} theme={props.theme} onClick={props.onClick} form={props.form}>
            {props.children}
        </StyledButton>
    );
};

export default Button;