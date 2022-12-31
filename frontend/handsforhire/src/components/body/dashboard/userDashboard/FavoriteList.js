import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";

const user = localStorage.getItem('user')
export default class FavoriteList extends Component {
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
                        <p>
                            Principal UXUI Designer
                        </p>
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


                                {this.state.favoriteList.length === 0 ? (
                                    <div className="col mb-3">
                                        <p className="text-center"> You have not added any professional to your list yet </p>
                                    </div>
                                ) : (
                                    <div className="col">
                                        {this.state.favoriteList.map((h) => {
                                            return (
                                                <div className="col mb-3">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                </div>
                                                                <div className="col-md-4">
                                                                </div>
                                                                <h6 className="text-center">My Favorites</h6>
                                                                <hr />
                                                            </div>
                                                        </div>
                                                        <div className="container mb-3">
                                                            <div className="d-flex justify-content-center row">
                                                                <div className="col-md-12">
                                                                    <div className="row p-2 mb-2 bg-white border rounded">
                                                                        <div className="col-md-3 mt-1 "><img className="img-fluid img-responsive rounded product-image card_profile_picture" src={'https://handsforhire.herokuapp.com' + h.professional.profilePicture} /></div>
                                                                        <div className="col-md-6 mt-1">
                                                                            <h5>{h.professional.first_name} {h.professional.last_name}</h5>
                                                                            <div className=" flex-row">


                                                                            </div>
                                                                            <p className="text-justify  para mb-0">{h.professional.about_me}<br /><br /></p>
                                                                        </div>
                                                                        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                            <div className="d-flex flex-row align-items-center">
                                                                                <h5 className="mr-1">NPR {h.professional.charge_fee}/HR</h5>
                                                                            </div>
                                                                            <div className="d-flex flex-column mt-4"><button className="btn btn-danger btn-sm" type="button" onClick={this.deleteFavorite.bind(this, h.id)}>Remove</button>
                                                                                <Link to={'/professional/' + h.professional.user_id__usernane}><button className="btn btn-success btn-sm mt-2 w-100" type="button">View Profile</button></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

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