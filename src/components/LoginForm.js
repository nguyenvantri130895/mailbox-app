import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
//import Mail from './Mail';
// import createHistory from 'history/createBrowserHistory'
// import Mail from '../components/Mail'

// const history = createHistory()

// // Get the current location.
// const location = history.location

// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state)
// })

// // Use push, replace, and go to navigate around.
// history.push('/mail', { some: 'state' })

// // To stop listening, call the function returned from listen().
// unlisten()

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isRedirect: false,
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
  }

  onClick = () => {
    var { email, password } = this.state;
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.setState({
        isRedirect: true
      })
    }
    else {
      alert('Wrong email or password');
      this.onClear();
    }
  }

  onClear = () => {
    this.setState({
      email: this.state.email,
      password: ''
    })
  }

  render() {
    var { isRedirect } = this.state;
    if (isRedirect) {
      return <Redirect to='/mail' />
    }
    return (
      <div className="container login-form">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Login</h3>
          </div>
          <div className="panel-body">
            <Form horizontal onSubmit={this.onSubmit}>
              <FormGroup>
                <Col sm={3}>
                  <ControlLabel>
                    Email
                </ControlLabel>
                </Col>
                <Col sm={9}>
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
                <Col sm={3}>
                  <ControlLabel>
                    Password
                  </ControlLabel>
                </Col>
                <Col sm={9}>
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
              <Button
                type="submit"
                block
                bsSize='large'
                className="btn btn-danger"
                onClick={this.onClick}
              >
                Login
              </Button>

              <h5 className="text-right">Forgot
                <Link to="/reset-password"> password</Link>
              </h5>
              <h5 className="text-right">Not a member?
                <span>
                  <Link to="/register"> Register</Link>
                </span>
              </h5>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}