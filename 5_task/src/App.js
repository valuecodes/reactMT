import React, { Component } from 'react';
import Circle from './components/Circle/Circle'
import './App.css';
import GameOver from './components/GameOver/GameOver'

const getRandomInteger = (max) =>{
  return Math.floor(Math.random() * max+1)
}

class App extends Component {

  state = {
    score:0,
    current:0,
    showGameOver:false,
    rounds:0,
    circles:[
      {id:1,color:'springgreen'},
      {id:2,color:'tomato'},
      {id:3,color:'yellow'},
      {id:4,color:'deepskyblue'},
    ]
  }

  pace=1500
  timer=undefined

  clickHandler=(id)=>{ 
    console.log(getRandomInteger(4))
    console.log('You clicked: '+id)
    if(this.state.current!==id){
      this.stopHandler()
      return
    }

    this.setState({
      score:this.state.score+1,
      rounds:0
    })
  }
 
  nextCircle = () =>{

    if(this.state.rounds >= 5){
      this.stopHandler()
      return
    }

    let nextActive = undefined
    do{
      nextActive = getRandomInteger(4)
    } while(nextActive===this.state.current)

    this.setState({
      current: nextActive,
    })

    this.pace *= 0.95
    this.timer = setTimeout(this.nextCircle,this.pace);
    console.log("Active circle is: ",this.state.current)
  }

  startHandler=()=>{
    this.nextCircle()
  }

  stopHandler=()=>{
    clearTimeout(this.timer)
    this.setState({showGameOver:true})
  }

  render() {
    const circles = this.state.circles.map(circle =>
      <Circle 
        key={circle.id} 
        color={circle.color} 
        click={()=>this.clickHandler(circle.id)}
        active={circle.id===this.state.current?true:false}
      />  
    )
    return (
      <div>
        <h1>Speed game</h1>
        <p>Your score is: <span className='score'>{this.state.score}</span></p>
        <div>
          {circles}
        </div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score}/>}
      </div>
    );
  }
}

export default App;
