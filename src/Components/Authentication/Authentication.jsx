import React from 'react'
import { Link } from 'react-router-dom'

const Authentication = () => {
	return (
		<div className='container row'>
			<div className="col-4 ml-auto mr-auto">
				<Link to='/home'>Login</Link>
			</div>
		</div>
	)
}
 
export default Authentication