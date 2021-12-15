import r from '../utils/request'

export const getSessions = () => {
    return r.get('/sessions').then(({data}) => data)
}