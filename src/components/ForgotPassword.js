import { Component } from 'react'
import '../css/Login.css'

import { useLocation } from 'react-router-dom'
class Login extends Component { 
  state = {
  }

  componentDidMount () { 
    window.document.title = "Login"
  }

  render () {
    const { error } = this.props

    return <>
      <div className="login-container" align="center">
        <div className="login-container-child">
          <div>
            <div className="card">
              <div className="card-body">
                <form method="POST" action="http://localhost:8090/Login/wealthyLifeStyle">
                  <div className="overlay">
                    <div className="overlay-item">
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <img className="form-logo" src={process.env.PUBLIC_URL + '/assets/images/logo.jpg'} alt=  ""/>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold', fontSize: 20 }}>
                        Forgot Password
                      </span>
                    </div>

                    {
                      error &&

                      <div className="col-12">
                        <span className="error-validation">
                          { error }
                        </span>
                      </div>
                    }


                    <div className="col-12">
                      <input type="text" id="username" name="username" placeholder="Username" required/>
                    </div>

                    <div className="col-12">
                      <input type="text" id="regcode" name="regcode" placeholder="Regcode" required/>
                    </div>

                    <div className="col-12">
                      <input type="email" id="email" name="email" placeholder="Email" required/>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-success login-btn" id="btnLogin" name="btnLogin">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  }

  passwordHide = () => {
    const { isPassword } = this.state

    this.setState({ isPassword: !isPassword })
  }
}

export default Login