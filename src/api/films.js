import r from '../utils/request'

export const getFilmByData = (date) => {
    return r.get(`/films/date`, {date})
}

export const getFilmsAll = (search) =>{
    return r.get('/films', search).then(({data}) => data)
}

export const getFilmId = (id) => {
    return r.get(`/films/${id}`).then(({data}) => data)
}

export const getImageFilm = (image) =>{
    return r.get('/films/image', {small_image: image})
}