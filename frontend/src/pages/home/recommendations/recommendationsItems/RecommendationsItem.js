import React from 'react'
import { ItemRecommendationStyle, ImageRecommendationStyle, InfoRecommendationsStyle, CategoryStyle, TitleStyle, LocationTextStyle, DescriptionStyle, ImageWrapperStyle } from './RecommendationsItemStyle'
import {HiLocationMarker} from 'react-icons/hi'
import Card from '../../../../components/card/Card'
import Button from '../../../../components/button/Button'
import { Link } from 'react-router-dom'

export default function RecommendationsItem({ id, image, category, title, city, description }) {
    return (
            <Card>
                <ItemRecommendationStyle >
                    <ImageWrapperStyle>
                        <ImageRecommendationStyle src={image} alt="img"/>
                    </ImageWrapperStyle>
                    <InfoRecommendationsStyle>
                        <CategoryStyle>{category}</CategoryStyle>
                        <TitleStyle>{title}</TitleStyle>
                        <LocationTextStyle><HiLocationMarker/>{city}</LocationTextStyle>
                        <DescriptionStyle>{description}</DescriptionStyle>
                        <Link to={`/producto/${id}`}>
                        <Button>Ver detalle</Button>
                        </Link>
                    </InfoRecommendationsStyle>
                </ItemRecommendationStyle>
            </Card>
    )
}
