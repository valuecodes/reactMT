import React from 'react'
import './Animal.css';

export default function Animal(props){

    function greeting(){
        alert(`Hello I am ${props.name}. It is nice to meet you!`)
    }

    return(
        <div className='animal'>
            <h2>{props.name}</h2>
            <img src={`https://source.unsplash.com/1600x900/?${props.name}`}/>
            <button onClick={greeting}>Click Here</button>
        </div>
    )
}