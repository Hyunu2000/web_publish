import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';


    export default function Carts({refreshStorage}) {
    const { isLoggedIn } = useContext(AuthContext); // useContext로 함수와 함수 내의 데이터 자유롭게 사용
    const navigate = useNavigate();

     // 장바구니 아이템 저장 : 배열
    const [cartList, setCartList] = useState(() => {
        try {
            const initCartList = localStorage.getItem("cartItems");
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.log("로컬스토리지 JSON 파싱 오류:", error);
            return []; // 오류 발생 시 빈 배열 반환
        }
    });

    // pids 배열 생성, cartItems의 pid 값을 pids 배열에 추가
    const pids = cartList && cartList.map(item => item.pid);

    useEffect(() => {
        if (pids.length > 0) {
            // axios를 이용하여 DB 연동
            axios
                .post("http://localhost:9000/product/cartItems", { "pids": pids })
                .then(res => {
                    // console.log(res.data)
                    // cartItems에 res.data의 정보 추가
                    const updateCartItems = cartList.map((item) => {
                        const filterItem = res.data.find((ritem) => ritem.pid === item.pid)
                        return filterItem ?
                            {
                                ...item,
                                "pname": filterItem.pname,
                                "price": filterItem.price,
                                "description": filterItem.description,
                                "image": filterItem.image
                            }
                            : item
                        
                    });
                    setCartList(updateCartItems);
                })
                .catch(error => console.log(error));
        } // if
    }, [cartList]);

    /** 주문하기 이벤트 처리 */
    const handleOrder = (type, pid, size) => {
        // console.log(type, pid, size);
        const id = localStorage.getItem("user_id");
        let formData = [];
        if(type === "all") { // 주문하기 - 전체상품 DB 저장
            formData = {id : id, cartList : cartList};
        } else { // 계속 담아두기 - 개별상품 DB 저장
            const filterItem = cartList.filter(item => (item.pid === pid && item.size === size));
            formData = { id : id, cartList : filterItem };
        }

        // formData = {id : id, cartList : cartList}; // { [] } 계속 담아두기
        // 로그인 여부 체크
        if(isLoggedIn) {
            axios
                .post("http://localhost:9000/cart/add", formData)
                .then(res => {
                    if(res.data.result_rows) {
                        alert("장바구니에 추가되었습니다.");
                        if(type === "all") {
                            // 주문하기 페이지 이동
                            
                            // 로컬 스토리지 전체 아이템 삭제
                            clearStorageAll();
                            // App.js의 cartList, cartCount 초기화
                            refreshStorage([], 0);

                        } else {
                            // 로컬 스토리지 개별 아이템 삭제
                            const updateCart = clearStorageEach(pid, size);
                            refreshStorage(updateCart, updateCart.length);
                        }
                    }
                })
                .catch((error) => console.log(error));
        } else {
            window.confirm("로그인이 필요한 서비스입니다.") && navigate('/login');
        }
    };

    // 로컬 스토리지 전체 아이템 삭제
    const clearStorageAll = () => {
        console.log('---------->> 로컬스토리지 전체 삭제 시작');
        localStorage.removeItem("cartItems"); 
        navigate("/cartdb");
        // setTimeout(() => { // setTimeout으로 묶으면 비동기 처리 가능
        //     setCartList([]);
        // }, 100);
        console.log('---------->> 로컬스토리지 전체 삭제 종료');
    }

    // 로컬 스토리지 개별 아이템 삭제
    const clearStorageEach = (pid,size) => {
        const updateCart = cartList.filter((item) => !(item.pid === pid && item.size === size));
        // console.log('updateCart --->', updateCart);
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", updateCart);
        setTimeout(() => {
            setCartList(updateCart);
        }, 100);

        return updateCart;
    };

    return (
        <div>
            <h1>Mycart</h1>
            <button onClick={() => { handleOrder("all") }}>주문하기</button>
            <table border={1}>
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th> </th>
                </tr>
                {
                    cartList.map((item, i)=>
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>
                            {/* <td>
                                <button onClick={() => { handleOrder("each", item.pid, item.size) }}>계속담아두기</button>
                            </td> */}
                        </tr>
                    )
                }
            </table>
        </div>
    );
}










                