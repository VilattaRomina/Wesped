import React from 'react';
import producto from '.././data/producto.json';
import Card from '../Card';

export default function List() {

  return (
   <>
   {
    producto.map(item =>
        <Card 
        key={item.id} img ={item.img} category={item.category} title={item.title} location={item.location} description={item.description} 
        />)
   }
   </>
  )
}
