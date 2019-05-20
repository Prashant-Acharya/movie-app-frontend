import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'

class AddMovie extends Component {
	state = {
		title: '',
		casts: '',
		release: '',
		country: '',
		language: '',
		date: ''
	}

	changeTitle = (e) => {
		this.setState({title: e.target.value})
	}

	changeCasts = (e) => {
		this.setState({casts: e.target.value})
	}

	changeCountry = (e) => {
		this.setState({country: e.target.value})
	}

	changeLanguage = (e) => {
		this.setState({language: e.target.value})
	}

	changeRelease = (e) => {
		this.setState({release: e.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		
		axios.post('http://localhost:5000/add', this.state)
		.then(res => {
			console.log(res)
		})
	}

	render() { 
		return (
			<Layout>
				<div className="row">
					<div className="col-sm-12 col-md-6 ml-auto mr-auto">
						<form onSubmit={this.handleSubmit}>
							<div class="form-group">
								<label for="title">Title</label>
								<input onChange={this.changeTitle} type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" />
							</div>
							<div class="form-group">
								<label for="Casts">Casts</label>
								<input onChange={this.changeCast} type="text" class="form-control" id="Casts" placeholder="Enter Casts. (if multiple, saperate by comma.)" />
							</div>
							<div class="form-group">
								<label for="Country">Country</label>
								<input onChange={this.changeCountry} type="text" class="form-control" id="Country" placeholder="Enter Country of origin" />
							</div>
							<div class="form-group">
								<label for="Language">Language</label>
								<input onChange={this.changeLanguage} type="text" class="form-control" id="Language" placeholder="Language in the movie" />
							</div>
							<div class="form-group">
								<label for="Cover">Cover image URL</label>
								<input onChange={this.changeCover} type="text" class="form-control" id="Cover" />
							</div>
							<div class="form-group">
								<label for="Date">Release Date</label>
								<input onChange={this.changeDate} type="date" class="form-control" id="Date" />
							</div>
							<button type="submit" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</Layout>
		)
	}
}
 
export default AddMovie