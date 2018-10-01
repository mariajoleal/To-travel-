import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        countries: [],
    };
  }

  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(json => this.setState({ countries: json }));
  }
  
  render () {

    function imageFormatter(cell, row){
      return (<img style={{width:34, height:34}} src={cell}/>)
    }

    return (
      <div>
        <BootstrapTable data={this.state.countries} striped hover pagination >
          <TableHeaderColumn width="80" dataField='flag' dataFormat={imageFormatter} >Flag</TableHeaderColumn>
          <TableHeaderColumn isKey dataField='name'filter={ { type: 'TextFilter', delay: 1000 } }>Country</TableHeaderColumn>
          <TableHeaderColumn dataField='region' filter={ { type: 'TextFilter', delay: 1000 } }>Region</TableHeaderColumn>
          <TableHeaderColumn dataField='subregion' filter={ { type: 'TextFilter', delay: 1000 } }>Sub-Region</TableHeaderColumn>
          <TableHeaderColumn dataField='capital'>Capital</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}



export default Countries