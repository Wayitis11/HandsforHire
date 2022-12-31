import { Component } from "react";
import Chat from "../../Chat";
import axios from "axios";
import { Input } from '@material-ui/core'
export default class UserDashboard extends Component {
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
  render() {
    if (localStorage.getItem('is_client')){
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
                        <div className="row">
                          <div className="col-md-4 p-1 text-center">
                            <h6>Top Rated Professionals</h6></div>
                          <div className="col-md-4">
                          </div>
                          <div className="col-md-4 p-1 text-center">
                            <h6>Browse all Professionals</h6></div>
                          <hr />
                        </div>
                      </div>
                      <div className="container mb-3">
                        <div className="d-flex justify-content-center row">
                          <div className="col-md-12">
                            <div className="row p-2 mb-2 bg-white border rounded">
                              <div className="col-md-3 mt-1 "><img className="img-fluid img-responsive rounded product-image card_profile_picture" src="../../images/jhon.png" /></div>
                              <div className="col-md-6 mt-1">
                                <h5>John Doe</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <div className="rate w-auto p-0">
                                      <input type="radio" id="star5" name="rate" defaultValue={5} />
                                      <label htmlFor="star5" title="text">5 stars</label>
                                      <input type="radio" id="star4" name="rate" defaultValue={4} />
                                      <label htmlFor="star4" title="text">4 stars</label>
                                      <input type="radio" id="star3" name="rate" defaultValue={3} />
                                      <label htmlFor="star3" title="text">3 stars</label>
                                      <input type="radio" id="star2" name="rate" defaultValue={2} />
                                      <label htmlFor="star2" title="text">2 stars</label>
                                      <input type="radio" id="star1" name="rate" defaultValue={1} />
                                      <label htmlFor="star1" title="text">1 star</label>
                                    </div>
                                  </div>
                                  <span className="m-auto">(10 reviews)</span>
                                </div>
                                <p className="text-justify  para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br /><br /></p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h5 className="mr-1">NPR 1500/day</h5>
                                </div>
                                <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Hire</button><button className="btn btn-outline-success btn-sm mt-2" type="button">View Profile</button></div>
                              </div>
                            </div>
                            <div className="row p-2 mb-2 bg-white border rounded">
                              <div className="col-md-3 mt-1 "><img className="img-fluid img-responsive rounded product-image card_profile_picture" src="../../images/jhon.png" /></div>
                              <div className="col-md-6 mt-1">
                                <h5>John Doe</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <div className="rate w-auto p-0">
                                      <input type="radio" id="star5" name="rate" defaultValue={5} />
                                      <label htmlFor="star5" title="text">5 stars</label>
                                      <input type="radio" id="star4" name="rate" defaultValue={4} />
                                      <label htmlFor="star4" title="text">4 stars</label>
                                      <input type="radio" id="star3" name="rate" defaultValue={3} />
                                      <label htmlFor="star3" title="text">3 stars</label>
                                      <input type="radio" id="star2" name="rate" defaultValue={2} />
                                      <label htmlFor="star2" title="text">2 stars</label>
                                      <input type="radio" id="star1" name="rate" defaultValue={1} />
                                      <label htmlFor="star1" title="text">1 star</label>
                                    </div>
                                  </div>
                                  <span className="m-auto">(10 reviews)</span>
                                </div>
                                <p className="text-justify  para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br /><br /></p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h5 className="mr-1">NPR 1500/day</h5>
                                </div>
                                <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Hire</button><button className="btn btn-outline-success btn-sm mt-2" type="button">View Profile</button></div>
                              </div>
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
                    <Chat />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      )
    }
    else{
      return(
        <div>
          <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg" margin='auto' />
        </div>
      )
    }
    
  }
}