import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Home.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faPhone } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-body">
          <header className="main-header">
            <h1 className="logo-h1 primary-txt"><span className="logo-span">SINNOTT</span><br/>DESIGN</h1>
            <nav className="main-nav">
              <Link className="main-nav-link primary-txt" to="/">About</Link>
              <Link className="main-nav-link primary-txt" to="/">Projects</Link>
              <Link className="main-nav-link primary-txt" to="/">Pricing</Link>
              <Link className="main-nav-link primary-txt" to="/">Contact</Link>
            </nav>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route component={NoMatch} />*/}
          </Switch>

          {/*<p>{this.props.appReducer.fullName}</p>*/}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appReducer: state.appReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch({
        type: 'SET_DATA',
        payload: data
      });
    },
    setUser: (user) => {
      dispatch({
        type: 'SET_USER',
        payload: user
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
