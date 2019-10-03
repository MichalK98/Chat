import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Channel from './channel.js';
import User from './Chat/User';

class Channels extends Component {
    render() {
        return (
            <div className="channels-wrapper" id="channels-wrapper">
                <div className="channels-header">
                    <div className="info">
                        <h1>Chat.app</h1>
                        <a href="#chat-wrapper" className="btn-mobile">#</a>
                    </div>
                    <User/>
                </div>
                <SimpleBar className="channels-body">
                    <Channel/>
                    <Channel/>
                    <Channel/>
                    <Channel/>
                    <Channel/>
                    <Channel/>
                    <Channel/>
                    <Channel/>
                    <Channel/>
                    <Channel/>
                </SimpleBar>
            </div>
        )
    }
}
export default Channels;