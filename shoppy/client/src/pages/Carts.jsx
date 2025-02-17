import "../styles/cart.css";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.js";
import { CartContext } from "../context/CartContext.js";

export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartContext);

    useEffect(() => {
        if (isLoggedIn) {
            // 테이블의 로그인 아이디의 카트 리스트 가져오기
            const id = localStorage.getItem("user_id");
            axios
                .post("http://localhost:9000/cart/items", { id: id })
                .then((res) => {
                    console.log('list ---> ', res.data);
                    setCartList(res.data);
                })
                .catch((error) => console.log(error));
        } else {
            const select = window.confirm("로그인이 필요한 서비스입니다. \n로그인 하시겠습니까?");
            if (select) {
                navigate('/login');
            }
        }
    }, [isLoggedIn]);

    return (
        <div className="cart-container">
            <h2 className="cart-header">장바구니</h2>
            {cartList && cartList.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.pname} />
                    <div className="cart-item-details">
                        <p className="cart-item-title">{item.pname}</p>
                        <p className="cart-item-size">{item.size}</p>
                        <p className="cart-item-price">{item.price}원</p>
                    </div>
                    <div className="cart-quantity">
                        <button>-</button>
                        <input type="text" value={item.qty} readOnly />
                        <button>+</button>
                    </div>
                    <button className="cart-remove">🗑</button>
                </div>
            ))}
            <div className="cart-actions">
                <button>주문하기</button>
            </div>
        </div>
    );
}
