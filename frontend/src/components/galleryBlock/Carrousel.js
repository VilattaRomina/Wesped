import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from '../../data/images.json'
import { ContainerStyle} from './CarrouselStyle';

export default function Carrousel() {
  return (
    <ContainerStyle>
      <Carousel>
        {images.map(slide => (
          <div key={slide.id}>
            <img src={slide.img} alt="" />
          </div>
        ))}
      </Carousel>
    </ContainerStyle>



  )
}
