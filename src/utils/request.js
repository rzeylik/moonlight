import axios from 'axios'

import { API_ROOT } from './constants'

const rawRequest = async (url, method = 'get', options = {}) => {
    let params = {
        ...options,
        url,
        method,
    }
    params.url = API_ROOT + url

    return axios(params).then(({ data }) => data)
}

const getRequest = async (url, data = {}) => {
    return rawRequest(url, 'get', { params: data })
}

const postRequest = async (url, data = {}) => {
    return rawRequest(url, 'post', { data })
}

const putRequest = async (url, data = {}) => {
    return rawRequest(url, 'put', { data })
}

const deleteRequest = async (url, data = {}) => {
    return rawRequest(url, 'delete', { data })
}

const setHandlers = (onSuccess, onError) => {
    const defaultSuccessHandler = (response) => response
    const defaultErrorHandler = (e) => {
        console.log(`\n\nERROR\n\n${e}`)
        throw e
    }

    axios.interceptors.response.use(
        onSuccess ? onSuccess : defaultSuccessHandler,
        onError ? onError : defaultErrorHandler
    )
}

export default {
    get: getRequest,
    post: postRequest,
    delete: deleteRequest,
    put: putRequest,
    setHandlers,
}
