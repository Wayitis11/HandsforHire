import { Component } from "react"

import { TextField, Button, InputLabel, NativeSelect, MenuItem, Select, FormControl, TextareaAutosize } from "@material-ui/core"

import 'bootstrap'

import axios from 'axios'

import {toast} from 'react-toastify'


export default class Contact extends Component {


  notify = () => toast('your message has been sent')

  invalid = () => toast('Please fill all the fields')

  state = {
    FullName: "",
    Email: "",
    Queries: "",
  }

  contact = (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append('FullName', this.state.FullName)
    data.append('Email', this.state.Email)
    data.append('Queries', this.state.Queries)
    

    
    if(this.state.FullName === ''|| 
    this.state.Email===''|| 
    this.state.Queries===''){
      this.invalid()
      return
    }



    axios.post('https://handsforhire.herokuapp.com/api/contact/', data)
      .then(response => {
        console.log(response)
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
                      <TextField type="text" className="form-control" id="p_first_name" name="first_name" label="enter full name" required onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <TextField type="email" id="p_last_name" className="form-control" name="last_name" label="enter email" required onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                      <textarea type="text" id="p_username" className="form-control" placeholder="your queries...." name="email" label="Queries" required onChange={this.handleChange} />
                    </div>
                    
                    <Button type="submit" className="form-control mt-2" color="primary" variant="outlined" onClick={this.contact}>Submit</Button>
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