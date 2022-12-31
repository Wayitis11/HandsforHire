import axios from "axios";
import { Component } from "react";
import { TextField, Button } from "@material-ui/core";


export default class UpdateHire extends Component {

    state = {
        hire_start_date_time: '',
        hire_end_date_time: '',

        id: this.props.match.params.id
    }

    componentDidMount() {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        axios.get('https://handsforhire.herokuapp.com/api/getHire/' + this.state.id, { headers: headers })
            .then((response) => {

                this.setState({
                    hire_start_date_time: response.data.professional.hire_start_date_time,
                    hire_end_date_time: response.data.professional.hire_end_date_time
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    updateHireData = (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        const data = new FormData()

        data.append('hire_start_date_time', this.state.hire_start_date_time)
        data.append('hire_end_date_time', this.state.hire_end_date_time)

        axios.patch('https://handsforhire.herokuapp.com/api/hire-professional/' + this.state.id + '/update/', data, { headers: headers })
            .then((response) => {


                window.location.href = '/user/dashboard/my/hirings'
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        if (localStorage.getItem('is_client')){
            return (
                <div className="container card_design ">
                <div className="row w-auto m-5 card p-3" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 9px 0px", border:'none'}}>
                    <form noValidate>
                        <TextField 
                            disablePast
                            name="hire_start_date_time"
                            className="m-1 form-control"
                            id="datetime-local"
                            label="Start Date"
                            onChange={this.handleChange}
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
                        <TextField 
                            name="hire_end_date_time"
                            id="datetime-local"
                            className="m-1 form-control"
                            label="End Date"
                            onChange={this.handleChange}
                            type="datetime-local"
                            value={this.state.hire_end_date_time}
                            defaultValue={Date.now()}
                            inputProps={{
                                min: new Date().toISOString().slice(0, 16),
                              }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
    
                    <Button type="submit" className="w-auto mx-auto m-3" variant="contained" color="primary" onClick={this.updateHireData}>Update</Button>
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