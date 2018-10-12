import React, { Component } from 'react';
import '../App.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">
                    Welcome to home page
                </h1>
                <a href="/login">
                    <button>
                        Login
                        <span></span>
                    </button>
                </a>
            </div>
        );
    }
}