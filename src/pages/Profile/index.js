import React from 'react'
import {range} from "lodash"
import {useHistory} from "react-router-dom"

import Layout from "../../components/Layout"
import ProfileBoard from "../../components/ProfileBoard"
import SlickSlider from "../../components/SlickSlider"

import routes from "../../routes"
import localStorage from "../../utils/localStorage"
import {USER_KEY} from "../../utils/constants"

import './styles.css'


const Profile = () =>{

    const history = useHistory()
    const slickSettings={
        arrows: true,
    }

    const deleteUser = () =>{
        localStorage.removeItem(USER_KEY)
        history.push(routes.home)
    }

    return(
        <Layout>
            <section className="container">
              <div className="profile">
                <h1 className="profileName">Name</h1>
                <button onClick={() => deleteUser()} className="profileLogout">Logout</button>
              </div>
                <div className="slickInner">
                    <SlickSlider data={range(0,2)} Item={ProfileBoard} secondSettings={slickSettings} />
                </div>
            </section>
        </Layout>
    )
}

export default Profile