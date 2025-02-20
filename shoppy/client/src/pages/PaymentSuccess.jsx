import React, { useEffect, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext.js';
import { useOrder } from '../hooks/useOrder.js';
import axios from 'axios';

export default function PaymentSuccess() {
    const { getOrderList, saveToOrder } = useOrder();
    const { orderList } = useContext(OrderContext);
    const [searchParams] = useSearchParams();
    const pg_token = searchParams.get("pg_token");
    const [isRun, setIsRun] = useState(false);

    useEffect(() => {
        const tid = localStorage.getItem("tid");
        tid && setIsRun(true);

        const fetchOrderList = async() => {
            const orderList = await getOrderList();
            console.log('fetchOrderList', orderList);

            if(orderList.length > 0) {
                const totalPrice = orderList.reduce((sum, item) => sum + item.price * item.qty, 0);
                if (pg_token && tid) {
                    // 1. axios를 통한 DB insert --> orderList, total_price
                    // 2. useOrder 커스텀 훅을 이용한 DB insert
                    saveToOrder(orderList, totalPrice, tid, "kakaopay");
                }
            }
        }
        if (isRun) { fetchOrderList(); }


    }, [isRun]);


    return (
        <div>
            {
                pg_token && <h2>결제가 완료되었습니다.</h2>
            }
        </div>
    );
}

