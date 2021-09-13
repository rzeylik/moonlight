import React from 'react'

import { Link } from 'react-router-dom'
import routes from '../../routes'
import './styles.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <div className="container">
        <div className="headerFlex">
            <Link to={routes.home} className="logoInner">
                <img src="./image/logo.png" alt="Logo" className="logoImg"/>
                <p className="headerText header_logo">MoonLight</p>
          </Link>
          <div className="headerItem">
              <div className="searchInner">
                  <img src="./image/searchButtonOpen.png" alt="S" className="searchImg"/>
              </div>
              <img src="./image/logoProfile.png" alt="Profile" className="logoProfile"/>
          </div>
        </div>
          </div>
      </header>
    )
  }
}
export default Header
