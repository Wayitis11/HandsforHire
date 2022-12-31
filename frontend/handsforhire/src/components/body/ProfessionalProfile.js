import { Button, TextField, Fab } from "@material-ui/core";
import { RoomIcon } from '@material-ui/icons'
import { typography } from "@material-ui/system";
import axios from "axios";
import { Component } from "react";
import { toast } from 'react-toastify'
import DateTime from './DateTimePicker'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';



 

export default class ProfessionalProfile extends Component {

  state = {
    professional: [],
    professional2: [],
    username: this.props.match.params.username,

    client: 3,
    id: "",
    hire_start_date_time: "",
    hire_end_date_time: "",

    clients: [],

    stars: '',
    comment: '',
    professionalID: 3,

    otherReviews: [],

    reviews: [],
    myReviews: [],
    latest: '',

    favoriteData: [],
    favoriteID: 0,
    avgRating : [],
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
  }
  container = {
    display: 'inline',
    flexWrap: 'wrap',
  }

  


  getAverageRating = () => {

    console.log('hello world')

    // axios.get('http://localhost:8000/api/average-ratings/' + this.state.username + '/')
    axios.get('https://handsforhire.herokuapp.com/api/average-ratings/' + this.state.username + '/')
    .then((response)=>{
      console.log("gfghdgfhjhgfjbhvhm",response.data)

      this.setState({
        avgRating : response.data
      })
    }) 
    
  }




