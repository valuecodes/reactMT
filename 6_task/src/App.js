import React, { Component } from 'react';
import Form from './Components/Form'
import View from './Components/View'
import Popup from './Components/Popup'
import './App.css';

class App extends Component {
  
  state={
    firstName:'',
    lastName:'',
    phone:'',
    role:'',
    message:'',
    showPopup:false
  }

  handleFormInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]:value
    })
  }

  handleShowPopup = (e) => {
    this.setState({
      showPopup:true
    })
  }

  render() {
    return (
      <div>
        <Form 
          handleFormInput={this.handleFormInput} 
          handleShowPopup={this.handleShowPopup}
        />
        <View form={this.state}/>
        {this.state.showPopup && 
          <Popup form={this.state}/>
        }
      </div>
    );
  }
}

export default App;