import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';

export default function imageUpload({getFileName}) {
    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]);

        axios
            .post('http://localhost:9000/uploads', formData)
            .then(res => {
                console.log('res-->', res.data);
                getFileName(res.data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Form.Control 
                    type = "file"
                    onChange = {(e) => {handleFileUpload(e)}}/>
        </div>
    );
}


