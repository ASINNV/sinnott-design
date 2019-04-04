import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import Projects from "./Components/Projects.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './App.css';

class App extends Component {
  componentDidMount() {
    let splash = document.getElementById('splash');
    setTimeout(function() {
      splash.style.opacity = '0';
      splash.style.transform = 'scale(0.5)';
    }, 250);
    setTimeout(function() {
      splash.style.display = 'none';
    }, 750);
  }
  render() {
    return (
      <Router>
        <div>
          <div className="mobile-box">
            <div className="mobile-title">SINNOTT <span className="mobile-span">DESIGN</span></div>
            <div className="mobile-subtitle">Mobile Experience Coming Soon</div>
            <FontAwesomeIcon icon={faThumbsUp} className="mobile-icon"/>
          </div>
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
