import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import '../styles/SignInForm.css'

/*  

    ==>  EJEMPLO CON HOOK useFormik  <==

USE FORMIK
    Recibe un objeto con las siguientes propiedades:
        initialValues       <= Objeto con las propiedades y valores iniciales
        validationSchema    <= Esquema de validación (Yup)
        onSubmit            <= Function(values, formikBag){...}

FORMULARIO
    onSubmit={formik.handleSubmit}      <= Detectar el envio del formulario

CADA INPUT, TEXTAREA, SELECT
    onChange={formik.handleChange}      <= Detectar el cambio de valor
    value={formik.values.[property]}    <= Asignar e ir cambiando el valor
    onBlur={formik.handleBlur}          <= Detectar si el input ya fue tocado

ERRORES
    formik.errors.[property]            <= Tiene el Error en la propiedad si es que hay
    formik.touched.[property]           <= Tiene true/false si fue o no tocado

*/

export default function SignInForm() {

    const formik = useFormik({
        initialValues : {
            nickName: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            nickName: yup.string().required(),
            password: yup.string().min(8).required()
        }),
        onSubmit: (values) => submitHandler(values)
    })

    function submitHandler(values){
        console.log(values)
    }
    
    return (
        <div id="formContainer">
            <form onSubmit={formik.handleSubmit}>
                <h1>SIGN IN</h1>
                <label htmlFor="nickName">NickName</label>
                <input type="text" id="nickName" name="nickName" onChange={formik.handleChange} value={formik.values.nickName} onBlur={formik.handleBlur} />
                {formik.errors.nickName && formik.touched.nickName ? <div className="errorMsj">{formik.errors.nickName}</div> : null}


                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" {...formik.getFieldProps('password')} />
                {formik.errors.password && formik.touched.password ? <div className="errorMsj">{formik.errors.password}</div> : null}

                <button type="submit">SENT</button>
            </form>
        </div>
    )
}
