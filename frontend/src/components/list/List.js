import React from 'react';
import producto from '.././data/product.json';
import Card from '../card/Card';
import { ListStyle } from './ListStyled';



export default function List() {

  return (
   <ListStyle>
   {
    producto.map(item =>
        <Card 
        key={item.id} img ={item.img} category={item.category} title={item.title} location={item.location} description={item.description} 
        />)
   }
   </ListStyle>
  )
}
