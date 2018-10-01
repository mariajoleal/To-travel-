import React from 'react'
import {Animated} from "react-animated-css";

import './landing.scss'

const Landing = (props) => {
	return (
		<div className="landing">
			<div className="container landing__content--size">
				<div className="row">
					<div className="col-lg-4 landing__content">
						<div className="col-lg-12 landing__title">TRAVEL TO</div>
						<div className="col-lg-12 landing__description"> Do you love to travel? Travel to is a web application for those who love to travel. <br />Here you will find some information about different countries filtered by the region/subregion you would like to visit. </div>
					</div>
					<div className="col-lg-4 landing__content"></div>
					<div className="col-lg-4 landing__content">
						<Animated className= "bounce infinite" isVisible={true}>
							<button className="travel-now"><a className ="travel-now" href="#main">TRAVEL NOW</a></button>
						</Animated>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing
