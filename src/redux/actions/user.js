import { createAction } from 'redux-actions'

const SET_USER = 'SET_USER'
const DELETE_USER = 'DELETE_USER'

const setUser = createAction(SET_USER)
const deleteUser = createAction(DELETE_USER)


export { setUser, deleteUser }
