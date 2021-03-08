import React from "react"
import mainImg from "../images/main-head-img.jpg"
import logo from "../images/pizzalogo.png"

function MainHeader(){  
    return(
        <div className="main-header-container" id="home">
            <img className="main-header-img" src={mainImg} alt="of Pizza King restaurant"></img>
            <div className="main-header-text">
                <img className="logo-img" src={logo} alt="pizza king logo"></img>
            </div>
        </div>
    )
}

export default MainHeader