import React from "react";
import "./Logo.scss";
import cicu from '../../assets/images/cicu.png'


const Logo=({size})=>{
    const pStyle = {
        fontSize: size
    };

    return(
        <div className="logoContainer" style={pStyle}>
          <img className="logo" src={cicu} alt="logo"/>
            <p>CicuGifs</p>
        </div>
    );
}
export default Logo;