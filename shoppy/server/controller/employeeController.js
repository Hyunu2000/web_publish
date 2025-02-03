import * as repository from '../repository/employeeRepository.js';

export const getEmployeeAll = async(req, res) => {
    const result = await repository.getEmployeeAll();
    res.json(result); // json 데이터는 .json으로 받을 것
    res.end();
}