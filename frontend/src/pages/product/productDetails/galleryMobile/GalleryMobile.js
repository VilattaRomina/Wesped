import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import images from '../../../../data/images.json'
import { GalleryMobileStyle, MobileImage } from './GalleryMobileStyle'

export default function GalleryMobile() {
  return (
    <GalleryMobileStyle >
      {/* <Carousel>
        {images.map(item => (
          <div key={item.id}>
            <MobileImage src={item.img} alt="" />
          </div>
        ))}
      </Carousel> */}
    </GalleryMobileStyle>
  )
}

