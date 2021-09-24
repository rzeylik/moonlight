import React from 'react'

import './styles.css'
import Layout from "../../components/Layout";

const SignUp = () =>{
    return(
        <Layout>
            <section className="signUp">
                <h1 className="signUpTitle">Registration</h1>
                <form className="signUpForm">
                    <div className="signUpItem">
                        <label htmlFor="name" className="signUpLabel">name</label>
                        <input placeholder="Input Name" type="text" id="name" className="signUpInput"/>
                    </div>
                    <div className="signUpItem">
                        <label htmlFor="email" className="signUpLabel">e-mail</label>
                        <input autoComplete="false" placeholder="Input e-mail" type="email" id="email" required className="signUpInput"/>
                    </div>
                    <div className="signUpItem">
                        <label htmlFor="password" className="signUpLabel">password</label>
                        <input autoComplete="false" placeholder="Input password" type="password" id="password" className="signUpInput"/>
                    </div>
                    <button type="submit" className="signUpBtn">Sign Up</button>
                </form>
            </section>
        </Layout>
    )
}

export default SignUp