import React from 'react'
//import categories from '../../../data/categories.json'
import CategoryItem from './categoryItem/CategoryItem'
import { CategoryContainerStyle, TitleStyle, CategoryListContainerStyle,CardStyle } from './CategoryStyles'
import { useState, useEffect} from 'react'
// import axios from 'axios'
import { AxiosInstance } from '../../../helpers/AxiosHelper'

// const client = axios.create({
//     baseURL: "http://localhost:8080"
//   });

export default function Categories() {

    const [categories, setCategories] = useState([]);

    //const URL_API ="http://localhost:8080/categories"

    useEffect(()=> {
        AxiosInstance.get('/categories')
        .then((res)=> {
           setCategories(res.data);
        })
    }, [])

    
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
