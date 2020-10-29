import React, { Component } from "react";
import './App.css';
import Animal from './Components/Animal'

class App extends Component{

  state = {
    animals:[
      {name:'Moose',image:'moose'},
      {name:'Cat',image:'cat'},
      {name:'Fish',image:'fish'}
    ]
  }
  
  render(){
    return (
      <div className="cards">
        <Animal animal={this.state.animals[0]}/>
        <Animal animal={this.state.animals[1]}/>
        <Animal animal={this.state.animals[2]}/>
      </div>
    );    
  }
}

export default App;
