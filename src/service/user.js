import axios from "axios"
import {isEmpty} from "lodash"

import {login as loginApi, signUp as signUpApi} from "../api/user"
import localStorage from "../utils/localStorage"
import {  USER_KEY } from '../utils/constants'


export const login = (params) => {
    return loginApi(params)
}

export const signUp = (params) => {
    return signUpApi(params)
}

export const updateToken = (token = null) => {
    if (isEmpty(token)) {
        localStorage.removeItem(USER_KEY)
        return delete axios.defaults.headers.common['Authorization']
    }

    localStorage.setItem(USER_KEY, token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

    return token
}
