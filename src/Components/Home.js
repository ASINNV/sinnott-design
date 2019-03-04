import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-body">
        {/*<p>This is the homepage.</p>*/}
        <div className="welcome-div">
          <h1 className="welcome-h1">Hello <span className="emphasis">&</span> Welcome!</h1>
          <p className="welcome-p">At last, you're <span className="italic">finally</span> here. I've been waiting <span className="italic">all day</span>, you know… Never mind that now, all that matters is that you made it and you're okay.</p>
          <p className="welcome-p">I just wanted to let you know that you're going to love what I've done with the place. Take a look around my new digs, I've hidden things throughout that might pique your interest so don't be shy to look around. If you give up or just want to talk, skip to the <Link className="emphasis" to="/">contact form</Link> at the bottom of the page.</p>
          {/*<p className="welcome-p">You've made it to <span className="emphasis">Sinnott Design</span>, a wonderful place of <span className="emphasis">design and development</span> where all whims have a price and all worries a rest. Please, take a look around… you might just see something you like.</p>*/}
        </div>
        {/*<nav className="service-nav">*/}
          {/*<Link className="service-nav-link" to="/">Graphic Design</Link>*/}
          {/*<Link className="service-nav-link" to="/">Web Design</Link>*/}
          {/*<Link className="service-nav-link" to="/">Web Development</Link>*/}
        {/*</nav>*/}
      </div>
    );
  }
}