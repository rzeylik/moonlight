import React from 'react'

import './styles.css'
import moment from "moment";
import {Link} from "react-router-dom";
import {formFilm} from "../../Router"



const Board = ({data}) => {
    const date = moment().format('DD.MM.YYYY')
    return(
        <Link to={formFilm(data?.id)} onClick={() => console.log(data?.id)}>
            <div className="upSlider">
                <div className="sliderItemText">
                    <p className="premiereSlickText">Прем’єра</p>
                    <p className="dateSlickTExt">Сьогодні <span>{date}</span></p>
                    <p className="nameSlickText">{data?.name}</p>
                    <p className="slickText">{data?.description}</p>
                </div>
                <img src={data?.large_image} alt="" className="sliderItemImage" />
            </div>
        </Link>
    )
}

export default Board
