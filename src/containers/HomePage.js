import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../App.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container button-home">
                <h1 className="text-center">
                    Welcome to home page
                </h1>
                <Link to="/login">
                    <button>
                        Login
                        <span></span>
                    </button>
                </Link>
            </div>
        );
    }
}