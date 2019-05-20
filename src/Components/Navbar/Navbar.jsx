import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
	state = {  }
	render() { 
		return (
			<nav className="navbar navbar-inverse navbar-expand-lg bg-dark" style={{'margin': 0, 'border':'none'}}>
				<div className="container">
					<div className="navbar-translate">
						<Link className="navbar-brand" to='/home'>Movie DB</Link>
					</div>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="sr-only">Toggle navigation</span>
						<span className="navbar-toggler-icon"></span>
						<span className="navbar-toggler-icon"></span>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink to='/addmovie' className="nav-link">
									+ Add
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/trending' className="nav-link">
									Trending
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/favourites' className="nav-link">
									Favourites
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact to='/' className="nav-link">
									Sign Out
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
 
export default Navbar