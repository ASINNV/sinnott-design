import React, { Component } from 'react';
// import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <section className="flex-section">
          <div className="about-section">
            <h2>HELLO & WELCOME!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis rhoncus neque. Quisque ultrices quis sem vitae efficitur. Morbi ac tellus dui. Fusce accumsan finibus tellus, sit amet mollis mi dapibus eu. Nulla sed malesuada erat, non sagittis quam. Donec maximus lorem felis, ut vulputate felis vestibulum vel. Etiam eu posuere nunc, convallis pharetra tellus. Maecenas lobortis nulla nibh, a euismod dolor aliquet eget. Duis congue purus nec eros feugiat, ac pulvinar est efficitur. Nulla id lorem at mauris rhoncus iaculis. Aenean ut metus tincidunt, dignissim risus id, mollis neque.</p>
            <p>Proin ut dictum enim. Vestibulum sagittis fermentum laoreet. Mauris consequat aliquam nisi, nec mollis massa tempus nec. Nullam rutrum tellus vel odio semper, at lacinia urna bibendum. Maecenas dapibus finibus lobortis. Suspendisse vel purus id felis imperdiet accumsan. Etiam tincidunt quam augue, id imperdiet nisl lacinia pulvinar.</p>
          </div>
          <div className="quick-guide">
            <h2>QUICK GUIDE</h2>
            <div className="flex-list">
              <div className="quick-item">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Logo Design</h5>
                  <p>Dynamic, functional, memorable. Logos that last & inspire.</p>
                </div>
              </div>
              <div className="quick-item">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Website Design</h5>
                  <p>Intuitive, interactive, inviting. Websites designed to help.</p>
                  {/*<p>Made to match your business or take it to a new level.</p>*/}
                </div>
              </div>
              <div className="quick-item">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Web Development</h5>
                  <p>Modern, optimized, fully custom. Code for every occasion.</p>
                </div>
              </div>
              <div className="quick-item">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Graphic Design</h5>
                  <p>Versatile, visual, pixel perfect. Graphics as nature intended.</p>
                </div>
              </div>
              <div className="quick-item">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Web Management</h5>
                  <p>Responsive, vigilant, supportive. Friendly fixes at the ready.</p>
                </div>
              </div>
              <div className="quick-item">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Free Consultation</h5>
                  <p>Informative, actionable, accessible. All you need to know.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    );
  }
}