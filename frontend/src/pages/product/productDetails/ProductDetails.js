import Carrousel from '../../../components/galleryBlock/Carrousel'
import GalleryBlock from '../../../components/galleryBlock/GalleryBlock'
import { HeaderStyle, Title, Arrow, UbicationStyle, BodyStyle, BlockIconStyle } from './ProductDetailsStyles'
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft} from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";


export default function ProductDetails() {
  return (
    <BodyStyle>
      <HeaderStyle>
        <Title>
          <h5>Categoria</h5>
          <h4>Nombre del hotel</h4>
        </Title>
        <Arrow>
          <FaChevronLeft/>
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
      <GalleryBlock />
    </BodyStyle>
  )
}
