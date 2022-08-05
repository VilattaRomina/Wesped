import React from 'react'
import { SearchContainer, SearchTitle, Button, Form } from './SearchStyled'
import Select from 'react-select'
//import { useState } from 'react'



//const city = ['Salta', 'Buenos Aires', 'Córdoba', 'Santa Fe']

const cities = [
    {id:1, city:'Cordoba', country:'Argentina'}, 
    {id:2, city:'Salta', country:'Argentina'}, 
    {id:3, city:'Mendoza', country:'Argentina'}, 
    {id:4, city:'Buenos Aires', country:'Argentina'}, 
]

function SearchBlock() {

    // const [selectedCity, setSelectedCity] = useState()

    const handleSelectChange = ({ value }) => {
        console.log(value);
        // setSelectedCity(value);
    }
    return (
        <SearchContainer>
            <SearchTitle>Busca ofertas en hoteles, casas y mucho mas</SearchTitle>
            <Form>
                {/* <p>Ciudad elegida: {selectedCity} </p> */}
                <Select
                    defaultValue={{ label: 'Selecciona una opción', value: 'empty' }}
                
                   options = {cities.map(item => ({label:item.city, value:item.id }
                   ))}
                    onChange={handleSelectChange}
                />

                <Button type='submit'>Buscar</Button>

            </Form>




        </SearchContainer>

    )
}

export default SearchBlock;


