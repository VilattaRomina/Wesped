import React from 'react'
import { ItemRecommendationStyle, ImageRecommendationStyle, InfoRecommendationsStyle, CategoryStyle, TitleStyle, LocationTextStyle, DescriptionStyle, ImageWrapperStyle } from './RecommendationsItemStyle'
import {HiLocationMarker} from 'react-icons/hi'
import Card from '../../../../components/card/Card'
import Button from '../../../../components/button/Button'

export default function RecommendationsItem({ id, img, category, title, location, description }) {
    return (
            <Card>
                <ItemRecommendationStyle >
                    <ImageWrapperStyle>
                        <ImageRecommendationStyle src={img} alt="img"/>
                    </ImageWrapperStyle>
                    <InfoRecommendationsStyle>
                        <CategoryStyle>{category}</CategoryStyle>
                        <TitleStyle>{title}</TitleStyle>
                        <LocationTextStyle><HiLocationMarker/>{location}</LocationTextStyle>
                        <DescriptionStyle>{description}</DescriptionStyle>
                        <Button>Ver detalle</Button>
                    </InfoRecommendationsStyle>
                </ItemRecommendationStyle>
            </Card>
    )
}
