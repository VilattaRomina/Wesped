import React from 'react'
import {ImageCategoryStyles, InfoCategoryStyle, TitleCategoryStyle, DescriptionCategoryStyle, CardStyle } from './CategoryItemStyles'
import Card from '../../../../components/card/Card'


export default function CategoryItem({ image, category, descrption }) {
    return (

        <CardStyle>
            <Card>
               {/*<ItemCategoriesStyles>*/}
                    <ImageCategoryStyles src={image} alt="img" />
                    <InfoCategoryStyle >
                        < TitleCategoryStyle>{category} </ TitleCategoryStyle>
                        <DescriptionCategoryStyle>{descrption}</DescriptionCategoryStyle>
                    </InfoCategoryStyle>
                    {/*</ItemCategoriesStyles>*/}
            </Card>
        </CardStyle>
    )
}
