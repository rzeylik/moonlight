import React from 'react'
import {range} from "lodash"

import Layout from "../../components/Layout"
import ProfileBoard from "../../components/ProfileBoard"
import SlickSlider from "../../components/SlickSlider"

import './styles.css'


const Profile = () =>{
    const slickSettings={
        arrows: true,
    }

    return(
        <Layout>
            <section className="container">
              <div className="profile">
                <h1 className="profileName">Name</h1>
                <button className="profileLogout">Logout</button>
              </div>
                <div className="slickInner">
                    <SlickSlider data={range(0,2)} Item={ProfileBoard} secondSettings={slickSettings} />
                </div>
            </section>
        </Layout>
    )
}

export default Profile