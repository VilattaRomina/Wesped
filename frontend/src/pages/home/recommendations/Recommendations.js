import React from 'react';
//import products from '../../../data/products.json';
import { RecommendationContainerStyle, RecomendationTitle, ListRecommendationsStyle,CardStyle } from './RecommendationsStyles';
import RecommendationsItem from './recommendationsItems/RecommendationsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Recommendations() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   axios.get("http://localhost:8080/products")
    .then(res => setProducts(res.data))
  }, [])

  return (
    <RecommendationContainerStyle>
      <RecomendationTitle>Recomendaciones</RecomendationTitle>
      <ListRecommendationsStyle>
        {
          products.map(item =>
            <CardStyle key={item.id} >
              <RecommendationsItem {...item} />
            </CardStyle>

          )
        }
      </ListRecommendationsStyle>

    </RecommendationContainerStyle>
  )
}
