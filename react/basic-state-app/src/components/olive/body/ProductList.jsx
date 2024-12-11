import React from 'react';
import Product from './Product.jsx';
import { useState, useEffect } from 'react';

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('/data/olive.json')
            .then(data => data.json())
            .then(jsonData => setProductList(jsonData))
            .catch(error => console.log(error))
    }, []);

    const totalCart = (id) => {
        cart(id); // AppOlive의 handleCartApp 함수 호출
    }
        
    return (
        <ul className='product-list-container'>
            {productList && productList.map((item) =>
                <li>
                    <Product
                        totalCart={totalCart}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        sprice={item.sprice}
                        isSale={item.isSale}
                        isCoupon={item.isCoupon}
                        isToday={item.isToday}
                    />
                </li>
            )}
        </ul>
    );
}
