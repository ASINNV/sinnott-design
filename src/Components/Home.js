import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLayerGroup, faPenNib } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";

export default class Home extends Component {
  showProject(e) {
    let projects = document.getElementsByClassName('project');
    let target = e.target;

    while (target.id === '') {
      target = target.parentNode;
    }

    var currentID = Number(target.id.slice(8));

    target.style.left = (currentID * 10) + "%"; // this is done, don't touch!
    target.childNodes[0].style.opacity = 1;

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
  render() {
    return (
      <div className="home-body">
        <section className="flex-section">
          <div className="about-section">
            <h2>Hello & Welcome!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec quis rhoncus neque. Quisque ultrices quis sem vitae efficitur.
              Morbi ac tellus dui. Fusce accumsan finibus tellus, sit amet mollis mi dapibus eu.
              Nulla sed malesuada erat, non sagittis quam. Donec maximus lorem felis, ut vulputate
              felis vestibulum vel. Etiam eu posuere nunc, convallis pharetra tellus. Maecenas
              lobortis nulla nibh, a euismod dolor aliquet eget. Duis congue purus nec eros feugiat,
              ac pulvinar est efficitur. Nulla id lorem at mauris rhoncus iaculis. Aenean ut metus
              tincidunt, dignissim risus id, mollis neque.</p>
            <p>Proin ut dictum enim. Vestibulum sagittis fermentum laoreet. Mauris consequat aliquam
              nisi, nec mollis massa tempus nec. Nullam rutrum tellus vel odio semper.</p>
          </div>
          <div className="quick-guide">
            <h2>Quick Guide</h2>
            <div className="flex-list">
              <div className="quick-item primary-bg">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Logo Design</h5>
                  <p>Dynamic, functional, memorable. Logos that last & inspire.</p>
                </div>
              </div>
              <div className="quick-item primary-bg">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Website Design</h5>
                  <p>Intuitive, interactive, inviting. Websites designed to help.</p>
                  {/*<p>Made to match your business or take it to a new level.</p>*/}
                </div>
              </div>
              <div className="quick-item primary-bg">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Web Development</h5>
                  <p>Modern, optimized, fully custom. Code for every occasion.</p>
                </div>
              </div>
              <div className="quick-item primary-bg">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Graphic Design</h5>
                  <p>Versatile, visual, pixel perfect. Graphics as nature intended.</p>
                </div>
              </div>
              <div className="quick-item primary-bg">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Web Management</h5>
                  <p>Responsive, vigilant, supportive. Friendly fixes at the ready.</p>
                </div>
              </div>
              <div className="quick-item primary-bg">
                <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>
                <div>
                  <h5>Free Consultation</h5>
                  <p>Informative, actionable, accessible. All you need to know.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="projects-section">
          <h2>Previous Projects</h2>
          <div className="projects-box" onMouseOver={this.showProject.bind(this)}>
            <div className="project" id="project-0">

              <div className="project-contents">
                <div className="project-column">
                  <h3 className="project-co">Company Name</h3>
                  <p className="project-p">Proin ut dictum enim. Vestibulum sagittis fermentum laoreet. Mauris consequat aliquam nisi, nec mollis massa tempus nec.
                  </p>
                  <p className="project-p">
                    Nullam rutrum tellus vel odio semper, at lacinia urna bibendum. Maecenas dapibus finibus lobortis. Suspendisse vel purus id felis.
                  </p>
                </div>
                <div className="project-column">
                  <div className="project-card">

                    <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>

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

                    <p className="project-button">Learn More</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="project" id="project-1">

              <div className="project-contents">
                <div className="project-column">
                  <h3 className="project-co">Company Name</h3>
                  <p className="project-p">Proin ut dictum enim. Vestibulum sagittis fermentum laoreet. Mauris consequat aliquam nisi, nec mollis massa tempus nec.
                  </p>
                  <p className="project-p">
                    Nullam rutrum tellus vel odio semper, at lacinia urna bibendum. Maecenas dapibus finibus lobortis. Suspendisse vel purus id felis.
                  </p>
                </div>
                <div className="project-column">

                  <div className="project-card">
                    <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>

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

                    <p className="project-button">Learn More</p>
                  </div>

                </div>
              </div>

            </div>

            <div className="project" id="project-2">

              <div className="project-contents">
                <div className="project-column">
                  <h3 className="project-co">Company Name</h3>
                  <p className="project-p">Proin ut dictum enim. Vestibulum sagittis fermentum laoreet. Mauris consequat aliquam nisi, nec mollis massa tempus nec.
                  </p>
                  <p className="project-p">
                    Nullam rutrum tellus vel odio semper, at lacinia urna bibendum. Maecenas dapibus finibus lobortis. Suspendisse vel purus id felis.
                  </p>
                </div>
                <div className="project-column">

                  <div className="project-card">
                    <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>

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

                    <p className="project-button">Learn More</p>
                  </div>

                </div>
              </div>

            </div>

            <div className="project" id="project-3">

              <div className="project-contents">
                <div className="project-column">
                  <h3 className="project-co">Company Name</h3>
                  <p className="project-p">Proin ut dictum enim. Vestibulum sagittis fermentum laoreet. Mauris consequat aliquam nisi, nec mollis massa tempus nec.
                  </p>
                  <p className="project-p">
                    Nullam rutrum tellus vel odio semper, at lacinia urna bibendum. Maecenas dapibus finibus lobortis. Suspendisse vel purus id felis.
                  </p>
                </div>
                <div className="project-column">

                  <div className="project-card">
                    <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>

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

                    <p className="project-button">Learn More</p>
                  </div>

                </div>
              </div>

            </div>

            <div className="project" id="project-4">

              <div className="project-contents">
                <div className="project-column">
                  <h3 className="project-co">Company Name</h3>
                  <p className="project-p">Proin ut dictum enim. Vestibulum sagittis fermentum laoreet. Mauris consequat aliquam nisi, nec mollis massa tempus nec.
                  </p>
                  <p className="project-p">
                    Nullam rutrum tellus vel odio semper, at lacinia urna bibendum. Maecenas dapibus finibus lobortis. Suspendisse vel purus id felis.
                  </p>
                </div>
                <div className="project-column">

                  <div className="project-card">
                    <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt=""/>

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

                    <p className="project-button">Learn More</p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    );
  }
}