import React from "react";
import "./Logo.scss";


const Logo=({size})=>{
    const pStyle = {
        fontSize: size
    };

    return(
        <div className="logoContainer" style={pStyle}>
          {/* <img src={cicu} alt="logo"/> */}
            <p>CicuGifs</p>
        </div>
    );
}
export default Logo;