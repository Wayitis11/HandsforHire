import React, { Component } from "react";
import $ from "jquery";
import Sidepannel from "./Sidepannel";
import WebSocketInstance from "../../../websocket";
import ChatProfile from "./ChatProfile";

class ChatTemplate extends Component {
  state = { message: "" };

  initialiseChat() {
    this.waitForSocketConnection(() => {
      WebSocketInstance.fetchMessages(
        this.props.username,
        this.props.match.params.chatID
      );
    });
    WebSocketInstance.connect(this.props.match.params.chatID);
  }

  constructor(props) {
    super(props);
    this.initialiseChat();
  }

  waitForSocketConnection(callback) {
    const component = this;
    setTimeout(function () {
      if (WebSocketInstance.state() === 1) {
        console.log("Connection is made");
        callback();
        return;
      } else {
        console.log("wait for connection...");
        component.waitForSocketConnection(callback);
      }
    }, 100);
  }

  addMessage(message) {
    this.setState({ messages: [...this.state.messages, message] });
  }

  setMessages(messages) {
    this.setState({ messages: messages.reverse() });
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessageHandler = e => {
    e.preventDefault();
    const messageObject = {
      from: this.props.username,
      content: this.state.message,
      chatId: this.props.match.params.chatID
    };
    WebSocketInstance.newChatMessage(messageObject);
    this.setState({ message: "" });
  };

  renderMessages = messages => {
    const currentUser = this.props.username;
    return messages.map((message, i, arr) => (
      <li
        key={message.id}
        style={{ marginBottom: arr.length - 1 === i ? "300px" : "15px" }}
        className={message.author === currentUser ? "sent" : "replies"}
      >
        <img
          src="http://emilcarlsson.se/assets/mikeross.png"
          alt="profile-pic"
        />
        <p>
          {message.content}
          <br />
          <small>{this.renderTimestamp(message.timestamp)}</small>
        </p>
      </li>
    ));
  };


  componentWillReceiveProps(newProps) {
    if (this.props.match.params.chatID !== newProps.match.params.chatID) {
      WebSocketInstance.disconnect();
      this.waitForSocketConnection(() => {
        WebSocketInstance.fetchMessages(
          this.props.username,
          newProps.match.params.chatID
        );
      });
      WebSocketInstance.connect(newProps.match.params.chatID);
    }
  }

  render() {
    const messages = this.state.messages;
    return (
      <div className="p-5 shadow-lg">
        <div id="frame" className="">
          <Sidepannel />
          <div class="content">
            <ChatProfile />
            <div class="messages">
              <ul id="chat-log">{messages && this.renderMessages(messages)}</ul>
            </div>
            <div class="message-input mt-5">
              <form onSubmit={this.sendMessageHandler}>
                <div className="wrap">
                  <input
                    onChange={this.messageChangeHandler}
                    value={this.state.message}
                    required
                    id="chat-message-input"
                    type="text"
                    placeholder="Write your message..."
                  />
                  <i
                    className="fa fa-paperclip attachment"
                    aria-hidden="true"
                  ></i>
                  <button id="chat-message-submit" className="submit">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatTemplate;
