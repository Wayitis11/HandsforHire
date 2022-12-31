import { Component } from "react"

import { TextField, Button, InputLabel, NativeSelect, MenuItem, Select, FormControl, TextareaAutosize, colors } from "@material-ui/core"

import 'bootstrap'
import axios from "axios"




export default class Faq extends Component {

    state={
        faq:[],
        id:this.props.match.params.id
    }
    componentDidMount = () =>{
        axios.get("http://handsforhire.herokuapp.com/api/faq/"+this.state.id + "/")
        // axios.get("http://localhost:8000/api/faq/"+this.state.id + "/")
        .then((faq) => {
            console.log("faq",faq)
            this.setState({
                faq: faq.data
            })

        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div class="container d-flex justify-content-center">
            <div class="row bg-white my-5">
            <h5> Questions: {this.state.faq.question} </h5>
            <h6> Answer: {this.state.faq.answer} </h6>
            <br/>
            <hr/>

            {/* {this.state.faqs.map((c) => {
                return(
                    <li><a href="">{ c.question }</a></li>
                )
            })} */}
               

            </div>
        </div>

        )
    }
}