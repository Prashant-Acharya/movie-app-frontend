import React from 'react'

const MovieCard = ({ movie }) => {
	return (
		<div className='col-md-6 col-lg-3 col-sm-12'>
			<div className="card">
				<img className="card-img-top" src={movie.cover} alt="" />
					<div className="card-body">
						<div className='card-title' style={{'fontSize': '1.2rem'}}>{movie.title}</div>
						<div>
							<strong>Casts:</strong> {movie.casts} <br/>
							<strong>Release Date:</strong> {movie.release} <br/>
							<strong>Country:</strong> {movie.country} <br/>
							<strong>Language:</strong> {movie.language} <br/>
						</div>
					</div>
			</div>
		</div>
	)
}
 
export default MovieCard
