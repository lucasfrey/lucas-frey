import React, { Component } from 'react';

class Footer extends Component {
	render() {

		return (
			<footer>
				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">
							<li key="twitter"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FreyLucas"><i className="fa fa-twitter"></i></a></li>
							<li key="linkedin"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucas-frey"><i className="fa fa-linkedin"></i></a></li>
							<li key="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/frey.lucas"><i className="fa fa-instagram"></i></a></li>
							<li key="github"><a target="_blank" rel="noopener noreferrer" href="https://github.com/lucasfrey"><i className="fa fa-github"></i></a></li>
						</ul>
						<ul className="copyright">
							<li>Bottom of the internet</li>
						</ul>
					</div>
					<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
				</div>
			</footer>
		);
	}
}

export default Footer;
