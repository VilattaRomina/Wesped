import styled from "styled-components";

export const GalleryMobileStyle = styled.div`
display: none;

@media (max-width: 768px) {
    display: block;
    max-width:768px;
    max-height:300px;

    .thumbs-wrapper axis-vertical {
      display: none;
    }
   
  }

`

export const MobileImage = styled.img`
@media (max-width: 768px) {
  height: 100%;
  }
  
`