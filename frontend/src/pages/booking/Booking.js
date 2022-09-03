import React from 'react'
import HeaderProduct from '../../components/headerProduct/HeaderProduct'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosInstance } from '../../helpers/AxiosHelper';
import { BodyStyle, LineStyles, ContainerStyle, ContainerBooking} from './BookingStyle'
import Policies from '../../components/policies/Policies'
import Section from '../../components/section/Section';
import BookingDetail from './bookingDetail/BookingDetail';


export default function Booking() {

  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    AxiosInstance.get(`/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })

  }, [productId]);

  return (
    <>
      {product ?
        <BodyStyle>
          <HeaderProduct product={product} />
          <Section>
            <ContainerStyle>
               <ContainerBooking>
               <BookingDetail />
               </ContainerBooking>
            </ContainerStyle>
          </Section>
          <LineStyles />
          <Policies product={product} />
        </BodyStyle> :
        <p>Cargando...</p>
      }
    </>
  )

}
