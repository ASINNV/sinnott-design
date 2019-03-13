import React, { Component } from 'react';
import { connect } from "react-redux";
import logoV2A from '../Images/SD_LOGO_V2A.svg';

class DefaultHeader extends Component {

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
      <div className="default-header">
        <header id="fixed-header">
          <div className="main-inner-header">
            <div className="logo-box">
              {/*<img className="fixed-sd-logo" src={logoPencil} alt=""/>*/}
              <img className="fixed-sd-logo" src={logoV2A} alt=""/>
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

        <header className="main-header breakpoint-bound">
          <div className="logo-box">
            {/*<img className="sd-logo" src={logoPencil} alt=""/>*/}
            <img className="sd-logo" src={logoV2A} alt=""/>
            <h1 className="logo-h1 primary-txt"><span className="logo-span">SINNOTT</span><br/>DESIGN</h1>
          </div>
          <nav className="main-nav">
            <a href="#about" className="main-nav-link">About</a>
            <a href="#projects" className="main-nav-link">Projects</a>
            <a href="#pricing" className="main-nav-link">Pricing</a>
            <a href="#contact" className="main-nav-link">Contact</a>
          </nav>
        </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);