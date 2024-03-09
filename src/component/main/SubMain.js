import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../css/main/subMain.css";


const SubMain =()=>{
        const navigate = useNavigate();
        //App.js is [category, setCategory]=useState('');
        const [category, setCategory] = useState(''); // get 
    
    
        // product page go 
        const onProductClick = (element) => {
            setCategory(element);
            navigate('/MainProduct', { state: element }); // 직접 element 값을 전달합니다.
        };
        return(
            <div className='subMainBox'>
                <Link to='/Ranking' className='popularityText'>인기순위 click</Link>
                <div className='textBox'>
                <p className='titleText'>어떤 핸드폰을 찾으세요?</p>
                </div>
                <div className='clickPhone'>
                    {/* <Link to='/MainProduct' className='galaxy'
                    onClick={()=>onProductClick('갤럭시') }>
                        <img src='/images/galaxy.png' alt='galaxy' className='galaxyImg'/>
                    </Link>
                    <Link to='/MainProduct' className='apple' onClick={()=>onProductClick('애플')}>
                        <img src='/images/appleLogo.png' alt='apple' className='appleImg'/>
                    </Link>
                    <Link to='/MainProduct' className='retro' onClick={()=>onProductClick('레트로폰')}>
                        <img src='/images/Retro.png' alt='retro' className='retroImg'/>
                    </Link> */}
                    <ul>
                        <li className='galaxy' onClick={()=>onProductClick('갤럭시') }>
                            <Link  /* Click Theme  */> {/* onClick is galaxy setting */}
                                <img src='/images/galaxyLogo.png' alt='galaxy' className='galaxyImg' />
                            </Link>
                        </li>
                        <li className='apple' onClick={()=>onProductClick('애플')}>
                            <Link> {/* onClick is iphone page setting */}
                                <img src='/images/appleLogo.png' alt='apple' className='appleImg' />
                            </Link>
                        </li>
                        <li className='retro' onClick={()=>onProductClick('레트로폰')}>
                            <Link>{/* onClick is retro page setting */}
                                <img src='/images/retroLogo.png' alt='retro' className='retroImg' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='option'>
                    <Link to="/ManagerLogin" className="setting">
                        <img src="/images/settingIcon.png" alt="settingIcon" className="settingIcon" />
                    </Link>
                </div>
            </div>
        );
    };
    export default SubMain;



