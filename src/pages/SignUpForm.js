import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import '../styles/SignInForm.css'
import MyTextInput from '../components/MyTextInput'

/*  

    ==>  EJEMPLO CON Componente Formik  <==

Formik
    Recibe los siguientes atributos=propiedades
        initialValues       <= Objeto con las propiedades y valores iniciales
        validationSchema    <= Esquema de validación (Yup)
        onSubmit            <= Function(values, formikBag){...}

Form
    Contiene Field's y ErrorMessage's

Field
    type                    <= type del campo
    as                      <= (Opcional) textares | select
    name                    <= name del campo

ErrorMessage
    name                    <= name del campo

*/

export default function SignUpForm() {

    function submitHandler(values, {resetForm}){
        console.log(values)
        resetForm()
    }

    return (
        <div id="formContainer">
           <Formik
            initialValues = {
                {
                    nickName: '',
                    password: '',
                    description: ''
                }
            }
            validationSchema =  {yup.object().shape({
                nickName: yup.string().required(),
                password: yup.string().min(8).required(),
                description: yup.string().min(10).required(),
                state: yup.string().required()
            })}
            onSubmit =  {(values, {resetForm}) => submitHandler(values, {resetForm})}
           >
               <Form>
                    <h1>SIGN UP</h1>

                    <MyTextInput label="NickName" name="nickName" />

                    <label htmlFor="password">Password</label>
                    <Field type="text" name="password" />
                    <ErrorMessage name="password" className="errorMsj" />

                    <label htmlFor="description">Description</label>
                    <Field type="text" as="textarea" name="description" />
                    <ErrorMessage name="description" className="errorMsj" />

                    <label htmlFor="state">State</label>
                    <Field type="text" as="select" name="state">
                        <option value="CDMX">CDMX</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Puebla">Puebla</option>
                    </Field>
                    <ErrorMessage name="state" className="errorMsj" />

                    <button type="submit">SENT</button>
               </Form>
            </Formik>             
        </div>
    )
}
