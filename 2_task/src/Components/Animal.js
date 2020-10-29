import React from 'react'
import './Animal.css';

function greeting(name){
    alert(`Hello I am ${name}. It is nice to meet you!`)
}

export default function Animal(props){
    return(
        <div className='animal'>
            <h2>{props.animal.name}</h2>
            <img 
                alt={`${props.animal.name}`}
                src={`https://source.unsplash.com/1600x900/?${props.animal.image}`}
            />
            <button onClick={() => greeting(props.animal.name)}>Click Here</button>
        </div>
    )
}