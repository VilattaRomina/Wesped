
import { HeaderStyle, Title, LinkStyle, Arrow, UbicationStyle, BodyStyle, ShareStyle, DescriptionStyle, LineStyles, FeaturesStyle, PoliciesStyle, TitleStyles } from './ProductDetailsStyles'
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft,  } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import GalleryBlock from './galleryBlock/GalleryBlock';
import GalleryMobile from './galleryMobile/GalleryMobile';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosInstance } from '../../../helpers/AxiosHelper';
import { Icons } from '../../../ui/icons';


export default function ProductDetails() {


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
      setIsOpen(true)
  }

  function closeModal() {
      setIsOpen(false);
  }


  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  // const [error, setError] =useState([])

  useEffect(() => {
    AxiosInstance.get(`/products/${productId}`)
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
        <BodyStyle isOpen={modalIsOpen}>
          <HeaderStyle>
            <Title>
               <h4>{product.category.title}</h4> 
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
            <h4>{product.city.name + ", " + product.city.country}</h4>
          </UbicationStyle>
          <ShareStyle>
            <div><BiShareAlt /></div>
            <div><FaRegHeart /></div>
          </ShareStyle>
          <GalleryBlock images={product.images} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/> 
          <GalleryMobile images={product.images}/>
          <DescriptionStyle>
        <h4>Descripción del lugar</h4>
        <p>{product.description}</p>
      </DescriptionStyle>
      <TitleStyles>¿Que ofrece este lugar?</TitleStyles>
      <LineStyles />
      <FeaturesStyle>
        {product.features.map(item =>(
          <div key={item.id}><span>{Icons[item.icon]}</span>{item.title}</div>
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
