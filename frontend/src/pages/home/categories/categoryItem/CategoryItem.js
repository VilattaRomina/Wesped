import React from 'react'
import { ItemCategoriesStyles, ImageCategoryStyles, InfoCategoryStyle, TitleCategoryStyle, DescriptionCategoryStyle } from './CategoryItemStyles'
import Card from '../../../../components/card/Card'


export default function CategoryItem({ image, category, descrption }) {
    return (
        <Card>
            <ItemCategoriesStyles>
                <ImageCategoryStyles src={image} alt="img" />
                <InfoCategoryStyle >
                    < TitleCategoryStyle>{category} </ TitleCategoryStyle>
                    <DescriptionCategoryStyle>{descrption}</DescriptionCategoryStyle>
                </InfoCategoryStyle>
            </ItemCategoriesStyles>
        </Card>
    )
}
