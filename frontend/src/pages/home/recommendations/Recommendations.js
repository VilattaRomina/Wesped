import React from 'react';
import producto from '../../../data/product.json';
import { RecommendationContainerStyle, RecomendationTitle, ListRecommendationsStyle } from './RecommendationsStyles';
import RecommendationsItem from './recommendationsItems/RecommendationsItem';




export default function Recommendations() {

  return (
    <RecommendationContainerStyle>
      <RecomendationTitle>
        <h2>Recomendaciones</h2>
      </RecomendationTitle>
      <ListRecommendationsStyle>
        {
          producto.map(item =>
            <RecommendationsItem {...item} />
          )
        }
      </ListRecommendationsStyle>

    </RecommendationContainerStyle>
  )
}
