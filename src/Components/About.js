import React, { Component } from 'react';
import { connect } from "react-redux";
import WelcomeHeader from "./WelcomeHeader.js";
import { MaintenanceScreen, ConstructionBanner } from "./MinorComponents.js";
import placeholderImage from "../Images/placeholder.png";

class About extends Component {
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
      <div className="about-body">
        <WelcomeHeader passedProps={{title: "A Different Kind of Company", subtitle: "Valuing Positive Impact Over Maximum Profit", backdrop: "about-backdrop"}} />

        <ConstructionBanner/>

        <section id="about" className="about-section major-section breakpoint-bound">
          <div className="about-text secondary-color">
            <h2 className="">Hello & Welcome!</h2>
            <p className="body-p">My name is Adrian Sinnott and this is my website. I’m a graphic designer, web designer, and web developer all rolled into one and I love my work. Over the years, I’ve had the pleasure of working with a number of companies in a wide range of industries, from <a className="text-link" href="https://mendonomahealth.org/" target="_blank" rel="noopener noreferrer">telehealth</a> to <a className="text-link" href="https://solano.com/" target="_blank" rel="noopener noreferrer">book publishing</a> to <a className="text-link" href="https://adventurerents.com/" target="_blank" rel="noopener noreferrer">adventure sports</a> to <a className="text-link" href="https://thegualalahotel.com/" target="_blank" rel="noopener noreferrer">accommodations</a>. Many of my solutions are relied upon by businesses large and small, in the public and private sectors.</p>
            <p className="body-p">I care deeply about my clients and about working diligently to fulfill my duty to them. When you contract my company for a project, you’re entering into an agreement with me, a man who prides himself on providing excellent service, who replies to emails and phone calls as soon as possible, and who goes above and beyond to get the job done right. I will not stop until my standards and, more importantly, your needs are met.</p>
            {/*<p className="body-p">So with that, please take a look around. On this website you’ll find*/}
            {/*information about the services I offer, you’ll get a peak into a few of my past projects, my*/}
            {/*pricing, and I’ll let you know how you can get in touch.</p>*/}
          </div>
          <div className="thick-vertical-spacer"></div>
          <div className="about-services">
            <h2 className="secondary-color">Service Offerings</h2>
            <div className="flex-list">
              <div className="service-item primary-bg">
                <img src={placeholderImage} alt=""/>
                <div>
                  <h5>Logo Design</h5>
                  <p className="body-p">Dynamic, functional, memorable. Logos that last & inspire.</p>
                </div>
              </div>
              <div className="service-item primary-bg">
                <img src={placeholderImage} alt=""/>
                <div>
                  <h5>Website Design</h5>
                  <p className="body-p">Intuitive, interactive, inviting. Websites designed to help.</p>
                  {/*<p className=body-p>Made to match your business or take it to a new level.</p>*/}
                </div>
              </div>
              <div className="service-item primary-bg">
                <img src={placeholderImage} alt=""/>
                <div>
                  <h5>Graphic Design</h5>
                  <p className="body-p">Versatile, visual, pixel-perfect. Graphics as nature intended.</p>
                </div>
              </div>
              <div className="service-item primary-bg">
                <img src={placeholderImage} alt=""/>
                <div>
                  <h5>Web Development</h5>
                  <p className="body-p">Modern, optimized, fully custom. Code for every occasion.</p>
                </div>
              </div>
              <div className="service-item primary-bg">
                <img src={placeholderImage} alt=""/>
                <div>
                  <h5>Web Management</h5>
                  <p className="body-p">Responsive, vigilant, supportive. Friendly fixes at the ready.</p>
                </div>
              </div>
              <div className="service-item primary-bg">
                <img src={placeholderImage} alt=""/>
                <div>
                  <h5>Free Consultation</h5>
                  <p className="body-p">Informative, actionable, accessible. All you need to know.</p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);