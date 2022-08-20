import { HeaderStyle, Title, LinkStyle, Arrow, UbicationStyle, BodyStyle, BlockIconStyle } from './ProductDetailsStyles'
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft} from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
// import {Link} from 'react-router-dom'


export default function ProductDetails() {
  return (
    <BodyStyle>
      <HeaderStyle>
        <Title>
          <h5>Categoria</h5>
          <h4>Nombre del hotel</h4>
        </Title>
        <Arrow>
          <LinkStyle to= "/">
          <FaChevronLeft/>
          </LinkStyle>
        </Arrow>
      </HeaderStyle>
      <UbicationStyle>
        <FaMapMarkerAlt />
        <p>Ubicacion</p>
      </UbicationStyle>
      <BlockIconStyle>
        <BiShareAlt />
        <FaRegHeart />
      </BlockIconStyle>
      
      
    </BodyStyle>
  )
}
