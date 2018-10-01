import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCountry } from '../../actions/countryActions'

import './form.scss'
class ToTravelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const country = {
      name: this.state.name
    }

    this.props.createCountry(country);
  }

  render() {
    return (
      <div>
        <form className = "form" onSubmit={this.onSubmit}>
            <label className = "form__label">Country:</label> <br />
            <input className = "form__input" type="text" name="name" onChange={this.onChange} value= {this.state.name}/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createCountry })(ToTravelForm);