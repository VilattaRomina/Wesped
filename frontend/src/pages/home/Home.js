import React from 'react'
import Categories from './categories/Categories'
import SearchBlock from './searchBlock/SearchBlock'
import Recommendations from './recommendations/Recommendations'
import { useState, useEffect } from 'react';
import { AxiosInstance } from '../../helpers/AxiosHelper'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  const setProductsToDisplayByCity = (city) => setProductsToDisplay(city)

  useEffect(() => {
    AxiosInstance.get("/products")
      .then(res => setProductsToDisplay(res.data))
  }, [])

  useEffect(() => {
    const url = selectedCategory ? `/products/category/${selectedCategory}` : '/products';
    AxiosInstance.get(url)
      .then(res => setProductsToDisplay(res.data))
  }, [selectedCategory])

  return (
    <>
      <SearchBlock setProductsToDisplayByCity={setProductsToDisplayByCity} />
      <Categories setSelectedCategory={setSelectedCategory} />
      <Recommendations productsToDisplay={productsToDisplay} />
    </>
  )
}