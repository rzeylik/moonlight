import React from 'react'
import {useForm} from "react-hook-form"
import {useHistory} from "react-router-dom"


import {name, email, password} from "../../utils/constants"
import {signUp} from "../../api/user"
import Layout from "../../components/Layout"

import './styles.css'
import routes from "../../routes";

const SignUp = () =>{
    const {register, handleSubmit, formState:{errors},} = useForm()
    const history = useHistory()

    const errorsStyleEmail = !errors?.email ? '' : 'test'
    const errorsStyleName = !errors?.name ? '' : 'test'
    const errorsStylePassword = !errors?.password ? '' : 'test'

    const onSubmit = (data) =>{
        console.log(data)
        signUp(data).then(() => history.push(routes.home))
    }

    return(
        <Layout>
            {errors?.name || errors?.password || errors?.email ? ( <div className="formRequired">
                <img src="./image/required.svg" alt="!" className="requiredImg"/>
                <p className="requiredText">Данні введено не вірно будь ласка заповніть поля</p>
            </div>) : <div className="formRequired" style={{height: 45}}></div>}
            <section className="signUp">
                <h1 className="signUpTitle">Registration</h1>
                <form className="signUpForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="signUpItem">
                        <label htmlFor={name} className="signUpLabel">name</label>
                        <input {...register(name, {required: 'Please input name', defaultValue: ''})} placeholder="Input Name" type="text" id={name} className={`${errorsStyleName} signUpInput`}/>
                    </div>
                    <div className="signUpItem">
                        <label htmlFor={email} className="signUpLabel">e-mail</label>
                        <input {...register(email, {required: 'Please input email', defaultValue: ''})} autoComplete="false" placeholder="Input e-mail" type="email" id={email} className={`${errorsStyleEmail} signUpInput`}/>
                    </div>
                    <div className="signUpItem">
                        <label htmlFor={password} className="signUpLabel">password</label>
                        <input {...register(password, {required: 'Please input password', defaultValue: ''})} autoComplete="false" placeholder="Input password" type="password" id={password} className={`${errorsStylePassword} signUpInput`}/>
                    </div>
                    <button type="submit" className="signUpBtn">Sign Up</button>
                </form>
            </section>
        </Layout>
    )
}

export default SignUp