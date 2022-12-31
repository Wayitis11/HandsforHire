import { Component } from "react";

export default class Logout extends Component{
    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('is_client')
        localStorage.removeItem('is_professional')
        localStorage.removeItem('user')
        localStorage.removeItem('client')


        window.location.href = '/'
    }

    render(){
        return(
            <div>hello world</div>
        )
    }
}