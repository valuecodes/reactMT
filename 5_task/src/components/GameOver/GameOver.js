import React from 'react';
import './GameOver.css'

const closeHandler = () =>{
    window.location.reload()
}

const GameOver = (props) => {
    return (
        <div className='overlay'>
            <div className='gameOverBox'>
                <h2>Game over</h2>
                <p>Your score was: {props.score}</p>            
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
};

export default GameOver;