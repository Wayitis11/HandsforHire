import axios from "axios";
import React, { Component } from "react";
import ChatContact from "./ChatContact";

class Sidepannel extends Component {
  state = {
    username: localStorage.getItem('user'),
    chats : [],
    // config: {
    //   headers: {"Content-Type":"application/json", 'authorization': `Bearer ${localStorage.getItem('token')}` }
    // }
  }

  getUserChats = () => {
    axios.defaults.headers = {"Content-Type":"application/json", 'authorization': `Bearer ${localStorage.getItem('token')}` }
    axios.get('http://127.0.0.1:8000/chat/?username='+ this.state.username)
    .then(res => {
      console.log(res.data);
      this.setState({
        chats:res.data
      })
    })
  }

  componentDidMount = () =>{
    this.getUserChats()
  }


  render() {
    const activeChats = this.state.chats.map(c => {
      return(
        <ChatContact
              key={c.id}
              name="ajay"
              status='online'
              picURL="http://emilcarlsson.se/assets/harveyspecter.png" 
              chatURL={`/chat/${c.id}`}/
              >
      )
    })
    return (
      <div id="sidepanel">
        <div id="search">
          <label for="">
            <i class="fa fa-search" aria-hidden="true"></i>
          </label>
          <input type="text" placeholder="Search contacts..." />
        </div>
        <div id="contacts">
          <ul>
            {activeChats}
            {/* <ChatContact name='ajay' status='online' picURL="http://emilcarlsson.se/assets/harveyspecter.png" chatURL="/chat/ajay"/> */}
            {/* <ChatContact name='Sanjay' status='online' picURL="http://emilcarlsson.se/assets/harveyspecter.png" chatURL="/chat/sanjay"/> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidepannel
