import React, { Component } from "react"
import { Link } from 'react-router-dom'

const user=localStorage.getItem('user')
export default class Navbar extends Component {


    render() {
      if(localStorage.getItem('token' ) && localStorage.getItem('is_client')){
        var menu=
        <header className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/"> <img src="../../logoHFH.svg" alt="logoImg" /> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              
                <li className="nav-item">
                  <Link to={"/user/dashboard/"+ user}className="nav-link navigation active" aria-current="page">My Dashboard</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/list-all-professionals" className="nav-link navigation active"  aria-current="page" href=""> Browse Professionals</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link navigation active" aria-current="page" href>About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"className="nav-link navigation active" aria-current="page" href>Contact</Link>
                </li>


                <li className="nav-item">
                  <Link to="/logout" className="nav-link navigation active" aria-current="page" >Logout</Link>
                </li>

                
               
              </ul>
            </div>
          </div>
        </nav>
      </header>
     
      }

      else if(localStorage.getItem('token' ) && localStorage.getItem('is_professional')){
        var menu=
        <header className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/"> <img src="../logoHFH.svg" alt="logoImg" /> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              
              <li className="nav-item">
                  <Link to={"/user/dashboard/"+ user}className="nav-link navigation active" aria-current="page">My Dashboard</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/my-clients" className="nav-link navigation active"  aria-current="page" href=""> My Clients</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link navigation active" aria-current="page" href>About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"className="nav-link navigation active" aria-current="page" href>Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link navigation active" aria-current="page" >Logout</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </header>
     
      }


      else{
        var menu=
        <header className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/"> <img src="../logoHFH.svg" alt="logoImg" /> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              
                <li className="nav-item">
                  <Link to="/how-it-works" className="nav-link navigation active" aria-current="page">How It Works</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/professionals/register" className="nav-link navigation active"  aria-current="page" href="">Become a Professional</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link navigation active" aria-current="page" href>About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"className="nav-link navigation active" aria-current="page" href>Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/client/register" className="nav-link navigation active" aria-current="page" >Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link navigation active" aria-current="page">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      }
        return (    
           
 <div>{menu}</div>


        )
    }

}