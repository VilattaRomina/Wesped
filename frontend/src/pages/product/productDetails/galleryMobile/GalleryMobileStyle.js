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

    .control-dots{
      bottom:420px;
    }
   
  }

  @media (max-width: 414px) {
    display: block;
    max-width:768px;
    max-height:300px;

    .thumbs-wrapper axis-vertical {
      display: none;
    }

    .control-dots{
      bottom:240px;
    }
   
  }



`

export const MobileImage = styled.img`
@media (max-width: 768px) {
  height: 100%;
  }
  
`