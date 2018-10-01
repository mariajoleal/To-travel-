import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './assets/scss/main.scss';

import Landing from './components/landing/';
import Header from './components/header';
import ToTravelForm from './components/main/ToTravelForm';
import Carousel from './components/main/carousel';
import ToTravelCountries from './components/main/visited/ToTravelCountries';
import Countries from './components/main/table/Countries';
import Footer from './components/footer';

import store from './store';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Landing /> 
          <Header />
		      <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <ToTravelForm />
                <ToTravelCountries />
              </div>
                <div className="col-lg-9">
                    <Carousel />
                    <Countries />
                </div>
            </div>
          </div>
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App