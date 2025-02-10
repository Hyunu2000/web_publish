import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple({getFileName}) {
    const [oldFile, setOldFile] = useState([]);

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        console.log(files.length);

        // if (files.length < 6) {
            // formData에 append - file 개별로 append 되어야함!!
            // 방법 1
            for (const file of files) formData.append("files", file);
            formData.append("oldFile", oldFile);

            // 방법 2
            // for (let i = 0; i < files.length; i++) formData.append("files", files[i]);
            // 방법 3
            // files.forEach(file => formData.append("files", file)); // iterable 호출로 인해 사용불가
            
    
            // 서버 전송
            // 파일업로드 제한없이 사용자가 선택한 갯수 만큼 전송 ==> ?maxFiles=${files.length}
            axios
                .post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData, {
                    headers : { "content-Type" : "multipart/form-data" },
                })
                .then(res => {
                    getFileName(res.data); // NewProduct 컴포넌트로 전송
                    setOldFile(res.data.oldFile);
                })
                .catch(err => console.log(err));
            
        // } else {
        //     alert('파일업로드는 최대 5개까지 가능합니다')
        // }
    }
    return (
        <div>
            <Form.Control
                type='file'
                onChange={(e) => { handleFileUploadMultiple(e) }}
                multiple />
        </div>
    );
}

