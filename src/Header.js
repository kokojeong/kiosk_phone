import React from "react";
import './css/app/Header.css'
import { Link } from "react-router-dom";


function Header(){


    return(
        <div className="headerBody">
            <div className="iconBox">
                <Link to="/SubMain" className="home" >
                    <img src="/images/homeIcon.png" alt="homeIcon" className="homeIcon" />
                </Link>
                    <img src="/images/phoneE.png" alt="logoImage" className="logoImage" />
                <Link to="/ManagerLogin" className="setting">
                    <img src="/images/settingIcon.png" alt="settingIcon" className="settingIcon" />
                </Link>
            </div>
        </div>
    )
}


export default Header;