import React from 'react'
import {range} from "lodash";
import Layout from '../../components/Layout'
import Board from "../../components/Board";
import SlickSlider from "../../components/SlickSlider";
import './styles.css'

const Home = () => {
    return (
      <Layout>
          <section className="homeSlider">
              <SlickSlider Item={Board} data={range(0, 10)} />
          </section>
      </Layout>
    )
}
export default Home
