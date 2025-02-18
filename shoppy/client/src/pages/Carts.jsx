import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.js";
import { CartContext } from "../context/CartContext.js";
import { useCart } from "../hooks/useCart.js";
import "../styles/cart.css";

export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartContext);
    const { getCartList, updateCartList, removeItem } = useCart();
    const hasCheckedLogin = useRef(false);

    useEffect(() => {
        if (hasCheckedLogin.current) return; // true : 로그인 상태 --> 블록 return
            hasCheckedLogin.current = true;

        if (isLoggedIn) {
            getCartList();
        } else {
            const select = window.confirm("로그인이 필요한 서비스입니다. \n로그인 하시겠습니까?");
            select ? navigate('/login') : navigate('/');
            setCartList([]);
        }
    }, [isLoggedIn]);

    // 수량 업데이트
    const handleQtyUpdate = (cid, type) => {
        const result = updateCartList(cid, type);
        // console.log(type, ' result :: ', result);
    }

    // 장바구니 상품 삭제
    const handleRemoveItem = async (cid) => {
        const confirmDelete = window.confirm("해당 상품을 삭제하시겠습니까?");
        if (confirmDelete) {
            await removeItem(cid);
        }
    };
    
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
                        <button onClick={() => {handleQtyUpdate(item.cid, "decrease")}}>-</button>
                        <input type="text" value={item.qty} readOnly />
                        <button onClick={() => {handleQtyUpdate(item.cid, "increase")}}>+</button>
                    </div>
                    <button className="cart-remove" onClick={() => handleRemoveItem(item.cid)}>🗑</button>
                </div>
            ))}
            <div className="cart-actions">
                <button>주문하기</button>
            </div>
        </div>
    );
}
