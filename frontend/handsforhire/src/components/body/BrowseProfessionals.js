import { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

import RefreshIcon from '@material-ui/icons/Refresh';
import { Typography, Slider, RadioGroup, Radio,
     FormControlLabel, FormControl, InputLabel, MenuItem, Select, Button} from "@material-ui/core";

  

export default class BrowseProfessionals extends Component {

    state = {
        professionals: [],
    }
    buttonStyle={
        marginRight:"5px",
        width:'120px',
        fontSize:'10px',
        textAlign:'center'

    }
    componentDidMount() {
        axios.get("https://handsforhire.herokuapp.com/api/list-all-professionals")
            .then((allProfessionals) => {
                console.log(allProfessionals)
                this.setState({
                    professionals: allProfessionals.data
                })



                console.log('print this', this.state.professionals);

                console.log('username', this.state.professionals.first_name)
            })



            .catch((err) => {
                console.log(err)
            })

        
    }




    searchByName = (e, fName) => {

        e.preventDefault()

        var first_name = document.getElementById('searchtxt').value
        var radPlumber = document.getElementsByName('radPlumber')
        var radElectrician = document.getElementsByName('radElectrician')

        radPlumber.checked = false
        radElectrician.checked = false

        console.log(first_name)

        if (first_name.trim() === '') {
            axios.get("https://handsforhire.herokuapp.com/api/list-all-professionals")
                .then((allProfessionals) => {
                    console.log(allProfessionals)
                    this.setState({
                        professionals: allProfessionals.data
                    })

                    console.log('print this', this.state.professionals);

                    console.log('username', this.state.professionals.first_name)
                })



                .catch((err) => {
                    console.log(err)
                })
        }

        else {
            axios.get('https://handsforhire.herokuapp.com/api/searchByName/' + first_name)
                .then((data) => {
                    console.log(data)

                    this.setState({
                        professionals: [],

                        professionals: data.data

                    })


                    if (this.state.professionals.length === 0) {
                        console.log('No data')
                    }





                    console.log('Hello world', this.state)
                })
        }

    }


    refreshSearch = (e) => {
        document.getElementById('searchtxt').value = ''



        axios.get("https://handsforhire.herokuapp.com/api/list-all-professionals")
            .then((allProfessionals) => {
                console.log(allProfessionals)
                this.setState({
                    professionals: allProfessionals.data
                })


            })



            .catch((err) => {
                console.log(err)
            })
    }

    searchPlumbers = () => {

        console.log(this.state.professionals)

        this.state.professionals.filter(professionals => professionals.professional.profession.includes('Plumber')).then(
            (allProfessionals) => {
                console.log(allProfessionals)
            }
        )
    }

    searchElectricians = () => {

        axios.get('https://handsforhire.herokuapp.com/api/getElectricians/')
        .then((allProfessionals)=> {

            console.log(allProfessionals)
            
            this.setState({
                professionals : [],

                professionals : allProfessionals.data
            })
        })

        .catch((err) => {
            console.log(err)
        })
    }




    render() {
        if (!localStorage.getItem('is_professional')){
            return (
                <div className="container my-5">
                    <div className="row">

                        <div className="col">
                            <div className="main">
                                <div className="form-group has-search d-flex">
    
                                    <input type="text" className="form-control" placeholder="Search by name" id="searchtxt" name="txtSearchBar" />
                                    <button type="submit" className="btn btn-success m-auto" onClick={this.searchByName}>Search</button>
                                    <RefreshIcon className="mt-2 pl-1" onClick={this.refreshSearch} style={{ cursor: "pointer" }}></RefreshIcon>
                                </div>
                                <hr/>
                            </div>
                            <div className="container-fluid">
                                <div className="d-flex justify-content-center row">
                                    <div className="col-md-11">
                                        <div id="all_professionals">
                                            {this.state.professionals.map((c) => {
                                                return (
                                                    <div>
                                                        <div class="row p-3 bg-white border rounded" >
                                                            <div class="col-md-3 mt-1 text-center">
                                                                <img class="img-fluid img-responsive rounded-circle profile-image" src={"https://handsforhire.herokuapp.com" + c.professional.profilePicture} alt=""/>
                                                                <p><i class="fas fa-globe-asia"></i> online</p>
                                                            </div>
                                                            <div class="col-md-6 mt-1">
                                                                <h5>{c.professional.first_name}  {c.professional.last_name} </h5>
                                                                
                                                                <p><span>{c.professional.about_me}</span></p>
                                                                <p class="text-justify  para mb-0">  </p>
                                                            </div>
                                                            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                <div class="d-flex flex-row align-items-center">
                                                                    <h4 class="mr-1">NPR: 788/hr</h4>
                                                                </div>
    
                                                                <div class="d-flex flex-column mt-4"><Link to={'/professional/' + c.username}><button class="btn btn-outline-success btn-sm mt-2" type="button" >View Profile</button></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
    
                                            }
                                            )}
    
                                        </div>
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
                <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg" margin='auto' alt="" />
              </div>
            )
          }
        
    }
}