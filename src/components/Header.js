import React, { Component } from 'react';

class Header extends Component {
	render() {

		return (
			<header id="home">
				<nav id="nav-wrap">
					<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
					<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

					<ul id="nav" className="nav">
							<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
							<li><a className="smoothscroll" href="#about">About</a></li>
							<li><a className="smoothscroll" href="#resume">Resume</a></li>
							<li><a className="smoothscroll" href="#portfolio">Works</a></li>
					</ul>
				</nav>

				<div className="row banner">
					<div className="banner-text">
							<h1 className="responsive-headline">I'm Lucas Frey.</h1>
							<h3>I'm a Wellington based <span>Senior Front-end Developer</span>.</h3>
							<hr />
							<ul className="social">
								<li key="twitter"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FreyLucas"><i className="fa fa-twitter"></i></a></li>
								<li key="linkedin"><a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/lucas-frey"><i className="fa fa-linkedin"></i></a></li>
								<li key="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/frey.lucas"><i className="fa fa-instagram"></i></a></li>
								<li key="github"><a target="_blank" rel="noopener noreferrer" href="https://github.com/lucasfrey"><i className="fa fa-github"></i></a></li>
							</ul>
						</div>
					</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
				</p>
			</header>
		);
	}
}

export default Header;