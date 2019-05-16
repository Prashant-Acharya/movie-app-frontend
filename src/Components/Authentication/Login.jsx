import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

class Login extends Component {
	state = {  }
	render() { 
		return (
			<div className="container">
				<div className='row'>
					<div className="col-md-6 ml-auto mr-auto">
						<div className="card login-card">
							<div className="card-header card-header-danger">
								<h4 className="card-title">Movie DB Login</h4>
							</div>
							<div className="card-body">
								<form>
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
								<p>Don't Have an Account? <Link to='/SignUp'>Sign Up</Link></p>	
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
 
export default Login;