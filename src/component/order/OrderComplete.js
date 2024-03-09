import React, { useEffect } from "react";
import '../../css/order/orderComplete.css';
import { useLocation, useNavigate } from "react-router";


function OrderComplete(){
    const navigate = useNavigate();
    const location = useLocation(); // PayMent get!
    const state = location.state;
    useEffect(() => {
        setTimeout(() => {
            // '/' go!!!
            navigate("/");
        }, 5000);
    },[navigate])
    return(
        <div className="orderCompleteBox">
            <div className="guideBox">
                <h1> 주문이 완료됐어요! </h1>
                <ul className="guide">
                    <li><span className="creditCard">신용카드</span>를 꼭 챙겨주시고</li>
                    <li>출력된 <span className="receipt">영수증</span>을 받으신 후에</li>
                    <li>핸드폰을 찾아주세요!</li>
                </ul>
                <div className="receiptBody">
                    <div className="receiptBox"></div>
                    <img src="/images/phoneE.png" alt="logoImage" className="phoneEIcon"></img>
                    <ul className="receiptPrint">
                        <li className="receiptTitle">영수증</li>
                        <li className="receiptLogo">폰&nbsp;이&nbsp;네</li>
                        <li className="receiptBar">
                            ------------------------------------------------
                        </li>
                        <li className="receiptDetails_Product">
                            <span className="receiptDetailsLeft">핸드폰 기종</span>
                            <span className="receiptDetailsRight">금액</span>
                        </li>
                        <li className="receiptDetails_Volume">
                            <span className="receiptDetailsLeft">용량(스토리지)</span>
                            <span className="receiptDetailsRight">추가 금액</span>
                        </li>
                        <li className="receiptBar">
                            ------------------------------------------------
                        </li>
                        <li className="receiptDetails_Total">
                            <span className="receiptDetailsLeft">TOTAL</span> 
                            <span className="receiptDetailsRight">{state.totalPrice.toLocaleString()}원 {state.selectButton ? ` X ${state.selectedMonths}개월 ${state.selectButton === 3 ? '(무이자)' : '(이자)'}` : '(일시불)'}</span>{/* 화면 뿌려주기 */}
                        </li>
                        <li className="receiptBar">
                            ------------------------------------------------
                        </li>
                        <img src="/images/barcode.png" alt="barcodeImage" className="barcodeImage" />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default OrderComplete;