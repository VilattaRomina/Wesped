import { HeaderStyle, Title, LinkStyle, Arrow, UbicationStyle, BodyStyle, ShareStyle, DescriptionStyle, LineStyles, IconStyle, PoliciesStyle, TitleStyles } from './ProductDetailsStyles'
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import GalleryBlock from './galleryBlock/GalleryBlock';
import GalleryMobile from './galleryMobile/GalleryMobile'
// import {Link} from 'react-router-dom'


export default function ProductDetails() {
  return (
    <BodyStyle>
      <HeaderStyle>
        <Title>
          <h4>Categoria</h4>
          <h2>Nombre del hotel</h2>
        </Title>
        <Arrow>
          <LinkStyle to="/">
            <FaChevronLeft />
          </LinkStyle>
        </Arrow>
      </HeaderStyle>
      <UbicationStyle>
        <FaMapMarkerAlt />
        <h4>Ubicacion</h4>
      </UbicationStyle>
      <ShareStyle>
        <BiShareAlt />
        <FaRegHeart />
      </ShareStyle>
      <GalleryBlock />
      <GalleryMobile />
      <DescriptionStyle>
        <h4>titulo</h4>
        <p>Description</p>
      </DescriptionStyle>
      <TitleStyles>titulo</TitleStyles>
      <LineStyles />
      <IconStyle>
        <div>icon</div>
      </IconStyle>
      <TitleStyles>titulo</TitleStyles>
      <LineStyles />
      <PoliciesStyle>
          <div>
            <h4>titulo</h4>
            <p>description</p>
          </div>
      </PoliciesStyle>
    </BodyStyle>
  )
}
