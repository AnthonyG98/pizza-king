import React from "react"

function MenuProps(props){
    function menuAnimation(){
        const menuTop = document.querySelector(".menu");
        const screenPosition = window.innerHeight;
        let menuHeight = menuTop.getBoundingClientRect().top
            if(screenPosition > menuHeight + 100){
                    menuTop.style.opacity ="1";
                    menuTop.style.marginTop ="0%";
            }
    }
        
    window.addEventListener ('scroll', menuAnimation);
    return(
        <div className="menu-container">
            <div className="menu-heading-container">
                <h1 className="red-text">{props.redTextTitle}</h1>
            </div>
            <div className="menu-text-container">
                <h1 className="red-text">{props.first}</h1>
                <h1 className="red-text">{props.heading}</h1>
                <p className="black-text">{props.second}</p>
                <h1 className="red-text">{props.third}</h1>
                <p className="small-text">{props.smallText}</p>
                <p className="black-text">{props.fourth}</p>
                <p className="small-text">{props.smallTextTwo}</p>
                <h1 className="red-text">{props.fifth}</h1>
                <p className="small-text">{props.smallTextThree}</p>
                <p className="black-text">{props.sixth}</p>
                <h1 className="red-text">{props.seventh}</h1>


            </div>
        </div>
    )
}
export default MenuProps