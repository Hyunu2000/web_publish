import React, { useState, useRef } from 'react';
import { validateForm } from '../../apis/validate.js'

export default function UserInfo() {
    // const nameRef = useRef(null);
    // const addressRef = useRef(null);
    // const ageRef = useRef(null);
    const refs = {
        'nameRef': useRef(),
        'addressRef':useRef(),
        'ageRef': useRef()
    };


    const init = { 'name': '', 'address': '', 'age': '' };
    const [formData, setFormData] = useState(init);

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(refs)) {
            console.log(formData);
        }
    }


    return (
        <div>
            <h1>UserInfo</h1>
            <form name="user-info" onSubmit={handleSubmit}>
                <ul style={{ 'listStyleType': 'none', 'padding': 0 }}>
                    <li>
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            ref={refs.nameRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>Address</label>
                        <input type="text"
                            name="address"
                            value={formData.address}
                            ref={refs.addressRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>Age</label>
                        <input type="text"
                            name="age"
                            value={formData.age}
                            ref={refs.ageRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <button type="submit">Send</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

