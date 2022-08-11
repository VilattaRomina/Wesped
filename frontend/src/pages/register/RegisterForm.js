import React, { useRef, useState } from 'react'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import ErrorMessage from '../../components/form/ErrorMessage'
import classes from './register.module.css'

import { Link } from 'react-router-dom'
import { Form, Div, Label } from '../../components/form/StyledForm'
import validator from 'validator'


const RegisterForm = () => {
    const [error, setError] = useState({ visible: false, message: "" });

    // const nameInputRef = useRef();
    // const surnameInputRef = useRef();
    // const emailInputRef = useRef();
    // const passwordInputRef = useRef();
    // const confirmPasswordInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        //     debugger
        //     const name = nameInputRef.current.value.trim();
        //     const surname = surnameInputRef.current.value.trim();
        //     const email = emailInputRef.current.value.trim();
        //     const password = passwordInputRef.current.value.trim();
        //     const confirmedPassword = confirmPasswordInputRef.current.value.trim();

        //     const emailIsValid = validator.isEmail(email);
        //     const passwordLengthIsMoreThanSix = password.length > 6;
        //     const areMatchingPasswords = validator.equals(confirmedPassword, password);

        //     if (emailIsValid && passwordLengthIsMoreThanSix && areMatchingPasswords)
        //         console.table([{
        //             name: name,
        //             surname: surname,
        //             email: email,
        //             password: password
        //         }])

        //     setError({ visible: true, message: "Por favor verifique los campos erróneos." })
    }

    return (
        <Form onSubmit={submitHandler}>
            <h1>Crear cuenta</h1>
            <Div>
                <div className={classes.A}>
                    <div className={classes.B}>
                        <Label htmlFor="name">Nombre</Label>
                        <Input width="13.5rem" type="text" id="name" required />
                    </div>

                    <div className={classes.B}>
                        <Label htmlFor="surname">Apellido</Label>
                        <Input width="13.5rem" type="text" id="surname" required />
                    </div>
                </div>
            </Div>

            <Div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input width="28rem" type="email" id="email" required />
                <Label htmlFor="password">Contraseña</Label>
                <Input width="28rem" type="password" id="password" required />
                <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                <Input width="28rem" type="password" id="confirm-password" required />
                <Div align="center">
                    <ErrorMessage visible={error.visible}>{error?.message ?? ""}</ErrorMessage>
                    <Button type="submit" width="12.5rem"><b>Crear Cuenta</b></Button>
                    <span>
                        ¿Ya tienes una cuenta? <Link to={`/login`}>Iniciar sesión</Link>
                    </span>
                </Div>
            </Div>

        </Form>
    )
}

export default RegisterForm