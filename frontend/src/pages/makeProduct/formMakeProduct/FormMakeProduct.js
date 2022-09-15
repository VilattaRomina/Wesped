import React from "react";
import Select from 'react-select'
import { AtributeInputBlock, AtributesBlockStyle, ContainerStyle, AtributesContainerStyle, DescriptionBlockStyle, DescriptionStyle, FormStyle, InputContainerStyle, InputStyle, LabelStyle, SelectContainerStyle, AtributeNameField, AtributeIconField, PolicyContainerStyle, TitleStyle, PolicyBodyStyle, PolicyBlockStyle, PolicyName, PolicyField, ImageContainerStyle, ImageBlockStyle, ButtonStyle, IconButtonStyle, ContainerButtonGlobal, ErrorText } from './FormMakeProductStyled'
import Button from '../../../components/button/Button'
import { useState, useEffect } from "react";
import { AxiosInstance } from '../../../helpers/AxiosHelper'



export default function FormMakeProduct({ values, handleInputChange, handleSelectChange, handleSubmit, handleButton, errors }) {

  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  // const [products, setProducts] = useState ([]);

  useEffect(() => {
    AxiosInstance.get('/categories')
      .then((res) => {
        setCategories(res.data);
      })

    AxiosInstance.get('/cities')
      .then((res) => {
        setCities(res.data);
      })

    // AxiosInstance.get('/products/features')
    // .then((res) => {
    //   setProducts(res.data)
    // })
  }, [])


  return (
    <>
      {/* form */}
      <FormStyle name="form">
        <ContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Nombre de la propiedad</LabelStyle>
            <InputStyle
              name="name"
              type="text"
              placeholder="Nombre del hotel"
              onChange={handleInputChange}
              value={values.name}
              required
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </InputContainerStyle>
          <InputContainerStyle>
            <LabelStyle >Dirección</LabelStyle>
            <InputStyle
              name="address"
              type="text"
              placeholder="Av. Colon 1124"
              onChange={handleInputChange}
              value={values.address}
              required
            />
            {errors.address && <ErrorText>{errors.address}</ErrorText>}
          </InputContainerStyle>
        </ContainerStyle>
        <ContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Categoría</LabelStyle>
            <SelectContainerStyle >
              <Select
                defaultValue={{ label: "Hotel", value: "Hotel" }}
                options={categories.map(item => ({ label: item.title, value: item.title }))}
                onChange={handleSelectChange}
                required
              />
              {errors.category && <ErrorText>{errors.category}</ErrorText>}
            </SelectContainerStyle>
          </InputContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Ciudad</LabelStyle>
            <SelectContainerStyle >
              <Select
                defaultValue={{ label: "Ciudad", value: "Ciudad" }}
                options={cities.map(item => ({ label: item.name + ', ' + item.country, value: item.name + ', ' + item.country }))}
                onChange={handleSelectChange}
                required
              />
              {errors.city && <ErrorText>{errors.city}</ErrorText>}
            </SelectContainerStyle>
          </InputContainerStyle>
        </ContainerStyle>
        {/* bloque descripcion */}
        <DescriptionBlockStyle>
          <LabelStyle>Descripción</LabelStyle>
          <DescriptionStyle
            name="description"
            placeholder="Escribir aqui"
            onChange={handleInputChange}
            value={values.description}
            required
          />
          {errors.description && <ErrorText>{errors.description}</ErrorText>}
        </DescriptionBlockStyle>

        {/* latitud y longitud */}
        <InputContainerStyle>
          <LabelStyle>Latitud</LabelStyle>
          <InputStyle
            name="latitude"
            type="text"
            placeholder="44.6578"
            onChange={handleInputChange}
            value={values.latitude}
            required
          />
          {errors.latitude && <ErrorText>{errors.latitude}</ErrorText>}
        </InputContainerStyle>
        <InputContainerStyle>
          <LabelStyle>Longitud</LabelStyle>
          <InputStyle
            name="longitude"
            type="text"
            placeholder="-34.6578"
            onChange={handleInputChange}
            value={values.longitude}
            required
          />
          {errors.longitude && <ErrorText>{errors.longitude}</ErrorText>}
        </InputContainerStyle>
        {/* atributos */}
        <AtributesContainerStyle>
          <TitleStyle>Agregar atributos</TitleStyle>
          <AtributesBlockStyle>
            <AtributeInputBlock>
              <LabelStyle>Nombre</LabelStyle>
              <AtributeNameField
                name="attributeName"
                type="text"
                placeholder="Wifi"
                onChange={handleInputChange}
                value={values.attributeName}
                required
              />
              {errors.attributeName && <ErrorText>{errors.attributeName}</ErrorText>}
            </AtributeInputBlock>
            <AtributeInputBlock>
              <LabelStyle >Icono</LabelStyle>
              <AtributeIconField
                name="icon"
                type="text"
                placeholder="fa-Wifi"
                onChange={handleInputChange}
                value={values.icon}
                required
              />
              {errors.icon && <ErrorText>{errors.icon}</ErrorText>}
            </AtributeInputBlock>
            <ButtonStyle onClick={handleButton}>
              <IconButtonStyle />
            </ButtonStyle>
          </AtributesBlockStyle>




          <AtributesBlockStyle>
            <LabelStyle>Seleccionar Atributo</LabelStyle>
            {/* <SelectContainerStyle >
              <Select
                defaultValue={{ label: "Atributo", value: "Atributo" }}
                options={products.features.map(item => ({ label: item.title + ', ' + item.icon, value: item.title + ', ' + item.icon }))}
                onChange={handleSelectChange}
                isMulti
                required
              />
            </SelectContainerStyle> */}


          </AtributesBlockStyle>





        </AtributesContainerStyle>


        {/* politicas */}
        <PolicyContainerStyle>
          <TitleStyle>Políticas del producto</TitleStyle>
          <PolicyBodyStyle>
            <PolicyBlockStyle>
              <PolicyName>Normas de la casa</PolicyName>
              <LabelStyle >Descripción</LabelStyle>
              <PolicyField
                name="rules"
                type="textarea"
                placeholder="Escribir aqui"
                onChange={handleInputChange}
                value={values.rule}
                required
              />
              {errors.rules && <ErrorText>{errors.rules}</ErrorText>}
            </PolicyBlockStyle>
            <PolicyBlockStyle>
              <PolicyName>Salud y seguridad</PolicyName>
              <LabelStyle >Descripción</LabelStyle>
              <PolicyField
                name="health"
                type="textarea"
                placeholder="Escribir aqui"
                onChange={handleInputChange}
                value={values.health}
                required
              />
              {errors.health && <ErrorText>{errors.health}</ErrorText>}
            </PolicyBlockStyle>
            <PolicyBlockStyle>
              <PolicyName>Politica de cancelación</PolicyName>
              <LabelStyle >Descripción</LabelStyle>
              <PolicyField
                name="cancellation"
                type="textarea"
                placeholder="Escribir aqui"
                onChange={handleInputChange}
                value={values.cancellation}
                required
              />
              {errors.cancellation && <ErrorText>{errors.cancellation}</ErrorText>}
            </PolicyBlockStyle>
          </PolicyBodyStyle>
        </PolicyContainerStyle>
        {/* imagenes */}
        <ImageContainerStyle>
          <TitleStyle>Cargar imagenes</TitleStyle>
          <ImageBlockStyle>
            <InputStyle
              name="image"
              type="url"
              placeholder="Insertar https://"
              onChange={handleInputChange}
              value={values.image}
              required
            />
            {errors.image && <ErrorText>{errors.image}</ErrorText>}
            <ButtonStyle onClick={handleButton}>
              <IconButtonStyle />
            </ButtonStyle>
          </ImageBlockStyle>
        </ImageContainerStyle>
        <ContainerButtonGlobal>
          <Button width={'300px'} type="submit" form="form" onClick={handleSubmit}>Crear</Button>
        </ContainerButtonGlobal>
      </FormStyle>

    </>
  );
}
