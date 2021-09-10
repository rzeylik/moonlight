import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <div className="layoutWrap">
      <Header />
      <div className="layoutWrap">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
