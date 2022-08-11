import React from 'react'
import categories from '../../../data/categories.json'
import CategoryItem from './categoryItem/CategoryItem'
import { CategoryContainerStyle, TitleStyle, CategoryListContainerStyle,CardStyle } from './CategoryStyles'


export default function Categories() {
    return (
        <CategoryContainerStyle>
            <TitleStyle>Buscar por tipo de alojamiento</TitleStyle>
            <CategoryListContainerStyle>
                {
                    categories.map((item) =>
                        <CardStyle key={item.id}>
                            <CategoryItem {...item} />
                        </CardStyle>

                    )
                }
            </CategoryListContainerStyle>
        </CategoryContainerStyle>
    )
}