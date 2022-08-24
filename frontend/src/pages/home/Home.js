import React from 'react'
import Categories from './categories/Categories'
import SearchBlock from './searchBlock/SearchBlock'
import Recommendations from './recommendations/Recommendations'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const url = selectedCategory ? `http://localhost:8080/products/category/${selectedCategory}` : 'http://localhost:8080/products';
   axios.get(url)
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
