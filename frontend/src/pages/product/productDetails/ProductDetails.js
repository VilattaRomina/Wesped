import { HeaderStyle, Title, LinkStyle, Arrow, UbicationStyle, BodyStyle, BlockIconStyle } from './ProductDetailsStyles';
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import GalleryBlock from './galleryBlock/GalleryBlock';
import GalleryMobile from './galleryMobile/GalleryMobile';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const client = axios.create({
  baseURL: "http://localhost:8080"
});

export default function ProductDetails() {

  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  // const [error, setError] =useState([])

  useEffect(() => {
    client.get(`/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        res.data.images = res.data.images.sort((lhs, rhs) => lhs.id - rhs.id)
        setProduct(res.data);
    })
    //.catch(error => setError(error));
  }, [productId]);


  return (
    <>
      {product ? 
        <BodyStyle>
          <HeaderStyle>
            <Title>
              {/* <h5>{products.category.id}</h5> */}
              <h4>{product.title}</h4>
            </Title>
            <Arrow>
              <LinkStyle to="/">
                <FaChevronLeft />
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
          <GalleryBlock images={product.images}/> 
          <GalleryMobile images={product.images}/>
        </BodyStyle> :
        <p>Cargando...</p>
      }
    </>

  )
}
