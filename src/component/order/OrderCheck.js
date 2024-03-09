import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../css/order/orderCheck.css';


function OrderCheck() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const itemName = queryParams.get("model");
    const combinedTotal = parseInt(queryParams.get("price"));
    const selectedStorage = queryParams.get("storage");
    const selectedColor = queryParams.get("color");
    const options = queryParams.get("options")?.split(',');

    const [selectButton, setSelectButton] = useState(null);
    const [totalPrice, setTotalPrice] = useState(combinedTotal);
    const [selectedMonths, setSelectedMonths] = useState('일시불');

// 할부 버튼 클릭 이벤트
    const handleButtonClick = (item) => {
        // 버튼 선택 해제시
        console.log(item);
        if (selectButton === item) {
            setSelectButton(null);
            setSelectedMonths('일시불');
            //setIsInterest(false);
            setTotalPrice(combinedTotal);
        } else {
            setSelectButton(item);

            // 할부 개월 수 --3개월, 6개월, 12개월
            const months = item > 0 ? item : 1;
            setSelectedMonths(months);

            // 초기 총 가격
            let updatedTotalPrice = combinedTotal;

            // 무이자일 경우 --3개월
            if (item === 3) {
                updatedTotalPrice = Math.floor(updatedTotalPrice / months);
            } else {
                // 이자가 있는 경우 --6개월, 12개월
                const interestRate = item === 6 ? 0.1 : 0.3;
                updatedTotalPrice = Math.floor((updatedTotalPrice + updatedTotalPrice * interestRate) / months);
            }

            setTotalPrice(updatedTotalPrice);
        }
    };

    // 총 금액을 로그로 출력
    console.log("Total Price Updated:", totalPrice);

    const getButtonClass = (props) => `installmentBtn ${selectButton === props ? "selected" : ""}`;

    return (
        <div className="orderCheck_body">
            <div className="orderCheck_box">
                <h1> 주문 내역을 확인해주세요. </h1>
                <div className="orderCheck_infoBox">
                    <ul className="orderCheck_info">
                        <li>핸드폰명: {itemName}</li>
                        <li>색상: {selectedColor}</li>
                        <li>용량: {selectedStorage}</li>
                        <li>추가옵션: {options.join(',')}</li>
                        <li>----------------------------------------------</li>
                        <li>총 금액 : {totalPrice.toLocaleString()}원 {selectButton ? ` X ${selectedMonths}개월 ${selectButton === 3 ? '(무이자)' : '(이자)'}` : '(일시불)'}</li>
                    </ul>
                    <div className="installmentBtn_box">
                        <button 
                            className={getButtonClass(3)} 
                            onClick={() => handleButtonClick(3)}
                        >
                            3개월/무이자
                        </button>
                        <button
                            className={getButtonClass(6)} 
                            onClick={() => handleButtonClick(6)}
                        >
                            6개월/이자
                        </button>
                        <button 
                            className={getButtonClass(12)} 
                            onClick={() => handleButtonClick(12)}
                        >
                            12개월/이자
                        </button>
                    </div>
                </div>
                <Link 
                to="/Payment"
                className="payCard"
                state={{
                    totalPrice: totalPrice,
                    selectedMonths: selectedMonths,
                    selectButton: selectButton
                }}
                >
                <p className="payCard_font">
                    카드결제
                    <img src="/images/cardIcon_white.png" alt="cardIcon" className="cardIcon" />
                </p>
                <p className="creditCard_font">신용카드 / 삼성페이</p>
                </Link>
            </div>
            <Link 
                to="/SubMain" 
                className="orderCheck_back"
            >
                뒤로가기
            </Link>
        </div>
    );
}

export default OrderCheck;