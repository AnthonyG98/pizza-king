import React from "react"
import bodyImgOne from "../images/pizza-img-three.jpg"
import {Link} from "react-scroll"
function BodyContainer(){
    function bodyAnimation(){
        const bodyTop = document.querySelector(".body-container");
        const screenPosition = window.innerHeight;
        let bodyHeight = bodyTop.getBoundingClientRect().top
        if(screenPosition > bodyHeight + 200){
            bodyTop.style.opacity ="1";
            bodyTop.style.marginTop ="0";
        }
    }
    window.addEventListener ('scroll', bodyAnimation);
    return(
        <div>
            <div className="body-container" onScroll={bodyAnimation}>
                <div className="body-img-container">
                    <img src={bodyImgOne} alt="of restuarant" className="body-img-one"></img>
                </div>
                <div className="body-text-container">
                    <p className="body-text">
                        Come by your local, family owned pizzeria and have a 
                        look at our specials. We serve a variety of pizzas
                        made by us, your neighbors. We're located on the corner of Stoneacre and 
                        Alondra in Compton, California. Let us serve you!
                    <p className="body-text-rating">
                        We have a 4.4 star rating on Google. <a href="https://www.google.com/search?rlz=1C1CHBF_enUS915US915&sxsrf=ALeKk017Z6r8howfYrf5lg6J9Jib56mPVg:1613200430103&q=pizza+king+Compton,+CA&spell=1&sa=X&ved=2ahUKEwiuuNn0p-buAhWTFjQIHQUeBnAQirwEKAB6BAgEEEs&biw=1366&bih=657#lrd=0x80c2cca4e928a8d1:0x58a6f29e6f6d6b1e,1,,,"rel="noreferrer" target="_blank" className="paragraph-link">See what people are saying!</a>

                    </p>

                    </p>
                </div>
            </div>
            <Link
                        className="our-menu"
                            to="menu"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Menu</Link>           
            <div className="desktop-nav-container">
                <Link
                            activeClass="active-desk"
                            className="nav-desk"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}

                        >Home</Link>                    
                        <Link
                        activeClass="active-desk"
                        className="nav-desk"
                            to="specials"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Specials</Link>
                        <Link
                        activeClass="active-desk"
                        className="nav-desk"
                            to="menu"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Menu</Link>
                        <Link
                        activeClass="active-desk"
                        className="nav-desk"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link>
                </div>
        </div>
    )
}
export default BodyContainer