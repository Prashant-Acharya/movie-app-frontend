import React, { Component } from 'react'
import Carousel from '../Carousel/Carousel'
import Layout from '../Layout/Layout'
import MovieCard from '../MovieCard/MovieCard'
import axios from 'axios'

class HomeContent extends Component {
	state = { movies: [] }

	async componentDidMount(){
		const res = await axios('http://localhost:5000/allmovies')
		const movies = [...res.data]
		console.log(movies)
		this.setState({movies})
	}

	render() {
		return (
			<Layout>
				<Carousel />
				<div>
					<h4 className="title">Trending</h4>
					<div className="row">
						{this.state.movies.map(movie => <MovieCard movie={movie} key={movie._id}/>)}
					</div>
				</div>

				<div>
					<h4 className="title">Discover</h4>
					<div className="row">
						{this.state.movies.map(movie => <MovieCard movie={movie} key={movie._id}/>)}
					</div>
				</div>
			</Layout>
		)
	}
}
 
export default HomeContent