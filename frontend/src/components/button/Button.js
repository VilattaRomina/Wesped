import React from 'react';
import ButtonStyled from "./ButtonStyled"


function Button({ text, color,width, backgroundColor,signIn,signUp, handleClickBooking}) {
  const handleClickButton=()=>{
    if(signIn){
      signIn();
    }
    if(signUp){
      signUp();
    }
    if(handleClickBooking){
      handleClickBooking()
    }
  }


  return(
    <ButtonStyled width={width} color={color} backgroundColor={backgroundColor} type="submit" onClick={handleClickButton}>
         {text}
    </ButtonStyled>
  )
}

export default Button;