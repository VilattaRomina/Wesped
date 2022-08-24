import React from 'react'
import Categories from './categories/Categories'
import SearchBlock from './searchBlock/SearchBlock'
import Recommendations from './recommendations/Recommendations'
import { useState, useEffect } from 'react';
import { AxiosInstance } from '../../helpers/AxiosHelper'

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const url = selectedCategory ? `http://ec2-18-224-138-216.us-east-2.compute.amazonaws.com:8080/products/category/${selectedCategory}` : 'http://ec2-18-224-138-216.us-east-2.compute.amazonaws.com:8080/products';
   AxiosInstance.get(url)
    .then(res => setProducts(res.data))
  }, [selectedCategory])

  return (
    <>
      <SearchBlock />
      <Categories setSelectedCategory={setSelectedCategory} />
      <Recommendations products={products} />
    </>
  )
}
