import { Component } from "react"
import { Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';

import BrowseProfessionals from "./BrowseProfessionals";
import ClientRegister from "./ClientRegister"
import Home from "./home";
import Login from "./Login";
import MyHirings from "./dashboard/userDashboard/MyHirings";
import ProfessionalRegister from "./ProfessionalRegister";
import ProfessionalProfile from "./ProfessionalProfile";
import ProfessionalAccount from "./dashboard/professionalDashboard/ProfessionalAccount";
import UserDashboard from "./dashboard/userDashboard/UserDashboard";
import UserAccount from "./dashboard/userDashboard/UserAccount";
import Logout from './Logout'
import UpdatePassword from "./dashboard/userDashboard/UpdatePassword";
import UpdateReview from "./UpdateReview";
import UpdateHire from "./dashboard/userDashboard/UpdateHire";
import FavoriteList from "./dashboard/userDashboard/FavoriteList";
import ChatTemplate from "./chat/ChatTemplate";
import $ from 'jquery'
import WebSocketInstance from "../../websocket"
import BaseRouter from "./chat/BaseRouter";
import MyClients from "./dashboard/professionalDashboard/MyClients";
import DeleteAccount from "./DeleteAccount";
import UpdateProfessionalPassword from "./dashboard/professionalDashboard/UpdateProfessionalPassword";
import DeleteProfessionalAccount from "./dashboard/professionalDashboard/DeleteProfessionalAccount";
import Contact from "./Contact";
import About from "./About";
import Terms from "./Terms";
import HowItWorks from "./HowItWorks";
import Faqs from "./Faqs";
import Faq from "./Faq";



export default class Body extends Component {
    componentDidMount = () => {
        $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        $("#profile-img").click(function() {
            $("#status-options").toggleClass("active");
        });

        $(".expand-button").click(function() {
        $("#profile").toggleClass("expanded");
            $("#contacts").toggleClass("expanded");
        });

        $("#status-options ul li").click(function() {
            $("#profile-img").removeClass();
            $("#status-online").removeClass("active");
            $("#status-away").removeClass("active");
            $("#status-busy").removeClass("active");
            $("#status-offline").removeClass("active");
            $(this).addClass("active");
            
            if($("#status-online").hasClass("active")) {
                $("#profile-img").addClass("online");
            } else if ($("#status-away").hasClass("active")) {
                $("#profile-img").addClass("away");
            } else if ($("#status-busy").hasClass("active")) {
                $("#profile-img").addClass("busy");
            } else if ($("#status-offline").hasClass("active")) {
                $("#profile-img").addClass("offline");
            } else {
                $("#profile-img").removeClass();
            };
            
            $("#status-options").removeClass("active");
        });


        WebSocketInstance.connect();

    }
    
    render() {
       
        return (
            <div>

                <Route path='/client/register' exact component={ClientRegister} />
                <Route path='/list-all-professionals' exact component={BrowseProfessionals} />
                <Route path='/login' exact component={Login} />
                <Route path='/' exact component={Home} />
                <Route path='/professionals/register' exact component={ProfessionalRegister} />
                <Route path='/user/dashboard/my/hirings' exact component={MyHirings} />
                <Route path='/professional/:username' exact component={ProfessionalProfile} />
                <Route path='/professional/dashboard/account' exact component={ProfessionalAccount} />
                <Route path='/user/dashboard/:user' exact component={UserDashboard} />
                <Route path='/user/account' exact component={UserAccount} />
                <Route path='/logout' exact component={Logout} />
                <Route path='/update/password' exact component={UpdatePassword} />
                <Route path='/review/:id' exact component={UpdateReview} />
                <Route path='/hire/:id' exact component={UpdateHire} />
                <Route path='/my-favorite' exact component={FavoriteList} />
                <Route path='/chat' exact component={ChatTemplate} />
                <Route exact path="/chat/:chatID" component={ChatTemplate} />
                
                <Route path='/my-clients' exact component={MyClients} />
                <Route path='/delete-account' exact component={DeleteAccount}/>
                <Route path='/update/password/professional' exact component={UpdateProfessionalPassword} />
                <Route path='/delete-account/professional' exact component={DeleteProfessionalAccount}/>
                <Route path='/contact' exact component={Contact}/>
                <Route path='/about' exact component={About}/>
                <Route path='/terms' exact component={Terms}/>
                <Route path='/how-it-works' exact component={HowItWorks}/>
                <Route path='/faqs' exact component={Faqs}/>
                <Route path='/faq/:id' exact component={Faq}/>

                
                

            </div>
        )
    }
}