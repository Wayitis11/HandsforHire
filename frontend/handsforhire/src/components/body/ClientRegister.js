import { Component } from "react";

import {TextField, Button} from '@material-ui/core'
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap'

toast.configure();
export default class ClientRegister extends Component {
    invalid = () => toast('Please fill all the fields')
    state = {
        first_name:'',
        last_name:'',
        email: '',
        username: '',
        phone_number: '',
        password: '',
        password2:''
    }

    

    handleSubmit = (event)=> {
        event.preventDefault()

        const data = new FormData()
        data.append('email', this.state.email)
        data.append('username', this.state.username)
        data.append('password', this.state.password)
        data.append('password2', this.state.password2)
        data.append('first_name', this.state.first_name)
        data.append('last_name', this.state.last_name)
        data.append('phone_number', this.state.phone_number)
      
        
        axios.post('https://handsforhire.herokuapp.com/api/register-client/', data)
        .then(res=>{
            
            console.log(res)
            
           
            if(this.state.first_name === ''|| 
            this.state.last_name===''|| 
            this.state.email===''||
            this.state.username===''||
            this.state.password===''||
            this.state.password2==='' || this.state.phone_number === ''){
              this.invalid()
              return
            }
            else{


                if(res.data['email']){
                    toast('This email already exists')

                    this.setState({
                        email : ''
                    })

                    return
                }
                if(res.data['username']){
                    toast('This username already exists')

                    this.setState({
                        username: ''
                    })
                    return
                }
               
                localStorage.setItem('token', res.data.access);
                localStorage.setItem('user', res.config.data);
                
                toast('User created')
                window.location.href = '/login'
            }
        
           
        }).catch(function (err){
            console.log(err)
            toast("Invalid Credentials")
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      
    }
    render() {
        return (
            
            <div className="auth_login d-flex justify-content-center align-items-center p-5">
                <div className="col-md-5">
                <img className="img-fluid card-img m-1 signupimage" src="../images/user.png" />
                </div>
                <div className="card_design">
                    <div className="form_section m-0 mt-3">
                        <div className="card">
                            <div className="message" id="l_msg">
                            </div>
                            <div className="card-header">
                                <legend>Register</legend>
                            </div>
                            <div id="client_register" className="p-3">
                                <form id="c_form">
                                    <div className="mb-3">
                                        <TextField type="text" className="form-control" id="c_fname" name="first_name" label="First Name" value={this.state.first_name}  onChange={this.onChange} required  />
                                    </div>
                                    <div className="mb-3">
                                        <TextField type="text" className="form-control" id="c_lname" name="last_name" label="Last Name" value={this.state.las}  onChange={this.onChange} required  />
                                    </div>
                                    <div className="mb-3">
                                        <TextField type="email" className="form-control" id="c_email" name="email" label="Email address" value={this.state.email} onChange={this.onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <TextField type="text" className="form-control" id="c_username" name="username" label="Username" value={this.state.username} onChange={this.onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <TextField type="text" className="form-control" id="c_phone_number" name="phone_number" label="Phone Number" value={this.state.phone_number} onChange={this.onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <TextField type="password" className="form-control" id="c_password" name="password" label="Password" value={this.state.password} onChange={this.onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <TextField type="password" className="form-control" id="c_password2" name="password2" label="Confirm password" value={this.state.password2} onChange={this.onChange} required />
                                    </div>
                                    <Button type="submit" variant="contained" color="primary" id="c_btnSubmit" className="mt-2" onClick={this.handleSubmit} >Submit</Button>
                                    <hr />
                                    <small>Already have an account? <a href="/login"  style={{textDecoration:'none'}}>Login</a></small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}