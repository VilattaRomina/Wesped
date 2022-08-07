import React from 'react'
import { ItemCategoriesStyles, ImageCategoryStyles, InfoCategoryStyle, TitleCategoryStyle, DescriptionCategoryStyle } from './CategoryItemStyles'
import Card from '../../card/Card'


export default function CategoryItem({ image, category, amount }) {
    return (
        <Card>
            <ItemCategoriesStyles>
                <ImageCategoryStyles src={image} alt="img" />
                <InfoCategoryStyle >
                    < TitleCategoryStyle>{category} </ TitleCategoryStyle>
                    <DescriptionCategoryStyle>{amount}</DescriptionCategoryStyle>
                </InfoCategoryStyle>
            </ItemCategoriesStyles>
        </Card>
    )
}
