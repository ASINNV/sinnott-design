import React, { Component } from 'react';
import { connect } from "react-redux";
import WelcomeHeader from "./WelcomeHeader.js";
import { MaintenanceScreen, ConstructionBanner } from "./MinorComponents.js";
import { moveLabel, returnLabels, sendForm } from "./Functions.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    let anchor = document.getElementById(this.props.appReducer.pageAnchor);

    if (anchor !== null) {
      window.scrollTo(0, anchor.getBoundingClientRect().top);
      this.props.setPageAnchor(null);
    }
  }
  componentDidMount() {
    let fixedHeader = document.getElementById('fixed-header');
    let fixedHeaderHeight = fixedHeader.getBoundingClientRect().height;

    if (this.props.appReducer.previousOffset > fixedHeaderHeight) {
      fixedHeader.style.opacity = "1";
      fixedHeader.style.pointerEvents = "auto";
      fixedHeader.style.transform = "translateY(0)";
    }
  }
  render() {
    return (
      <div className="contact-body">
        <WelcomeHeader passedProps={{title: "Providing Value to Every Caller", subtitle: "Support and Quotes You Can Count On", backdrop: "contact-backdrop"}} />

        <ConstructionBanner/>

        <section id="contact" className="contact-section major-section breakpoint-bound">
          <h2 className="secondary-color">Contact</h2>
          <div className="contact-box">
            <div className="contact-group">
              <div className="contact-form" onFocus={moveLabel.bind(this)} onBlur={returnLabels.bind(this)}>
                <h3 className="form-heading">Direct Message</h3>
                <div className="input-pair">
                  <label className="input-label" htmlFor="name">Full Name</label>
                  <input id="input-0" className="input-field" type="text" name="name"/>
                </div>
                <div className="input-pair">
                  <label className="input-label" htmlFor="email">Email Address</label>
                  <input id="input-1" className="input-field" type="text" name="email"/>
                </div>
                <div className="input-pair">
                  <label className="input-label" htmlFor="phone">Phone Number</label>
                  <input id="input-2" className="input-field" type="text" name="phone"/>
                </div>
                <div className="input-pair">
                  <label className="input-label" htmlFor="message">Your Message</label>
                  <textarea rows="4" id="input-3" className="input-field" type="text" name="message"/>
                </div>
                <button id="submit" className="contact-button" onClick={sendForm.bind(this)}>Submit</button>
                <div id="response-window">
                  <p id="submit-response"></p>
                </div>
              </div>
            </div>
            <div className="thick-vertical-spacer"></div>
            <div className="contact-group">
              <div className="contact-group-couplet">
                <h3 className="sub-heading tertiary-color">Philosophy</h3>
                {/*<p className="body-p">This life is all about building and strengthening relationships. So let's make a connection, regardless of your website or graphics needs. I want to share what I know with you and, in turn, learn what you know.</p>*/}
                <p className="body-p">This life is all about building and strengthening relationships, with each other and with all of nature. So whether you need my services or not, I'd love to hear from you. Call today.</p>
              </div>
              <div className="contact-group-couplet">
                <h3 className="sub-heading tertiary-color">Availability</h3>
                <div className="availability-couplet">

                  <div className="availability-item availability-day">
                    <FontAwesomeIcon icon={faClock} className="contact-info-icon"/>
                    <p>Monday–Friday</p>
                  </div>
                  <p className="availability-item availability-hours">9:00AM–6:00PM (On Duty)</p>
                </div>
                <div className="availability-couplet">
                  <div className="availability-item availability-day">
                    <FontAwesomeIcon icon={faClock} className="contact-info-icon"/>
                    <p>Saturday–Sunday</p>
                  </div>
                  <p className="availability-item availability-hours">10:00AM–4:00PM (On Call)</p>
                </div>
              </div>
              <div className="contact-group-couplet">
                <h3 className="sub-heading tertiary-color">Information</h3>
                <a href="tel:+17074120484" className="contact-info-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-info-icon"/>
                  <p>(707) 412-0484</p>
                </a>
                <a href="mailto:adrian@sinnottdesign.com" className="contact-info-item">
                  <FontAwesomeIcon icon={faAt} className="contact-info-icon"/>
                  <p>adrian@sinnottdesign.com</p>
                </a>
                <a href="https://www.facebook.com/sinnottdesign" className="contact-info-item" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} className="contact-info-icon"/>
                  <p>@SinnottDesign</p>
                </a>
              </div>
            </div>

          </div>
        </section>

        <MaintenanceScreen includeButton={true} hiddenView="hidden-desktop"/>
      </div>
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
    setPageAnchor: (pageAnchor) => {
      dispatch({
        type: "SET_PAGE_ANCHOR",
        payload: pageAnchor
      })
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);