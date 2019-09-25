import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import HomeSvg from '../../svg/home.svg';
import Submit from "./Submit";
import socket from "../../ws";

const msgList = [];

class Chat extends Component {

    constructor() {
        socket.on("new_message", (data) => {
            // push new message to array that exists in state
            console.log("Before push, ", this.state);
            this.setState({
                messages: [...this.state.messages, data]
            });
            console.log("After push, ", this.state);
        })
        super();
    }

    state = {
        messages: []
    }

    
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        return (
            <div className="chat-wrapper">
                <div className="chat-header">
                    <div className="icon">
                        <HomeSvg/>
                    </div>
                    <div className="info">
                        <span className="title">#general</span>
                        <span className="online">4 aktiva användare</span>
                    </div>
                </div>
                <SimpleBar className="chat-body">
                    <ul id="chatroom">
                        {this.state.messages.reverse().map((msg) => (
                            <li className="chat-me">
                                <p>{msg.message}</p>
                                <small>{msg.username}</small>
                            </li>
                        ))}
                        <li className="chat-me">
                            <p>Hej, testa gärna min chatt</p>
                            <small>Michal</small>
                        </li>
                        <li>
                            <p>Testing, testing... Lorem ipsum dolar sit amet</p>
                            <small>Mattial</small>
                        </li>
                    </ul>
                    <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
                </SimpleBar>
                <div className="chat-footer">
                    <Submit/>
                </div>
            </div>
        )
    }
}
export default Chat;