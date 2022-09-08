import React from 'react'
import { StyledLoggedIn } from './StyledLoggedIn'
import Avatar from '../avatar/Avatar'
import Greeting from '../greeting/Greeting'
import { IconContext } from 'react-icons'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useContext } from 'react'
import { UserContext } from '../../../../hooks/UseContext'

const LoggedIn = () => {
    const { setLoggedUser } = useContext(UserContext)

    const signOutHandler = () => {
        setLoggedUser(false)
        localStorage.clear()
    }
    return (
        <StyledLoggedIn>
            <Avatar />
            <Greeting />
            <IconContext.Provider value={{ size: "1.5rem", color: "#383B58" }}>
                <IoCloseCircleOutline onClick={signOutHandler} />
            </IconContext.Provider>
        </StyledLoggedIn>
    )
}

export default LoggedIn