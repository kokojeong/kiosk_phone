//-------------import LINE START -------------------//
import React from 'react'; // Hook
import { Link } from 'react-router-dom'; //<Link>
// import Api from '../../api/api';
import '../../css/main/main.css'; // css!
//npm install swiper //library download!!
import {Swiper, SwiperSlide} from'swiper/react'; // <Swiper>(부모) is <SwiperSlide>
import {Navigation, Pagination, EffectFade, Autoplay} from 'swiper/modules'; //slide module 라이브러리 다운받도 작성! 건들지마십쇼
 //library css auto
import "swiper/css"; 
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
//-------------import LINE END -------------------//


//------------------------- Style variable START -----------------------------------//
const  styleSwiper={
    width:"505px",
    height:"650px",
    marginTop: "7px"
}
//---------------------------- STYLE VARIABLE END ---------------------------------------//



//----------------------- Main Logic LINE START ---------------------------------------------//
const Main =()=>{

    // slide Img List 
    const slideImg = [
        {src : '/images/iphone_Img.png'}, // iphone
        {src : '/images/iphone_Main.png' }, // iphone2
        {src : '/images/galaxy_z.png'} //galaxy
    ];
    //console.log(slideImg); debugging check ok!


//----------------------- Main RETURN LINE START ---------------------------------------------//
    return(
    <div className='mainBox'>
        <div to='/SubMain' className='subMainLink'>
            <Swiper
                style={styleSwiper}
                effect={'fade'}
                autoplay={ {delay:2000, disableOnInteraction:false } }
                pagination = { { clickable : true,
                                renderBullet:()=>{return ""}} } // 점점점 없앰
                modules={ [Navigation, EffectFade, Pagination, Autoplay] }
                loop={true}>
                    {slideImg.map(
                        (item,index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <img src={item.src} alt='' className="slidImg"/>
                                </SwiperSlide>
                            );
                        })
                    }
            </Swiper>
        </div>
        <Link to='/SubMain' className='mainLink'>화면을 터치해주세요</Link>
        {/* <p className='mainP' style={styleP}>폰이네</p>
        <p className='mainP' style={styleP} >고객센터 02-777-777</p> */}
    </div>
    );
//------------------------Main RETURN LINE END ---------------------------------------------//
}; export default Main;
//----------------------- Main Logic LINE END ---------------------------------------------//