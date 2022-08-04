
import { FaRegCopyright, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ContainerFooter, FooterBlock, FooterIcon } from './FooterStyled'



import React from 'react'

export default function Footer() {
    return (
        <ContainerFooter>
            <FooterBlock>
                <p> <span><FaRegCopyright /></span> 2021 Digital Booking</p>
            </FooterBlock>
            <FooterBlock>
                <FooterIcon><FaFacebook /></FooterIcon>
                <FooterIcon><FaLinkedinIn /></FooterIcon>
                <FooterIcon><FaTwitter /></FooterIcon>
            </FooterBlock>
        </ContainerFooter >
    )
}
