import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import QnA from "../components/QnA/QnA";
import DetailMenu from "../components/QnA/DetailMenu";
import Review from "../components/review/Review";
import Detail from "../components/detail-tap/Detail";
import Delivery from "../components/delivery/Delivery";
import useReview from "../hooks/useReview.js";

export default function DetailProduct({ addCart }) {
    const { pid } = useParams();
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("XS");
    const [activeTab, setActiveTab] = useState('detail');

    const {reviewList, reviewCount, review} = useReview(pid);

    useEffect(() => {
        axios
            .get("/data/products.json") // http://localhost:3000/data/products.json
            .then((res) => {
                res.data.filter((product) => {
                    if (product.pid === pid) setProduct(product);
                });
            })
            .catch((error) => console.log(error));
    }, [pid]);

    const addCartItem = () => {
        const cartItem = {
            pid: product.pid,
            size: size,
            qty: 1,
            price: product.price,
        };
        addCart(cartItem);
    };

    return (
        <div className="content">
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                    <img src={product.image} />
                    <ul className="product-detail-image-top-list">
                        <li><img src={product.image} alt="" /></li>
                        <li><img src={product.image} alt="" /></li>
                        <li><img src={product.image} alt="" /></li>
                    </ul>
                </div>

                <ul className="product-detail-info-top">
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">{`${parseInt(product.price).toLocaleString()}원`}</li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li><p className="product-detail-box">신규회원, 무이자 할부 등</p></li>
                    <li className="flex">
                        <label className="product-detail-label">사이즈 </label>
                        <select
                            className="product-detail-select2"
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li className="flex">
                        <button type="button" className="product-detail-button order">바로 구매</button>
                        <button
                            type="button"
                            className="product-detail-button cart"
                            onClick={addCartItem}
                        >
                            쇼핑백 담기
                        </button>
                        <div type="button" className="gift">
                            <PiGiftThin />
                            <div className="gift-span">선물하기</div>
                        </div>
                    </li>
                    <li>
                        <ul className="product-detail-summary-info">
                            <li>상품 요약 정보</li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY */}
            <div className="product-detail-tab">
                <DetailMenu activeTab={activeTab} setActiveTab={setActiveTab} reviewCount={reviewCount} />
                <div>
                    {activeTab === 'detail' && <Detail selectedPid={pid} product={product} />}
                    {activeTab === 'review' && <Review reviewList={reviewList} reviewCount={reviewCount} review={review}/>}
                    {activeTab === 'qna' && <QnA />}
                    {activeTab === 'delivery' && <Delivery />}
                </div>
            </div>
        </div>
    );
}
