import React,{useState, useCallback, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'; //react-router-dom
// import Logo from '../Logo';
import '../../css/manager/managerLogin.css' //css get
import styled from 'styled-components';

// const StyleLogo = styled(Logo)
// ` width: 100px;`

// style line

const Manager =()=>{
    const navigate = useNavigate();
    const managerInfo =useState( {id:"1111", password:"1111"} );
    const [idValue, setIdValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [activeInput, setActiveInput] = useState(null);

//event line
    // number click start event line
    const handleNumberClick = useCallback(
        (number) => {
        if (activeInput === 'id') {
            // 아이디 필드가 활성화되어 있으면 아이디 값 업데이트
            setIdValue((prevValue) => prevValue + number);
        } else if (activeInput === 'password') {
            // 비밀번호 필드가 활성화되어 있으면 비밀번호 값 업데이트
            setPasswordValue((prevValue) => prevValue + number);
            }
        },
        [setIdValue, setPasswordValue, activeInput]
    );
    // number delete click  event line
    const handleNumberDelete = useCallback(() => {
        if (activeInput === 'id') {
        setIdValue((prevValue) => prevValue.slice(0, -1));
        } else if (activeInput === 'password') {
            setPasswordValue((prevValue) => prevValue.slice(0, -1));
        }
    }, [setIdValue, setPasswordValue, activeInput]);
    
    // all reset event line
    const handleAllDelete = useCallback(() => {
        if (activeInput === 'id' || activeInput === 'password') {
        setIdValue(''); setPasswordValue('');
        }
    }, [setIdValue, setPasswordValue, activeInput] );

    //number click all click event no!
    // const handleNumberAllClick = useCallback(() => {
    // setActiveInput((prevInput) =>
    // prevInput === 'id' ? setIdValue('') : setPasswordValue('') );
    // }, [setIdValue, setPasswordValue, activeInput] );

    // login check event 
    const checkingLogin = useCallback(
        (e)=>{
            e.preventDefault();
            const inputId = document.getElementById("Id").value;
            const inputPassword = document.getElementById("password").value;
            const foundManager = managerInfo.find(
                manager => manager.id === inputId && manager.password === inputPassword
            )
                if(foundManager){
                    alert("상품등록 페이지로 넘어가겠습니다");
                    navigate('/ManagerProduct');
                }else{
                    alert("아이디나 비밀번호를 확인해주세요");
                };
        },[managerInfo,navigate]
    );
    return(
        <div className='managerLogin_box'>
            {/* <StyleLogo/> */}
            <h2 className='managerLogin'>관리자 로그인</h2>
        <form onSubmit={checkingLogin} className='loginFrom'>
            <input type='text' id='Id' className='Id' placeholder='Id' value={idValue} onFocus={()=>setActiveInput('id')} />
            <input type='password' id='password' className='password' placeholder='password' value={passwordValue} onFocus={()=>setActiveInput('password')}/>
            <button className='managerLogin_btn' type='onSubmit'>로그인</button>
        </form>
        <div className='keyPad'>
            { // button number click create!
            [1,2,3,4,5,6,7,8,9,0].map(
                (number)=>(
                <button
                key={number}
                className='LoginNumber_button'
                onClick={ ()=>handleNumberClick(number) } >
                    {number} 
                </button> ) ) }
                <button className='managerDelete_button' onClick={handleNumberDelete}>삭제</button>
                <button className='managerDelete_button' onClick={handleAllDelete}>초기화</button>
        </div>
        </div>
    );
};
export default Manager;