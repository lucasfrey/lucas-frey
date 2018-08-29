import React, { Component } from 'react';
import gw from "../images/portfolio/gw.png"

class Portfolio extends Component {
	render() {

		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check out some of my personal projects.</h1>
						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							<div key="enroller" className="columns portfolio-item">
								<div className="item-wrap">
									<a href="https://great-walks-nz.netlify.com/" target="_blank" rel="noopener noreferrer" title="enroller">
										<img alt="enroller" src={gw} />
										<div className="overlay">
											<div className="portfolio-item-meta">
												<h5>Great Walks NZ</h5>
												<p>Data visualisation of Public Camp site in New Zealand</p>
											</div>
										</div>
										<div className="link-icon"><i className="fa fa-link"></i></div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
