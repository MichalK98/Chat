import React, { Component } from 'react';
import socket from "../../ws";

class Message extends Component {
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

    render() {
        return (
            <ul id="chatroom">
                {this.state.messages.map((msg, i) => (
                    <li className={(msg.username == 'You' ? "chat-me" : "")} key={i}>
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
            )
        }
    }
export default Message;