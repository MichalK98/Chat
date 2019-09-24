import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { ReactComponent as HomeSvg } from '../svg/home.svg';

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
                    <div className="channels-single">
                        <div className="icon">
                            <HomeSvg/>
                        </div>
                        <div className="info">
                            <span className="title">#general</span>
                            <span className="desc">Just about anything</span>
                        </div>
                    </div>
                    <div className="channels-single">
                        <div className="icon">
                            <HomeSvg/>
                        </div>
                        <div className="info">
                            <span className="title">#general</span>
                            <span className="desc">Just about anything</span>
                        </div>
                    </div>
                    <div className="channels-single">
                        <div className="icon">
                            <HomeSvg/>
                        </div>
                        <div className="info">
                            <span className="title">#general</span>
                            <span className="desc">Just about anything</span>
                        </div>
                    </div>
                    <div className="channels-single">
                        <div className="icon">
                            <HomeSvg/>
                        </div>
                        <div className="info">
                            <span className="title">#general</span>
                            <span className="desc">Just about anything</span>
                        </div>
                    </div>
                    <div className="channels-single">
                        <div className="icon">
                            <HomeSvg/>
                        </div>
                        <div className="info">
                            <span className="title">#general</span>
                            <span className="desc">Just about anything</span>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        )
    }
}
export default Channels;