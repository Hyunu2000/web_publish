import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Carts() {
    // localstorage에 담긴 cartItems의 배열객체 출력
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));

    // pids 배열 생성, cartItems의 pid 값을 pids 배열에 추가
    const pids = cartItems && cartItems.map(item => item.pid);

    useEffect(() => {
        if (pids.length > 0) {
            // axios를 이용하여 DB 연동
            axios
                .post("http://localhost:9000/product/cartItems", { "pids": pids })
                .then(res => {
                    // cartItems에 res.data의 정보 추가
                    const updateCartItems = cartItems.map((item, i) => {
                        const matchItems = res.data.find(data => data.pid === item.pid);
                        return matchItems
                        ?  {
                                ...item,
                                "pname": matchItems.pname,
                                "price": matchItems.price,
                                "description": matchItems.description,
                                "image": matchItems.image
                            }
                        :   item
                        }    
                    );
                    setCartItems(updateCartItems);
                })
                .catch(error => console.log(error));
        } // if
    }, []);

    console.log('cartItems -->', cartItems);

    return (
        <div>
            <h1>Mycart</h1>
            <table border={1}>
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
                {
                    cartItems.map((item)=>
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}










                