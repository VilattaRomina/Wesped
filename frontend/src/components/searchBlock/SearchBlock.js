import React from 'react'
import { SearchContainer, Form, SearchTitle, Button } from './SearchStyled'

function SearchBlock() {

    return (
        <SearchContainer>
            <SearchTitle>Busca ofertas en hoteles, casas y mucho mas</SearchTitle>

            <Form>
                <select required name='cities' defaultValue={{value:0}}>
                    <option value=''>seleccionar ciudad</option>
                    <option value="Sa">Salta</option>
                    <option value="Bs">Buenos Aires</option>
                    <option value="Cba">Córdoba</option>
                </select>
                <Button type='submit'>Buscar</Button>
            </Form>



            
        </SearchContainer>

    )
}

export default SearchBlock;