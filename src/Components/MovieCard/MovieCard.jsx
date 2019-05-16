import React from 'react'

const MovieCard = ({ movie }) => {
	return (
		<div className='col-3'>
			<div className="card">
				<img className="card-img-top" src={movie.cover} alt="" />
					<div className="card-body">
						<div className='card-title'>{movie.title}</div>
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
