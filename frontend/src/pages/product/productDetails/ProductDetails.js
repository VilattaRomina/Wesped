import { BoxHeaderStyle,HeaderStyle, Title, LinkStyle, Arrow, UbicationStyle, BodyStyle, ShareStyle, DescriptionStyle, LineStyles, FeaturesStyle, PoliciesStyle, TitleStyles } from './ProductDetailsStyles'
import { FaMapMarkerAlt, FaRegHeart, FaChevronLeft, } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import GalleryBlock from './galleryBlock/GalleryBlock';
import GalleryMobile from './galleryMobile/GalleryMobile';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosInstance } from '../../../helpers/AxiosHelper';
import { Icons } from '../../../ui/icons';
import Section from '../../../components/section/Section';
import { BoxUbicationStyle } from './ProductDetailsStyles';

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


  useEffect(() => {
    AxiosInstance.get(`/products/${productId}`)
      .then((res) => {
        res.data.images = res.data.images.sort((lhs, rhs) => lhs.id - rhs.id)
        setProduct(res.data);
      })

  }, [productId]);

  return (
    <>
      {product ?
        <BodyStyle isOpen={modalIsOpen}>
          <BoxHeaderStyle>
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
          </BoxHeaderStyle>
          <BoxUbicationStyle>
          <UbicationStyle>
            <FaMapMarkerAlt />
            <h4>{product.city.name + ", " + product.city.country}</h4>
          </UbicationStyle>
          </BoxUbicationStyle>
          <Section>
            <ShareStyle>
              <div><BiShareAlt /></div>
              <div><FaRegHeart /></div>
            </ShareStyle>
            <GalleryBlock images={product.images} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />
            <GalleryMobile images={product.images} />
            <DescriptionStyle>
              <h4>Descripción del lugar</h4>
              <p>{product.description}</p>
            </DescriptionStyle>
            <TitleStyles>¿Que ofrece este lugar?</TitleStyles>
            <LineStyles />
            <FeaturesStyle>
              {product.features.map(item => (
                <div key={item.id}><span>{Icons[item.icon]}</span><p>{item.title}</p></div>
              ))}
            </FeaturesStyle>
            <TitleStyles>Qué tenés que saber</TitleStyles>
            <LineStyles />
            <PoliciesStyle>
              {product.policies.map(item => (
                <div key={item.id}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </PoliciesStyle>
          </Section>
        </BodyStyle> :
        <p>Cargando...</p>
      }
    </>

  )
}
