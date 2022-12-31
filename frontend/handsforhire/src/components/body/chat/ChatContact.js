import React from "react";
import { NavLink } from "react-router-dom";

const ChatContact = (props) => (
    <NavLink to={`${props.chatURL}`} style={{color:'#fff'}}>
        <li className="contact">
            <div className="wrap">
                <spam className="contact-status online"></spam>
                <img src={ props.picURL } alt="" />
                <div className="meta">
                    <p className="name">{ props.name }</p>
                </div>
            </div>
        </li>
    </NavLink>
    
);
 


export default ChatContact;




