import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const user = localStorage.getItem('user')
export default class MyClients extends Component {

    state = {
        myClients: [],
        client: [],
        first_name: '',
        last_name: '',
        profilePicture: '',

    }

    getMyProfessionals = (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        axios.get('https://handsforhire.herokuapp.com/api/my-clients/' + localStorage.getItem('user'), { headers: headers })
            .then((response) => {
                console.log('my professionals', response.data)

                this.setState({
                    myClients: response.data
                })


            })
    }

    componentDidMount() {
        this.getMyProfessionals()
        this.getMyProfile()

    }
    getMyProfile = (e) => {
        axios.get('https://handsforhire.herokuapp.com/api/account/' + localStorage.getItem('user'))
            .then((response) => {

                console.log('pro', response.data)

                this.setState({

                    client: response.data.professional,

                    first_name: response.data.professional.first_name,
                    last_name: response.data.professional.last_name,

                })
            })
            .then((response) => {

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

                                {this.state.myClients.length === 0 ? (
                                    <div className="col mb-3">
                                        <p className="text-center"> You have no clients </p>
                                    </div>
                                ) : (
                                    <div className="col mt-3">
                                        <h6 className="text-center">My clients</h6>
                                        {this.state.myClients.map((h) => {
                                            return (
                                                <div className="col mb-3">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                </div>
                                                                <div className="col-md-4">
                                                                </div>

                                                                <hr />
                                                            </div>
                                                        </div>
                                                        <div className="container mb-3">
                                                            <div className="d-flex justify-content-center row">
                                                                <div className="col-md-12">
                                                                    <div className="row p-2 mb-2 bg-white border rounded">
                                                                        <div className="col-md-3 mt-1 "><img className="img-fluid img-responsive rounded product-image card_profile_picture" src={'https://handsforhire.herokuapp.com' + h.client.profilePicture} /></div>
                                                                        <div className="col-md-6 mt-1">
                                                                            <h5>{h.client.first_name} {h.client.last_name}</h5>
                                                                            <br></br>
                                                                            <h6>Phone number: {h.client.phone_number}</h6>
                                                                            <div className=" flex-row">

                                                                                <span className="m-auto">From <strong>{h.hire_start_date_time.split('T')[0]}</strong> </span>
                                                                                <span className="m-auto"> To <strong>{h.hire_end_date_time.split('T')[0]}</strong> </span>
                                                                            </div>

                                                                        </div>
                                                                        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                            <div className="d-flex flex-row align-items-center">

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}</div>
                                )}


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