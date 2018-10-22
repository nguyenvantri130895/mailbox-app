import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import routes from './routes'
import { connect } from 'react-redux'
//import * as actions from './actions/index'

const history = createHistory()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  showContentRoutes = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <div className="container-fluid">
            <div className="row">
              {this.showContentRoutes(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);