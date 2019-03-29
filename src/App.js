import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import Projects from "./Components/Projects.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faPhone } from '@fortawesome/free-solid-svg-icons';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div id="main">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            {/*<Route component={NoMatch} />*/}
          </Switch>

          <div className="footer breakpoint-bound">
            <p className="footer-item copyright">{new Date().getFullYear()} &copy; Sinnott Design</p>
            <a className="footer-item privacy-policy text-link" href="https://docs.google.com/document/d/13ROvFktvYETG1N8V8bX5fpHQB5kYQIoaQ4JZtiWFfQ4/edit?usp=sharing" rel="noopener noreferrer" target="_blank">Privacy Policy</a>
          </div>

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
    setPreviousOffset: (offsetValue) => {
      dispatch({
        type: "SET_PREVIOUS_OFFSET",
        payload: offsetValue
      });
    },
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
