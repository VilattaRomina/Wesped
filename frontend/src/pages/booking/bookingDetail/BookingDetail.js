import React from 'react'
import {ConfirmationBlock, Title, InfoDetailProduct, ContainerButton, ContainerDate  } from './BookingDetailStyle'

export default function BookingDetail() {
  return (
    <ConfirmationBlock >
        <Title>Detalle de la reserva</Title>
        <img src='https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='imagen del producto'/>
        <InfoDetailProduct >
            <h4>Categoria</h4>
            <h2>Nombre</h2>   
        </InfoDetailProduct>
        <hr/>
        <ContainerDate>
        <h4>CheckIn</h4>
        <div>Date</div>
        </ContainerDate>
        <hr/>
        <ContainerDate>
        <h4>CheckOut</h4>
        <div>Date</div>
        </ContainerDate>
        <ContainerButton >
            <button>Confirmar reserva</button>
        </ContainerButton>
    </ConfirmationBlock>
  )
}