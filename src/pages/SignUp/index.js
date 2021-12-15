import React, {useState} from 'react'
import {useForm, Controller} from "react-hook-form"
import {useHistory} from "react-router-dom"


import {name, email, password} from "../../utils/constants"
import {signUp} from "../../api/user"
import Layout from "../../components/Layout"

import './styles.css'
import routes from "../../routes";

const SignUp = () =>{
    const {register, handleSubmit, formState:{errors}, control} = useForm()
    const history = useHistory()
    const [error, setError] = useState('Данні введено не вірно будь ласка заповніть поля')
    const [errorUserName, setErrorUserName] = useState(false)

    const errorsStyleEmail = !errors?.email ? '' : 'test'
    const errorsStyleName = !errors?.name ? '' : 'test'
    const errorsStylePassword = !errors?.password ? '' : 'test'

    const onSubmit = (data) =>{
        signUp(data).then(() => history.push(routes.home)).catch(e => {
          const {status, data} = e?.response ?? {}
            if(status == 400) {
                setErrorUserName(true)
                return setError(data)
            }
        })
    }

    return(
        <Layout>
            {errors?.name || errors?.password || errors?.email || errorUserName ? ( <div className="formRequired">
                <img src="./image/required.svg" alt="!" className="requiredImg"/>
                <p className="requiredText">{error}</p>
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
                    <Controller
                        name='type'
                        control={control}
                        defaultValue={0}
                        render={({field}) =>
                            <div className="innersAllInputs">
                                <label htmlFor="1" className="innerInput">
                                    <input className="inputRadio" id="1" {...field} value="1" type="radio"/>
                                    <span className="labelRadio">You are students</span>
                                </label>
                                <label className="innerInput">
                                    <input className="inputRadio" id='2' {...field} value="2" type="radio"/>
                                    <span className="labelRadio" htmlFor="2">Buy a paid service</span>
                                </label>
                            </div>}
                    />
                    <button type="submit" className="signUpBtn">Sign Up</button>
                </form>
            </section>
        </Layout>
    )
}

export default SignUp