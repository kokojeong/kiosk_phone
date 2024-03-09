import React, {useState, useCallback} from 'react';
import '../../css/manager/managerProduct.css';
import {Link} from'react-router-dom';
import data from '../../data/product.json';
import Pagination from 'react-js-pagination'; // 
// console.log(data); //debugging check in!


const ManagerProduct =()=>{
    const [phonesMap, setPhoneMap] = useState([]); //default empty array setting!
    const pageItem = 10; // page is item count setting
    const [currentPage, setCurrentPage] = useState(1); //default page 1 setting!
    
    const changeData = useCallback(
        (change)=>{ //params setting
        const keys = Object.keys(data);// json object key all get in!
        // console.log(keys); // debugging check in!
        // console.log(change); //debugging check in!
        for(let key of keys){ //list in key chagne
            if(key === change){ //key is checking line success is key spread!
                // console.log([...data[key]]); //debugging check in!
                setPhoneMap( [...data[key]] ); // phonesMap default -> empty list
                setCurrentPage(1); // data change is return -> 1page reset
                break; //key get stop on success!
            };
        };
        //console.log(phonesMap); // debugging check in!
        },[phonesMap, setPhoneMap]
    );
    //create list td Execute!
    const createList =phonesMap
        .slice( (currentPage -1) * pageItem, currentPage * pageItem)
        .map( (item, idx)=>(
            <tr key={idx} className='managerTbody_tr'>
                <td className='managerTbody_productTd'>{item.category}</td>
                <td className='managerTbody_productTd'>{item.name}</td>
                <td className='managerTbody_productTd'>{item.volume}</td>
                <td className='managerTbody_productTd'>{item.price}</td>
                <td className='managerTbody_productTd'>{item.quantity}</td>
                <td className='managerTbody_productTd'>{item.register}</td>
            </tr>
        )
    );

    return(
    <div className='managerProduct_box'>
        <div className='productTitleBox'>
        <h1 className='managerProduct_title'>상품관리</h1>
        <Link to='/' className='managerHome_link'><img src='/images/homeIcon_white.png' alt='' className='ManagerHome'/></Link>
        </div>
        <div className='managerButton_box'>
            <button className='managerProduct_button' onClick={()=>changeData('Galaxy')}>삼성</button>
            <button className='managerProduct_button' onClick={()=>changeData('Iphone')} >애플</button>
            <button className='managerProduct_button' onClick={()=>changeData('Retro')} >레트로</button>
        </div>
        <table className='managerProduct_table'>
            <thead className='managerProduct_thead'>
                <tr className='managerProduct_tr'>
                    <th className='managerProduct_th'>카테고리</th>
                    <th className='managerProduct_th'>상품명</th>
                    <th className='managerProduct_th'>용량</th>
                    <th className='managerProduct_th'>가격</th>
                    <th className='managerProduct_th'>재고</th>
                    <th className='managerProduct_th'>등록일</th>
                </tr>
            </thead>
            <tbody className='managerProduct_tbody'>
            {createList} {/* tr td map*/}
            </tbody>
        </table>
        <Pagination
    //Pagination options Line! ----//
        activePage={currentPage}
        itemsCountPerPage={pageItem}
        totalItemsCount={phonesMap.length}
        onChange={(pageNumber)=> setCurrentPage(pageNumber) }
        //--- page Style Option Line ---//
        hideDisabled='true'
        hideFirstLastPages='false'
        hideNavigation='false'
        hideGoFirstLastPage='false'
        hideGoPrevNextPage='false'
        renderPageJump='false'
        renderPrevJump='false'
        renderNextJump='false' />
    </div>
    );
};
export default ManagerProduct;