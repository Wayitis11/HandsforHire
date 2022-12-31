import { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
toast.configure();
export default class Login extends Component {

  state={
    username:'',
    password:''
  }

  handleSubmit = (event)=> {
    event.preventDefault()

    const data = new FormData()
    data.append('username', this.state.username)
    data.append('password', this.state.password)
    
  //  axios.post('http://localhost:8000/api/account/login/', data)
   axios.post('https://handsforhire.herokuapp.com/api/account/login/', data)
   
    .then(function (res){
    
        console.log(res)
        localStorage.setItem('token', res.data.access);
        
        
        if(res.data.is_client === true){
          localStorage.setItem('is_client', res.data.is_client)
          localStorage.setItem('user', res.data.user)
          localStorage.setItem('client', res.data.id)

          return window.location.href="/list-all-professionals"
        }

        else{
          localStorage.setItem('is_professional', res.data.is_professional)
          localStorage.setItem('user', res.data.user)
          localStorage.setItem('id', res.data.id)

          return window.location.href="/professional/dashboard/account"
        }
        

        


        

        

        
    }).catch(function (err){
        console.log(err)
        toast("Invalid username or password.")
    })
    
   
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


    render() {    
        return (           
<div className="container-fluid login" style={{ backgroundImage:'url(screw.jpg)'}}>
  <div className="row">
    <div className="col-lg-7" />
    <div className="col-lg-4 auth_login mt-4 p-5">
      <div className="card_design1">
        <div className="form_section m-0 mt-3">
          <div className="card">
            <div className="card-header text-center">
              <legend>Login</legend>
            </div>
            <div id="login" className="col-10 mx-auto p-3">
              <form className="mt-3">
                <div className="mb-3">
                  <div className="form-row">
                    <div className="form-holder">
                      <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" value={this.state.username}  onChange={this.onChange} required />
                      <i className="fa fa-user" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-row">
                    <div className="form-holder">
                      <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={this.state.password}  onChange={this.onChange} required />
                      <i className="fa fa-key" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary m-auto d-flex" id="btn_submit" onClick={this.handleSubmit} >Submit</button>
                <hr />
                <small className="d-flex justify-content-center">Don't have an account? </small>
                <div className="text-center">
                <a href="/client/register" style={{textDecoration:'none',}}> Client </a> /
                <a href="/professionals/register" style={{textDecoration:'none'}}> Professional </a>
                </div>
                <div className="text-center">
                
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        )
    }
}