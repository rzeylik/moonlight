import r from '../utils/request'

export const login = (params) => {
    return r.post('/account/auth/login', params)
}

export const signUp = (params) => {
    return r.post('/account/auth/register', params)
}