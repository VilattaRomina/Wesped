import React from 'react'
import categories from '../../../data/categories.json'
import CategoryItem from './categoryItem/CategoryItem'
import { CategoryContainerStyle, TitleStyle, CategoryListContainerStyle} from './CategoryStyles'


export default function Categories() {
    return (
        <CategoryContainerStyle>
            <TitleStyle>Buscar por tipo de alojamiento</TitleStyle>
            <CategoryListContainerStyle>
                {
                    categories.map((item) =>
                        <CategoryItem {...item} />
                    )
                }
            </CategoryListContainerStyle>
        </CategoryContainerStyle>
    )
}
