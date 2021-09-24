import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Provider } from 'react-redux'
import React, { useEffect, useState } from 'react'

import { createStore } from './redux/store'
import autoload from './utils/autoload'
import Router from './Router'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './App.css'

let store

const App = () => {
  // const [isLoaded, setLoaded] = useState(true)

  // useEffect(() => {
  //   autoload()
  //       .then(({ userData }) => {
  //         store = createStore({ user: userData })
  //       })
  //       .finally(() => setLoaded(false))
  //
  //   return () => setLoaded(true)
  // }, [])

  // if (isLoaded || !store) {
  //   return null
  // }

  return (
      <div className="App">
        {/*<Provider store={store}>*/}
        {/*  <Router />*/}
        {/*</Provider>*/}
          <Router />
      </div>
  )
}

export default App
