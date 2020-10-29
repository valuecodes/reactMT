import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer';

class App extends Component {

  state = {
    likes: 0,
  }

  addHandler = () => {
    this.setState({
      likes:this.state.likes+1
    })
  }

  removeHandler = () => {
    this.setState({
      likes: this.state.likes===0 ? 0 : this.state.likes-1
    })
  }

  resetHandler = () => {
    this.setState({
      likes:0
    })
  }

  render() {
    return (
      <div className='app'>
        <Header/>
        <div className='counter'>
          <h1 style={{
            backgroundColor: this.state.likes%2===0?
              'rgb(142, 170, 153)':
              'rgb(142, 170, 243)'
            }}
            >Total likes: {this.state.likes}
          </h1>
          <button onClick={this.addHandler}>Add one</button>
          <button onClick={this.removeHandler}>Remove one</button>
          <button onClick={this.resetHandler}>Reset</button>          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
