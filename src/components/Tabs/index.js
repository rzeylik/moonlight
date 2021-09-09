import React, { useState } from 'react'

import AccordionMenu from '../Header/Accordion'
import classes from './styles.css'

function Tabs() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className="containerTabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Women
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Men
        </button>
      </div>
      <div className="contentNav">
        <div className="content-tabs">
          <div className={toggleState === 1 ? 'active-content' : 'content'}>
            <AccordionMenu />
          </div>

          <div className={toggleState === 2 ? 'active-content' : 'content'}>
            <AccordionMenu />
          </div>
        </div>
        <div className="menuWrap">
          <a className="menuIconNav">
            <img src="icons/profile.svg" alt="profile" />
          </a>
          <a className="menuIconNav">
            <img src="icons/heart.svg" alt="heart" />
          </a>
        </div>
        <hr className="hrLine" />
        <div className="menuWrap">
          <a href="#" className="menuIconNav">
            About Finsu
          </a>
          <a href="#" className="menuIconNav">
            Community
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tabs
