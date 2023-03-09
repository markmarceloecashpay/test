import React, { Component } from 'react'

class Header extends Component { 
  render () {
    return <>
      <div>
        <div className="navbar sticky-top header d-none d-lg-block">
          <div className="container-fluid">
            <div className="d-flex">
              <span className="me-5 mt-1" onClick={() => window.location.replace('/')}>
                Home
              </span>

              {
                window.location.pathname === '/' &&
                <React.Fragment>
                  <span className="me-5 mt-1" onClick={() => this.scrollTo("getToKnowUs")}>
                    About Us
                  </span>

                  <span className="me-5 mt-1" onClick={() => this.scrollTo("featuredProducts")}>
                    Our Products
                  </span> 

                  <span className="me-5 mt-1" onClick={() => this.scrollTo("contact")}>
                    Contact
                  </span> 

                  <button type="button" className="btn btn-success custom-header-btn" onClick={() => this.goTo('Login')}>
                    Sign In
                  </button>
                </React.Fragment>
              }
            </div>
          </div>
        </div>

        <div className="d-lg-none sticky-top header">
          <i className="fas fa-bars" style={{ fontSize: 30 }} onClick={() => this.openNav()}/>

          <div id="mySidenav" className="sidenav">
            <span className="closebtn" onClick={() => this.closeNav()}>
              &times;
            </span>

            <span onClick={() => this.scrollTo("getToKnowUs")}>
              About Us
            </span>

            <span onClick={() => this.scrollTo("featuredProducts")}>
              Our Products
            </span>

            <span onClick={() => this.scrollTo("contact")}>
              Contact
            </span>

            <span onClick={() => this.goTo('Login')}>
              Sign In
            </span>
          </div>
        </div>
      </div>
    </>
  }

  goTo = (link) => {
    if (link === "Home") {
      window.location.replace('/')
    } else if (link === "Login") {
      window.location.replace('/Login')
    }
  }

  scrollTo = (id) => {
    this.closeNav()
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  }

  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px"
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0px"
  }
}

export default Header