import React from 'react'
import { ContainerStyles, ContainerImageLeft, ContainerImageRight, ImageLeft, ImageRight, CardRight, CardLeft, TextStyles, CloseModalStyle, ModalStyle } from './GalleryBlockStyles'
import images from '../../../../data/images.json'
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function GalleryBlock() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <ContainerStyles >
                <ContainerImageLeft>
                    <CardLeft>
                        <ImageLeft src={images[0].img} alt="" />
                    </CardLeft>
                </ContainerImageLeft>
                <ContainerImageRight>
                    {images.slice(1, 5).map((item) => (
                        <CardRight key={item.id}>
                            <ImageRight src={item.img} alt="" />
                        </CardRight>
                    ))}
                </ContainerImageRight>
                <TextStyles onClick={openModal}>Ver mas</TextStyles>
            </ContainerStyles>

            <ModalStyle
                isOpen={modalIsOpen}
            //onRequestClose={closeModal}
            >
                <Carousel>
                    {/* {images.slice(5, 10).map(item => (
                        <div key={item.id}>
                            <img src={item.img} alt="" />
                        </div>
                    ))} */}
                </Carousel>

                <CloseModalStyle onClick={closeModal}>X</CloseModalStyle>

            </ModalStyle>
        </>

    )
}


