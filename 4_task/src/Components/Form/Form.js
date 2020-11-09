
import React, { Component } from 'react';

class Form extends Component {

    state = {
        firstname:'',
        lastname:''
    }

    changeValuehandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        alert('First Name: '+this.state.firstname+'  Last Name: '+this.state.lastname)
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='firstname'>First Name</label>
                        <input 
                            type='text' 
                            name='firstname'
                            value={this.state.value} 
                            onChange={this.changeValuehandler}
                        />                        
                    </div>
                    <div>
                        <label htmlFor='lastname'>Last Name</label>
                        <input 
                            type='text' 
                            name='lastname'
                            value={this.state.value} 
                            onChange={this.changeValuehandler}
                        />                        
                    </div>
                    <input className='button' type='submit' value='Send'/>
                </form>
                <p>First Name: {this.state.firstname}</p>
                <p>Last Name: {this.state.lastname}</p>
            </div>
        );
    }
}

export default Form;