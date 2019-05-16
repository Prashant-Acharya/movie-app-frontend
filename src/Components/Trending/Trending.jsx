import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import movieData from '../../fakemoviedata'
import MovieCard from '../MovieCard/MovieCard'

class Trending extends Component {
	state = { movies: [] }

	componentDidMount(){
		const movies = movieData
		this.setState({
			movies
		})
	}

	render() { 
		return (
			<Layout>
				<h3 className="title">Trending</h3>
				<div>
					<div className="row">
						{this.state.movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
					</div>
				</div>
			</Layout>
		 )
	}
}
 
export default Trending