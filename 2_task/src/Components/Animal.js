import React from 'react'
import './Animal.css';

function greeting(name){
    alert(`Hello I am ${name}. It is nice to meet you!`)
}

export default function Animal(props){
    return(
        <div className='animal'>
            <h2>{props.name}</h2>
            <img 
                alt={`${props.name}`}
                src={`https://source.unsplash.com/1600x900/?${props.image}`}
            />
            <button onClick={() => greeting(props.name)}>Click Here</button>
        </div>
    )
}