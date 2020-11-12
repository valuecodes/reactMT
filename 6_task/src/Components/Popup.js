import React from 'react';

const Popup = (props) => {

    const closeHandler = () =>{
        window.location.reload()
    }

    return (
        <div className='overlay'>
            <div className='popup'>
                <ul>
                    <li>
                        <label>First Name</label>
                        <p>{props.form.firstName}</p>
                    </li>
                    <li>
                        <label>Last Name</label>
                        <p>{props.form.lastName}</p>
                    </li>
                    <li>
                        <label>Phone Number</label>
                        <p>{props.form.phone}</p>
                    </li>
                    <li>
                        <label>Message</label>
                        <p>{props.form.message}</p>
                    </li>
                    <li>
                        <label>Role</label>
                        <p>{props.form.role}</p>
                    </li>
                </ul>
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
};

export default Popup;