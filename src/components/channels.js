import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Channel from './channel.js';

class Channels extends Component {
    render() {
        return (
            <div className="channels-wrapper">
                <div className="channels-header">
                    <h1>Chat.app</h1>
                    <form autoComplete="off">
                        <input onChange={this.handleChange} type="text" placeholder="Skriv ditt namn..." name="name"/>
                    </form>
                </div>
                <SimpleBar className="channels-body">
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