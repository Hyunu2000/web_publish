import * as repository from '../repository/OrderRepository.js';

/**
 * 전체 주문정보 가져오기 : getOrderList
 */
export const getOrderList = async(req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();
}

/**
 * 
 */
export const add = async(req, res) => {
    console.log(req.body);
    const result = await repository.add(req.body);
    res.json(result);
    res.end();
}