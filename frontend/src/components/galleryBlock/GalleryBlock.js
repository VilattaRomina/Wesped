import React from 'react'
import { ContainerStyles, ContainerImageLeft, ContainerImageRight, ImageLeft, ImageRight, CardRight, CardLeft, TextStyles } from './GalleryBlockStyles'

export default function GalleryBlock() {



    return (
        <>
            <ContainerStyles >
                <ContainerImageLeft>
                    <CardLeft>
                        <ImageLeft src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/349359663.jpg?k=04c348094e45ca22f888f241acb332dc0007e7086e6cb91f987bbdd87108f6a2&o=&hp=1" alt="img" />
                    </CardLeft>
                </ContainerImageLeft>
                <ContainerImageRight>
                    <CardRight>
                        <ImageRight src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/123318335.jpg?k=750bbb6d4e20f17d6b53dcb3b623f670d7857a1a33ad8872da9336f336ea625a&o=&hp=1" alt="img" />
                    </CardRight>
                    <CardRight>
                        <ImageRight src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/238751548.jpg?k=88d5d21f600dc1999b1dd96092c8f9459ea07b74dbadb9dcb09b86a721050ecc&o=&hp=1" alt="img" />
                    </CardRight>
                    <CardRight>
                        <ImageRight src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/68828829.jpg?k=14a6b521281acbc9be18863c6a0279eaaa23cc97b3a3b8659bc58e4832f756ef&o=&hp=1" alt="img" />
                    </CardRight>
                    <CardRight>
                        <ImageRight src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/349341149.jpg?k=53d6d24bafcee3e0b839f83c625cb17ad10c7f5287f6483e213eaa1897d96b9f&o=&hp=1" alt="img" />
                        <TextStyles>Ver mas</TextStyles>
                    </CardRight>
                </ContainerImageRight>
            </ContainerStyles>
        </>
    )


}
