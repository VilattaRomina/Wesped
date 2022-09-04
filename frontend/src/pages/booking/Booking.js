import React from 'react'
import HeaderProduct from '../../components/headerProduct/HeaderProduct'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosInstance } from '../../helpers/AxiosHelper';
import { BodyStyle, LineStyles, ContainerStyle, ContainerBooking, ContainerForm } from './BookingStyle'
import Policies from '../product/productDetails/policies/Policies';
import Section from '../../components/section/Section';
import BookingDetail from './bookingDetail/BookingDetail';
import BookingForm from './bookingForm/BookingForm'




export default function Booking(to) {

  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    email:'',
    ciudad:'',
    startDate: '',
    endDate: '',
    checkInHour: '',
})

const picDate = (startDate, endDate) => {
  setValues({ ...values, startDate, endDate });
}
 

  useEffect(() => {
    AxiosInstance.get(`/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        res.data.images = res.data.images.sort((lhs, rhs) => lhs.id - rhs.id)
      })

  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };


const handleChange = (e) => {
  setValues({
      ...values,
      [e.target.name] : e.target.value
  })
}

const handleSelectChange = ({ value })=> {
  setValues({...values, checkInHour: value})
}


  return (
    <>
      {product ?
        <BodyStyle>
          <HeaderProduct product={product} to={"/producto/" + productId}/>
          <Section>
            <ContainerStyle>
              <ContainerForm>
                <BookingForm values={values} handleChange={handleChange} handleSelectChange={handleSelectChange} picDate={picDate} />
              </ContainerForm>
              <ContainerBooking>
                <BookingDetail product={product}  images={product.images} handleSubmit={handleSubmit} startDate={values.startDate} endDate={values.endDate}/>
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

