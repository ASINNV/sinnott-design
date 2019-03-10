import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faPhone } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';

import './App.css';

class App extends Component {

  componentDidMount() {

    let fixedHeader = document.getElementById('fixed-header');
    let headerHeight = fixedHeader.getBoundingClientRect().height;
    let myThis = this;

    window.addEventListener('scroll', function() {
      let scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop >= headerHeight && scrollTop >= myThis.props.appReducer.previousOffset) {
        fixedHeader.style.opacity = "1";
        fixedHeader.style.pointerEvents = "auto";
        fixedHeader.style.transform = "translateY(0)";
      } else if (scrollTop < headerHeight && scrollTop < myThis.props.appReducer.previousOffset) {
        fixedHeader.style.opacity = "";
        fixedHeader.style.transform = "";
        fixedHeader.style.pointerEvents = "";
      }

      myThis.props.setPreviousOffset(scrollTop);
    });

  }

  render() {
    return (
      <Router>
        <div className="main">
          <header id="fixed-header">
            <div className="main-inner-header">
              <h1 className="fixed-logo-h1 primary-txt"><span className="fixed-logo-span">SINNOTT</span> DESIGN</h1>
              <nav className="main-nav">
                <a href="#about" className="main-nav-link">About</a>
                <a href="#projects" className="main-nav-link">Projects</a>
                <a href="#pricing" className="main-nav-link">Pricing</a>
                <a href="#contact" className="main-nav-link">Contact</a>
              </nav>
            </div>
          </header>
          <div className="main-body">
            <header className="main-header">
              <h1 className="logo-h1 primary-txt"><span className="logo-span">SINNOTT</span><br/>DESIGN</h1>
              <nav className="main-nav">
                <a href="#about" className="main-nav-link">About</a>
                <a href="#projects" className="main-nav-link">Projects</a>
                <a href="#pricing" className="main-nav-link">Pricing</a>
                <a href="#contact" className="main-nav-link">Contact</a>
              </nav>
            </header>

            <Switch>
              <Route exact path="/" component={Home} />
              {/*<Route component={NoMatch} />*/}
            </Switch>

            {/*<p>{this.props.appReducer.fullName}</p>*/}
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
