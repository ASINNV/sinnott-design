import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import logoV2A from '../Images/SD_LOGO_V2A.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

class BackgroundHeader extends Component {
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.appReducer.eventListener);
  }
  componentDidMount() {

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

  render() {
    return (
      <div className={this.props.passedProps.backdrop}>
        <div className="welcome-header">
          <div className="header-content">
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
                <h1 className="logo-h1 primary-color"><span className="welcome-logo-span">SINNOTT</span><br/>DESIGN</h1>
              </Link>
              <nav className="main-nav">
                <NavLink activeClassName="active-nav-link" to="/about" className="nav-link">About</NavLink>
                <NavLink activeClassName="active-nav-link" to="/projects" className="nav-link">Projects</NavLink>
                <NavLink activeClassName="active-nav-link" to="/pricing" className="nav-link">Pricing</NavLink>
                <NavLink activeClassName="active-nav-link" to="/contact" className="nav-link">Contact</NavLink>
              </nav>
            </header>

            <section id="welcome" className="welcome-section">
              <div className="welcome-text">
                <h1 className="welcome-title">{this.props.passedProps.title}</h1>
                <h2 className="welcome-subtitle">{this.props.passedProps.subtitle}</h2>
                {/*<p className="welcome=arrow">&darr;</p>*/}
              </div>
            </section>

            <div className="welcome-group">
              <p className="welcome-teaser">FOLLOW ME</p>
              <FontAwesomeIcon icon={faArrowDown} className="welcome-arrow"/>
            </div>

          </div>
          <div className="header-overlay"></div>
        </div>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundHeader);