import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext.js';
import { useCart } from '../hooks/useCart.js';
import axios from 'axios';

export function useOrder() { // custom Hook 안에서 또 다른 custom Hook 사용이 가능하다
    const { calculateTotalPrice } = useCart();
    const { orderList, setOrderList, orderPrice, setOrderPrice, member, setMember } = useContext(OrderContext);
    // useContext로 관리되는 객체들의 CRUD 함수 정의
    /**
     * 전체 주문정보 가져오기 : getOrderList
     */
    const getOrderList = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/order/all', {"id":id}); // method를 서버 작업에서도 동일하게 사용
        console.log('result.data ----->', result.data);                      // 현재는 post method 이기 때문에 서버에서도 post method 사용
        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);
    }

    return { getOrderList };
}

