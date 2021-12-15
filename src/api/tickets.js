import r from '../utils/request'

export const getTicketsPlace = (id) => {
    return r.get(`/tickets/${id}`).then(({data}) => data)
}

export const postNewTicket = (data) => {
    return r.post(`/tickets/${data.id}`, data)
}

export const deleteTicket = (id) => {
    return r.delete(`/tickets/${id}/delete`)
}