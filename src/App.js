import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './Components/Authentication/Login'
import SignUp from './Components/Authentication/SignUp'
import Favourites from './Components/Favourites/Favourite'
import HomeContent from './Components/HomeContent/HomeContent'
import Trending from './Components/Trending/Trending'
import AddMovie from './Components/Add/AddMovie'

class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/SignUp' component={SignUp} />
					<Route path='/home' component={HomeContent} />
					<Route path='/favourites' component={Favourites} />
					<Route path='/trending' component={Trending} />
					<Route path='/addmovie' component={AddMovie} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
