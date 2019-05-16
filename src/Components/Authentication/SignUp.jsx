import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

class SignUp extends Component {
	state = {  }
	render() { 
		return (
			<div className="container">
				<div className='row'>
					<div className="col-md-6 ml-auto mr-auto">
						<div className="card login-card">
							<div className="card-header card-header-danger">
								<h4 className="card-title">Movie DB Sign Up</h4>
							</div>
							<div className="card-body">
								<form>
									<div class="form-group">
										<label for="Name">Full Name</label>
										<input type="email" class="form-control" id="Name" placeholder="Enter name" />
									</div>
									<div class="form-group">
										<label for="Email">Email address</label>
										<input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
									</div>
									<div class="form-group">
										<label for="Password">Password</label>
										<input type="password" class="form-control" id="password" placeholder="Password" />
									</div>
									<Link to='/home'>
										<button type="submit" class="btn">Login</button>
									</Link>
								</form>
								<p>Already Have an Account? <Link to='/'>Login</Link></p>	
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
 
export default SignUp