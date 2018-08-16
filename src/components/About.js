import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
              <img className="profile-pic" src="./images/lucas.jpg" alt="Lucas Frey Profile Pic" />
          </div>
          <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>Highly-motivated front-end developer with international experience, I have a proven track record in writing good quality code and working as part of a team. Web performance advocate and Google Analytics certified, I'm always looking to boost my skills and experience in web development.</p>
              <div className="row">
                <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                  <span>Lucas Frey</span><br />
                  <span>29A Rintoul Street<br />
                        Wellington, 6021<br />
                        New Zealand
                    </span><br />
                  <span>+64 21 294 2488</span><br />
                  <span>frey.luca@gmail.com</span>
                </p>
                </div>
                <div className="columns download">
                    <p>
                      <a href="resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                    </p>
                </div>
              </div>
          </div>
        </div>
    </section>
    );
  }
}

export default About;
