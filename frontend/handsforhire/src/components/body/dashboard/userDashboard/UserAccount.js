import axios from "axios";
import { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Input } from '@material-ui/core'

const user = localStorage.getItem('user')

export default class UserAccount extends Component {

  state = {
    client: [],
    client2: [],

    first_name: '',
    last_name: '',
    phone_number: '',
    profilePicture: '',
    username: this.props.match.params.username,

  }

  componentDidMount() {
    axios.get('https://handsforhire.herokuapp.com/api/account/' + localStorage.getItem('user'))
      .then((response) => {
        console.log('professional data', response.data)

        this.setState({

          client: response.data.client,
          client2: response.data,

          first_name: response.data.client.first_name,
          last_name: response.data.client.last_name,
          phone_number: response.data.client.phone_number
        })
      })
      .then((response) => {

      })
      .catch((err) => {
        console.log(err.response)
      })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  uploadChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }

  updateProfile = (e) => {
    e.preventDefault()

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    const data = new FormData()

    data.append('first_name', this.state.first_name)
    data.append('last_name', this.state.last_name)
    data.append('phone_number', this.state.phone_number)
    data.append('profilePicture', this.state.profilePicture)

    axios.put('https://handsforhire.herokuapp.com/api/update-client/', data, {
      headers: headers
    })
      .then((response) => {
        console.log('done')
        toast("Profile updated successfully.")
        return window.location.href = "/user/account"
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  render() {
    if (localStorage.getItem('is_client')) {
      return (

        <form>
          <div className="profile ">
            <div className="profile-header">
              <div className="profile-header-cover" />
              <div className="profile-header-content">
                <div className="profile-header-img mx-auto">
                  <img src={"https://handsforhire.herokuapp.com" + this.state.client.profilePicture} alt />
                </div>
              </div>
            </div>
            <div className="profile-sidebar col-md-4 mx-auto text-center">
              <div className="desktop-sticky-top">
                <h4 className>{this.state.client.first_name} {this.state.client.last_name}</h4>

                <div className="mt-2">
                  <Input type="file" name="profilePicture" onChange={this.uploadChange}></Input>
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
                        <li className="nav-item"><a className="nav-link px-2 active" href={"/user/dashboard/" + localStorage.getItem('user')}><i className="fa fa-fw fa-bar-chart mr-1" /><span>Dashboard</span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="/user/dashboard/my/hirings"><i className="fa fa-fw fa-th mr-1" /><span>My Hirings</span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="/my-favorite"><i className="fa fa-fw fa-heart mr-1" /><span>Favorites</span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="/user/account"><i className="fa fa-fw fa-cog ollar mr-1" /><span>Account &amp; Settings</span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href={"/update/password"}><i className="fa fa-fw fa-cog mr-1" /><span>Security</span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="/delete-account"><i className="fa fa-fw fa-trash mr-1" /><span>Delete Account</span></a></li>
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
                                            <label>First Name</label>
                                            <input className="form-control" type="text" name="name" placeholder="John" value={this.state.client.first_name} disabled />
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="form-group">
                                            <label>Last Name</label>
                                            <input className="form-control" type="text" name="name" placeholder="Doe" value={this.state.client.last_name} disabled />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          <div className="form-group mb-2">
                                            <label>Username</label>
                                            <input className="form-control" type="text" name="username" placeholder="john.doe" value={this.state.client2.username} disabled />
                                          </div>
                                          <div className="form-group mb-2">
                                            <label>Email</label>
                                            <input className="form-control" type="text" name="phone_number" placeholder="user@example.com" value={this.state.client2.email} disabled />
                                          </div>
                                          <div className="form-group mb-2">
                                            <label>Phone number</label>
                                            <input className="form-control" type="text" placeholder="111111" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col mb-3">

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