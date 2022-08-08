import React from "react";
import {
  InputContainer,
  Input,
  Icon
} from "./SearchBlockStyled";

export default function SearchInput({icon, input}) {
    return(
      <InputContainer>
        <Icon>
          {icon}
        </Icon>
        <Input>
          {input}
        </Input>
      </InputContainer> 
    );
  }