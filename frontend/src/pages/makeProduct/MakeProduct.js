import React, { useState } from 'react'
import Section from '../../components/section/Section'
import Body from '../../components/body/Body'
import { BoxHeaderStyle, HeaderStyle, Title, Arrow, LinkStyle, FormBodyStyle, TitleContainer } from './MakeProductStyle'
import { FaChevronLeft } from "react-icons/fa";
import FormMakeProduct from './formMakeProduct/FormMakeProduct';


export default function MakeProduct() {

  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    name: '',
    address: '',
    category: '',
    city: '',
    description: '',
    latitude: '',
    longitude: '',
    attributeName: '',
    icon: '',
    rules: '',
    health: '',
    cancellation: '',
    image: '',
  })

  const validationForm = () => {
    let validationErrors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexComments = /^.{1,100}$/;
    let regexURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    let regexNumbers = /^(-?([0-8]?[0-9](\.\d+)?|90(.[0]+)?)\s?)$/;


    if (!values.name) {
      validationErrors.name = "Este campo es obligatorio"
    } else if (!regexName.test(values.name)) {
      validationErrors.name = "Este campo solo acepta letras"
    }
    if (!values.address) {
      validationErrors.address = "Este campo es obligatorio."
    } 
    if (!values.category) {
      validationErrors.category = "Este campo es obligatorio."
    }
    if (!values.city) {
      validationErrors.city = "Este campo es obligatorio."
    }
    if (!values.description) {
      validationErrors.description = "Este campo es obligatorio."
    } 
    if (!values.latitude) {
      validationErrors.latitude = "Este campo es obligatorio."
    }else if (!regexNumbers.test(values.latitude)) {
      validationErrors.latitude = "Latitud no valida"
    }

    if (!values.longitude) {
      validationErrors.longitude = "Este campo es obligatorio."
    }else if (!regexNumbers.test(values.longitude)) {
      validationErrors.longitude = "Longitud no valida"
    }

    if (!values.attributeName) {
      validationErrors.attributeName = "Este campo es obligatorio."
    }

    if (!values.icon) {
      validationErrors.icon = "Este campo es obligatorio."
    }

    if (!values.rules) {
      validationErrors.rules = "Este campo es obligatorio."
    }else if (!regexComments.test(values.rules)) {
      validationErrors.rules = "superó el máximo de caracteres disponibles"
    }

    if (!values.health) {
      validationErrors.health = "Este campo es obligatorio."
    }else if (!regexComments.test(values.health)) {
      validationErrors.health = "superó el máximo de caracteres disponibles"
    }

    if (!values.cancellation) {
      validationErrors.cancellation = "Este campo es obligatorio."
    }else if (!regexComments.test(values.cancellation)) {
      validationErrors.cancellation = "superó el máximo de caracteres disponibles"
    }

    if (!values.image) {
      validationErrors.image = "Este campo es obligatorio."
    }else if (!regexURL.test(values.image)) {
      validationErrors.image = "Debe ingresar una url valida"
    }

    return validationErrors;
  }

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })

    setErrors({ 
      ...errors, 
      [e.target.name]: '', 
    })
  }

  const handleSelectChange = ({ value }) => {
    setValues({ ...values, category: value, city: value })

  }

  // const handleBlur = (e) => {
  //   handleInputChange(e);
  //   handleSelectChange(e);
  //   setErrors(validationForm(values))
  // }

  const handleButton = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({...errors, ...validationForm(values)})
    console.log(values);
    console.log(errors);
  }


  return (

    <Body>
      <BoxHeaderStyle>
        <HeaderStyle>
          <Title>
            <h2>Administración de propiedades</h2>
          </Title>
          <Arrow>
            <LinkStyle to={""}>
              <FaChevronLeft />
            </LinkStyle>
          </Arrow>
        </HeaderStyle>
      </BoxHeaderStyle>
      <Section>
        <FormBodyStyle>
          <TitleContainer>Crear Propiedad</TitleContainer>
          <FormMakeProduct
            values={values}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            handleButton = {handleButton}
            errors = {errors}
          />
        </FormBodyStyle>
      </Section>

    </Body>


  )
}
