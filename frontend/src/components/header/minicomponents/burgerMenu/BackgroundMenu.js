import React from 'react'
import { StyledBackgroundMenu } from './StyledBurgerMenu'


const BackgroundMenu = ({ handleClick, className, children }) => {
    const handleClickBackground = (e) => {
        handleClick();
    }

    return (
        <StyledBackgroundMenu className={className} onClick={handleClickBackground}>
            {children}
        </StyledBackgroundMenu>
    )
}

export default BackgroundMenu