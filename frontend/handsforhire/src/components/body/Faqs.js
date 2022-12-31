import { Component } from "react"

import { TextField, Button, InputLabel, NativeSelect, MenuItem, Select, FormControl, TextareaAutosize, colors } from "@material-ui/core"

import 'bootstrap'
import axios from "axios"
import { Link } from "react-router-dom"




export default class Faqs extends Component {

    state={
        faqs:[]
    }
    componentDidMount = () =>{
        axios.get("http://handsforhire.herokuapp.com/api/faqs")
        // axios.get("http://localhost:8000/api/faqs")
        .then((faqs) => {
            console.log("faqs",faqs)
            this.setState({
                faqs: faqs.data
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
            <h6>All Faqs</h6>
            <br/>
            <hr/>

            {this.state.faqs.map((c) => {
                return(
                    <li><Link to={'/faq/' + c.id}>{ c.question }</Link></li>
                )
            })}
                {/* {% for faq in faq %}
                    <div class="col-6 p-5">
                        <li><a href="{% url 'jobseeker_faq:jobseeker_faq_detail' faq.id %}">{{ faq.question }}</a></li>
                    </div>
                {% endfor %} */}

            </div>
        </div>

        )
    }
}