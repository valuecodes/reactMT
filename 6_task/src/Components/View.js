import React from 'react';

const View = (props) => {
    return (
        <div className='view container'>
            <h2>Check your input</h2>
            <ul className='viewList'>
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
        </div>

    );
};

export default View;