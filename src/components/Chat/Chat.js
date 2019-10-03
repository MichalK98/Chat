import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import HomeSvg from '../../svg/home.svg';
import Submit from "./Submit";
import Message from "./Message";

class Chat extends Component {

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
                    <Message/>
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