import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carousel/Carousel'
import Favourites from './Components/Favourites/Favourite'
import HomeContent from './Components/HomeContent/HomeContent'
import Trending from './Components/Trending/Trending'

class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<Navbar />
				<div className='container'>
					<Carousel />

					<Route exact path='/' component={HomeContent} />
					<Route path='/favourites' component={Favourites} />
					<Route path='/trending' component={Trending} />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
