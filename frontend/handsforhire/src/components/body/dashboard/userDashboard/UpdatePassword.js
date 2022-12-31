import axios from "axios";
import { Component } from "react";
import { toast } from 'react-toastify'


export default class UpdatePassword extends Component {

    state = {
        old_password: '',
        password: '',
        password2: '',

    }

    UpdatePassword = (e) => {
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }



        const data = new FormData()

        data.append('old_password', this.state.old_password)
        data.append('password', this.state.password)
        data.append('password2', this.state.password2)


        console.log('password', this.state.old_password + this.state.password + this.state.password2)

        if (this.state.old_password === '' || this.state.password === '' || this.state.password2 === '') {
            toast('Please fill all the required fields')
            return
        }

        if (this.state.password !== this.state.password2) {
            toast("Passwords don't match")
            return
        }

        axios.put('http://localhost:8000/api/change_password/' + localStorage.getItem('user') + '/', data, { headers: headers })
            .then((response) => {
                if (response.data['old_password']) {
                    toast('The old password is not matching')

                    this.setState({
                        old_password: ''
                    })

                    return
                }

                toast('Password successfully updated')

                this.setState({
                    old_password: '',
                    password: '',
                    password2: ''
                })
            })

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearFields = (e) => {
        e.preventDefault()


        this.setState({
            old_password: '',
            password: '',
            passowrd2: ''
        })
    }


    render() {
        if (localStorage.getItem('is_client') || localStorage.getItem('is_professional')) {
            return (
                <div>
                    <div className="profile ">

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
                                <div className="col mt-3">
                                    <div className="row">
                                        <div className="col mb-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="e-profile">
                                                        <div className="row">
                                                            <h3 className="text-center">Update password</h3>
                                                        </div>
                                                        <div className="tab-content pt-3">
                                                            <div className="tab-pane active">
                                                                <form className="form">
                                                                    <div className="row">
                                                                        <div className="col">



                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <div className="form-group mb-2">
                                                                                        <label>Current Password</label>
                                                                                        <input className="form-control" name="old_password" type="password" value={this.state.old_password} onChange={this.handleChange} required />
                                                                                    </div>
                                                                                    <div className="form-group mb-2">
                                                                                        <label>New Password</label>
                                                                                        <input className="form-control" name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                                                                                    </div>
                                                                                    <div className="form-group mb-2">
                                                                                        <label>Confirm New Password</label>
                                                                                        <input className="form-control" name="password2" type="password" value={this.state.password2} onChange={this.handleChange} required />
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                    <div className="row justify-content-end">
                                                                        <div className="w-auto p-0">
                                                                            <button className="btn btn-danger" type="submit" >Clear</button>
                                                                        </div>
                                                                        <div className="w-auto">
                                                                            <button className="btn btn-primary" type="submit" onClick={this.UpdatePassword}>Save Changes</button>
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
                </div>
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