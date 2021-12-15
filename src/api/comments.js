import r from '../utils/request'

export const getComments = (filmId) => {
    return r.get(`/comments/${filmId}`).then(({data}) => data)
}

export const postComments = (data) => {
    return r.post(`/comments/${data?.film_id}`, data).then(({data}) => data)
}