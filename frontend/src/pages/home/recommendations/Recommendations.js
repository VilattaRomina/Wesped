import React from 'react';
import { RecommendationContainerStyle, RecomendationTitle, ListRecommendationsStyle, CardStyle } from './RecommendationsStyles';
import RecommendationsItem from './recommendationsItems/RecommendationsItem';

export default function Recommendations({ productsToDisplay }) {

  return (
    <RecommendationContainerStyle>
      <RecomendationTitle>Recomendaciones</RecomendationTitle>
      <ListRecommendationsStyle>
        {
          productsToDisplay.map(item =>
            <CardStyle key={item.id} >
              <RecommendationsItem {...item} />
            </CardStyle>

          )
        }
      </ListRecommendationsStyle>

    </RecommendationContainerStyle>
  )
}
