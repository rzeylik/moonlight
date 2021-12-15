import r from '../utils/request'

export const login = (params) => {
    return r.post('/account/auth/login', params)
}

export const signUp = (params) => {
    return r.post('/account/auth/register', params)
}

export const getUser = () => {
   return  r.get('/account/me').then(({data}) => data)
}

export const getAllTickets = (id = 1) =>{
    return  r.get(`/tickets/${id}/user`).then(({data}) => data)
}

export const putLogo = (data) =>{
    return  r.upload(`/account`, data)
}