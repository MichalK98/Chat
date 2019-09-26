import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import HomeSvg from '../../svg/home.svg';
import Submit from "./Submit";
import socket from "../../ws";

class Chat extends Component {

    constructor() {
        socket.on("new_message", (data) => {
            console.log(data)
            // push new message to array that exists in state
            this.setState({
                messages: [...this.state.messages, data]
            });
        });
        socket.on("message", (data) => {
            console.log(data)
            // push new message to array that exists in state
            this.setState({
                messages: [...this.state.messages, data]
            });
        });
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
            <div className="chat-wrapper" id="chat-wrapper">
                <div className="chat-header">
                    <div className="icon">
                        <HomeSvg/>
                    </div>
                    <div className="info">
                        <span className="title">#general</span>
                        <span className="online">4 aktiva användare</span>
                    </div>
                    <a href="#channels-wrapper" className="btn-mobile">#</a>
                </div>
                <SimpleBar className="chat-body">
                    <ul id="chatroom">

                        {this.state.messages.map((msg, i) => (
                            <li className={(msg.username == 'you' ? "chat-me" : "")} key={i}>
                                <p>{msg.message}</p>
                                <small>{msg.username}</small>
                            </li>
                        )).reverse()}
                        


                        <li>
                            <p>Testing, testing... Lorem ipsum dolar sit amet</p>
                            <small>Mattial</small>
                        </li>
                        <li className="chat-me">
                            <p>Hej, testa gärna min chatt</p>
                            <small>Michal</small>
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