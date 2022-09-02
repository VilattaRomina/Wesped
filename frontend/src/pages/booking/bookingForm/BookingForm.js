import React from 'react'
import { FormStyle, FormTitle, ColumnForm, InputContainer, TextInput,LabelStyle, SubTitle, Column} from './BookingFormStyle'
import Select from 'react-select'



export default function BookingForm({ handleChange, handleSelectChange}) {

  const optionsHours = [
    "0:00 AM",
     "1:00 AM",
     "2:00 AM",
     "3:00 AM",
     "4:00 AM",
     "5:00 AM",
     "6:00 AM",
     "7:00 AM",
     "8:00 AM",
     "9:00 AM",
     "10:00 AM",
     "11:00 AM",
     "12:00 PM",
     "13:00 PM",
     "14:00 PM",
     "15:00 PM",
     "16:00 PM",
     "17:00 PM",
     "18:00 PM",
     "19:00 PM",
     "20:00 PM",
     "21:00 PM",
     "22:00 PM",
     "23:00 PM",
     "seleccionar hora de llegada",
   ];

    return (
        <>
            <ColumnForm>
                <FormTitle>Completa tus datos</FormTitle>
                <FormStyle name="form">
                    <InputContainer>
                        <LabelStyle>Nombre</LabelStyle>
                        <TextInput
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                        />  
                    </InputContainer>
                    <InputContainer>
                        <LabelStyle>Apellido</LabelStyle>
                        <TextInput
                         type="text"
                         name="apellido"
                         placeholder="Apellido"
                         onChange={handleChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelStyle>Correo electronico</LabelStyle>
                        <TextInput
                         type="email"
                         name="email"
                         placeholder="correo@electronico.com"
                         onChange={handleChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelStyle>Ciudad</LabelStyle>
                        <TextInput
                         type="text"
                         name="ciudad"
                         placeholder="Ciudad"
                         onChange={handleChange}
                         required={true}
                        />
                    </InputContainer>
                </FormStyle>
            </ColumnForm>

            <FormTitle>Indica tu horario estimado de llegada</FormTitle>
        <FormStyle>
            <SubTitle>Tu habitacion va a estar lista para el check-in entre las 10:00AM y las 11:00PM
            </SubTitle>
            <Column>
                <p>Indica tu horario estimado de llegada</p>
                <Select
                defaultValue={{label: optionsHours[24], value: optionsHours[24]}}
                options={optionsHours.map(item => ({label: item, value: item}))}
                onChange = {handleSelectChange}
                />
            </Column>
        </FormStyle>
        </>

    )
}
