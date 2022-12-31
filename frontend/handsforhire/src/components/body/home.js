import { Component } from "react";
import { Link } from 'react-router-dom'

export default class Home extends Component{
render(){
    return(
        <div>
  <div className="container-fluid p-0 ">
    <div className="banner">
      <div className="banner_content">
        <h4>Find a Plumber and Electrican <br /> for maintenance</h4><br />
        <Link to="/list-all-professionals" className="btn btn-danger hire_now hire">Hire Now</Link>
      </div>
    </div>
  </div>
  <div className="container-fluid p-0  get_help_section d-flex align-items-center justify-content-center">
    <div className="get_help d-flex align-items-center justify-content-center p-3">
      <h4>Get help from top rated plumber and electrican </h4><br />
    </div>
  </div>
  <div className="container-fluid py-5">
    <div className="container p-5">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-5 wrap-about pl-md-5  py-5 para">
          <div className="content heading-section">
            <h4>Plumber Services</h4>
            <ul>
              <li>Plumbing and sanitary fittings/repairs.</li>
              <li>Boring, Filter and RO system installtion.</li>
              <li>Drainage works and others etc.</li>
            </ul>
            <a className="btn btn-success hire_now " href>Find a Plumber</a>
          </div></div>
        <div className="col-md-1" />
        <div className="col-md-5 img justify-content-center align-items-center mx-auto image infografic text-center">
          <img src="../images/p.jpg" className="img-fluid rounded" alt="" />
        </div>
       
      </div>
      <div className="row my-5">
        <div className="col-md-1" />
        <div className="col-md-5 img justify-content-center align-items-center image infografic text-center">
          <img src="../images/24130.jpg" style={{width: '100%', height: '100%'}} className="img-fluid rounded" alt="" />
        </div>
        <div className="col-md-1" />
        <div className="col-md-5 wrap-about pl-md-5  py-5 para">
          <div className="content heading-section">
            <h4>Plumber Services</h4>
            <ul>
              <li>Electrical repairing and maintenance.</li>
              <li>Solar/inverter installation and repairs.</li>
              <li>Direct Generator, other backup system works etc.</li>
            </ul>
            <a className="btn btn-success hire_now " href>Find an Electrician</a>
          </div></div>
       
      </div>
    </div>
  </div>
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6 repair_section">
          <div className="text">
            <h2>Rapid Services</h2>
            <p>We provide rapid services. You no longer need to worry in any emergency situation or odd hours. Feel free to visit our website and hire a suitable proffesional for you. Our goal is to make our customers happy.</p>
          </div>
        </div>
        <div className="col-md-6 image text-center ">
          <img src="../images/r.jpg" className="img-fluid rounded-circle" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid p-0 top_professionals">
    <div className="container p-5">
      <div className="heading text-center">
        <h4>Connect With <br /> top rated plumber and electrican</h4>
      </div>
      <div className="row mt-5">
        <div className="col-sm-4">
          <div className="card professionals_card mb-3 shadow">
            <div className="row no-gutters">
              <div className="col-md-3 card_profile_picture ">
                <img src="../images/jhon.png" className="img-fluid card-img m-3" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text "><a href>John Doe</a></p>
                  <p className="card-text">Plumber</p>
                  <p className="card-text">
                    <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                    <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                    <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card professionals_card mb-3 shadow">
            <div className="row no-gutters">
              <div className="col-md-3 card_profile_picture ">
                <img src="../images/jhon.png" className="img-fluid card-img m-3" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text "><a href>John Doe</a></p>
                  <p className="card-text">Plumber</p>
                  <p className="card-text">
                    <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                    <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                    <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card professionals_card mb-3 shadow">
            <div className="row no-gutters">
              <div className="col-md-3 card_profile_picture ">
                <img src="../images/jhon.png" className="img-fluid card-img m-3" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text "><a href>John Doe</a></p>
                  <p className="card-text">Plumber</p>
                  <p className="card-text">
                    <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                    <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                    <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card professionals_card mb-3 shadow">
            <div className="row no-gutters">
              <div className="col-md-3 card_profile_picture ">
                <img src="../images/jhon.png" className="img-fluid card-img m-3" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text "><a href>John Doe</a></p>
                  <p className="card-text">Plumber</p>
                  <p className="card-text">
                    <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                    <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                    <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card professionals_card mb-3 shadow">
            <div className="row no-gutters">
              <div className="col-md-3 card_profile_picture ">
                <img src="../images/jhon.png" className="img-fluid card-img m-3" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text "><a href>John Doe</a></p>
                  <p className="card-text">Plumber</p>
                  <p className="card-text">
                    <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                    <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                    <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card professionals_card mb-3 shadow">
            <div className="row no-gutters">
              <div className="col-md-3 card_profile_picture ">
                <img src="../images/jhon.png" className="img-fluid card-img m-3" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text "><a href>John Doe</a></p>
                  <p className="card-text">Plumber</p>
                  <p className="card-text">
                    <img src="../images/customer-support.png" className="img-fluid card-img mx-auto w-25" alt="..." />
                    <img src="../images/water-tap.png" className="img-fluid card-img  w-25" alt="..." />
                    <img src="../images/hammer.png" className="img-fluid card-img  w-25" alt="..." />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-center my-3">
        <a className="btn btn-danger hire_now" href>Hire Us</a>
      </div> */}
    </div>
  </div>
  <section className="testimonial-section d-flex align-items-center my-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 testi-img">
          <div className="img-box">
            <div className="circle" />
            <div className="img-box-inner">
              <img src="../images/1.png" alt="testi img" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="myCarousel" className="carousel slide" data-bs-interval={5000} data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item testi-item active" data-color="#fb9c9a" data-img="../images/1.png">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis ratione, harum doloremque aspernatur aliquid quaerat dolores voluptates recusandae qui repellat illum, amet ipsa debitis fugiat commodi nemo suscipit ad!</p>
                <h3>john doe 1 - <span>web developer</span></h3>
              </div>
              <div className="carousel-item testi-item" data-color="#fbd39a" data-img="../images/2.png">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis ratione, harum doloremque aspernatur aliquid quaerat dolores voluptates recusandae qui repellat illum, amet ipsa debitis fugiat commodi nemo suscipit ad!</p>
                <h3>john doe 2 - <span>web developer</span></h3>
              </div>
              <div className="carousel-item testi-item" data-color="#9ab0fb" data-img="../images/3.png">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis ratione, harum doloremque aspernatur aliquid quaerat dolores voluptates recusandae qui repellat illum, amet ipsa debitis fugiat commodi nemo suscipit ad!</p>
                <h3>john doe 3 - <span>web developer</span></h3>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <img src="../images/left-arrow.png" alt="prev" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <img src="../images/right-arrow.png" alt="prev" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <div className="container-fluid p-0 getting_started_today">
    <div className="container text-center p-3">
      <h4 className="heading">Get Started Tody</h4>
      <div className="register_btns align-items-center my-5">
        <a className="btn btn-danger" style={{width: '120px', marginRight:'5px'}} href="">Hire Now</a>
        <a className="btn btn-danger" style={{background: 'transparent'}} href="">Become a professionals</a>
      </div>
    </div>
  </div> */}
</div>

    )
}
}