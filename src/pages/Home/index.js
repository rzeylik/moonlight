import React from 'react'
import {range} from "lodash"
import {Link} from "react-router-dom"

import routes from "../../routes"
import SlickSlider from "../../components/SlickSlider"
import Layout from '../../components/Layout'
import Board from "../../components/Board"

import './styles.css'

const Home = () => {

    const Films = () =>{
      return  <Link to={routes.profile}><img src="./image/film.jpg" alt="" className="filmImg"/></Link>
    }

    return (
      <Layout>
          <section className="homeSlider">
              <SlickSlider Item={Board} data={range(0, 10)} />
          </section>
          <section className="homeFilms">
              <div className="container">
                  <p className="filmsTitle">Найближчі сеанси</p>
                <SlickSlider fade={false} data={range(0,10)} Item={Films} countElement={6} />
              </div>
          </section>
      </Layout>
    )
}
export default Home
