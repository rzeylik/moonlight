import React from 'react'
import { Link } from 'react-router-dom'
import {range} from "lodash";

import Layout from '../../components/Layout'

import Board from "../../components/Board";
import SlickSlider from "../../components/SlickSlider";
import './styles.css'

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SlickSlider Item={Board} data={range(0, 15)} />
      </Layout>
    )
  }
}
export default Home
