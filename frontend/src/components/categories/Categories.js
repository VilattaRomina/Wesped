import React from 'react'
import categories from '../data/categories.json'
import { CategorieStyle, CategoryCard} from './CategoriesStyles'

export default function Categories() {
    return (
        <CategorieStyle>
                <h2>Buscar por tipo de alojamiento</h2>
                <div>
                    {
                        categories.map((item)=>
                        <CategoryCard>{/*Box*/}
                            <img src={item.image} alt="img"/>
                            <div>{/*infoSection*/}
                                <h3>{item.category}</h3>
                                <p>{item.amount}</p>
                            </div>
                        </CategoryCard>
                          
                    
                        )
                    }
                </div>
           


        </CategorieStyle>
    )
}
