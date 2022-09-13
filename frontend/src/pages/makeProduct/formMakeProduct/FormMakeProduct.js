import React from "react";
import Select from 'react-select'
import { AtributeInputBlock, AtributesBlockStyle, ContainerStyle, AtributesContainerStyle, DescriptionBlockStyle, DescriptionStyle, FormStyle, InputContainerStyle, InputStyle, LabelStyle, SelectContainerStyle, AtributeNameField, AtributeIconField, PolicyContainerStyle, TitleStyle, PolicyBodyStyle, PolicyBlockStyle, PolicyName, PolicyField, ImageContainerStyle, ImageBlockStyle, ButtonStyle, IconButtonStyle  } from './FormMakeProductStyled'


export default function FormMakeProduct() {


  return (
    <>
        {/* form */}
        <FormStyle>
          <ContainerStyle>
            <InputContainerStyle>
              <LabelStyle>Nombre de la propiedad</LabelStyle>
              <InputStyle
                name="nombre"
                type="text"
                placeholder="nombre del hotel"
              />
            </InputContainerStyle>
            <InputContainerStyle>
              <LabelStyle >Dirección</LabelStyle>
              <InputStyle
                name="direccion"
                type="text"
                placeholder="Av. Colon 1124"
              />
            </InputContainerStyle>
          </ContainerStyle>
          <ContainerStyle>
            <InputContainerStyle>
              <LabelStyle>Categoría</LabelStyle>
              <SelectContainerStyle >
              <Select />
              </SelectContainerStyle>  
            </InputContainerStyle>
            <InputContainerStyle>
              <LabelStyle>Ciudad</LabelStyle>
              <SelectContainerStyle >
              <Select />
              </SelectContainerStyle>  
            </InputContainerStyle>
          </ContainerStyle>
          {/* bloque descripcion */}
          <DescriptionBlockStyle>
            <LabelStyle>Descripción</LabelStyle>
            <DescriptionStyle
              name="descripcion"
              placeholder="Escribir aqui"
            />
          </DescriptionBlockStyle>

          {/* latitud y longitud */}
          <InputContainerStyle>
            <LabelStyle>Latitud</LabelStyle>
            <InputStyle
              name="latitude"
              type="text"
              placeholder="44.6578"
            />
          </InputContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Longitud</LabelStyle>
            <InputStyle
              name="longitud"
              type="text"
              placeholder="-34.6578"
            />
          </InputContainerStyle>
          {/* atributos */}
          <AtributesContainerStyle>
            <TitleStyle>Agregar atributos</TitleStyle>
            <AtributesBlockStyle>
              <AtributeInputBlock>
                <LabelStyle>Nombre</LabelStyle>
                <AtributeNameField
                  name="nombreAtributo"
                  type="text"
                  placeholder="Wifi"
                />
              </AtributeInputBlock>
              <AtributeInputBlock>
                <LabelStyle >Icono</LabelStyle>
                <AtributeIconField
                  name="icono"
                  type="text"
                  placeholder="fa-Wifi"
                />
              </AtributeInputBlock>
              <ButtonStyle>
                <IconButtonStyle />
              </ButtonStyle>
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
                  name="normas"
                  type="textarea"
                  placeholder="Escribir aqui"
                />
              </PolicyBlockStyle>
              <PolicyBlockStyle>
                <PolicyName>Salud y seguridad</PolicyName>
                <LabelStyle >Descripción</LabelStyle>
                <PolicyField
                  name="salud"
                  type="textarea"
                  placeholder="Escribir aqui"
                />
              </PolicyBlockStyle>
              <PolicyBlockStyle>
                <PolicyName>Politica de cancelación</PolicyName>
                <LabelStyle >Descripción</LabelStyle>
                <PolicyField
                  name="cancelacion"
                  type="textarea"
                  placeholder="Escribir aqui"
                />
              </PolicyBlockStyle>
            </PolicyBodyStyle>
          </PolicyContainerStyle>
          {/* imagenes */}
          <ImageContainerStyle>
            <TitleStyle>Cargar imagenes</TitleStyle>
            <ImageBlockStyle>
              <InputStyle
                name="imagen"
                type="url"
                placeholder="Insertar https://"
              />
            </ImageBlockStyle>
          </ImageContainerStyle>
        </FormStyle>
      
    </>
  );
}
