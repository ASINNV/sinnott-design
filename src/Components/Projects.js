import React, { Component } from 'react';
import WelcomeHeader from "./WelcomeHeader.js";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-body">
        <WelcomeHeader title="This is the title, does it work?" />
        <div className="full-projects-box breakpoint-bound">
          <div id="full-project-0" className="full-project-box">
            <div className="full-project">
              <h1 className="full-project-heading">Redwood Coast Chamber of Commerce</h1>
              <p className="full-project-para">Full project body with awesomeness.</p>
            </div>
          </div>
          <div id="full-project-1" className="full-project-box">
            <div className="full-project">
              <h1 className="full-project-heading">Edge & Center</h1>
              <p className="full-project-para">Full project body with awesomeness.</p>
            </div>
          </div>
          <div id="full-project-2" className="full-project-box">
            <div className="full-project">
              <h1 className="full-project-heading">Solano Press</h1>
              <p className="full-project-para">Full project body with awesomeness.</p>
            </div>
          </div>
          <div id="full-project-3" className="full-project-box">
            <div className="full-project">
              <h1 className="full-project-heading">Adventure Rents</h1>
              <p className="full-project-para">Full project body with awesomeness.</p>
            </div>
          </div>
          <div id="full-project-4" className="full-project-box">
            <div className="full-project secondary-color">
              <h1 className="full-project-heading">Mendonoma Health Alliance</h1>
              <p className="full-project-label">THE NEED</p>
              <p className="full-project-para">Mendonoma Health Alliance, a tele-health partnership between three major health organizations in the Mendocino and Sonoma counties, approached my company with the task of building a system, on a budget, that they could manage themselves and that would, A: provide their community members with a safe and secure space to share information and experiences with one another, B: provide the very same community with a navigable and intuitive directory of resources provided by MHA, and C: would enable MHA to disseminate important and targeted health-related information to specific groups in that community whenever necessary.</p>
              <p className="full-project-label">THE SOLUTION</p>
              <p className="full-project-para">My solution was to use WordPress as a foundation, because it’s a low-cost option with deep modularity, and a theme with built-in forum and user account functionality called Kleo as a structure. This gave me exactly what I needed to get the job done so, with the underlying technologies picked out, I went to work on designing the resource directory and the individual page structures. For the resource directory, I opted for a universal and live-reloading search field front-and-center at the top of the page to act as a shortcut for those who know for what they’re looking. For those who don’t, I included an array of informational links (I call them tiles), one for each category of resource on the website each leading to a page housing an array of yet more tiles, this time one for each resource within the parent category that display extra pertinent resource information on their backsides (which reveal themselves when one hovers their mouse over a tile) so one doesn’t have to go far for what's most important. Once that was worked out, I designed the rest of the pages, in concert with MHA, to match their particular style and built it all out by hand before launching the website with smiles all around.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}