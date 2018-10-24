import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col, Checkbox } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import '../App.css'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.onClear();
        console.log(this.state.email)
    }

    onClear = () => {
        this.setState({
            email: this.state.email,
            password: ''
        })
    }

    render() {
        return (
            <div className="container register-form">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center">Register</h3>
                    </div>
                    <div className="panel-body">
                        <Form horizontal onSubmit={this.onSubmit}>
                            <h5>
                                Create your account. It's free and only takes a minute.
                            </h5>
                            <br/>
                            <FormGroup>
                                <Col sm={6}>
                                    <FormControl
                                        type="text"
                                        className="form-control"
                                        //name=""
                                        placeholder="First Name"
                                    //value={this.state.password}
                                    //onChange={this.onHandleChange}
                                    />
                                </Col>

                                <Col sm={6}>
                                    <FormControl
                                        type="text"
                                        className="form-control"
                                        //name="password"
                                        placeholder="Last Name"
                                    //value={this.state.password}
                                    //onChange={this.onHandleChange}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={12}>
                                    <FormControl
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onHandleChange}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={12}>
                                    <FormControl
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onHandleChange}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={12}>
                                    <FormControl
                                        type="password"
                                        className="form-control"
                                        //name="password"
                                        placeholder="Confirm password"
                                    //value={this.state.password}
                                    //onChange={this.onHandleChange}
                                    />
                                </Col>
                            </FormGroup>
                            <Checkbox>I accept
                                <Link to="/term"> Terms of use</Link> and
                                <Link to="/policy"> Privacy policy</Link>
                            </Checkbox>
                            <Button type="submit" block bsSize='large' className="btn btn-danger mt-10">Register now</Button>
                        </Form>
                    </div>
                </div>
                <h4 className="text-center">
                    Already have an account?
                <Link to="/login"> Sign in </Link>
                </h4>
            </div>
        );
    }
}