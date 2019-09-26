import React, { Component } from 'react';

class User extends Component {
    render () {
        return (
            <form autoComplete="off">
                <input onChange={this.handleChange} type="text" placeholder="Skriv ditt namn..." name="name"/>
            </form>
        )
    }
}

export default User;