import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h2>Counter Task</h2>
            <p>{new Date().toLocaleDateString('en-GB')}</p>
        </div>
    );
};

export default Header;