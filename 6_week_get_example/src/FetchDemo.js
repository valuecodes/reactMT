import React, { Component } from 'react'

export default class FetchDemo extends Component {
  
  state={
    countries: []
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => this.setState({countries: data}))
  }
  
  render() {

    return (
      <div>
        <ul>
          {this.state.countries.map((country) =>
            <li >
              <h2>{country.name}</h2>
              <h2>{country.capital}</h2>
              <img src={country.flag} alt='flag'/>
            </li>
          )}          
        </ul>
      </div>
    )
  }
}
