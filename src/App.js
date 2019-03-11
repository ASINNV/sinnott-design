import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from './Images/SD_logo.svg';

import './App.css';

class App extends Component {

  componentDidMount() {

    let fixedHeader = document.getElementById('fixed-header');
    let headerHeight = fixedHeader.getBoundingClientRect().height;
    let myThis = this;

    fixedHeader.style.transition = 'none';

    window.addEventListener('scroll', function() {
      let scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;

      fixedHeader.style.transition = 'opacity .1s ease-in-out, transform .2s ease-in-out';

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
        <div id="main">
          <header id="fixed-header">
            <div className="main-inner-header">
              <div className="logo-box">
                <img className="fixed-sd-logo" src={logo} alt=""/>
                <h1 className="fixed-logo-h1 primary-txt"><span className="fixed-logo-span">SINNOTT</span> DESIGN</h1>
              </div>

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
              <div className="logo-box">
                <h1 className="logo-h1 primary-txt"><span className="logo-span">SINNOTT</span><br/>DESIGN</h1>
                <img className="sd-logo" src={logo} alt=""/>
              </div>
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
          <div className="footer">
            <p className="footer-item copyright">{new Date().getFullYear()} &copy; Sinnott Design</p>
            <a className="footer-item privacy-policy" href="https://docs.google.com/document/d/13ROvFktvYETG1N8V8bX5fpHQB5kYQIoaQ4JZtiWFfQ4/edit?usp=sharing" rel="noopener noreferrer" target="_blank">Privacy Policy</a>
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
