import React from 'react';

const Form = ({handleFormInput,handleShowPopup}) => {

    return (
        <form className='form' >
            <ul className='container'>
                <li>
                    <label htmlFor='firstName'>First Name</label>
                    <input onChange={handleFormInput} required type='text' name='firstName'/>
                </li>
                <li>
                    <label htmlFor='lastName'>Last Name</label>
                    <input onChange={handleFormInput}  required type='text' name='lastName'/>
                </li>
                <li>
                    <label htmlFor='phone'>Phone number</label>
                    <input onChange={handleFormInput}  required type='textarea' name='phone'/>
                </li>
                <li>
                    <label htmlFor='firstName'>Message</label>
                    <textarea onChange={handleFormInput}  required name='message'/>
                </li>                
                <li>
                    <label htmlFor='role'>Role</label>
                    <select onChange={handleFormInput} name='role'>
                        <option value='Teacher'>Teacher</option>
                        <option value='Student'>Student</option>
                        <option value='Other'>Other</option>
                    </select>
                </li>
                <li >
                    <input type='button' className='submit' onClick={handleShowPopup} value='Submit'/>
                </li>
            </ul>
        </form>
    );
};

export default Form;