import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {Link, useHistory} from "react-router-dom"
import { Modal } from "react-bootstrap"

import routes from "../../routes"
import {login} from "../../service/user"
import {USER_KEY} from "../../utils/constants"
import localStorage from "../../utils/localStorage"
import createReducer from "../../redux/reducers/user"

import "./styles.css"
import {isNil} from "lodash";


const ModalSignIn = ({ show, handleClose }) => {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const history = useHistory()
  const errorsStyleEmail = !errors?.email ? '' : 'test'
  const errorsStylePassword = !errors?.password ? '' : 'test'
  const [error, setError] = useState(null)

  const onSubmit = (data) =>{
    login(data).then((data) => {
      console.log(data)
      createReducer(data)
      localStorage.setItem(USER_KEY, data?.access_token?.token)
    }).then(() => history.push(routes.profile)).catch((err) => setError(err))
  }

  return (
    <Modal centered show={show} onHide={handleClose}>
      <div className="signin__modal text-center">
        <h3 className="signin__title">Увійдіть у профіль</h3>
        <h1>{!isNil(error) ? 'Ops' : null}</h1>
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
