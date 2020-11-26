import React, { Component } from 'react'
import axios from 'axios'

const API = "http://api.weatherstack.com/current"
const params = {
    access_key: process.env.REACT_APP_API_KEY,
    query: 'Helsinki'
}

export default class Weather extends Component {

    state = {
        weather:{
            request:{},
            location:{},
            current:{}
        },
        isLoading:false
    }

    componentDidMount(){

        this.setState({isLoading:true})

        axios.get(API,{params})
            .then(response => this.setState({
                weather: response.data,
                isLoading:false
            }))
    }

    render() {
        return (
            this.state.isLoading? <p>Weather loading...</p>:
            <p>
                Current temperature in{' '}
                {this.state.weather.location.name}{' '}
                is{' '}
                {this.state.weather.current.temperature}°C{' '}
                and it feels like{' '} 
                {this.state.weather.current.feelslike}°C
                </p>
        )
    }
}
