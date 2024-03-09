import React from 'react';
import { Route, Routes } from "react-router-dom";

// 페이지 가져오기
import Header from "./Header";
import Main from './component/main/Main';
import SubMain from './component/main/SubMain'
import Ranking from './component/main/Ranking';
import MainProduct from './component/product/MainProduct';
import Product from './component/product/Product';
import OrderCheck from './component/order/OrderCheck';
import Payment from './component/order/Payment';
import OrderComplete from './component/order/OrderComplete';
import ManagerLogin from './component/manager/ManagerLogin';
import ManagerProduct from './component/manager/ManagerProduct';

import  './css/app/App.css';


function App() {


    return (
        <div className="totalBody">
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route path="/Ranking" element={<Ranking/>} />
                <Route path="/SubMain" element={<SubMain/>} />
                <Route path="/MainProduct" element={[<Header />, <MainProduct />]} />
                <Route path="/Product" element={[<Header />, <Product />]} />
                <Route path="/Payment" element={[<Header />,<Payment />]} />
                <Route path="/OrderCheck" element={[<Header/>,<OrderCheck/>]}/>
                <Route path="/OrderComplete" element={[<Header />,<OrderComplete />]} />
                <Route path="/ManagerLogin" element={[<ManagerLogin />]} />
                <Route path="/ManagerProduct" element={[<ManagerProduct />]} />
            </Routes>
            
        </div>
    );
}


export default App;