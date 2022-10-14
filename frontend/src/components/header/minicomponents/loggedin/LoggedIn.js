import React from 'react'
import { StyledLoggedIn } from './StyledLoggedIn'
import Avatar from '../avatar/Avatar'
import Greeting from '../greeting/Greeting'
import { IconContext } from 'react-icons'
import { IoCloseCircleOutline } from 'react-icons/io5'

const LoggedIn = ({ username, isLoggedUser }) => {
    const clickHandler = () => {
        isLoggedUser()
    }
    return (
        <StyledLoggedIn>
            <Avatar username={username} />
            <Greeting username={username?.slice(0, username.indexOf("@"))} />
            <IconContext.Provider value={{ size: "1.5rem", color: "#383B58" }}>
                <IoCloseCircleOutline onClick={clickHandler} />
            </IconContext.Provider>
        </StyledLoggedIn>
    )
}

export default LoggedIn