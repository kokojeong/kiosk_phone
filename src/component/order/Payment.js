import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../../css/order/payment.css';


function Payment() {
    const navigate = useNavigate(); // OrderComplete go 
    const location = useLocation(); // OrderCheck get!
    //console.log(location); //debugging check
    const state = location.state;
    //console.log(state); //debugging check
    
    // 몇 초 후에 페이지 전환
    useEffect(() => {
        const delayRedirect = setTimeout(() => {
                                        //orderComplete go!!!
            navigate("/OrderComplete", {state : {totalPrice : state.totalPrice,
                                                    selectedMonths : state.selectedMonths,
                                                    selectButton : state.selectButton
                                        }});
        }, 5000);// 5초의 지연 시간 설정

        return () => clearTimeout(delayRedirect); // 컴포넌트 언마운트 시 타이머 클리어
    }, [navigate]);

    
    return (
        <div className="paymentBox">
            <div className="cardBox">
                <h1>신용카드를 투입구에 <br/> 꽂아주세요</h1>
                <div className="cardSlot">
                    <div className="insertCard">
                        <img src="/images/card.png" alt="cardImage" className="cardImage" />
                    </div>
                </div>
                <div className="payBox">
                    <div className="totalPayment">총 결제금액</div>
                    <div className="amounts">{state.totalPrice.toLocaleString()}원 {state.selectButton ? ` X ${state.selectedMonths}개월` : '(일시불)'}</div>
                </div>
            </div>
        </div>
    );
}

export default Payment;