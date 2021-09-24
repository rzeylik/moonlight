import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import ModalSignIn from "../ModalSignIn";
import "./styles.css";

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
            <Link to={'/profile'}>
              <img src="./image/logoProfile.png" alt="Profile" className="logoProfile"/>
            </Link>
          </div>
        </div>
      </div>
      <ModalSignIn show={show} handleClose={handleClose}  />
    </header>
  );
}

export default Header;
