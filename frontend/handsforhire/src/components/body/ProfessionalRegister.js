import { Component } from "react"

import { TextField, Button, InputLabel, NativeSelect, MenuItem, Select, FormControl } from "@material-ui/core"

import 'bootstrap'

import axios from 'axios'

import {toast} from 'react-toastify'


export default class ProfessionalRegister extends Component {


  notify = () => toast('Successfully registered')

  invalid = () => toast('Please fill all the fields')

  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    profession: "",
    about_me: "",
    password: "",
    password2: "",
    charge_fee: ""
  }

  registerProfessional = (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append('first_name', this.state.first_name)
    data.append('last_name', this.state.last_name)
    data.append('email', this.state.email)
    data.append('username', this.state.username)
    data.append('profession', this.state.profession)
    data.append('about_me', this.state.about_me)
    data.append('password', this.state.password)
    data.append('password2', this.state.password2)
    data.append('charge_fee', this.state.charge_fee)


    
    if(this.state.first_name === ''|| 
    this.state.last_name===''|| 
    this.state.email===''||
    this.state.username===''||
    this.state.profession===''||
    this.state.about_me===''||
    this.state.password==='' ||
    this.state.charge_fee===''){
      this.invalid()
      return
    }



    axios.post('https://handsforhire.herokuapp.com/api/register-professionals/', data)
      .then(response => {

        console.log('register data', data)

        console.log(response)



        if(response.data['email']){
          toast('This email already exists')

          this.setState({
              email : ''
          })

          return
      }
      if(response.data['username']){
          toast('This username already exists')

          this.setState({
              username: ''
          })
          return
      }

        
          this.notify().then(() => {
            window.location.href = '/login'
          })
        
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <div className="professionals_signup">

        <div className="col-md-5">
          <img className="img-fluid card-img m-1 signupimage" src="../images/e.jpg" />
        </div>
        <div className="col-md-5 card_design">

          <div className="form_section p-0 mt-3 mb-1">
            <div className="card">
              <div className="card-header">
                <legend className="text-center">Professional Register</legend>
                <div id="professional_register">
                  <form id="p_form">
                    <div className="mb-3">
                      <TextField type="text" className="form-control" id="p_first_name" name="first_name" label="enter first name" required onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <TextField type="email" id="p_last_name" className="form-control" name="last_name" label="enter email last name" required onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <TextField type="text" id="p_username" className="form-control" name="email" label="enter email address" required onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <TextField type="text" id="p_email" className="form-control" name="username" label="enter username" required onChange={this.handleChange} />
                    </div>
                   <div className="mb-3">
                   <FormControl className="col-lg-12 position-relative d-flex" id="drpProfession">
                                <InputLabel id="demo-controlled-open-select-label">Select a Profession</InputLabel>
                                <Select labelId="label" id="select" value={this.value} name="profession" onChange={this.handleChange}>
                      <MenuItem value="Electrician">Electrician</MenuItem>
                      <MenuItem value="Plumber">Plumber</MenuItem>
                    </Select>
                            </FormControl>
                    </div>
                    
                    <div className="mb-3">
                      <TextField className="form-control " id="p_about_me" name="about_me" label="About yourself" required defaultValue={""} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <TextField className="form-control " id="charge_fee" name="charge_fee" label="Quote your price" required defaultValue={""} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <TextField type="password" className="form-control" id="password" name="password"  label="Password" autoComplete="new-password" required onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <TextField type="password" className="form-control" id="password2" name="password2" label="Confirm password" required onChange={this.handleChange} />
                    </div>
                    <Button type="submit" className="form-control mt-2" color="primary" variant="outlined" onClick={this.registerProfessional}>Submit</Button>
                    <hr />
                    <small>Already have an account? <a href="/login" style={{textDecoration:'none'}}>Login</a></small>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}