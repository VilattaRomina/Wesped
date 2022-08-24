import React from 'react'
import { ItemRecommendationStyle, ImageRecommendationStyle, InfoRecommendationsStyle, CategoryStyle, TitleStyle, LocationTextStyle, DescriptionStyle, ImageWrapperStyle } from './RecommendationsItemStyle'
import {HiLocationMarker} from 'react-icons/hi'
import Card from '../../../../components/card/Card'
import Button from '../../../../components/button/Button'
import { Link } from 'react-router-dom'

export default function RecommendationsItem({ id, images, category, title, city, description }) {
    return (
            <Card>
                <ItemRecommendationStyle >
                    <ImageWrapperStyle>
                        <ImageRecommendationStyle src={images.sort((lhs, rhs) => lhs.id - rhs.id)[0].urlImage} alt="img"/>
                    </ImageWrapperStyle>
                    <InfoRecommendationsStyle>
                        <CategoryStyle>Categoria: {category.id}</CategoryStyle>
                        <TitleStyle>{title}</TitleStyle>
                        <LocationTextStyle><HiLocationMarker/>Ubicacion: {city.id}</LocationTextStyle>
                        <DescriptionStyle>{description}</DescriptionStyle>
                        
                        <Button><Link style={{ color:'#fff'}} to={`/producto/${id}`}>Ver detalle</Link></Button>
                        
                    </InfoRecommendationsStyle>
                </ItemRecommendationStyle>
            </Card>
    )
}
