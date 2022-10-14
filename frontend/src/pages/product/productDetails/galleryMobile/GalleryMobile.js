import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from '../../../../data/images.json'
import {GalleryMobileStyle, MobileImage} from './GalleryMobileStyle'

export default function GalleryMobile() {
  return (
    <GalleryMobileStyle >
        <Carousel>
                    {images.map(slide => (
                        <div key={slide.id}>
                            <MobileImage src={slide.img} alt="" />
                        </div>
                    ))}
               
        </Carousel>
    </GalleryMobileStyle>
  )
}

