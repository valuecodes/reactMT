import React, { Component } from "react";
import './App.css';
import Animal from './Components/Animal'

class App extends Component{

  state = {
    animals:[
      {name:'Moose',image:'moose'},
      {name:'Cat',image:'cat'},
      {name:'Fish',image:'fish'},
      {name:'Mongoose',image:'mongoose'},
      {name:'Dog',image:'dog'},
      {name:'Bird',image:'bird'},
      {name:'Cow',image:'cow'},
      {name:'Wolf',image:'wolf'},
      {name:'Bison',image:'bison'},
    ]
  }
  
  render(){

    const animalList = this.state.animals.map(animal => 
      <Animal key={animal.name} name={animal.name} image={animal.image}/>
    )

    return (
      <div className="cards">
        {animalList}
      </div>
    );    
  }
}

export default App;
