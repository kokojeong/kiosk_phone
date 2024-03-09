import React, { useEffect, useState } from "react";
import imageData from "../../data/imageData.json";
import { useLocation, Link } from 'react-router-dom';
import "../../css/product/product.css";

function extractNumbers(inputString) {
  const numbers = inputString.match(/\d+/g); // 정규 표현식을 사용해 숫자 추출
  if (numbers) {
    return parseInt(numbers.join('')); // 추출된 숫자들을 하나의 값으로 합치기
  }
  return null;
}

export default function Product() {
  const location = useLocation();
  const { itemName, itemPrice, itemBrand } = location.state;
  const price = extractNumbers(itemPrice);

  const [selectedColor, setSelectedColor] = useState('black');
  const [UserPrice, setUserPrice] = useState(price);
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const [options, setOptions] = useState([]);
  const [totalOption, setTotalOption] = useState(0);
  const [combinedTotal, setCombinedTotal] = useState(UserPrice + totalOption);
  const [itemImg, setItemImg] = useState(imageData[itemBrand][itemName].colors.black);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  console.log("itemBrand:", itemBrand);
  console.log("itemName:", itemName);
  console.log("itemImg:", itemImg);


  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // 핸드폰 가격과 옵션가격을 더한 것
  useEffect(() => {
    setCombinedTotal(UserPrice + totalOption);
  }, [UserPrice, totalOption]);

  // 판매가 더하기 함수
  const sumPrice = (addPrice = 0) => {
    setUserPrice(price + addPrice);
    return;
  };

  // 128, 256, 512일때 가격을 더해주는 함수
  const handleSelectedStorage = (event) => {
    setSelectedStorage(event.target.value);
    if (event.target.value === "128GB") {
      sumPrice();
    }
    if (event.target.value === "256GB") {
      sumPrice(100000);
    }
    if (event.target.value === "512GB") {
      sumPrice(200000);
    }
  };

  // 색상 선택 시
  const handleOptionColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // 옵션을 선택했을 때 가격을 더하기
  const sumOption = (addOption = 0) => {
    const newTotalOption = totalOption + addOption;
    setTotalOption(newTotalOption);
  };

  // 추가 옵션 체크
  const handleCheckedOption = (event) => {
    const newOptions = event.target.value;
    setOptions((prevOptions) => {
      const isSelected = prevOptions.includes(newOptions);
      if (isSelected) {
        sumOption(-10000);
        return prevOptions.filter((option) => option !== newOptions);
      } else {
        sumOption(10000);
        return [...prevOptions, newOptions];
      }
    });
  };

  // 컬러 선택
  const colorChange = () => {
    const newColor = selectedColor === "black" ? "white" : "black";
    setItemImg(imageData[itemBrand][itemName].colors[newColor]);
  };

  return (
    <div className="ProductMainBox">
      {/* 이미지 슬라이드 */}
      <div className='ProductContainer'>
        <div className='ProductContainerMain'>
          <h2>{itemName}</h2>
          <img src={`/images/${itemBrand}/${itemImg[selectedImageIndex]}`} alt={itemName} />
        </div>

        <ul className="ProductProductList">
          {itemImg.map((image, index) => (
            // <li key={index}>
            <li key={index} onClick={() => handleImageClick(index)}>
              <img src={`/images/${itemBrand}/${image}`} alt={`images ${index}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="ProductOptionBox">
        <div className="ProductOption">
          <p>판매가
            <p className="ProductOption_price">
              ₩{combinedTotal.toLocaleString()}원
            </p>
          </p>
        </div>

        <div className="ProductOption">
          <p>색상을 선택해주세요</p>
            <label htmlFor="black">
              <input
                type="radio"
                id="colorSelect"
                value="black"
                checked={selectedColor === "black"}
                onChange={handleOptionColorChange}
                onClick={colorChange}
                />
                블랙
            </label>
            <label htmlFor="white">
              <input
                type="radio"
                id="colorSelect"
                value="white"
                checked={selectedColor === "white"}
                onChange={handleOptionColorChange}
                onClick={colorChange}
              />
              화이트
            </label>
        </div>

        <div className="ProductOption">
          <p>용량을 선택해주세요</p>
          <label htmlFor="128GB">
            <input
              type="radio"
              id="storage"
              value="128GB"
              checked={selectedStorage === "128GB"}
              onChange={handleSelectedStorage}
            />
            128GB
          </label>
          <label htmlFor="256GB">
            <input
              type="radio"
              id="storage"
              value="256GB"
              checked={selectedStorage === "256GB"}
              onChange={handleSelectedStorage}
            />
            256GB
          </label>
          <label htmlFor="516GB">
            <input
              type="radio"
              id="storage"
              value="512GB"
              checked={selectedStorage === "512GB"}
              onChange={handleSelectedStorage}
            />
            512GB
          </label>
        </div>

        <div className="ProductOption">
          <p>추가옵션</p>
          <label htmlFor="case">
            <input
              type="checkbox"
              id="option"
              name="option"
              value="케이스"
              checked={options.includes("케이스")}
              onChange={handleCheckedOption}
            />
            케이스
          </label>
          <label htmlFor="protectiveFilm">
            <input
              type="checkbox"
              id="option"
              name="option"
              value="보호필름"
              checked={options.includes("보호필름")}
              onChange={handleCheckedOption}
            />
            보호필름
          </label>
          <label htmlFor="charger">
            <input
              type="checkbox"
              id="storage"
              name="option"
              value="고속충전기"
              checked={options.includes("고속충전기")}
              onChange={handleCheckedOption}
            />
            고속충전기
          </label>
        </div>
      </div>

      <div className="ProductBtnBox">
        <Link to="/SubMain" className="ProductBackBtn">
          뒤로가기
        </Link>
        <Link
          to={`/OrderCheck?model=${encodeURIComponent(itemName)}&price=${encodeURIComponent(combinedTotal)}&storage=${encodeURIComponent(selectedStorage)}&color=${encodeURIComponent(selectedColor)}&options=${encodeURIComponent(options.join(','))}`}
          className="ProductPurchaseBtn"
        >
          구매하기
        </Link>
      </div>
    </div>
  );
}
