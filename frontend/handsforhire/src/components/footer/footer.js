import { Component } from "react";
import { Link } from 'react-router-dom'

export default class Footer extends Component{
render(){
    return(
        <div>
           <footer>
  
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <h6>HandsForHire</h6>
          <p className="text-justify"> HandsForHire is an on-demand proffesional hiring system. Hiring a proffesional has never been easy however with our platform end users and proffesionals can interact with each other. Electricans and plumbers have already engaged
            with us now its your time to hire a preoffesional to solve your problem.</p>
        </div>
        <div className="col-xs-6 col-md-1" />
        <div className="col-xs-6 col-md-3">
          <h6>Contact</h6>
          <ul className="footer-links">
            <p><i className="fas fa-map-marker-alt" /> Kathmandu, Nepal</p>
            <p><i className="fas fa-phone" />+977 9861432303</p>
            <p><i className="fas fa-envelope" /> Email: <a href="mailto:hello@domain.com">info@domain.com</a></p>
          </ul>
        </div>
        <div className="col-xs-6 col-md-1" />
        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href>About Us</a></li>
            <li><a href>Contact Us</a></li>
            <li><a href>Become a professional</a></li>
            <li><Link to="/terms" href>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <p className="copyright-text">Copyright © 2021 All Rights Reserved by
            <a href>HandsForHire</a>
          </p>
          <p className="copyright-text">Developed By Sentinels
          </p>
        </div>
        {/* <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
          </ul>
      </div> */}
      </div>
    </div>
  </footer>
</footer>

        </div>
    )
}
}