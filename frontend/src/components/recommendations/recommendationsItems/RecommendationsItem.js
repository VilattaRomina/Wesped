import React from 'react'
import { ItemRecommendationStyle ,ImageRecommendationStyle, InfoRecommendationsStyle, ButtonStyle } from './RecommendationsItemStyle'
import Card from '../../card/Card'

export default function RecommendationsItem({ id, img, category, title, location, description }) {
    return (
        <Card>
            <ItemRecommendationStyle  >
                <div>
                    <ImageRecommendationStyle src={img} alt="img" />
                </div>
                <InfoRecommendationsStyle>
                    <h2>{category}</h2>
                    <h3>{title}</h3>
                    <p>{location}</p>
                    <p>{description}</p>
                    <ButtonStyle>Ver detalle</ButtonStyle>
                </InfoRecommendationsStyle>
            </ItemRecommendationStyle>

        </Card>

    )
}
