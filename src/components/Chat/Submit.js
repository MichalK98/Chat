import React, { Component } from 'react';
import SendSvg from '../../svg/send.svg';
import socket from '../../ws';

class Submit extends Component {
    state = {
        message: '',
        username: ''
    }

    clear = async () => {
        await this.setState({
            message: ''
        });
    }

    handleChange = (e) => {
        this.setState({
            'message': e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('message', {message : this.state.message, username: 'you'});
        //Emit message
        if(this.state.message.length >= 1) {
            socket.emit('new_message', {message : this.state.message, username: 'alien'});
            this.clear();
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input onChange={this.handleChange} value={this.state.message} type="text" placeholder="Skriv något..."/>
                <button id="btnSend"><SendSvg/></button>
            </form>
        )
    }
}

export default Submit;