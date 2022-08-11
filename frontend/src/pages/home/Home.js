import React from 'react'
import Categories from './categories/Categories'
import SearchBlock from './searchBlock/SearchBlock'
import Recommendations from './recommendations/Recommendations'


export default function Home() {
  return (
    <>
      <SearchBlock />
      <Categories />
      <Recommendations />
    </>
  )
}
