import React from 'react'

import slide from './carousel.jpg'
import slide2 from './carousel-2.jpg'
import slide3 from './carousel-3.jpg'
import slide4 from './carousel-4.jpg'

const Carousel = (props) => {
	return (
		<div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src={slide} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={slide2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={slide3} alt="Third slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={slide4}alt="Fourth slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
	)
}

export default Carousel
