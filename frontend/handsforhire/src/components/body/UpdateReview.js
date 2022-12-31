import { TextField, Button } from "@material-ui/core";
import axios from "axios";

import { Component } from "react";


export default class UpdateReview extends Component {
    state = {
        id: this.props.match.params.id,

        comment: '',
        stars: 0,

        review: '',
    }


    getReviewByID = (e) => {

        

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const data = new FormData()
            data.append('comment', this.state.comment)


        axios.get('https://handsforhire.herokuapp.com/api/review/' + this.state.id,  { headers: headers })
            .then((response) => {
              console.log(response)
              
                this.setState({
                    comment: response.data[0].comment,
                    stars: response.data.stars,
                
                    review: response.data[0].comment
                  })

                  console.log(response.data[0].comment)
               
                console.log(this.state.data.comment)
            })
            .catch((err) => {
                console.log(err.response)
            })
            //console.log(' hh ',this.state.review[0].comment)
    }

    updateReview = (e) => {
        e.preventDefault()

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        var rate = document.querySelector('input[name="stars"]:checked').value

        console.log(rate)

        const data = new FormData()

        data.append('comment', this.state.comment)
        data.append('stars', rate)

        axios.patch('https://handsforhire.herokuapp.com/api/review/' + this.state.id + '/update/', data, {headers : headers})
        .then((response)=>{
            console.log('updated')

        })
        .catch((err)=>{
            console.log(err.response)
        })
    }


    componentDidMount() {
        this.getReviewByID()
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    
      }
     
    
    render() {
        return (
            <div className="container card_design">
                 <div className=" w-auto m-5 card p-3" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 9px 0px", border:'none'}}>
                
                    <div className="rate w-auto mx-auto text-center">
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
                  
                <TextField type="text" style={{padding:'5px'}} label="Edit your comment" variant="outlined" name="comment" value={this.state.comment} onChange={this.handleChange}  ></TextField>
                
                
                <Button type="submit" className="w-auto mx-auto" variant="contained" color="primary" onClick={this.updateReview}>Update</Button>
                </div>
                
            </div>
        )
    }
}