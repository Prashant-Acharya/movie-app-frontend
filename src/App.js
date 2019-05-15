import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Authentication from './Components/Authentication/Authentication'
import Favourites from './Components/Favourites/Favourite'
import HomeContent from './Components/HomeContent/HomeContent'
import Trending from './Components/Trending/Trending'

class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Authentication} />
					<Route path='/home' component={HomeContent} />
					<Route path='/favourites' component={Favourites} />
					<Route path='/trending' component={Trending} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
