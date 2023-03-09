import React, { Component } from 'react'
import Slider from 'react-slick';
import '../css/Container.css'
import Products from '../json/featured-products.json'
class Container extends Component { 
  state = {
    modalDetails: {}
  }

  render () { 
    var sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    }

    const { modalDetails } = this.state

    return <>
      <div>
        <div className="content-1 d-none d-lg-block">
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#002bdc88"></stop><stop offset="95%" stopColor="#32ded488"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 194.13333333333333,164.93333333333334 388.26666666666665,129.86666666666665 523,141 C 657.7333333333333,152.13333333333335 733.0666666666666,209.46666666666667 876,227 C 1018.9333333333334,244.53333333333333 1229.4666666666667,222.26666666666665 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#002bdcff"></stop><stop offset="95%" stopColor="#32ded4ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 173.86666666666667,362.79999999999995 347.73333333333335,325.59999999999997 510,334 C 672.2666666666667,342.40000000000003 822.9333333333334,396.4 976,415 C 1129.0666666666666,433.6 1284.5333333333333,416.8 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>

          <div className="centered">
            <div className="row gx-5" data-aos="fade-in">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" align="left">
                <div className="pt-5">
                  <div className="pb-4">
                    <span className="title">
                      WEALTHY LIFESTYLE <br/>
                      ALL-NATURAL PRODUCTS
                    </span>
                  </div>

                  <div>
                    <button type="button" className="btn btn-success custom-button">CONTACT US</button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <img className="vitamin-bottle-png" src={process.env.PUBLIC_URL + '/assets/images/ProductBanner.png'} alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="content-1 d-lg-none mb-5">
          <div data-aos="fade-in">
            <div>
              <img className="vitamin-bottle-png" src={process.env.PUBLIC_URL + '/assets/images/ProductBanner.png'} alt=""/>
            </div>

            <div className="pb-4">
              <span className="title">
                WEALTHY LIFESTYLE <br/>
                ALL-NATURAL PRODUCTS
              </span>
            </div>

            <div className="pb-5">
              <button type="button" className="btn btn-success custom-button">CONTACT US</button>
            </div>
          </div>
        </div>

        <div align="left" style={{ paddingBottom: 150 }} id="getToKnowUs">
          <div className="row gx-5 content-2">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="pb-3" align="center">
                <span className="title">
                  GET TO KNOW US
                </span>
              </div>

              <div className="d-flex justify-content-center row gx-5 gy-5">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                  <div className="card front-page-card">
                    <div className="card-body front-page-card-body">
                      <span className="content-label">
                        We envision to have a healthier society in which people may live longer, healthier and happier. In Wealthy Lifestyle, we strive to give you better choices for a better life. 
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                  <div className="card front-page-card">
                    <div className="card-body front-page-card-body">
                      <span className="content-label">
                        Wealthy Lifestyle is a new wellness brand and products of Unified Products and Services established in year 2021 with more than twenty (20) health and natural products good for everyone’s health and body. 
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                  <div className="card front-page-card">
                    <div className="card-body front-page-card-body">
                      <span className="content-label">
                        Wealthy Lifestyle are truly dedicated in providing the best products for our customers and suppliers. We believe that it is our mission to provide them the knowledge and information that will surely help them to improve their healthy living lifestyle. 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div align="left" style={{ paddingBottom: 200 }}>
          <div className="d-flex justify-content-center row gx-5 gy-5 content-2" align="center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div className="pb-3">
                <i className="fas fa-bullseye" style={{ fontSize: 70, color: '#4ca8de' }} />
              </div>

              <div className="pb-3">
                <span className="title">
                  OUR MISSION
                </span>
              </div>

              <div className="pb-3">
                <span className="content-label">
                  Our Mission is to provide only best and healthiest products that help people both physically and financially as we offer natural and quality products in most affordable way.
                </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div className="pb-3">
                <i className="fas fa-eye" style={{ fontSize: 70, color: '#4ca8de' }} />
              </div>

              <div className="pb-3">
                <span className="title">
                  OUR VISION
                </span>
              </div>

              <div className="pb-3">
                <span className="content-label">
                  Our Vision is to educate and empower people to take extra care with their health and lifestyle and know the importance of being physically fit and healthy. 
                </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div className="pb-3">
                <i className="fas fa-heart" style={{ fontSize: 70, color: '#4ca8de' }} />
              </div>

              <div className="pb-3">
                <span className="title">
                  OUR CORE VALUES
                </span>
              </div>

              <div className="pb-2">
                <span className="content-label">
                  TRUST, COMPASSION, EXCELLENCE, INTEGRITY, SENSE OF JOY
                </span>
              </div>
            </div>
          </div>
        </div>

        <div align="center" style={{ backgroundColor: '#4ca8de'}}>
          <div className="content-2" style={{ paddingTop: 50, paddingBottom: 50 }} id="featuredProducts">
            <div className="pb-5">
              <span className="title" style={{ color: 'white' }}>
                FEATURED PRODUCTS
              </span>
            </div>

            <Slider {...sliderSettings}>
              {
                Products && Products.map((data) => (
                  <React.Fragment key={data.title}>
                    <div className="d-flex justify-content-center">
                      <div className="card product-card">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/products/${data.title}.png` } alt="https://picsum.photos/200" style={{ height: 250 }}/>
                        
                        <div className="card-body" align="center">
                          <div className="pb-3">
                            <span style={{ fontWeight: 700, fontSize: 18 }}>
                              { data.title }
                            </span>
                          </div>

                          <div className="pb-3">
                            <span style={{ fontWeight: 500, fontSize: 15 }}>
                              { `₱ ${data.price}` }
                            </span>
                          </div>
                          
                          <div>
                            <button type="button" className="btn btn-success card-button" data-toggle="modal" data-target="#productModal" onClick={() => this.setState({ modalDetails: { title: data.title, desc: data.desc, price: data.price } })}>
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))
              }
            </Slider>
          </div>
        </div>

        <div className="modal fade" id="productModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body" align="center">
                <div className="pb-4">
                  <img src={ `${process.env.PUBLIC_URL}/assets/images/products/${modalDetails.title}.png` } alt="https://picsum.photos/200" style={{ height: 250 }}/>
                </div>

                <div className="modal-product-title pb-2">
                  <span>
                    { modalDetails.title }
                  </span>
                </div>
                
                <div className="modal-product-price pb-3">
                  <span>
                    { `₱ ${modalDetails.price}` }
                  </span>
                </div>

                <div className="modal-product-desc">
                  <span>
                    { modalDetails.desc }
                  </span>
                </div>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-primary modal-close-btn" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  }
}

export default Container