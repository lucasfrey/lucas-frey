import React, { Component } from 'react';

class Resume extends Component {
	render() {
		return (
			<section id="resume">

				<div className="row work">

					<div className="three columns header-col">
						<h1><span>Work</span></h1>
					</div>

					<div className="nine columns main-col">
						<div key="Heyday2"><h3>Senior front-end developer</h3>
							<p className="info">Heyday Ltd. - New Zealand<span>&bull;</span> <em className="date">10 mos</em></p>
							<p>
								Responsible for front-end builds in React, Redux and VueJS <br />
								Subscribed to modern workflows including automation via webpack, BEM implementation with Sass and LESS, and version control via Git and GitLab<br />
								Experiment HeadlessCMS using Prismic.io and handlebars template engine <br />
								Ensure code stability using test suites like Jest and implementing CD Pipeline with Buddy
							</p>
						</div>
						<div key="Heyday1"><h3>Full stack developer</h3>
							<p className="info">Heyday Ltd. - New Zealand<span>&bull;</span> <em className="date">3 yrs 7 mos</em></p>
							<p>
								Designed and developed views/templates using the SilverStripe CMS and template engine. <br />
								Executed and contributed to full-stack web development projects, with an emphasis on front end features and cross-browser compatibility.
						</p>
						</div>
						<div key="Skazy"><h3>Web developer</h3>
							<p className="info">Skazy - New Caledonia<span>&bull;</span> <em className="date">2 yrs 7 mos</em></p>
							<p>
								Workflow tools included: HTML, CSS, Bootstrap, jQuery, Mootools<br />
							</p>
						</div>
					</div>
				</div>

				<div className="row education">
					<div className="three columns header-col">
						<h1><span>Education</span></h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">
								<div key="University"><h3>University degree in Web Development</h3>
									<p className="info">DEESWEB <span>&bull;</span><em className="date">2011</em></p>
									<p>Basics of web development</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1><span>Skills</span></h1>
					</div>
					<div className="nine columns main-col">
						<p>this is my skills
						</p>
						<div className="bars">
							<ul className="skills">
								<li key="HTML5"><span style={{ width: '85%' }} className="bar-expand HTML5"></span><em>HTML5</em></li>
								<li key="ReactJS"><span style={{ width: '75%' }} className="bar-expand HTML5"></span><em>ReactJS - Redux</em></li>
								<li key="VueJS"><span style={{ width: '55%' }} className="bar-expand HTML5"></span><em>VueJS</em></li>
								<li key="CSS"><span style={{ width: '90%' }} className="bar-expand HTML5"></span><em>CSS</em></li>
								<li key="Git"><span style={{ width: '67%' }} className="bar-expand HTML5"></span><em>Git</em></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row volunteer">
					<div className="three columns header-col">
						<h1><span>Volunteering</span></h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">
								<div key="codeclub"><h3>Code Club</h3>
									<p className="info">Tutor <span>&bull;</span><em className="date">2016 - Now</em></p>
									<p>
										Tutor in a code club in Wellington, supporting kids from 9 to 12 years to achieve projects in
										Python, HTML and Scratch
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
