import {getFilmByData as getFilmByDataApi} from "../api/films";

import r from "../utils/request";


export const getFilmByData = (date) => {
    return getFilmByDataApi(date).then(({data}) => data)
}