  getProfessionalsHired = (e) => {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    axios.get('https://handsforhire.herokuapp.com/api/my-clients/' + this.state.username, { headers: headers })
      .then((response) => {

        this.setState({
          clients: response.avgRating


        })
        console.log('hired by', this.state.clients)

      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  getFavoriteProfessional = (e) => {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    axios.get('https://handsforhire.herokuapp.com/api/get-one-favorite/' + localStorage.getItem('client') + '/' + this.state.professionalID + '/', this.state.config)
      .then((response) => {
        this.setState({
          favoriteData: response.data,


        })

        console.log('favourite', this.state.favoriteData)


      })
  }

  deleteFavoriteProfessional = (e) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    console.log('delete')

    axios.delete('https://handsforhire.herokuapp.com/api/delete-favoriate/' + this.state.favoriteData[0].id + '/', { headers: headers })
      .then((response) => {
        toast('Removed professional from your favorite list')
        this.setState({
          favoriteData: []
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  favoriteProfessional = (e) => {


    if (this.state.favoriteData.length > 0) {
      toast('This professional has already been added to your favorite list')
      return
    }


    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    console.log(headers)

    axios.post('https://handsforhire.herokuapp.com/api/add-to-favorite/' + this.state.username + '/', { client: localStorage.getItem('client') }, { headers: headers })
      .then((response) => {
        toast('Professional added to favorite list')
        
        window.location.href='/my-favorite'
      })
      .catch((err) => {
        toast(err.response)
      })
  }


  componentDidMount() {



    axios.get('https://handsforhire.herokuapp.com/api/otherReviews/' + this.state.username + '/' + localStorage.getItem('user') + '/')
      // .then((response) => response.json())
      .then((response) => {
        console.log('other reviews', response.data)


        this.setState({
          reviews: response.data,
        })

        

      })
      .catch((err) => {
        console.log(err.response)
      })

    axios.get('https://handsforhire.herokuapp.com/api/myReviews/' + this.state.username + '/' + localStorage.getItem('user') + '/')
      // .then((response) => response.json())
      .then((response) => {
        console.log('my reviewssssss', response.data)


        this.setState({
          myReviews: response.data,
        })

        

        console.log('hardik ', this.state.myReviews)

      })
      .catch((err) => {
        console.log(err.response)
      })


     


    axios.get('https://handsforhire.herokuapp.com/api/account/' + this.state.username)
      .then((response) => {
        console.log('professional data', response.data)

        this.setState({


          professional: response.data.professional,
          professional2: response.data,
          professionalID: response.data.professional.id,

          client: localStorage.getItem('client')
        })
      })
      .then((response) => {
        console.log("https://handsforhire.herokuapp.com/" + this.state.professional2.profilePicture)

        console.log('client', this.state.client)
      })
      .catch((err) => {
        console.log(err.response)
      })


    this.getProfessionalsHired()
    // this.getOtherReviews()

    this.getFavoriteProfessional()

    this.getAverageRating()

  }

  hireProfessional = (e) => {
    e.preventDefault()
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    if (this.state.clients.length > 0) {
      toast('The professional has already been hired')
      return
    }

    if (this.state.hire_start_date_time.trim() === '' || this.state.hire_end_date_time.trim() === '') {
      toast('Please enter the dates')
    }

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Hire a Professional</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <DateTime />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Hire</button>
                  </div>
                </div>
              </div>
            </div>


    axios.post('https://handsforhire.herokuapp.com/api/hire-professional/' + this.state.username + "/", {
      client: localStorage.getItem('client'),
      hire_start_date_time: this.state.hire_start_date_time,
      hire_end_date_time: this.state.hire_end_date_time
    }, { headers: headers })
      .then((response) => {
        console.log(response);
        console.log('hired')
        toast('The professional has been successfully hired')

        window.location.href = '/user/dashboard/my/hirings'
        
      })
      .catch((err) => {
        console.log(err.response)
      })

  }


  reviewProfessional = (e) => {

    e.preventDefault()

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    var rate = document.querySelector('input[name="stars"]:checked').value

    const data = new FormData()

    data.append('stars', rate)
    data.append('comment', this.state.comment)

    axios.post('https://handsforhire.herokuapp.com/api/review-for-professional/' + this.state.username + "/", data, { headers: headers })
      .then((response) => {
        console.log('reviewed')
        window.location.reload()
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  }


  updateReview = (e, id) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    const data = new FormData()



    data.append('comment', this.state.comment)




    axios.patch('https://handsforhire.herokuapp.com/api/review/11/update/', data, { headers: headers })
      .then((response) => {
        console.log('updated')
      })
      .catch((err) => {
        console.log(err.response)
      })
  }


  render() {

    if(localStorage.getItem('is_client')){
      return (

        <form>
  
          <div className="container-fluid p-5">
            <div className="row g-3">
              <div className="col-md-4 ">
                <div className="card profProfile">
                  <img className="card-img-top card_profile_picture m-auto pt-3" src={"https://handsforhire.herokuapp.com" + this.state.professional.profilePicture} alt="Card image cap" style={{ width: '16rem' }} />
                  <div className="card-body">
                    <h3 className="card-title text-center">{this.state.professional.first_name} {this.state.professional.last_name}</h3>
                    <h3 className="card-title text-center">{this.state.professional2.email}</h3>
                    <h5 className="card-title text-center">{this.state.professional.profession}</h5>
  
                    <div className="card-text text-center">
                      <p> 
                        {/* <a href="#" className="btn btn-primary button">Message Now</a> */}
                        <Button type="button" class="btn btn-success button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnHireModal">
                          Hire Now
                        </Button>
                        <a href="#" className="btn btn-danger button">Report</a></p>
                      <Fab aria-label="like" onClick={this.favoriteProfessional} >
                        <FavoriteIcon />
                      </Fab>
                    </div>
                    <hr />
                    <h5 className="text-center">Charge per hour | NPR {this.state.professional.charge_fee}</h5>
                  </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Hire a Professional</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <div className="d-inline-flex">
                          <form noValidate>
  
                            <TextField style={{ width: '210px', marginInline: '10px' }}
                              name="hire_start_date_time"
                              id="datetime-local"
                              label="Start Date"
                              onChange={this.handleChange}
                              value={this.state.hire_start_date_time}
                              type="datetime-local"
                              defaultValue={Date.now() + 1}
                              value={this.state.hire_start_date_time}
                              inputProps={{
                                min: new Date().toISOString().slice(0, 16),
                              }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </form>
                          <form noValidate>
                            <TextField style={{ width: '210px', }}
                              name="hire_end_date_time"
                              id="datetime-local"
                              label="End Date"
                              type="datetime-local"
                              value={this.state.hire_end_date_time}
                              defaultValue={Date.now()}
                              onChange={this.handleChange}
                              value={this.state.hire_end_date_time}
                              inputProps={{
                                min: new Date().toISOString().slice(0, 16),
                              }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </form>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.hireProfessional} id="hireBtn">Hire</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 profAbout">
                <div className="p-3"> <h4>About Me</h4>
                  <h5>Pipe Fitting | Installation</h5>
                  <p>Years of training and/or experience are needed to become a skilled plumber; <br />some jurisdictions also require that plumbers be l.</p>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="card-text">
                        <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                        <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                        <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="p-3"> <h4>Expertise</h4>
                  <h5>Pipe Fitting | Installation</h5>
                  <p>Years of training and/or experience are needed to become a skilled plumber; <br />some jurisdictions also require that plumbers be l.</p>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="card-text">
                        <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                        <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                        <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="p-3"> <h4>Reviews  ({this.state.avgRating.avg_ratings} <StarIcon></StarIcon>) </h4>
  
  
                  {this.state.myReviews.length === 0 ? (
                    <div className="row mt-2">
                      <div className="w-auto card_profile_picture ">
                        <img src="../images/jhon.png" className="img-fluid card-img mt-2 cmtimg" alt="..." />
                      </div>
                      <div className="col-md-10">
                        <div className="form-group mt-2">
                          <textarea maxLength={1000} className="form-control ht-140" placeholder="Add a comment..." spellCheck="false" value={this.state.comment} onChange={this.handleChange} defaultValue={""} name="comment" />
                          <div className="row m-auto ">
                            <div className="col-md-8 rate w-auto mx-auto">
                              <input type="radio" id="star5" name="stars" defaultValue={5} onChange={this.handleChange} value={5} />
                              <label htmlFor="star5" title="text">5 stars</label>
                              <input type="radio" id="star4" name="stars" defaultValue={4} onChange={this.handleChange} value={4} />
                              <label htmlFor="star4" title="text">4 stars</label>
                              <input type="radio" id="star3" name="stars" defaultValue={3} onChange={this.handleChange} value={3} />
                              <label htmlFor="star3" title="text">3 stars</label>
                              <input type="radio" id="star2" name="stars" defaultValue={2} onChange={this.handleChange} value={2} />
                              <label htmlFor="star2" title="text">2 stars</label>
                              <input type="radio" id="star1" name="stars" defaultValue={1} onChange={this.handleChange} value={1} />
                              <label htmlFor="star1" title="text" >1 star</label>
                            </div>
                          </div>
                          <div className="mt-1 float-end" style={{ fontSize: 13 }}>
                            <span>0</span><span className="text-primary font-weight-bold">/1000</span>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3"><div class="form-group"><button type="submit" class="btn btn-primary btn-sm  hover-effect btn-curve" onClick={this.reviewProfessional}>Comment</button></div></div>
                      </div>
                    </div>
                  ) : (
                    <div className="row mt-2">
                      <h4>My review</h4>
                      {this.state.myReviews.map((c) => {
                        return (
                          <div className="row mt-2">
                            <div className="w-auto card_profile_picture ">
                              <img src={"https://handsforhire.herokuapp.com" + c.client.profilePicture} className="img-fluid card-img mt-2 cmtimg" alt="..." />
                            </div>
                            <div className="col-md-10">
                              <div className="mt-2">
                                <h5>{c.client.first_name}  {c.client.last_name}  ({c.stars} <StarIcon/>)  </h5>
                               
                                <p>{c.comment}</p>
                                <Link to={'/review/' + c.id}>
                                  <Button type="button" class="btn btn-success button" >
  
                                    Edit
                                  </Button>
                                </Link>
  
                              </div>
                            </div>
  
  
  
  
                          </div>
  
                        )
                      })}
  
                    </div>
  
  
  
  
                  )}
            
                  <h4>Other reviews</h4>
                  {this.state.reviews.map((c) => {
                    return (
                      <div className="row mt-2">
                        <div className="w-auto card_profile_picture ">
                          <img src={'https://handsforhire.herokuapp.com' + c.client.profilePicture} className="img-fluid card-img mt-2 cmtimg" alt="..." />
                        </div>
                        <div className="col-md-10">
                          <div className="mt-2">
                            <p>{c.client.first_name} {c.client.last_name} ({c.stars} <StarIcon />)  </p>
                            <p>{c.comment}</p>
  
  
                          </div>
                        </div>
                      </div>
                    )
  
                  })}
  
  
                </div>
              </div>
            </div>
          </div>
        </form>
  
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