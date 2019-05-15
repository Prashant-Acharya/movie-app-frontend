import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
	state = {  }
	render() { 
		return (
			<nav className="navbar navbar-inverse navbar-expand-lg bg-dark" style={{'margin': 0, 'border':'none'}}>
				<div className="container">
					<div className="navbar-translate">
						<a className="navbar-brand" href="#0">Movie DB</a>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
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