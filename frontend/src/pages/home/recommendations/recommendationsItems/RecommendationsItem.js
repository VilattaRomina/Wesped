import React from 'react'
import { ItemRecommendationStyle, ImageRecommendationStyle, InfoRecommendationsStyle, CategoryStyle, TitleStyle, LocationTextStyle, ButtonStyle, DescriptionStyle } from './RecommendationsItemStyle'
import {HiLocationMarker} from 'react-icons/hi'
import Card from '../../../../components/card/Card'

export default function RecommendationsItem({ id, img, category, title, location, description }) {
    return (
            <Card>
                <ItemRecommendationStyle >
                    <div>
                        <ImageRecommendationStyle src={img} alt="img" />
                    </div>
                    <InfoRecommendationsStyle>
                        <CategoryStyle>{category}</CategoryStyle>
                        <TitleStyle>{title}</TitleStyle>
                        <LocationTextStyle><HiLocationMarker/>{location}</LocationTextStyle>
                        <DescriptionStyle>{description}</DescriptionStyle>
                        <ButtonStyle>Ver detalle</ButtonStyle>
                    </InfoRecommendationsStyle>
                </ItemRecommendationStyle>
            </Card>
    )
}
