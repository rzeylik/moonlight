import React from 'react'

import Layout from "../../components/Layout";
import ProfileBoard from "../../components/ProfileBoard";

import './styles.css'

const Profile = () =>{
    return(
        <Layout>
            <section className="container">
              <div className="profile">
                <h1 className="profileName">Name</h1>
                <button className="profileLogout">Logout</button>
              </div>
                <ProfileBoard />
            </section>
        </Layout>
    )
}

export default Profile