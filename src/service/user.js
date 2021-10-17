import {login as loginApi, signUp as signUpApi} from "../api/user";

export const login = (params) => {
    return loginApi(params)
}

export const signUp = (params) => {
    return signUpApi(params)
}