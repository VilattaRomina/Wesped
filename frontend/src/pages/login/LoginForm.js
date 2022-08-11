import React, { useState } from 'react'
import { Form, Div, Label } from '../../components/form/StyledForm'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import ErrorMessage from '../../components/form/ErrorMessage'
import validator from 'validator'

const LoginForm = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate()

    const emailChangeHandler = e => setEmail(e.target.value);
    const passwordChangeHandler = e => setPassword(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        const userInputValues = {
            email: email ?? "",
            password: password ?? ""
        }
        const isValidEmail = validator.isEmail(userInputValues.email);
        const inputsNotEmpty = !validator.isEmpty(userInputValues.email) && !validator.isEmpty(userInputValues.password);
        const correctPassword = validator.equals(userInputValues.password, "123456")

        if (isValidEmail && inputsNotEmpty && correctPassword) {
            try {
                props.isLoggedUser({
                    ...userInputValues,
                    valid: true
                })
                navigate('/')
            } catch (error) {
                alert(error)
            }
        }

        if (!correctPassword) {
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 2000)
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <h1>Iniciar Sesión</h1>
            <Div alignItems="start">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input width="28rem" type="email" id="email" onChange={emailChangeHandler} isError={isError} />
                <Label htmlFor="password">Contraseña</Label>
                <Input width="28rem" type="password" id="password" onChange={passwordChangeHandler} isError={isError} />
            </Div>
            <Div align="center">
                <ErrorMessage isError={isError}>Por favor vuelva a intentarlo, sus credenciales son inválidas</ErrorMessage>
                <Button type="submit" width="12.5rem"><b>Ingresar</b></Button>
                <span>
                    ¿Aún no tienes cuenta? <Link to={`/registro`}>Registrate</Link>
                </span>
            </Div>
        </Form>
    )
}

export default LoginForm