import React, { Component } from 'react';
import { connect } from "react-redux";
import WelcomeHeader from "./WelcomeHeader.js";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class PagePlug extends Component {
  render() {
    return (
      <div className="plug-box">
        <div className="plug">
          <p className="plug-heading secondary-color">Ready to discuss your next great project?</p>
          <Link to="/" className="plug-button slide-button">
            <p className="slide-button-text">Learn More</p>
            <FontAwesomeIcon icon={faArrowRight} className="slide-button-arrow"/>
          </Link>
        </div>
      </div>
    );
  }
}

class Projects extends Component {
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
      <div className="projects-body">
        <WelcomeHeader passedProps={{title: "Stories of Toil & Testament", subtitle: "Where Passion Meets Productivity", backdrop: "projects-backdrop"}} />
        <div className="section-group">
          <div className="mendonoma-section breakpoint-bound full-project-section">
            <div className="project-anchor" id="mendonoma"></div>
            <div id="full-project-4" className="full-project-box">
              <div className="full-project secondary-color">
                <h2 className="full-project-heading">Mendonoma Health Alliance</h2>
                <div className="full-project-group">
                  <p className="full-project-label">THE NEED</p>
                  <p className="full-project-para body-p">Mendonoma Health Alliance, a tele-health partnership between three major health organizations in the Mendocino and Sonoma counties, approached my company with the task of building a system, on a budget, that they could manage themselves and that would, A: provide their community members with a safe and secure space to share information and experiences with one another, B: provide the very same community with a navigable and intuitive directory of resources provided by MHA, and C: would enable MHA to disseminate important and targeted health-related information to specific groups in that community whenever necessary.</p>
                </div>
                <div className="full-project-group">
                  <p className="full-project-label">THE SOLUTION</p>
                  <p className="full-project-para body-p">My solution was to use WordPress as a foundation, because it’s a low-cost option with deep modularity, and a theme with built-in forum and user account functionality called Kleo as a structure. This gave me exactly what I needed to get the job done so, with the underlying technologies picked out, I went to work on designing the resource directory and the individual page structures. For the resource directory, I opted for a universal and live-reloading search field front-and-center at the top of the page to act as a shortcut for those who know for what they’re looking. For those who don’t, I included an array of informational links (I call them tiles), one for each category of resource on the website each leading to a page housing an array of yet more tiles, this time one for each resource within the parent category that display extra pertinent resource information on their backsides (which reveal themselves when one hovers their mouse over a tile) so one doesn’t have to go far for what's most important. Once that was worked out, I designed the rest of the pages, in concert with MHA, to match their particular style and built it all out by hand before launching the website with smiles all around.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="adventure-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="adventure"></div>
            <div id="full-project-3" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Adventure Rents Canoes & Kayaks</h2>
                <div className="full-project-group">
                  <p className="full-project-label">THE NEED</p>
                  <p className="full-project-para body-p">Adventure Rents came to my company with an existing website that was beautiful in its time but rather dated today. It was clear to me that a redesign was in their future. A lot of the information and imagery on the existing website was near and dear to their hearts and so was requested to have a place in the new incarnation. However, that’s not all they had in mind. They were also interested in joining the world of e-commerce by giving their customers the option to book boating appointments, and pay for them, all on the Adventure Rents website. Oh, and they wanted to be able to manage the entire stack all by themselves. All of this was to be done on a budget and before the next boating season which was due to commence in the summer of 2019.</p>
                </div>
                <div className="full-project-group">
                  <p className="full-project-label">THE SOLUTION</p>
                  <p className="full-project-para body-p">As a budget-friendly project, with the need for self-management capabilities, the go-to platform was clear: Wordpress. It affords the website administrator a suite of powerful tools that allow him/her to change everything from settings to page content to booking appointments to aesthetics. Bottom line, it’s powerful software at a low cost. So with the platform picked out, I went out in search of a theme that had everything we needed: booking and payment capabilities built-in and an exciting design to appeal to boaters in the modern era. I happened upon a great theme called Embark which had it all, including a wonderful visual editor plugin perfect for this project so I went with it. Now, all that was left to do was to design the user experience and individual page layouts, hook up a payment gateway and configure the integration accordingly, and teach Adventure Rents how to use this bad boy. We completed the project in March of 2019, on budget and before the summer boating season.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="solano-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="solano"></div>
            <div id="full-project-2" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Solano Press Publishing</h2>
                <div className="full-project-group">
                  <p className="full-project-label">THE NEED</p>
                  <p className="full-project-para body-p">Ling-Yen approached me with an unusual project of migrating her business away from their soon-to-be extinct publishing, inventory management, and reporting software called PubAssist and toward a new solution that would need to have all the same bells and whistles with a few additional, must-have features. They also needed a new website, designed for minimalism, that would allow them to sell their products online and training in everything, from updating the website to using the new publishing software. For said software, they provided me with a long list of capabilities they “must see”, “want to see”, and “would like to see if possible”. This project was on a tight budget, as so many are, and was to be completed by the end of the fiscal year.</p>
                </div>
                <div className="full-project-group">
                  <p className="full-project-label">THE SOLUTION</p>
                  <p className="full-project-para body-p">My first step was to break up the project into the following phases: research, implementation, training, and support. At the outset of my research, I immediately thought of Shopify (an intuitive e-commerce platform with built-in reporting, customer relations, and inventory management features) for their website replacement because it only costs a low monthly fee, is well-supported, and allows them to sell books online. I then searched for software like PubAssist and, after an exhaustive investigation of nearly every option available, I came back to one of the first I saw: DashBook. A single program that did everything, had support, and was the least dated of all for a one-time fee of $500. Who doesn’t like a one-time fee, am I right? So on we went to implementation, where Nancy (Solano’s administrator) and I worked diligently to iron out wrinkles in the programs and their mutual integration so that everything worked and did so in concert. Then came the training phase, which required many trips out to Solano's headquarters, where Nancy and I would go over how to accomplish her daily work using the new program and platform. In the end, the project took way longer than expected—about a year longer—but we managed to get to the finish line. Now Ling-Yen can rest easy knowing that her business is no longer reliant on software slated for the scrap heap.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bodywork-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="bodywork"></div>
            <div id="full-project-1" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Edge & Center Bodywork</h2>
                <div className="full-project-group">
                  <p className="full-project-label">THE NEED</p>
                  <p className="full-project-para body-p">Greg Hagaman’s business was in need of a place to sell his services to his customers, to tell them a little bit about his experience and training, and to give them his contact information in case they wished to hire him. He had no website whatsoever and thus no representation online. My colleague set him up with Facebook and Instagram accounts which was a start but he really needed a place to call his own, a place that would represent his company in the best possible light. He also needed it up in a hurry so that customers searching right this moment could find something, anything, at least how to get in touch with him.</p>
                </div>
                <div className="full-project-group">
                  <p className="full-project-label">THE SOLUTION</p>
                  <p className="full-project-para body-p">The need for a quick fix led me straight to one of my pre-built custom websites, something I call a “mini site”. Mini sites are minimalist, lightweight and ultra fast, quick to set up, and extremely affordable. Each one contains a number of different sections to inform the visitor of what’s most important: there’s a section to explain the business or individual and their services, a section with contact information and social media links, and a section for an Instagram feed or other social media integration that automatically updates whenever a new post is added to the linked account. Additional beauty lies in the fact that mini sites are extensible, so at any time it can be built upon and built upon until you have yourself a fully-fledged website with all the bells and whistles you can imagine. In the end, Greg received the budget-friendly solution he was searching for in the necessary time frame and now his business has elegant representation online.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="redwood-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="redwood"></div>
            <div id="full-project-0" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Redwood Chamber of Commerce</h2>
                <div className="full-project-group">
                  <p className="full-project-label">THE NEED</p>
                  <p className="full-project-para body-p">The chamber, as we call them, was looking to do something big on a budget. They wanted to create a website that would be the business information hub for miles around. In the plans was a searchable, filterable, and visually-navigable directory with every local business’ information and upcoming events so visitors would only have to go to one place to get it all. Businesses would have to be able to create an account on the chamber’s website which would then give them a profile page and the ability to create their own listings, the collective pool of which would populate the website’s global directory where visitors search. They also wanted it to be self-manageable and were able to save some money by opting to add the website’s content themselves.</p>
                </div>
                <div className="full-project-group">
                  <p className="full-project-label">THE SOLUTION</p>
                  <p className="full-project-para body-p">As with most self-manageable, budget-friendly projects, my mind went straight to Wordpress as the platform to use. Not only is it both of the aforementioned things, it is also deeply extensible meaning that it can be added onto in many ways to do many things. With the platform decided, I shopped around for a theme that would provide the necessary functionality out-of-the-box. Turns out there were a few themes built specifically for this purpose, one of which was in use by a neighboring city’s chamber so we went with the one that had yet to be used in an effort to set ourselves apart in as many ways as we could. With the platform and theme handled, I worked to build out each of the pages they requested with placeholder content that they planned to replace once my work was finished. With everything built and ready, it was time to hand the website off. However, something unexpected happened: the website got hacked. Long story short, many backups and added security measures later, the website is now more secure than ever before and completely airtight to our hacker friends. The project was completed within the allotted budget and, though it ran longer than expected, didn’t have a deadline.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <PagePlug />
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);