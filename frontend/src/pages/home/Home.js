import React from 'react'
import Categories from './categories/Categories'
import SearchBlock from './searchBlock/SearchBlock'
import Recommendations from './recommendations/Recommendations'
import { useState, useEffect } from 'react';
import { AxiosInstance } from '../../helpers/AxiosHelper'

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const setProductsToDisplayByCity = (city) => setProducts(city)

  useEffect(() => {
    AxiosInstance.get("/products")
      .then(res => setProducts(res.data))
  }, [])

  useEffect(() => {
    const url = selectedCategory ? `/products/category/${selectedCategory}` : '/products';
    AxiosInstance.get(url)
      .then(res => setProducts(res.data))
  }, [selectedCategory])

  return (
    <>
      <SearchBlock setProductsToDisplayByCity={setProductsToDisplayByCity} />
      <Categories setSelectedCategory={setSelectedCategory} />
      <Recommendations products={products} />
    </>
  )
}