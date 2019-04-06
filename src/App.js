import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import Projects from "./Components/Projects.js";
import About from "./Components/About.js";
import Pricing from "./Components/Pricing.js";
import Contact from "./Components/Contact.js";
import { MaintenanceScreen } from "./Components/MinorComponents.js";
import { Link, NavLink } from "react-router-dom";
import logoV2A from './Images/SD_LOGO_V2A.svg';

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

    let fixedHeader = document.getElementById('fixed-header');
    let headerHeight = fixedHeader.getBoundingClientRect().height;
    let myThis = this;

    fixedHeader.style.transition = 'none';

    let awesomeFunc = function() {
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
    };

    window.addEventListener('scroll', awesomeFunc);

    myThis.props.setEventListener(awesomeFunc);

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.appReducer.eventListener);
  }
  render() {
    return (
      <Router>
        <div>

          <MaintenanceScreen includeButton={false} hiddenView="hidden-desktop"/>

          <div id="main">
            <header id="fixed-header">
              <div className="main-inner-header">
                <Link to="/" className="logo-box">
                  {/*<img className="fixed-sd-logo" src={logoPencil} alt=""/>*/}
                  <img className="fixed-sd-logo" src={logoV2A} alt=""/>
                  <h1 className="fixed-logo-h1 primary-color"><span className="fixed-logo-span">SINNOTT</span> DESIGN</h1>
                </Link>

                <nav className="sticky-nav">
                  <NavLink activeClassName="active-fixed-nav-link" to="/about" id="about-nav-link" className="nav-link">About</NavLink>
                  <NavLink activeClassName="active-fixed-nav-link" to="/projects" id="projects-nav-link" className="nav-link">Projects</NavLink>
                  <NavLink activeClassName="active-fixed-nav-link" to="/pricing" id="pricing-nav-link" className="nav-link">Pricing</NavLink>
                  <NavLink activeClassName="active-fixed-nav-link" to="/contact" id="contact-nav-link" className="nav-link">Contact</NavLink>
                </nav>
              </div>
            </header>

            <header className="main-header breakpoint-bound">
              <Link to="/" className="logo-box">
                {/*<img className="sd-logo" src={logoPencil} alt=""/>*/}
                <img className="sd-logo" src={logoV2A} alt=""/>
                <h1 className="logo-h1 primary-color"><span className="main-logo-span">SINNOTT</span><br/>DESIGN</h1>
              </Link>
              <nav className="main-nav">
                <NavLink activeClassName="active-nav-link" to="/about" className="nav-link">About</NavLink>
                <NavLink activeClassName="active-nav-link" to="/projects" className="nav-link">Projects</NavLink>
                <NavLink activeClassName="active-nav-link" to="/pricing" className="nav-link">Pricing</NavLink>
                <NavLink activeClassName="active-nav-link" to="/contact" className="nav-link">Contact</NavLink>
              </nav>
            </header>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/contact" component={Contact} />
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
    setEventListener: (eventListener) => {
      dispatch({
        type: "SET_EVENT_LISTENER",
        payload: eventListener
      });
    },
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
