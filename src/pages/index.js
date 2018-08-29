import React from 'react'
// import { Link } from 'gatsby'

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';

import Layout from '../components/layout'

const IndexPage = () => (
	<Layout>
		<Header />
		<About />
		<Resume />
		<Portfolio />
		<Footer />
	</Layout>
)

export default IndexPage
