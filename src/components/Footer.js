import { Component } from 'react';

class Footer extends Component { 
  render () {
    return <>
      <div>
        <div className="footer-container">
          <div className="footer">
            <div className="row gx-5 gy-5">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="contact">
                <div className="mb-4">
                  <span className="title">
                    CONTACT
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label">
                    <i className="fas fa-map-marker-alt"/> &nbsp; 2nd Floor Victoria One, Quezon Avenue, Quezon City
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label">
                    <i className="fas fa-mobile-alt"/> &nbsp; 0917 329 0837
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label">
                    <i className="fas fa-phone-square-alt"/> &nbsp; 373 1215
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label">
                    <i className="fas fa-envelope"/> &nbsp; mail@upsglobal.net
                  </span>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="mb-4">
                  <span className="title">
                    OTHER LINKS
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label link" onClick={() => window.open('https://unified.ph/')}>
                    <i className="fas fa-link"/> &nbsp; Unified Products and Services
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label link" onClick={() => window.open('https://ecashpay.com/')}>
                    <i className="fas fa-link"/> &nbsp; Ecashpay
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label link" onClick={() => window.open('https://www.facebook.com/globalpinoytravel')}>
                    <i className="fab fa-facebook-square"/> &nbsp; Global Pinoy Travel and Tours
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label link" onClick={() => window.open('https://www.facebook.com/AccretioHoldingsIncOfficial')}>
                  <i className="fab fa-facebook-square"/> &nbsp; Accretio Holdings Inc.
                  </span>
                </div>

                <div className="mb-4">
                  <span className="content-label link" onClick={() => window.open('https://gocab.ph/')}>
                    <i className="fas fa-link"/> &nbsp; GoCab
                  </span>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="mb-4">
                  <span className="title">
                    MAP LOCATION
                  </span>
                </div>

                <div>
                  <img style={{ width: '100%', height: 250 }} className="vitamin-bottle-png" src={process.env.PUBLIC_URL + '/assets/images/MapLoc.png'} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  }
}

export default Footer