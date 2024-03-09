// MainContents.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import jsonData from '../../data/imageData.json';
import '../../css/product/mainProduct.css';

const MainContents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clickedCategory, setClickedCategory] = useState(null); // 클릭한 카테고리를 추적하는 state 추가
  const [logoImage, setLogoImage] = useState();
  
  const iphone = Object.values(jsonData.iphone);
  const galaxy = Object.values(jsonData.galaxy);
  const retro = Object.values(jsonData.retro);

  // 카테고리 선택시 내용 적용
  const handleCategoryClick = (category) => {
    let data;
    let logoImageUrl;
  
    switch (category) {
      case '갤럭시':
        data = galaxy;
        logoImageUrl = '/images/galaxyLogo.png';
        break;
      case '애플':
        data = iphone;
        logoImageUrl = '/images/appleLogo.png';
        break;
      case '레트로폰':
        data = retro;
        logoImageUrl = '/images/retroLogo.png';
        break;
      default:
        data = [];
        logoImageUrl = '/images/galaxyLogo.png';
        break;
      }
  
    setCurrentData(data);
    // 값이 유효한 경우에만 clickedCategory를 변경합니다.
    if (category) {
      setClickedCategory(category);
    }
    setLogoImage(logoImageUrl); // 새로운 상태로 로고 이미지 설정
    setCurrentPage(1);
  };
  

  // 이전 페이지에서 브랜드를 받아서 CurrentData에 적용 
  useEffect(() => {
    // 초기에는 받아오는 구분
    handleCategoryClick(location.state);
    setLogoImage('/images/galaxyLogo.png');
  }, []);
  

  // 현재 페이지에 따라 필요한 데이터를 계산합니다.
  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);


  
  const categories = ['갤럭시', '애플', '레트로폰'];

  const categoryElements = categories.map((element) => {
    const isActive = clickedCategory === element; // 클릭한 카테고리 여부 확인
    
    return (
      <li
        style={{ cursor: `pointer`, backgroundColor: isActive ? '#164863' : '#7C94B7' }}
        className="mainProduct_category"
        onClick={() => handleCategoryClick(element)}
      >
        {element}
      </li>
    );
  });
  
  // 컨텐츠들을 가져옵니다
  const mainContents = currentItems.map((element, index) => {
    let category = '';
    
    category =
        clickedCategory === '갤럭시'
          ? 'galaxy'
          : clickedCategory === '애플'
          ? 'iphone'
          : clickedCategory === '레트로폰'
          ? 'retro'
    : clickedCategory;
    
    const imageUrl = `/images/${category}/${element.main}`;
    const itemName = element.title;
    const itemPrice = element.price;
    const itemBrand = category;

    const handleItemClick = (itemName, itemPrice, itemBrand) => {
      navigate('/Product', {
        state: { itemName, itemPrice, itemBrand }
      });
    };

    return(
      <li className="mainProduct_products" onClick={() => handleItemClick(itemName, itemPrice, itemBrand)} >
        <Link to={{
            state: { itemName, itemPrice, itemBrand }
          }}
          className="mainProduct_product"
        >
          <div style={ {width:'90px', height:'100px', backgroundSize:'contain', backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: "center center" }} />
          <div className='mainProduct_name'>{itemName}</div>
          <div className='mainProduct_price'>{itemPrice}원</div>
        </Link>
      </li>
    ); 
  });

  const isNextPageAvailable = indexOfLastItem < currentData.length;

  // 이전 페이지 버튼 활성화 여부를 결정하는 함수
  const isPrevButtonDisabled = () => {
    return currentPage === 1;
  };

  // 다음 페이지 버튼 활성화 여부를 결정하는 함수
const isNextButtonDisabled = () => {
  if (clickedCategory === '갤럭시') {
    return !isNextPageAvailable || currentData.length <= 9; // currentItems가 9개 미만이면 버튼 비활성화
  }
  return indexOfLastItem >= iphone.length || currentData.length <= 9;
};

  // 이전 페이지로 이동하는 함수
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // 다음 페이지로 이동하는 함수
  const handleNextPage = () => {
    if (isNextPageAvailable) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <section className="mainProduct_box">
      <ul className="mainProduct_categoryBox">{categoryElements}</ul>
      <div className="mainProduct_main">
      <img className="mainProduct_categoryLogo" src={logoImage} alt="Logo" />
        <ul className="mainProduct_productSubBox">{mainContents}</ul>
        <div className="mainProduct_pageBox">
          <button
            className="prev"
            style={isPrevButtonDisabled() ? { backgroundColor: '#8d8d8d' } : { backgroundColor: '#123261' }}
            onClick={handlePrevPage}
            disabled={isPrevButtonDisabled()}
          >
            이전
          </button>
          <button className="next"
            style={isNextButtonDisabled() ? { backgroundColor: '#8d8d8d' } : { backgroundColor: '#123261' }}
            onClick={handleNextPage}
            disabled={isNextButtonDisabled()}
          >
            다음
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainContents;
