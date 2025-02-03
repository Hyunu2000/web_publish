import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Employees() {
    const [employees, setEmployess] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:9000/employee/all')
                .then(result => setEmployess(result.data))
                .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <table border='1'>
                <tr>
                    <th>번호</th>
                    <th>사원명</th>
                    <th>사원명(영어)</th>
                    <th>성별</th>
                    <th>입사일</th>
                    <th>급여</th>
                </tr>
                {
                    employees && employees.map((employee) => 
                        <tr>
                            <td>{employee.no}</td>
                            <td>{employee.name}</td>
                            <td>{employee.ename}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.hiredate}</td>
                            <td>{employee.osalary}</td>
                        </tr>
                    )
                }
            </table>
        </div>
        
    );
}

