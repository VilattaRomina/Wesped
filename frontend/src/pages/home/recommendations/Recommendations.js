import React from 'react';
import producto from '../../../data/product.json';
import { RecommendationContainerStyle, RecomendationTitle, ListRecommendationsStyle,CardStyle } from './RecommendationsStyles';
import RecommendationsItem from './recommendationsItems/RecommendationsItem';

export default function Recommendations() {

  return (
    <RecommendationContainerStyle>
      <RecomendationTitle>Recomendaciones</RecomendationTitle>
      <ListRecommendationsStyle>
        {
          producto.map(item =>
            <CardStyle key={item.id} >
              <RecommendationsItem {...item} />
            </CardStyle>

          )
        }
      </ListRecommendationsStyle>

    </RecommendationContainerStyle>
  )
}
