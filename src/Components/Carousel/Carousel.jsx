import React from 'react'

const Carousel = () => {
	return ( 
		<div className="bd-example">
			<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="https://www.10wallpaper.com/wallpaper/1920x1080/1209/winter_is_coming-Game_of_Thrones-TV_series_Wallpaper_02_1920x1080.jpg" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Search Movie Reviews and many more ...</h5>
							<p>We have a collection of everything</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="https://www.hdwallpaper.nu/wp-content/uploads/2016/08/Sherlock_wallpaper_009.jpg" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="https://wallpaperaccess.com/full/25544.jpg" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	)
}
 
export default Carousel