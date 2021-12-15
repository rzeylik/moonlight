import React from 'react'
import './styles.css'

class Footer extends React.Component {
  render() {
    return (
        <footer className="footer">
          <div className="container">
            <div className="footerInner">
              <p className="footerNameCompany">MoonLight team</p>
              <div className="footerNetworkCompany">
                <a href="#" className="footerSocial"><img  className="footerSocial" src="/image/socialInstagram.svg" alt=""/></a>
                <a href="#" className="footerSocial"><img  className="footerSocial" src="/image/socialInstagram.svg" alt=""/></a>
                <a href="#" className="footerSocial"><img  className="footerSocial" src="/image/socialInstagram.svg" alt=""/></a>
                <a href="#" className="footerSocial"><img  className="footerSocial" src="/image/socialInstagram.svg" alt=""/></a>
              </div>
            </div>
          </div>
        </footer>
    )
  }
}
export default Footer
