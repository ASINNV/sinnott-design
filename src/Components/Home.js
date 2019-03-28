import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WelcomeHeader from "../Components/WelcomeHeader.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLayerGroup, faPenNib, faPhone, faAt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import placeholderImage from "../Images/placeholder.png";
import logoMHA from "../Images/mha_logo.png";
import logoAR from "../Images/ar_logo.png";
import logoSolano from "../Images/solano_logo.jpg";
import logoR3C from "../Images/r3c_logo.svg";
import logoEdge from "../Images/edge_logo.png";


class Home extends Component {
  componentWillUnmount() {
    let myUrl = window.location.href;
    let hashCoordinate = myUrl.indexOf('#');
    if (hashCoordinate !== -1) {
      let pageAnchor = myUrl.slice(hashCoordinate + 1);
      console.log(pageAnchor);
      this.props.setPageAnchor(pageAnchor);
    }
  }
  componentWillMount() {
    window.scrollTo(0, 0);
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
  showProject(e) {
    let projects = document.getElementsByClassName('project');
    let target = e.target;
    var currentID;

    while (target.id === '') {
      target = target.parentNode;
    }

    if (target.id !== 'projects-bound') {
      currentID = Number(target.id.slice(8));
      target.style.left = (currentID * 10) + "%"; // this is done, don't touch!
      target.childNodes[0].style.opacity = 1;
    }

    for (let i = 0; i < projects.length; i++) {
      let projectID = Number(projects[i].id.slice(8));

      if (projectID < currentID) {
        projects[i].style.left = (projectID * 10) + "%";
        projects[i].childNodes[0].style.opacity = '0.25';
      }
      if (projectID > currentID) {
        projects[i].style.left = (100 - ((projects.length - projectID) * 10)) + "%";
        projects[i].childNodes[0].style.opacity = '0.25';
      }
    }

  }
  moveLabel(e) {
    if (e.target.id !== 'submit') {
      let target = e.target;
      let labels = document.getElementsByClassName('input-label');
      let inputs = document.getElementsByClassName('input-field');

      while (target.id === '') {
        target = target.parentNode;
      }

      // let currentID = Number(target.id.slice(6));
      let targetLabel = target.parentNode.childNodes[0];

      for (let i = 0; i < labels.length; i++) {
        if (inputs[i].value === '') {
          labels[i].style.transform = '';
          labels[i].style.color = '';
        }
      }

      targetLabel.style.transform = 'translateY(-10px) translateX(-15px)';
      targetLabel.style.color = '#fff';
      targetLabel.style.opacity = '1';
    }
  }
  returnLabels() {
    let labels = document.getElementsByClassName('input-label');
    let inputs = document.getElementsByClassName('input-field');

    for (let i = 0; i < labels.length; i++) {
      if (inputs[i].value === '') {
        labels[i].style.transform = '';
        labels[i].style.color = '';
      }
    }
  }
  sendForm() {
    let inputs = document.getElementsByClassName('input-field');
    let responseWindow = document.getElementById('response-window');
    let submitResponse = document.getElementById('submit-response');
    let submittedName= inputs[0].value;
    let submittedEmail = inputs[1].value;
    let submittedPhone = inputs[2].value;
    let submittedMessage = inputs[3].value;

    if (submittedName.length > 0 && submittedEmail.length > 0 && submittedPhone.length > 0 && submittedMessage.length > 0) {
      let obJSON = {
        "Messages": [
          {
            "From": {
              "Email": "adrian@sinnottdesign.com",
              "Name": "Sinnott Design"
            },
            "To": [
              {
                "Email": "adrian@sinnottdesign.com",
                "Name": "Adrian Sinnott"
              }
            ],
            "Subject": "Sinnott Design Form",
            "TextPart": submittedName + " (" + submittedEmail + ", " + submittedPhone + ") submitted the following: " + submittedMessage,
            "HTMLPart": "<h4 style='font-size: 1.25em;'>Contact Information</h4><p>" + submittedName + "</p><p>" + submittedEmail + "</p><p>" + submittedPhone + "</p><br/><h4 style='font-size: 1.25em;'>Message</h4><p>" + submittedMessage + "</p>"
          }
        ]
      };
      fetch('/api/send-email', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obJSON)
      })
        .then(function(response) {
          // return response.json();
          submitResponse.style.color = "#00cccc";
          submitResponse.textContent = "Thank you! I'll be in touch.";
          responseWindow.style.opacity = '1';
          setTimeout(function() {
            responseWindow.style.opacity = '0';
          }, 1500);
          for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
          }
        });
    } else {
      if (submitResponse.textContent !== "Missed a spot!") {
        submitResponse.textContent = "Missed a spot!";
      }
      submitResponse.style.color = "";
      responseWindow.style.opacity = '1';

      setTimeout(function() {
        responseWindow.style.opacity = '';
      }, 1500);
    }
  }
  render() {
    return (
      <div id="home" className="home-body">

        <WelcomeHeader passedProps={{title: "Welcome to the Website!", subtitle: "This is that place where dreams come true", backdrop: "home-backdrop"}} />
        <div className="section-group">
          <section id="about" className="about-section breakpoint-bound">
            <div className="about-text secondary-color">
              <h2 className="">Hello & Welcome!</h2>
              <p className="body-p">My name is Adrian Sinnott and this is my website. I’m a graphic designer, web designer, and web developer all rolled into one and I love my work. Over the years, I’ve had the pleasure of working with a number of companies in a wide range of industries, from <a href="https://mendonomahealth.org/" target="_blank" rel="noopener noreferrer">telehealth</a> to <a href="https://solano.com/" target="_blank" rel="noopener noreferrer">book publishing</a> to <a href="https://adventurerents.com/" target="_blank" rel="noopener noreferrer">adventure sports</a> to <a href="https://thegualalahotel.com/" target="_blank" rel="noopener noreferrer">accommodations</a>. Many of my solutions are relied upon by businesses large and small, in the public and private sectors.</p>
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

          <section id="projects" className="projects-section major-section breakpoint-bound">
            <h2 className="secondary-color">Previous Projects</h2>
            <div id="projects-bound" className="projects-box" onMouseOver={this.showProject.bind(this)}>
              <div className="project" id="project-0">

                <div className="project-contents">
                  <div className="project-column">
                    <div className="project-heading-box">
                      <img src={logoR3C} alt="" className="project-logo"/>
                      <h3 className="project-co">Redwood Coast Chamber of Commerce</h3>
                    </div>
                    <p className="body-p">A young and ambitious chamber of commerce devises a plan to unite all local business information in one central location for easy access and maximum impact. Solution is to be budget-friendly.</p>
                  </div>
                  <div className="project-column">
                    <div className="project-card">

                      <img className="project-card-image" src={placeholderImage} alt=""/>

                      <div className="project-icons-box">
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faCode} className="project-icon"/>
                          <p>Development</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faLayerGroup} className="project-icon"/>
                          <p>Web Design</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faPenNib} className="project-icon"/>
                          <p>Logo Design</p>
                        </div>
                      </div>

                      <Link to="/projects/#redwood" className="project-button">Learn More</Link>
                    </div>
                  </div>
                </div>

                <div className="project-bg-overlay"></div>

              </div>

              <div className="project" id="project-1">

                <div className="project-contents">
                  <div className="project-column">
                    <div className="project-heading-box">
                      <img src={logoEdge} alt="" className="project-logo"/>
                      <h3 className="project-co">Edge & Center Bodywork</h3>
                    </div>
                    <p className="body-p">A local bodywork specialist is setting up his online business and needs a simple and effective website (with a built-in Instagram feed) up-and-running as soon as possible on an ultra tight budget.</p>
                  </div>
                  <div className="project-column">

                    <div className="project-card">
                      <img className="project-card-image" src={placeholderImage} alt=""/>

                      <div className="project-icons-box">
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faCode} className="project-icon"/>
                          <p>Development</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faLayerGroup} className="project-icon"/>
                          <p>Web Design</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faPenNib} className="project-icon"/>
                          <p>Logo Design</p>
                        </div>
                      </div>

                      <Link to="/projects#bodywork" className="project-button">Learn More</Link>
                    </div>

                  </div>
                </div>

                <div className="project-bg-overlay"></div>

              </div>

              <div className="project" id="project-2">

                <div className="project-contents">
                  <div className="project-column">
                    <div className="project-heading-box">
                      <img src={logoSolano} alt="" className="project-logo"/>
                      <h3 className="project-co">Solano Press Publishing</h3>
                    </div>
                    <p className="body-p">A small publishing company loses support for its core software and must find something new, at the same time deciding to upgrade its website to join the modern world of e-commerce. Solution to be self-manageable and budget-friendly.</p>
                  </div>
                  <div className="project-column">

                    <div className="project-card">
                      <img className="project-card-image" src={placeholderImage} alt=""/>

                      <div className="project-icons-box">
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faCode} className="project-icon"/>
                          <p>Development</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faLayerGroup} className="project-icon"/>
                          <p>Web Design</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faPenNib} className="project-icon"/>
                          <p>Logo Design</p>
                        </div>
                      </div>

                      <Link to="/projects#solano" className="project-button">Learn More</Link>
                    </div>

                  </div>
                </div>

                <div className="project-bg-overlay"></div>

              </div>

              <div className="project" id="project-3">

                <div className="project-contents">
                  <div className="project-column">
                    <div className="project-heading-box">
                      <img src={logoAR} alt="" className="project-logo"/>
                      <h3 className="project-co">Adventure Rents Canoes</h3>
                    </div>
                    <p className="body-p">A river boating company’s first foray into e-commerce and online bookings combined with a massive design overhaul incorporating a large amount of existing content. Solution to be self-manageable and budget-friendly.</p>
                  </div>
                  <div className="project-column">

                    <div className="project-card">
                      <img className="project-card-image" src={placeholderImage} alt=""/>

                      <div className="project-icons-box">
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faCode} className="project-icon"/>
                          <p>Development</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faLayerGroup} className="project-icon"/>
                          <p>Web Design</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faPenNib} className="project-icon"/>
                          <p>Logo Design</p>
                        </div>
                      </div>

                      <Link to="/projects#adventure" className="project-button">Learn More</Link>
                    </div>

                  </div>
                </div>

                <div className="project-bg-overlay"></div>

              </div>

              <div className="project" id="project-4">

                <div className="project-contents">
                  <div className="project-column">
                    <div className="project-heading-box">
                      <img src={logoMHA} alt="" className="project-logo"/>
                      <h3 className="project-co">Mendonoma Health Alliance</h3>
                    </div>

                    {/*<p className="body-p">A safe, community-oriented platform for the co-sharing of personal stories, veteran advice, and more with an integrated directory of local health resources and pinpoint targeting tools. Solution to be self-manageable and budget-friendly.</p>*/}
                    <p className="body-p">A health partnership in search of a platform to unite, inform, and empower its local community in new and interesting ways using the power of the internet. Solution to be as budget-friendly as possible without compromising on quality.</p>
                  </div>
                  <div className="project-column">

                    <div className="project-card">
                      <img className="project-card-image" src={placeholderImage} alt=""/>

                      <div className="project-icons-box">
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faCode} className="project-icon"/>
                          <p>Development</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faLayerGroup} className="project-icon"/>
                          <p>Web Design</p>
                        </div>
                        <div className="project-icon-group">
                          <FontAwesomeIcon icon={faPenNib} className="project-icon"/>
                          <p>Logo Design</p>
                        </div>
                      </div>

                      <Link to="/projects#mendonoma" className="project-button">Learn More</Link>
                    </div>

                  </div>
                </div>

                <div className="project-bg-overlay"></div>

              </div>

            </div>
          </section>

          <section id="pricing" className="pricing-section major-section breakpoint-bound">
            <h2 className="secondary-color">Pricing</h2>
            <div className="pricing-box">

              <div className="pricing-triplet">
                <h3 className="sub-heading tertiary-color">Visual Production Services</h3>
                <div className="pricing-item">
                  <div className="pricing-headline">
                    <h4 className="pricing-heading">Logo Design</h4>
                    <p className="pricing-price">$2000</p>
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

          <section id="contact" className="contact-section major-section breakpoint-bound">
            <h2 className="secondary-color">Contact</h2>
            <div className="contact-box">
              <div className="contact-group">
                <div className="contact-form" onFocus={this.moveLabel.bind(this)} onBlur={this.returnLabels.bind(this)}>
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
                  <button id="submit" className="contact-button" onClick={this.sendForm.bind(this)}>Submit</button>
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
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);