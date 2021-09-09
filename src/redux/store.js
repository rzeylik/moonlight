import { createStore as createReduxStore, combineReducers } from 'redux'

import createUserReducer from './reducers/user'

export const createStore = ({ user }) => {
  const reducers = {
    user: createUserReducer(user),
  }

  const rootReducer = combineReducers(reducers)
  return createReduxStore(rootReducer)
}

export default createStore
