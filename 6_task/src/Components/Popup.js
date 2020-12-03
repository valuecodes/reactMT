import React from 'react';

const Popup = ({ form, submit }) => {

    const closeHandler = () =>{
        window.location.reload()
    }

    return (
        <div className='overlay'>
            <div className='popup'>
                <ul>
                    <li>
                        <label>First Name</label>
                        <p>{form.firstName}</p>
                    </li>
                    <li>
                        <label>Last Name</label>
                        <p>{form.lastName}</p>
                    </li>
                    <li>
                        <label>Phone Number</label>
                        <p>{form.phone}</p>
                    </li>
                    <li>
                        <label>Message</label>
                        <p>{form.message}</p>
                    </li>
                    <li>
                        <label>Role</label>
                        <p>{form.role}</p>
                    </li>
                </ul>
                <div className='popupButtons'>
                    <button onClick={submit}>Yes, I am sure</button>
                    <button onClick={closeHandler}>Nope, I dont want to post it</button>                    
                </div>
            </div>
        </div>
    );
};

export default Popup;