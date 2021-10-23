import React from 'react'

import './styles.css'



const Board = () => {
    return(
        <div className="upSlider">
            <div className="sliderItemText">
                <p className="premiereSlickText">Прем’єра</p>
                <p className="dateSlickTExt">Сьогодні <span>03.09</span></p>
                <p className="nameSlickText">Месники</p>
                <p className="slickText">My lorem IzxcasdasdPSUM</p>
            </div>
            <img src="./image/film.jpg" alt="" className="sliderItemImage"></img>
        </div>
    )
}

export default Board
