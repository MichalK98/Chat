import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import SendSvg from '../../svg/send.svg';

class Submit extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: 'http://localhost:9090'
        }
    }

    state = {
        msg: ''
    }

    //Connect socket
    socket = socketIOClient(this.state.endpoint);

    clear = async () => {
        await this.setState({
            msg: ''
        });
    }

    handleChange = (e) => {
        this.setState({
            'msg': e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        //Emit message
        this.socket.emit('new_message', {message : this.state.msg});
        this.clear();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input onChange={this.handleChange} value={this.state.msg} type="text" placeholder="Skriv något..." name="msg" id="msg"/>
                <button id="btnSend"><SendSvg/></button>
            </form>
        )
    }
}

export default Submit;