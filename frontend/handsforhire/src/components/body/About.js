import { Component } from "react"

import { TextField, Button, InputLabel, NativeSelect, MenuItem, Select, FormControl, TextareaAutosize } from "@material-ui/core"

import 'bootstrap'




export default class About extends Component {

  render() {
    return (
      <div className="About_us">

        <div class="bg-light">
            <div class="container py-5">
                <div class="row h-100 align-items-center py-5">
                <div class="col-lg-6">
                    <h1 class="display-4">About us</h1>
                    <p class="lead text-muted mb-0">Hire Plumber and Electrician in Kathmandu</p>
                    
                </div>
                <div class="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid" /></div>
                </div>
            </div>
        </div>

    <div class="bg-white py-5">
        <div class="container py-5">
            <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
            </div>
            <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            </div>
        </div>
    </div>

        <div class="bg-light py-5">
        <div class="container py-5">
            <div class="row mb-4">
            <div class="col-lg-5">
                <h2 class="display-4 font-weight-light">Our team</h2>
                <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            </div>

            <div class="row text-center">

            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/220983451_959614444605398_4008282550092477356_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aG3v_mwSOqcAX_vE7gZ&_nc_oc=AQkSg2Osa27slqR8hb4pI94tmhUYe1PUJowwv2x5CHaS8Ary4Xlplfmvq9bLMiJFNIY&_nc_ht=scontent.fktm3-1.fna&oh=61c8429c23ffd1a825abdf6fdd27222d&oe=615F8C48" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Jenish Maharjan</h5><span class="small text-uppercase text-muted">Scrum master</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>


            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/158739317_879157822651085_4243566307465697780_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w-11988L4N8AX9BB2la&_nc_ht=scontent.fktm3-1.fna&oh=b0238b54c49c73a5b239497afee0d4ce&oe=615FD624" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Ajay Pudasaini</h5><span class="small text-uppercase text-muted">Backend Develoer</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>



            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/82372417_198710841170300_1045006487040032768_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=i1MVMEYI8C8AX-qfYte&_nc_ht=scontent.fktm3-1.fna&oh=60a6c5e1b65ea2fb4a869b940b742e51&oe=615DAC3B" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Hardik Gurung</h5><span class="small text-uppercase text-muted">Quality Assurance</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>


            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/117863244_2995573133888018_667391056933263165_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=S5Djx3quxP0AX8jL5uR&_nc_ht=scontent.fktm3-1.fna&oh=6afc5adddc45b07e206eb7c3e44d60d3&oe=615FA7A7" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Deependra Khatiwada</h5><span class="small text-uppercase text-muted">Frontend Developer</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/88360941_2513267625451810_1782344572379070464_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=d-VVe27bdlcAX8fm9h0&tn=j9eqbqnAiSJqfd2i&_nc_ht=scontent.fktm3-1.fna&oh=449508e3123e5a8a6748aaaac77a1db1&oe=6161267B" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"  />
                <h5 class="mb-0">Rojan Shrestha</h5><span class="small text-uppercase text-muted">Frontend Developer</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/236486565_1526273734388067_2363208812033306238_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qcTay0vxs08AX9TUonq&_nc_ht=scontent.fktm3-1.fna&oh=4e6b5fec6f08473f2b2e4002557b02a4&oe=615F0135" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"  />
                <h5 class="mb-0">Santosh Kumar Yadhav</h5><span class="small text-uppercase text-muted">Frontend Developer</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>

            </div>
        </div>
        </div>
      </div>

    )
  }
}