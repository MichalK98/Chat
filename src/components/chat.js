import React, { Component } from 'react';
import { ReactComponent as HomeSvg } from '../svg/home.svg';
import { ReactComponent as SendSvg } from '../svg/send.svg';

class Chat extends Component {
    state = {
        msg: ''
      }

    handleChange = (e) => {
    this.setState({
        'msg': e.target.value
    })
    console.log(e.target.value);
    }

    handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
                <div className="chat-body">
                    <ul>
                        <li className="chat-me">
                            <p>Hej, testa gärna min chatt</p>
                            <small>Michal</small>
                        </li>
                        <li>
                            <p>Testing, testing... Lorem ipsum dolar sit amet</p>
                            <small>Mattial</small>
                        </li>
                        <li className="chat-me">
                            <p>Hej, testa gärna min chatt</p>
                            <small>Michal</small>
                        </li>
                        <li>
                            <p>Testing, testing... Lorem ipsum dolar sit amet</p>
                            <small>Mattial</small>
                        </li>
                        <li className="chat-me">
                            <p>Hej, testa gärna min chatt</p>
                            <small>Michal</small>
                        </li>
                        <li>
                            <p>Testing, testing... Lorem ipsum dolar sit amet</p>
                            <small>Mattial</small>
                        </li>
                        <li className="chat-me">
                            <p>Hej, testa gärna min chatt</p>
                            <small>Michal</small>
                        </li>
                        <li>
                            <p>Testing, testing... Lorem ipsum dolar sit amet</p>
                            <small>Mattial</small>
                        </li>
                        <li className="chat-me">
                            <p>Hej, testa gärna min chatt</p>
                            <small>Michal</small>
                        </li>
                        <li>
                            <p>Testing, testing... Lorem ipsum dolar sit amet</p>
                            <small>Mattial</small>
                        </li>
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
                </div>
                <div className="chat-footer">
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        <input onChange={this.handleChange} type="text" placeholder="Skriv något..." name="msg"/>
                        <button><SendSvg/></button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Chat;