import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {isEmpty, isNil} from "lodash";

import routes from "../../routes";
import ModalSignIn from "../ModalSignIn";

import "./styles.css";
import {getFilmsAll} from "../../api/films";
import {formFilm} from "../../Router";

const Header = () => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  const loginUser = useSelector((state) => state?.user?.data)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [resultSearch, setResultSearch] = useState([])
  const {control} = useForm()

    return (
    <header className="header">
      <div className="container">
        <div className="headerFlex">
          <Link to={routes.home} className="logoInner">
            <img src="/image/logo.png" alt="Logo" className="logoImg" />
            <p className="headerText header_logo">MoonLight</p>
          </Link>
          <div className="headerItem">
            <div className="searchInner">
              <Controller name="search" control={control} render={({field}) =>
                    <div className="innerSearch">
                       <input autoComplete="off" className="searchInput" {...field} type="text" onBlur={() => setTimeout(() =>setResultSearch([]), 100)} onFocus={() => getFilmsAll().then(setResultSearch)} onChange={(e) => getFilmsAll({search: e?.target?.value}).then(setResultSearch)} />
                       <img src="/image/searchButtonOpen.png" alt="S" className="searchImg"/>
                      <div className='searchResult'>
                        {resultSearch.map(item => <Link onClick={() => getFilmsAll().then(setResultSearch)} className="searchResultItem" to={formFilm(item?.id)}>{item?.name}</Link>)}
                      </div>
                    </div>} />
            </div>
            <div onClick={() => {
              if (!isNil(loginUser) && !isEmpty(loginUser)) {
              history.push(routes.profile)
                window.location.reload()
              }else{
              handleShow()
              }
            }}>
              <img src="/image/logoProfile.png" alt="Profile" className="logoProfile"/>
            </div>
          </div>
        </div>
      </div>
      <ModalSignIn show={show} handleClose={handleClose}  />
    </header>
  );
}

export default Header;
