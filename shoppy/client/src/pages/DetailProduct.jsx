import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import QnA from "../components/QnA/QnA";
import DetailMenu from "../components/QnA/DetailMenu";
import Review from "../components/review/Review";
import Detail from "../components/detail/Detail";
import Delivery from "../components/delivery/Delivery";
import useQnA, { useProduct, useReview } from "../hooks/listCount";
import ImageList from "../components/common/ImageList";
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../auth/AuthContext.js";
import { useCart } from "../hooks/useCart.js";

export default function DetailProduct() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { cartList } = useContext(CartContext);
  const { pid } = useParams();
  const [size, setSize] = useState("XS");
  // tab state 추가
  const [activeTab, setActiveTab] = useState('detail');
  const { qnaList, qnaCount } = useQnA(pid);
  const { reviewList, reviewCount } = useReview(pid);
  const { detailDesList, detailInfoList, product, imgList, detailImgList } = useProduct(pid);
  const { saveToCartList, updateCartList } = useCart();

  /** 장바구니 추가 버튼 이벤트 */
  const addCartItem = () => {
    if (isLoggedIn) {
      const cartItem = { pid: product.pid, size: size, qty: 1 };
      const findItem = cartList && cartList.find(item => item.pid === product.pid 
                                                      && item.size === size);
      if(findItem !== undefined) {
          // qty+1 업데이트
          const result = updateCartList(findItem.cid, "increase");
          result && alert("장바구니에 추가되었습니다.");
      } else {
          // 새로 추가
          const id = localStorage.getItem("user_id");
          const formData = { id: id, cartList: [cartItem] };
          const result = saveToCartList(formData);
          result && alert("장바구니에 추가되었습니다.");
      }

    } else {
      const select = window.confirm("로그인이 필요한 서비스입니다. \n로그인 하시겠습니까?");
      if (select) {
        navigate('/login');
      }
    }
  };

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.firstImage} />
          <ul className="product-detail-image-top-list">
            <li>
              <ImageList imgList={imgList} />
            </li>
          </ul>
        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li>
            <p className="product-detail-box">신규회원, 무이자 할부 등</p>
          </li>
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
            <button type="button" className="product-detail-button order">
              바로 구매
            </button>
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

      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
      <div className="product-detail-tab">
        <DetailMenu activeTab={activeTab} setActiveTab={setActiveTab} qnaCount={qnaCount} reviewCount={reviewCount} />
        <div>
          {activeTab === 'detail' && <Detail selectedPid={pid} product={product} detailDesList={detailDesList} detailInfoList={detailInfoList} imgList={detailImgList} />}
          {activeTab === 'review' && <Review reviewList={reviewList} reviewCount={reviewCount} />}
          {activeTab === 'qna' && <QnA qnaList={qnaList} />}
          {activeTab === 'delivery' && <Delivery />}
        </div>

      </div>
    </div>
  );
}
