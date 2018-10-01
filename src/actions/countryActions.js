import { FETCH_COUNTRIES, NEW_COUNTRY } from './types';

export const fetchCountries = () => dispatch => {
  fetch('http://localhost:3000/countries')
  .then(res => res.json())
  .then(countries => dispatch({
    type: FETCH_COUNTRIES,
    payload: countries
  }));
};

export const createCountry = (countryData) => dispatch => {
  fetch('http://localhost:3000/countries', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(countryData)
  })
    .then(res => res.json())
    .then(country => 
      dispatch({
        type: NEW_COUNTRY,
        payload: country
      })
    ); 
};