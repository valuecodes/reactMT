import React from 'react';
import Article from './Article'
import Form from './Form/Form'

const Main = () => {
    return (
        <div className='main container'>
            <Article/>
            <Form/>
        </div>
    );
};

export default Main;