import React from 'react'
import Form from '../components/form/Form'
import RegisterInput from '../components/register/RegisterInput'

const Register = () => {
    return (
        <>
            <Form buttonText="Crear Cuenta" buttonType="submit" questionToUser="¿Ya tienes una cuenta?" title="Crear cuenta" linkText="Iniciar sesión" redirectLink="/login">
                <RegisterInput />
            </Form>
        </>
    )
}

export default Register