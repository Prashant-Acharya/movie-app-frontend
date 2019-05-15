import React, { Component } from 'react'
import Carousel from '../Carousel/Carousel'
import Layout from '../Layout/Layout'


class HomeContent extends Component {
	state = {  }
	render() { 
		return (
			<Layout>
				<Carousel />
				<h1> Trending </h1>
				<h1> Recent </h1>
			</Layout>
		);
	}
}
 
export default HomeContent