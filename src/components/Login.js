import { Component } from 'react'
import '../css/Login.css'
class Login extends Component { 
  state = {
    isPassword: 'password'
  }

  componentDidMount () { 
    window.document.title = "Login"
  }


  handleSignUp(){
    window.location.replace('/Registration')
  }
  render () {
    const { isPassword } = this.state
    const { error } = this.props

    return <>
      <div className="login-container" align="center">
        <div className="login-container-child">
          <div>
            <div className="card login-card">
              <div className="card-body login-card-body">
                <form method="POST" action="https://secure.unified.ph/Login/wealthyLifeStyle">
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
                      <img className="form-logo" src={process.env.PUBLIC_URL + '/assets/images/wealthylogo.jpg'} alt=  ""/>
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

                    <div className="col-12 pass-input-container"> 
                      <input type={isPassword ? 'password' : 'text'} id="password" name="password" placeholder="Password" required/>

                      <div className="pass-icon" onClick={() => this.passwordHide()}>
                        <i className={isPassword ? 'fas fa-eye' : 'fas fa-eye-slash'} style={{ fontSize: 25 }}/>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-success login-btn" id="btnLogin" name="btnLogin">
                        LOGIN
                      </button>
                    </div>

                    <div style={{ flexDirection: 'row',alignItems: 'center'}}>
                      <div align="right" className="btn btn-list">
                      <a href='https://secure.unified.ph/registration/wealthylifestyle' style={{color: "green", fontWeight: "bold"}}> Create an account</a>
                      </div>

                      <span className="line-in-middle"></span>

                      <div align="right" className="btn btn-list">
                      <a href='https://secure.unified.ph/Login/wealthy_forgot_password' style={{color: "green", fontWeight: "bold"}}> Forgot password?</a>
                          
                      </div>

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