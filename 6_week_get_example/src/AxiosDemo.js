import React, { Component } from 'react'
import axios from 'axios'

const API = 'https://restcountries.eu/rest/v2/all'

export default class AxiosDemo extends Component {
    
    state = {
        countries: [],
        isLoading: false
    }

    componentDidMount(){
        this.setState({isLoading:true})

        axios.get(API).then(response => 
            this.setState({
                countries:response.data,
                isLoading:false
            })
        )
    }

    render() {
        if(this.state.isLoading) {
            return<p>Loading...</p>
        }
        
        return (
            <ul>
            {this.state.countries.map((country) =>
              <li >
                <h2>{country.name}</h2>
                <h2>{country.capital}</h2>
                <img src={country.flag} alt='flag' height='200'/>
              </li>
            )}          
          </ul>
        )
    }
}
