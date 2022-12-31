import { Component } from "react";
import axios from "axios";
import { Typography, Button } from '@material-ui/core';


import { Link } from 'react-router-dom'

export default class DeleteProfessionalAccount extends Component {
    state = {
        favoriteList: [],
        client: [],
        first_name: '',
        last_name: '',
        profilePicture: '',
    }
    getMyProfile = (e) => {
        axios.get('https://handsforhire.herokuapp.com/api/account/' + localStorage.getItem('user'))
            .then((response) => {

                this.setState({

                    client: response.data.client,

                    first_name: response.data.client.first_name,
                    last_name: response.data.client.last_name,

                })
            })
            .then((response) => {

            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    getMyList = (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        axios.get('https://handsforhire.herokuapp.com/api/get-all-favoriated-professionals/', { headers: headers })
            .then((response) => {
                console.log('list', response.data)

                this.setState({
                    favoriteList: response.data
                })
            })
    }
    deleteFavorite = (id) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        axios.delete('https://handsforhire.herokuapp.com/api/delete-favoriate/' + id, { headers: headers })
            .then((response) => {
                console.log('deleted')
                window.location.reload()
            })

    }

    componentDidMount() {
        this.getMyProfile()
        this.getMyList()
    }

    deleteAccount = (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }


        axios.delete('https://handsforhire.herokuapp.com/api/account-delete/' + localStorage.getItem('user'), { headers: headers })
            .then((response) => {
                window.location.href = '/logout'
            })
            .catch((err) => {
                console.log(err.response)
            })
    }



    render() {
        return (

            <div className="profile">
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
                            <button className="btn btn-primary" type="button">
                                <i className="fa fa-fw fa-camera" />
                                <span>Change Photo</span>
                            </button>
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

                                <div className="col">
                                    <Typography style={{
                                        "position": "relative"
                                        , "top": "30%", "fontWeight": "bold"
                                    }}>By click on delete button, you will permanently removing all your data, including hiring and favorite</Typography>
                                    <Button variant="contained" style={{
                                        "backgroundColor": "#C71626", "color": "#fff", "position": "relative"
                                        , "top": "50%", "left": "35%"
                                    }} className="btn btn-danger button" onClick={this.deleteAccount} >Delete account</Button>
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

        )
    }
}