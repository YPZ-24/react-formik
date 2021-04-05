import React from 'react'
import { useField } from 'formik'
import '../styles/SignInForm.css'

/*  

    ==>  EJEMPLO CON HOOK useField  <==

USE FORMIK
    Recibe las props 
        name (Requerido)
        type
        value
        ...
    Regresa field y meta

FIELD
    name
    checked
    onVlur
    onChange
    value
    ...

META
    error
    touched
    value
    ...

*/

export default function MyTextInput({label, ...props}) {
    
    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input type="text" {...field} {...props} />
            {meta.error && meta.touched ? <div className="errorMsj">{meta.error}</div> : null}
        </>
    )
}
