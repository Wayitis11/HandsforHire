import 'popper.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import 'jquery'

import Navbar from './components/header/navbar';
import Body from './components/body/Body';
import Footer from './components/footer/footer';
import webSocketInstance from './websocket';

import { BrowserRouter } from 'react-router-dom';

import './style/main.css'
import './style/user.css'
import './style/forms.css'
import './style/login.css'
import './style/chat.css'
import './style/chatTemplate.css'

export default function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
        
      </div>
    </BrowserRouter>
  )
}

