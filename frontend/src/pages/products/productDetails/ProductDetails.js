import Carrousel from '../../../components/galleryBlock/Carrousel'
import GalleryBlock from '../../../components/galleryBlock/GalleryBlock'
import { HeaderStyle, Title, Arrow, UbicationStyle, BodyStyle, BlockIconStyle, DescriptionStyle, TextStyle} from './ProductDetailsStyles'
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
      <DescriptionStyle>
          <h4>Bloque descripcion</h4>
          <TextStyle>Texto de descripcion del producto</TextStyle>
      </DescriptionStyle>
      <section>
          <h4>Bloque caracteristicas del producto</h4>
          <hr/>
          <div>Grilla iconos</div>
      </section>
      <section>
          <h4>Bloque de politicas del producto</h4>
        <hr/>
          <div>Normas de la casa</div>
          <div>Salud y seguridad</div>
          <div>Politica de cancelacion</div>
      </section>
    </BodyStyle>
  )
}
