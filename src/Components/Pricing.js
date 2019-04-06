import React, { Component } from 'react';
import { connect } from "react-redux";
import VisualHeader from "./VisualHeader.js";
import { MaintenanceScreen, ConstructionBanner } from "./MinorComponents.js";

class Pricing extends Component {
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
      <div className="pricing-body">
        <VisualHeader passedProps={{title: "The Essential Cost of Service", subtitle: "And Not a Penny, Dime, or Dollar More", backdrop: "pricing-backdrop"}} />

        <ConstructionBanner/>

        <section id="pricing" className="pricing-section major-section breakpoint-bound">
          {/*<h2 className="secondary-color">Pricing</h2>*/}
          <div className="pricing-box">

            <div className="pricing-triplet">
              <h3 className="sub-heading tertiary-color">Visual Production Services</h3>
              <div className="pricing-item">
                <div className="pricing-headline">
                  <h4 className="pricing-heading">Logo Design</h4>
                  <p className="pricing-price">$1250</p>
                </div>
                <p className="pricing-desc">First impressions matter. They just do.</p>
              </div>

              <div className="pricing-item">
                <div className="pricing-headline">
                  <h4 className="pricing-heading">Web Design</h4>
                  <p className="pricing-price">Quote</p>
                </div>
                <p className="pricing-desc">Put your visitors in a dream, not a maze.</p>
              </div>

              <div className="pricing-item">
                <div className="pricing-headline">
                  <h4 className="pricing-heading">Graphic Design</h4>
                  <p className="pricing-price">$40/hr.</p>
                </div>
                <p className="pricing-desc">People respond to beauty & effort.</p>
              </div>
            </div>

            <div className="thick-vertical-spacer"></div>

            <div className="pricing-triplet">
              <h3 className="sub-heading tertiary-color">Technical & Other Services</h3>
              <div className="pricing-item">
                <div className="pricing-headline">
                  <h4 className="pricing-heading">Web Development</h4>
                  <p className="pricing-price">Quote</p>
                </div>
                <p className="pricing-desc">Construction for the digital world.</p>
              </div>

              <div className="pricing-item">
                <div className="pricing-headline">
                  <h4 className="pricing-heading">Web Management</h4>
                  <p className="pricing-price">$50/hr.</p>
                </div>
                <p className="pricing-desc">Support for your online presence.</p>
              </div>

              <div className="pricing-item">
                <div className="pricing-headline">
                  <h4 className="pricing-heading">Free Consultation</h4>
                  <p className="pricing-price">FREE</p>
                </div>
                <p className="pricing-desc">Because knowledge is to be shared.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);