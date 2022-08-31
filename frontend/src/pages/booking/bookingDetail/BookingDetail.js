import React from 'react'
import { CardStyle,ContainerStyle, Title, Image,InfoDetailProduct, ContainerButton, ContainerDate } from './BookingDetailStyle';
import Button from '../../../components/button/Button'

export default function BookingDetail() {
  return (
    <CardStyle >
      <ContainerStyle>
        <div>
        <Title>Detalle de la reserva</Title>
        <Image src='https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='imagen del producto' />
        </div>
      <div>
      <InfoDetailProduct >
          <h3>Categoria</h3>
          <h2>Nombre</h2>
          <p>Ubicación</p>
        </InfoDetailProduct>
        <hr />
        <ContainerDate>
          <h4>Check in</h4>
          <div>Date</div>
        </ContainerDate>
        <hr />
        <ContainerDate>
          <h4>Check out</h4>
          <div>Date</div>
        </ContainerDate>
        <hr />
        <ContainerButton >
          <Button>Confirmar reserva</Button>
        </ContainerButton>
      </div>
      </ContainerStyle>
       
    </CardStyle>
  )
}