import React, { Component } from 'react'
import Carousel from '../Carousel/Carousel'
import Layout from '../Layout/Layout'
import movieData from '../../fakemoviedata'
import MovieCard from '../MovieCard/MovieCard'

class HomeContent extends Component {
	state = { movies: [] }

	componentDidMount(){
		const movies = [...movieData]
		this.setState({
			movies
		})
	}

	render() {
		return (
			<Layout>
				<Carousel />
				<div>
					<h4 className="title">Trending</h4>
					<div className="row">
						{this.state.movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
					</div>
				</div>

				<div>
					<h4 className="title">Discover</h4>
					<div className="row">
						{this.state.movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
					</div>
				</div>
			</Layout>
		)
	}
}
 
export default HomeContent