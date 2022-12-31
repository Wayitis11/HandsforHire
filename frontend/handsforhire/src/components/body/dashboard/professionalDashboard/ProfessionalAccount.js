import { Component } from "react";
import axios from "axios";
import { Input } from "@material-ui/core";
import { toast } from 'react-toastify'

export default class ProfessionalAccount extends Component {

  state = {
    professional: [],
    professional2: [],
    first_name: "",
    last_name: "",
    about_me: "",
    phone_number: "",
    charge_fee: 0,
    experience: 0,
    profession: "",
    profilePicture: "",
    username: this.props.match.params.username,

    config: {
      headers: { "authorization": `${localStorage.getItem('token')}` }
    }
  }

  token = ""


  componentDidMount() {

    axios.get('https://handsforhire.herokuapp.com/api/account/' + localStorage.getItem('user'))
      .then((response) => {
        console.log('professional data', response.data)

        this.setState({


          professional: response.data.professional,
          professional2: response.data,
          first_name: response.data.professional.first_name,
          last_name: response.data.professional.last_name,
          about_me: response.data.professional.about_me,
          phone_number: response.data.professional.phone_number,
          experience: response.data.professional.experience,
          charge_fee: response.data.professional.charge_fee,
          profession: response.data.professional.profession
        })

        console.log(this.state.first_name)
      })

      .catch((err) => {
        console.log(err.response)
      })

  }

  updateProfile = (e) => {
    e.preventDefault()


    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    const data = new FormData

    data.append('first_name', this.state.first_name)
    data.append('last_name', this.state.last_name)
    data.append('phone_number', this.state.phone_number)
    data.append('experience', this.state.experience)
    data.append('charge_fee', this.state.charge_fee)
    data.append('about_me', this.state.about_me)
    data.append('profilePicture', this.state.profilePicture)


    axios.put('https://handsforhire.herokuapp.com/api/update-professional/', data, {
      headers: headers
    })
      .then((response) => {
        console.log('done')


        window.location.reload()

        toast("Profile updated")

      })
      .catch((err) => {
        console.log("hi", err.response)
      })

  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  uploadFile = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }


  render() {

    if (localStorage.getItem('is_professional')) {
      return (

        <form>
          <div className="profile ">
            <div className="profile-header">
              <div className="profile-header-cover" />
              <div className="profile-header-content">
                <div className="profile-header-img mx-auto">
                  <img src={"https://handsforhire.herokuapp.com" + this.state.professional.profilePicture} alt />
                </div>
              </div>
            </div>
            <div className="profile-sidebar col-md-4 mx-auto text-center">
              <div className="desktop-sticky-top">
                <h4 className>{this.state.professional.first_name} {this.state.professional.last_name}</h4>
                <p>
                  {this.state.professional.profession}
                </p>
                <div className="mt-2">
                  <Input name="profilePicture" type="file" onChange={this.uploadFile}></Input>
                </div>
                <hr className="mt-4 mb-4" />
              </div>
            </div>
            <div className="container">
              <div className="row flex-lg-nowrap">
                <div className="col-12 col-lg-3 mb-3">
                  <div className="card p-3">
                    <div className="e-navlist e-navlist--active-bg">
                      <ul className="nav d-block">
                        <li className="nav-item"><a className="nav-link px-2" href="/my-clients"><i className="fa fa-fw fa-th mr-1" /><span>My clients</span></a></li>
                        <li className="nav-item"><a className="nav-link px-2 active" href="/professional/dashboard/account"><i className="fa fa-fw fa-cog ollar mr-1" /><span><span>Account &amp; Settings</span></span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="/update/password/professional"><i className="fa fa-fw fa-lock mr-1" /><span>Security</span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="/delete-account/professional"><i className="fa fa-fw fa-trash mr-1" /><span>Delete Account</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col mb-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="e-profile">
                            <div className="row">
                              <h3 className="text-center">Update my Profile</h3>
                            </div>
                            <div className="tab-content pt-3">
                              <div className="tab-pane active">
                                <form className="form" noValidate>
                                  <div className="row">
                                    <div className="col">
                                      <div className="row">
                                        <div className="col">
                                          <div className="form-group mb-2">
                                            <label>Username</label>
                                            <input className="form-control" type="text" name="username" name="username" value={this.state.professional2.username} placeholder="john.doe" disabled />
                                          </div>
                                          <div className="form-group mb-2">
                                            <label>Email</label>
                                            <input className="form-control" type="text" placeholder="user@example.com" name="email" value={this.state.professional2.email} disabled />
                                          </div>
                                          <div className="form-group mb-2">
                                            <label>Phone number</label>
                                            <input className="form-control" type="text" placeholder="xxxxxx" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                                          </div>
                                          <div className="form-group mb-2">
                                            <label>Experience (in years)</label>
                                            <input className="form-control" type="number" min={1} max={20} placeholder={1} name="experience" value={this.state.experience} onChange={this.handleChange} />
                                          </div>
                                          <div className="form-group mb-2">
                                            <label>Hire Amount Per Hour (in Rs.)</label>
                                            <input className="form-control" type="number" min={1} placeholder={1} max={100000000} name="charge_fee" defaultValue={0} value={this.state.charge_fee} onChange={this.handleChange} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col mb-3">
                                          <div className="form-group">
                                            <label>About</label>
                                            <textarea className="form-control" rows={5} placeholder="My Bio" name="about_me" defaultValue="" value={this.state.about_me} onChange={this.handleChange} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row justify-content-end">
                                    <div className="w-auto p-0">
                                      <button className="btn btn-danger" type="submit">Cancel</button>
                                    </div>
                                    <div className="w-auto">
                                      <button className="btn btn-primary" type="submit" onClick={this.updateProfile}>Update Profile</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                      <div className="card ">
                        <div className="card-body">
                          <h6 className="card-title font-weight-bold">Help and Support</h6>
                          <hr />
                          <ul className="dashboard-list p-0">
                            <li>
                              <a href="#">Contact our Team</a></li>
                            <li><a href="#">Give your feedback</a></li>
                            <li><a href="#">Payment Process</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

      )


    }

    else {
      return (
        <div>
          <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg" margin='auto' />
        </div>
      )
    }




  }
}