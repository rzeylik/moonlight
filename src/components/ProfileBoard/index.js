import React from 'react'

import './styles.css'



const ProfileBoard = () => {
    return(
        <div className="profileSlick">
            <button className="profileFilmRemoveBtn"><img src="./image/removeFilmProfile.png" alt="" className="profileFilmRemove" /></button>
            <img src="./image/profileFilm.jpg" alt="" className="profileListFilm" />
            <div className="profileSlickItem">
                <div className="profileSlickSupItem">
                    <p className="profileSlickType">Назва фільму</p>
                    <p className="profileData">Мстители</p>
                </div>
                <div className="profileSlickSupItem">
                    <p className="profileSlickType">Місця</p>
                    <p className="profileData">1,2,3</p>
                </div>
                <div className="profileSlickSupItem">
                    <p className="profileSlickType">Дата</p>
                    <p className="profileData">10.09.21</p>
                </div>
                <div className="profileSlickSupItem">
                    <p className="profileSlickType">Ціна</p>
                    <p className="profileData">300</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileBoard