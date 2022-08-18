import GalleryBlock from './galleryBlock/GalleryBlock'
import GalleryMobile from './galleryMobile/GalleryMobile';
import { HeaderStyle, Title, Arrow, LinkStyle, UbicationStyle, BodyStyle, BlockIconStyle, ContentIcon } from './ProductDetailsStyles'
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
//import {Link} from 'react-router-dom'


export default function ProductDetails() {
  return (
    <BodyStyle>
      {/* header */}
      <HeaderStyle>
        <div>
          <Title>
            <h5>Categoria</h5>
            <h4>Nombre del hotel</h4>
          </Title>
          <Arrow>
            <LinkStyle to="/"> <FaChevronLeft /> </LinkStyle>
          </Arrow>
        </div>
      </HeaderStyle>
 {/* bloque de ubicación */}
      <UbicationStyle>
        <div>
        <FaMapMarkerAlt />
        <p>Ubicación</p>
        </div>
      </UbicationStyle>
{/* bloque de icono */}
      <BlockIconStyle>
        <ContentIcon>
        <div><BiShareAlt /></div>
        <div><FaRegHeart /></div>
        </ContentIcon>
        
      </BlockIconStyle>
      <GalleryBlock />
      <GalleryMobile />
    </BodyStyle>
  )
}
