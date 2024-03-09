//------- import Line START -------------------------------//
import React from 'react'; // Hook\
import { Link, useNavigate } from 'react-router-dom'; //<Link>
//npm install @nivo/core // npm install @nivo/pie
import { ResponsivePie } from '@nivo/pie';
import '../../css/main/ranking.css';
//--------- import Line END ----------- --------------------//
    const h2Style = {
        width: "490px",
        height: "55px",
        fontSize:"35px",
        textAlign:"center",
        lineHeight: "55px",
        zIndex:'1',
        color:"#fff",
        background:"#112",
        opacity:"0.5",
        marginTop:"30px",
        marginBottom:"20px",
        borderRadius: "30px 30px 0px 0px",
        padding: "15px"
        
    };

//--------- Ranking Line START ----------------------------//
const Ranking=()=>{
    const navigate = useNavigate();

    const linkClick = ( itemName, itemPrice, itemBrand ) => {
        navigate('/Product', {
            state: { itemName, itemPrice, itemBrand }
        });
    };
    
    return(
        <div className='RankingBox'>
            <Link to="/SubMain" className='backBtn'>뒤로가기</Link>
            
            {/* <div className='RankingTextBox'>
                <h2 className='RankingTitle'>TOP 1 : 아이폰15 프로
                    <Link to='/MainProduct' className='RankingLink'>바로가기</Link>
                </h2>
                <h2 className='RankingTitle'>TOP 2 : 갤럭시23+
                    <Link to='/MainProduct' className='RankingLink'>바로가기</Link>
                </h2>
                <h2 className='RankingTitle'>TOP 3 : 아이폰15
                    <Link to='/MainProduct' className='RankingLink'>바로가기</Link>
                </h2>
            </div> */}

            <div className='RankingTitleBox'> 
                <h2 className='RankingTitle'> Ranking 1 : iPhone15Pro
                    <span
                        onClick={() => linkClick("iPhone15Pro", "1,550,000", "iphone")}
                        className='RankingLink'
                    >
                        바로가기
                    </span>
                </h2>
                <h2 className='RankingTitle'> Ranking 2 : galaxy23Ultra
                    <span
                        onClick={() => linkClick("s23ultra", "1,350,000", "galaxy")}
                        className='RankingLink'
                    >
                        바로가기
                    </span>
                </h2>
                <h2 className='RankingTitle'> Ranking 3 : iPhone15Plus
                    <span
                        onClick={() => linkClick("iPhone15Plus", "1,250,000", "iphone")}
                        className='RankingLink'
                    >
                        바로가기
                    </span>
                </h2>
            </div>
            <h2 style={h2Style}>핸드폰 점유율 차트</h2>
            <div style={ { width:'500px', height:'400px', paddingBottom:"30px" } } >
                <ResponsivePie
                    //chart data option! 
                    data ={[
                        { id: "iphone15", value: 20},
                        { id: "galaxy23Ultra", value: 30},
                        { id: "iphone15Pro", value: 50},
                    ] }
                    margin={ {top :30, right :80, bottom:120, left : 65} } // chart margin option
                    innerRadius={0.5}  // chart center  option(0으로 가까우면 원형 1로 갈수록 도넛 모양)
                    padAngle={5} // chart pad area option (차트 마다 각 간격 0이면 딱 붙음)
                    cornerRadius={0} // pad top radius option
                    colors={['#A7ECEE', '#9EDDFF','#6499E9']} // chart background color option
                    borderWidth={1.5}
                    startAngle={-90}
                    activeOuterRadiusOffset={10} // chart hover 
                    //chart stick Line
                    arcLinkLabelsSkipAngle={0}
                    arcLinkLabelsTextColor="#000"
                    arcLinkLabelsThickness={3}
                    arcLinkLabelsColor={ {from: "color"} }
                    arcLabelsSkipAngle={0}
                    //Theme option!
                    theme={
                        {
                            labels : {
                                text :{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    fill: "#fff",
                                },
                            },
                            legends : {
                                text : {
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    fill: "#333"
                                },
                            },
                        }
                    }
                    
                    legends={
                        [
                            {
                                anchor : 'bottom', //위치
                                direction : 'row', //item 그려지는 방향
                                justify : false, // font, color interval or justify setting! 
                                translateX : -10, //chart X area
                                translateY : 90, // chart Y area
                                itemsSpacing :80, // item(글씨) 간격 설정
                                itemWidth : 90, // item width
                                itemHeight : 0, // item height
                                itemDirection : 'left-to-right',  // item in horizontal
                                itemOpacity : 1, // opacity!
                                symbolSize : 20, // color size
                                symbolShape : 'circle', // symbol shape
                                } ] } >
                </ResponsivePie>
            </div>
        </div>
    );
};
export default Ranking;
//--------- Ranking Line END -------------------------------------//