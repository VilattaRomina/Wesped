
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ContainerFooter, FooterBlock,FooterText, FooterIcon } from './FooterStyled'



import React from 'react'

export default function Footer() {
    return (
        <ContainerFooter>
            <FooterBlock>
                <FooterText> ©2021 Digital Booking</FooterText>
            </FooterBlock>
            <FooterBlock>
                <FooterIcon><FaFacebook /></FooterIcon>
                <FooterIcon><FaLinkedinIn /></FooterIcon>
                <FooterIcon><FaTwitter /></FooterIcon>
            </FooterBlock>
        </ContainerFooter >
    )
}
