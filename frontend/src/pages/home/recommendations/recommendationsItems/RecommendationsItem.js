import React from 'react'
import { ItemRecommendationStyle, ImageRecommendationStyle, InfoRecommendationsStyle, CategoryStyle, TitleStyle, LocationTextStyle, DescriptionStyle, ImageWrapperStyle, LinkStyle } from './RecommendationsItemStyle'
import {HiLocationMarker} from 'react-icons/hi'
import Card from '../../../../components/card/Card'
import Button from '../../../../components/button/Button'

export default function RecommendationsItem({ id, images, category, title, city, description }) {
    return (
            <Card>
                <ItemRecommendationStyle >
                    <ImageWrapperStyle>
                        <ImageRecommendationStyle src={images.sort((lhs, rhs) => lhs.id - rhs.id)[0].urlImage} alt="img"/>
                    </ImageWrapperStyle>
                    <InfoRecommendationsStyle>
                        <CategoryStyle>{category.title}</CategoryStyle>
                        <TitleStyle>{title}</TitleStyle>
                        <LocationTextStyle><HiLocationMarker/>{" " + city.name + ", " + city.country}</LocationTextStyle>
                        <DescriptionStyle>{description}</DescriptionStyle>
                        <Button><LinkStyle to={`/producto/${id}`}>Ver detalle</LinkStyle></Button>
                        
                    </InfoRecommendationsStyle>
                </ItemRecommendationStyle>
            </Card>
    )
}
