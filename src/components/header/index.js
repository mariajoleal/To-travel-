import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './travel.png';
import './header.scss';

class Header extends Component {
	constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
	}


	render () {

		const customStyles = {
			content : {
				top                   : '50%',
				left                  : '50%',
				right                 : 'auto',
				bottom                : 'auto',
				marginRight           : '-50%',
				transform             : 'translate(-50%, -50%)'
			}
		};

		return (
			<header className="main__header" id = "main">
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="container">
							<a className="navbar-brand" href="#main"> 
								<img src={logo} width="100" height="50" alt=""/> To travel
							</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarResponsive">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item active">
										<a className="nav-link" href="#main">Home
											<span className="sr-only">(current)</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" onClick={this.handleOpenModal}>Contact</a>
										<Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" style={customStyles}>
											<div className="container">
												<div className="row">
													<div className="col-md-2"></div>
													<div className="col-md-9">
														<h3 className="contact">You can contact us on: </h3>
														<h5 className="contact__phone">Phone: 8888-8888</h5>
														<h5 className="contact__mail">Mail: <a href="mailto:travelto@gmail.com">travelto@gmail.com</a></h5>
													</div>
													<div className="col-md-2">
													</div>
												</div>
												<div className="row">
													<div className="col-md-4"></div>
													<div className="col-md-4"></div>
													<div className="col-md-4"><button onClick={this.handleCloseModal}>Close</button></div>
												</div>
											</div>
										</Modal>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
		)
	}
}

export default Header
