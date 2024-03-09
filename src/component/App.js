import React from 'react';
import { Route, Routes } from "react-router-dom";

// 페이지 가져오기
import Header from "./Header";
import Main from './main/Main';
import SubMain from './main/SubMain'
import Ranking from './main/Ranking';
import MainProduct from './product/MainProduct';
import Product from './product/Product';
import OrderCheck from './order/OrderCheck';
import Payment from './order/Payment';
import OrderComplete from './order/OrderComplete';
import ManagerLogin from './manager/ManagerLogin';
import ManagerProduct from './manager/ManagerProduct';

import  '../css/app/App.css';


function Project3() {


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


export default Project3;