import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from './routes'
import FilmPage from "./pages/FilmPage"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import Page404 from './pages/404'
import Home from './pages/Home'

export const formFilm = (id) => {
  return `${routes.filmPage}/${id}`
}

export const pages = [
  {
    path: routes.home,
    name: 'Home',
    Component: Home,
    exact: true,
  },
  {
    path: routes.signUp,
    name: 'SignUp',
    Component: SignUp,
    exact: true,
  },
  {
    path: routes.profile,
    name: 'Profile',
    Component: Profile,
    exact: true,
  },
  {
    path: formFilm(':id'),
    name: 'FilmPage',
    Component: FilmPage,
    exact: false,
  }
]

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.Component}
          />
        ))}
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
