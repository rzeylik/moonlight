import React, {useEffect, useState} from 'react'
import {isEmpty, isNil, range} from "lodash"
import {useHistory} from "react-router-dom"

import Layout from "../../components/Layout"
import ProfileBoard from "../../components/ProfileBoard"
import SlickSlider from "../../components/SlickSlider"

import {getAllTickets, getUser, putLogo} from "../../api/user"
import {updateToken} from "../../service/user"
import routes from "../../routes"
import localStorage from "../../utils/localStorage"
import {USER_KEY} from "../../utils/constants"

import './styles.css'
import {deleteTicket} from "../../api/tickets";



const Profile = () =>{
    const [userData, setUserData] = useState(null)
    const [allTickets, setAllTickets] = useState([])
    const [userAvatar, setUserAvatar] = useState(null)

    const history = useHistory()
    const slickSettings={
        arrows: true,
    }

    const deleteUser = () =>{
        localStorage.setItem(USER_KEY,null)
        updateToken()
        history.push(routes.home)
        window.location.reload()
    }

    useEffect(() => {
        getUser().then(data => {
            setUserData(data)
            setUserAvatar(data?.avatar)
        })
        getAllTickets().then(setAllTickets)
    }, [])

    const deleteTicketProfile = (id) =>{
        setAllTickets((oldState) => oldState.filter(item => item.key !== id))
        deleteTicket(id)
    }

    if(!isNil(userData)){
        return(
            <Layout>
                <section className="container">
                    <div className="profile">
                        <div className="innerUserAvatar">
                            <div style={{position: 'relative'}}>
                                <img src={isNil(userAvatar) ? "/image/logoProfile.png" : userAvatar} alt="" className="avatarUser"/>
                                <input id='avatar' onChange={(e) => {
                                    putLogo({avatar: e.target?.files[0]})
                                    setUserAvatar(URL.createObjectURL(e.target?.files[0]))
                                }} className="fileAvatar" type="file"/>
                                <label className="labelAvatar" htmlFor="avatar" />
                            </div>
                            <h1 className="profileName">{userData.username}</h1>
                        </div>
                        <button onClick={() => deleteUser()} className="profileLogout">Logout</button>
                    </div>
                    <div className="slickInner">
                        {!isEmpty(allTickets) ?<SlickSlider deleteTicket={deleteTicketProfile} data={allTickets} Item={ProfileBoard} secondSettings={slickSettings}/> : <div className="innerEmptyTicket">
                            <div className="emptyText">
                                <h1 className="titleEmpty">У вас щє немає заброньованих фільмів</h1>
                                <p className="textEmpty">Пізніше тут з’являться фільми які ви забронювали</p>
                            </div>
                            <img className="emptyImage" src="/image/EmptyTicket.svg" alt=""/>
                        </div>}
                    </div>
                </section>
            </Layout>
        )
    }
        return null
}

export default Profile