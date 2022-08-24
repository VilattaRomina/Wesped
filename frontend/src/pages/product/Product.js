import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductDetails from './productDetails/ProductDetails'


export default function Product() {
  return (
    <div>
        <Routes>
            <Route path=':productId' element={<ProductDetails/>} />
        </Routes>
    </div>
  )
}
