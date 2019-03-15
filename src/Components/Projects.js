import React, { Component } from 'react';
import { connect } from "react-redux";
import WelcomeHeader from "./WelcomeHeader.js";

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
  render() {
    return (
      <div className="projects-body">
        <WelcomeHeader passedProps={{title: "Working Hard or Hardly Working", subtitle: "Where passion meets productivity", backdrop: "projects-backdrop"}} />
        <div className="section-group">
          <div className="mendonoma-section breakpoint-bound full-project-section">
            <div className="project-anchor" id="mendonoma"></div>
            <div id="full-project-4" className="full-project-box">
              <div className="full-project secondary-color">
                <h2 className="full-project-heading">Mendonoma Health Alliance</h2>
                <p className="full-project-label">THE NEED</p>
                <p className="full-project-para body-p">Mendonoma Health Alliance, a tele-health partnership between three major health organizations in the Mendocino and Sonoma counties, approached my company with the task of building a system, on a budget, that they could manage themselves and that would, A: provide their community members with a safe and secure space to share information and experiences with one another, B: provide the very same community with a navigable and intuitive directory of resources provided by MHA, and C: would enable MHA to disseminate important and targeted health-related information to specific groups in that community whenever necessary.</p>
                <p className="full-project-label">THE SOLUTION</p>
                <p className="full-project-para body-p">My solution was to use WordPress as a foundation, because it’s a low-cost option with deep modularity, and a theme with built-in forum and user account functionality called Kleo as a structure. This gave me exactly what I needed to get the job done so, with the underlying technologies picked out, I went to work on designing the resource directory and the individual page structures. For the resource directory, I opted for a universal and live-reloading search field front-and-center at the top of the page to act as a shortcut for those who know for what they’re looking. For those who don’t, I included an array of informational links (I call them tiles), one for each category of resource on the website each leading to a page housing an array of yet more tiles, this time one for each resource within the parent category that display extra pertinent resource information on their backsides (which reveal themselves when one hovers their mouse over a tile) so one doesn’t have to go far for what's most important. Once that was worked out, I designed the rest of the pages, in concert with MHA, to match their particular style and built it all out by hand before launching the website with smiles all around.</p>
              </div>
            </div>
          </div>
          <div className="adventure-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="adventure"></div>
            <div id="full-project-3" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Adventure Rents Canoes & Kayaks</h2>
                <p className="full-project-label">THE NEED</p>
                <p className="full-project-para body-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ut ornare mattis. Donec porttitor mattis finibus. Donec accumsan, tellus vel volutpat ultricies, turpis enim porta purus, quis porta risus metus sed ipsum. Duis nec tortor porttitor, tincidunt lorem a, mattis nulla. Morbi id tempor elit, quis tempus nisl. Quisque fermentum sem erat. Mauris quis tempor est. Duis mollis magna vitae nibh sagittis sollicitudin. Morbi consequat consequat lorem nec imperdiet. Praesent vestibulum accumsan eros eget suscipit. Maecenas ut pretium est. Phasellus tempor condimentum elit sed elementum. In sit amet egestas urna.</p>
                <p className="full-project-label">THE SOLUTION</p>
                <p className="full-project-para body-p">Curabitur convallis suscipit quam at posuere. Fusce lobortis fermentum magna, eu mattis ante mattis et. Sed ullamcorper tempor eros id molestie. Morbi rhoncus erat id commodo ultricies. Donec facilisis elit vitae auctor iaculis. Aliquam at sagittis felis, in viverra elit. Morbi pellentesque est tempor diam finibus sodales. Integer nec vulputate tellus, sed porttitor nunc. Quisque vel felis consectetur, egestas justo volutpat, dignissim ante. Pellentesque quis lacinia turpis. Suspendisse suscipit leo dui, quis mollis sem pellentesque sit amet. Nullam ante lectus, pharetra vel justo id, ullamcorper aliquet leo. Morbi auctor ex tincidunt sapien blandit, sollicitudin viverra velit euismod. Fusce eget ligula luctus est venenatis accumsan eget vitae diam. Curabitur interdum rutrum neque, a varius ipsum dictum et. Donec pulvinar volutpat ornare.</p>
              </div>
            </div>
          </div>
          <div className="solano-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="solano"></div>
            <div id="full-project-2" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Solano Press Publishing</h2>
                <p className="full-project-label">THE NEED</p>
                <p className="full-project-para body-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ut ornare mattis. Donec porttitor mattis finibus. Donec accumsan, tellus vel volutpat ultricies, turpis enim porta purus, quis porta risus metus sed ipsum. Duis nec tortor porttitor, tincidunt lorem a, mattis nulla. Morbi id tempor elit, quis tempus nisl. Quisque fermentum sem erat. Mauris quis tempor est. Duis mollis magna vitae nibh sagittis sollicitudin. Morbi consequat consequat lorem nec imperdiet. Praesent vestibulum accumsan eros eget suscipit. Maecenas ut pretium est. Phasellus tempor condimentum elit sed elementum. In sit amet egestas urna.</p>
                <p className="full-project-label">THE SOLUTION</p>
                <p className="full-project-para body-p">Curabitur convallis suscipit quam at posuere. Fusce lobortis fermentum magna, eu mattis ante mattis et. Sed ullamcorper tempor eros id molestie. Morbi rhoncus erat id commodo ultricies. Donec facilisis elit vitae auctor iaculis. Aliquam at sagittis felis, in viverra elit. Morbi pellentesque est tempor diam finibus sodales. Integer nec vulputate tellus, sed porttitor nunc. Quisque vel felis consectetur, egestas justo volutpat, dignissim ante. Pellentesque quis lacinia turpis. Suspendisse suscipit leo dui, quis mollis sem pellentesque sit amet. Nullam ante lectus, pharetra vel justo id, ullamcorper aliquet leo. Morbi auctor ex tincidunt sapien blandit, sollicitudin viverra velit euismod. Fusce eget ligula luctus est venenatis accumsan eget vitae diam. Curabitur interdum rutrum neque, a varius ipsum dictum et. Donec pulvinar volutpat ornare.</p>
              </div>
            </div>
          </div>
          <div className="bodywork-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="bodywork"></div>
            <div id="full-project-1" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Edge & Center Bodywork</h2>
                <p className="full-project-label">THE NEED</p>
                <p className="full-project-para body-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ut ornare mattis. Donec porttitor mattis finibus. Donec accumsan, tellus vel volutpat ultricies, turpis enim porta purus, quis porta risus metus sed ipsum. Duis nec tortor porttitor, tincidunt lorem a, mattis nulla. Morbi id tempor elit, quis tempus nisl. Quisque fermentum sem erat. Mauris quis tempor est. Duis mollis magna vitae nibh sagittis sollicitudin. Morbi consequat consequat lorem nec imperdiet. Praesent vestibulum accumsan eros eget suscipit. Maecenas ut pretium est. Phasellus tempor condimentum elit sed elementum. In sit amet egestas urna.</p>
                <p className="full-project-label">THE SOLUTION</p>
                <p className="full-project-para body-p">Curabitur convallis suscipit quam at posuere. Fusce lobortis fermentum magna, eu mattis ante mattis et. Sed ullamcorper tempor eros id molestie. Morbi rhoncus erat id commodo ultricies. Donec facilisis elit vitae auctor iaculis. Aliquam at sagittis felis, in viverra elit. Morbi pellentesque est tempor diam finibus sodales. Integer nec vulputate tellus, sed porttitor nunc. Quisque vel felis consectetur, egestas justo volutpat, dignissim ante. Pellentesque quis lacinia turpis. Suspendisse suscipit leo dui, quis mollis sem pellentesque sit amet. Nullam ante lectus, pharetra vel justo id, ullamcorper aliquet leo. Morbi auctor ex tincidunt sapien blandit, sollicitudin viverra velit euismod. Fusce eget ligula luctus est venenatis accumsan eget vitae diam. Curabitur interdum rutrum neque, a varius ipsum dictum et. Donec pulvinar volutpat ornare.</p>
              </div>
            </div>
          </div>
          <div className="redwood-section breakpoint-bound full-project-section major-section">
            <div className="project-anchor" id="redwood"></div>
            <div id="full-project-0" className="full-project-box">
              <div className="full-project">
                <h2 className="full-project-heading">Redwood Chamber of Commerce</h2>
                <p className="full-project-label">THE NEED</p>
                <p className="full-project-para body-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ut ornare mattis. Donec porttitor mattis finibus. Donec accumsan, tellus vel volutpat ultricies, turpis enim porta purus, quis porta risus metus sed ipsum. Duis nec tortor porttitor, tincidunt lorem a, mattis nulla. Morbi id tempor elit, quis tempus nisl. Quisque fermentum sem erat. Mauris quis tempor est. Duis mollis magna vitae nibh sagittis sollicitudin. Morbi consequat consequat lorem nec imperdiet. Praesent vestibulum accumsan eros eget suscipit. Maecenas ut pretium est. Phasellus tempor condimentum elit sed elementum. In sit amet egestas urna.</p>
                <p className="full-project-label">THE SOLUTION</p>
                <p className="full-project-para body-p">Curabitur convallis suscipit quam at posuere. Fusce lobortis fermentum magna, eu mattis ante mattis et. Sed ullamcorper tempor eros id molestie. Morbi rhoncus erat id commodo ultricies. Donec facilisis elit vitae auctor iaculis. Aliquam at sagittis felis, in viverra elit. Morbi pellentesque est tempor diam finibus sodales. Integer nec vulputate tellus, sed porttitor nunc. Quisque vel felis consectetur, egestas justo volutpat, dignissim ante. Pellentesque quis lacinia turpis. Suspendisse suscipit leo dui, quis mollis sem pellentesque sit amet. Nullam ante lectus, pharetra vel justo id, ullamcorper aliquet leo. Morbi auctor ex tincidunt sapien blandit, sollicitudin viverra velit euismod. Fusce eget ligula luctus est venenatis accumsan eget vitae diam. Curabitur interdum rutrum neque, a varius ipsum dictum et. Donec pulvinar volutpat ornare.</p>
              </div>
            </div>
          </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);