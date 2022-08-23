
import { HeaderStyle, Title, LinkStyle, Arrow, UbicationStyle, BodyStyle, ShareStyle, DescriptionStyle, LineStyles, FeaturesStyle, PoliciesStyle, TitleStyles } from './ProductDetailsStyles'
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft,  } from "react-icons/fa";
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
              {/* <h4>{products.category.id}</h4> */}
              <h2>{product.title}</h2>
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
            <div><BiShareAlt /></div>
            <div><FaRegHeart /></div>
          </ShareStyle>
          <GalleryBlock images={product.images}/> 
          <GalleryMobile images={product.images}/>
          <DescriptionStyle>
        <h4>Descripción del lugar</h4>
        <p>{product.description}</p>
      </DescriptionStyle>
      <TitleStyles>¿Que ofrece este lugar?</TitleStyles>
      <LineStyles />
      <FeaturesStyle>
        {product.features.map(item =>(
          <div key={item.id}>{item.title}</div>
        ))}
        
      </FeaturesStyle>
      <TitleStyles>Qué tenés que saber</TitleStyles>
      <LineStyles />
      <PoliciesStyle>
        {product.policies.map(item =>(
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </PoliciesStyle>
        </BodyStyle> :
        <p>Cargando...</p>
      }
    </>

  )
}
