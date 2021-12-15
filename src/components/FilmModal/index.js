import React from "react"
import {Modal} from "react-bootstrap"

import './styles.css'
import {Link} from "react-router-dom";
import routes from "../../routes";

const FilmModal = ({openFilmModal, setOpenFilmModal, dataTime = []}) => {

    const Films = ({smallImage}) =>{
        return  <div className='col-6 col-lg-3'><div style={{margin: 10}}><Link to={routes.profile}><img src={smallImage} alt="" className="filmModalImg"/></Link></div></div>
    }
    return  <Modal className='filmModal' centered size="xl" show={openFilmModal} onHide={() => setOpenFilmModal(false)}>
        <button className='btnModalClose' onClick={() => setOpenFilmModal(false)}>x</button>
       <div className="innerModalFilms">
           {dataTime.map(item => <Films smallImage={item?.small_image} />)}
       </div>
    </Modal>
}

export default FilmModal