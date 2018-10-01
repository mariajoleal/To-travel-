import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../../../actions/countryActions';

import './visited.scss';

class ToTravelCountries extends Component { 
  componentDidMount() {
    this.props.fetchCountries();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newCountry) {
      this.props.countries.unshift(nextProps.newCountry);
    }
  }

  render () {
    console.log(this.props.countries)
    const countries = this.props.countries.map(country => (
      <div key={country.id}>
        <ul className = "list">
         <li className = "list__item">{country.name}</li>
        </ul>
      </div>
    ));
    return (
      <div>
        {countries}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries.items,
  newCountry: state.countries.item
});

export default connect(mapStateToProps, { fetchCountries })(ToTravelCountries);