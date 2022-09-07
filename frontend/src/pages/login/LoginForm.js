import React, { useState, useRef, useContext } from 'react'
import { Form, Div, Label } from '../../components/form/StyledForm'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import ErrorMessage from '../../components/form/ErrorMessage'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import LocalStorageHelper from '../../helpers/LocalStorageHelper'
import { UserContext } from '../../hooks/UseContext'

const LoginForm = () => {
    const { setLoggedUser } = useContext(UserContext)
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate()

    const emailInputRef = useRef();
    const passwordInputRef = useRef();


    const submitLoginHandler = e => {
        e.preventDefault();

        const email = emailInputRef.current.value.trim();
        const password = passwordInputRef.current.value.trim();

        if (password.length < 6) {
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 2000)
            return
        }

        const userCredentials = {
            email: email,
            password: password
        }

        try {
            axios.post('http://localhost:8080/auth/signin', userCredentials).then(({ data }) => {
                LocalStorageHelper.setItem('Token', data.token)
                const { id, name, surname, email, city } = LocalStorageHelper.getItem('Token') ? jwt_decode(LocalStorageHelper.getItem('Token'))["user_info"] : null;
                setLoggedUser({
                    id: id,
                    name: name,
                    surname: surname,
                    email: email,
                    city: city,
                })
                navigate('/')

            }).catch(() => {
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                }, 2000)
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form onSubmit={submitLoginHandler}>
            <h1>Iniciar Sesión</h1>
            <Div alignItems="start">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input width="28rem" type="email" id="email" required reference={emailInputRef} visible={isError} />
                <Label htmlFor="password">Contraseña</Label>
                <Input width="28rem" type="password" id="password" required reference={passwordInputRef} visible={isError} />
            </Div>
            <Div align="center">
                <ErrorMessage visible={isError}>Por favor vuelva a intentarlo, usuario o contraseña inválidos</ErrorMessage>
                <Button type="submit" width="12.5rem"><b>Ingresar</b></Button>
                <span>
                    ¿Aún no tienes cuenta? <Link to={`/registro`}>Registrate</Link>
                </span>
            </Div>
        </Form>
    )
}

export default LoginForm