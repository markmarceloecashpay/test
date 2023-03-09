import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Container/>}/>

          <Route exact path='/Login' element={<Login/>}/>

          <Route exact path='/Login/error' element={<Login error={'Login failed, please try again.'}/>}/>

          {/* <Route path='/ForgotPassword' element={<ForgotPassword/>}/>

          <Route path='/ForgotPassword/error' element={<ForgotPassword error={'Forgot password failed, please try again.'}/>}/> */}

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>

      {
        window.location.pathname === '/' &&
        <Footer/>
      }
    </div>
  );
}

export default App;
