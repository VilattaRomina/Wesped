import React from 'react'
import { ContainerStyles, ContainerImageLeft, ContainerImageRight, ImageLeft, ImageRight, CardRight, CardLeft, TextStyles, CloseModalStyle, ModalStyle } from './GalleryBlockStyles'
//import images from '../../../../data/images.json'
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function GalleryBlock({images}) {

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
                        <ImageLeft src={images[0].urlImage} alt="" />
                    </CardLeft>
                </ContainerImageLeft>
                <ContainerImageRight>
                    {images.slice(1, 5).map((item) => (
                        <CardRight key={item.id}>
                            <ImageRight src={item.urlImage} alt="" />
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
                    {images.map(item => (
                        <div key={item.id}>
                            <img src={item.urlImage} alt="" />
                        </div>
                    ))}
                </Carousel>

                <CloseModalStyle onClick={closeModal}>X</CloseModalStyle>

            </ModalStyle>
        </>

    )
}


