import React from "react"
import caterImg from "../images/pizza-footer-img.png"

function Catering(){
    function caterAnimation(){
        const caterContainer = document.querySelector(".catering-container")
        const menuTop = document.getElementById("menu");
        const screenPosition = window.innerHeight;
        let bodyHeight = menuTop.getBoundingClientRect().top
        if(screenPosition > bodyHeight) {
            caterContainer.style.display ="block";
        } else{
            
        }
    }
    window.addEventListener ('scroll', caterAnimation);
    function closeCater(){
        const caterContainer = document.querySelector(".catering-container")
        caterContainer.style.display ="none"
        window.addEventListener('scroll', closeCater)
    }
    return(
        <div className="catering-container">
            <i className="fas fa-times" onClick={closeCater}></i>
            <img className="cater-img" src={caterImg} alt="pizza king catering" />
        </div>
    )
}
export default Catering