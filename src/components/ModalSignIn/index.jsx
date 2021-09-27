import React from "react"
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import { Modal } from "react-bootstrap"

import routes from "../../routes"

import "./styles.css"


const ModalSignIn = ({ show, handleClose }) => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const errorsStyleEmail = !errors?.email ? '' : 'test'
  const errorsStylePassword = !errors?.password ? '' : 'test'

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <Modal centered show={show} onHide={handleClose}>
      <div className="signin__modal text-center">
        <h3 className="signin__title">Увійдіть у профіль</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto my-4 d-flex align-items-center flex-column">
          <input
            type="email"
            {...register('email', {required: 'Please input Email'})}
            className={`${errorsStyleEmail} signin__input px-3 py-2 my-2`}
            placeholder="Введіть e-mail"
          />
          <input
            type="password"
            {...register('password',{required: 'Please input password'})}
            className={`${errorsStylePassword} signin__input px-3 py-2 my-2`}
            placeholder="Введіть пароль"
          />
          <button type="submit" className="signin__button signin__login my-4">Увійти</button>
          <div className='signin__line'></div>
          <Link to={routes.signUp} className="signin__button signin__registration my-4">Регістрація</Link>
          </form>
        </div>
    </Modal>
  )
}

export default ModalSignIn;
