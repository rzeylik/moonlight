import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import routes from "../../routes";
import ModalSignIn from "../ModalSignIn";
import "./styles.css";
import {useSelector} from "react-redux";
import {isEmpty, isNil} from "lodash";

const Header = () => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  const loginUser = useSelector((state) => state?.user?.data)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  console.log(isNil(loginUser))

  return (
    <header className="header">
      <div className="container">
        <div className="headerFlex">
          <Link to={routes.home} className="logoInner">
            <img src="./image/logo.png" alt="Logo" className="logoImg" />
            <p className="headerText header_logo">MoonLight</p>
          </Link>
          <div className="headerItem">
            <div className="searchInner">
                <img src="./image/searchButtonOpen.png" alt="S" className="searchImg"/>
            </div>
            <div onClick={() => {
              if (!isNil(loginUser) && !isEmpty(loginUser)) {
              history.push(routes.profile)
              }else{
              handleShow()
              }
            }}>
              <img src="./image/logoProfile.png" alt="Profile" className="logoProfile"/>
            </div>
          </div>
        </div>
      </div>
      <ModalSignIn show={show} handleClose={handleClose}  />
    </header>
  );
}

export default Header;
