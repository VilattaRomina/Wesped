import React from 'react'
import { StyledAvatar } from './StyledAvatar'

const Avatar = ({ username }) => {
    const initials = username?.split(" ")[0][0] ?? "" + username?.split(" ")[1][0] ?? "";

    return (
        <StyledAvatar>
            {initials?.toUpperCase()}
        </StyledAvatar>
    )
}

export default Avatar