import { Component } from "react"

import { TextField, Button, InputLabel, NativeSelect, MenuItem, Select, FormControl, TextareaAutosize, colors } from "@material-ui/core"

import 'bootstrap'




export default class HowItWorks extends Component {

    render() {
        return (
            <div className="how_it_works container p-5 text-centre">
                <div class="rows p-0">

                    <h1 class="mt-2 mb-3">Our recruiting platform allows you to attract <br />and hire the top talent, assisting you every<br /> step of the way.</h1>
                    <div class="columns bg-white">

                        <h2>Expertise</h2>
                        <p>

                            Our platform has been built to optimize the hiring process for both candidate and employer, led by a team of experienced and innovative recruitment professionals.</p>
                    </div>
                    <div class="columns bg-white">
                        <h2>Efficiency</h2>
                        <p>Our leading technology works to screen and present employers with the most relevant candidate applications while keeping active job seekers alert to new top jobs.</p>
                    </div>
                    <div class="columns bg-white">
                        <h2>Trust</h2>
                        <p>We believe that transparency between candidate and employer makes for successful recruitment, therefore our platform encourages relevant information to be displayed within our secure cloud-based system.</p>

                    </div>

                    <div className="columns bg-white">
                        <h2>Outreach</h2>
                        <p>We utilize all the top channels for quality hires to ensure your jobs attract the right candidates.</p>
                    </div>
                    <div className="columns bg-white" >
                        <h2>Feeadback</h2>
                        <p>Our internal messaging system solves the breakdown in communication between candidates and employers and creates a channel for direct feedback.</p>
                    </div>
                    <div className="columns bg-white">
                        <h2>Fraud detect</h2>
                        <p>We have a group of experties who constantly monitors the new member registration , new job vacancy post etc. We immediately delete the user or the jobpost if found fake</p>

                    </div>
                </div>
            </div>



        )
    }
}