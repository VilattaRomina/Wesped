import React from 'react';
//import products from '../../../data/products.json';
import { RecommendationContainerStyle, RecomendationTitle, ListRecommendationsStyle,CardStyle } from './RecommendationsStyles';
import RecommendationsItem from './recommendationsItems/RecommendationsItem';

export default function Recommendations({ products, setSelectedCategory }) {

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
