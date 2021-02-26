import React from "react"
import {Link} from "react-scroll"
function Footer(){
    return(
        <footer className="footer-container">
            <div className="foot-text-container">
                <h1 className='foot-text'>Pizza King in Compton</h1>
                <p className='foot-text'>Located at 2500 Alondra Blvd, Compton, CA 90221<br/>
                Place an order: (310) 638-0413</p>
                <Link
                            activeClass="active-link"
                            className="footer-text-link"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Scroll to top</Link>
            </div>
            <div className="foot-text-two">
                <p><i class="far fa-copyright">By Anthony Gonzalez</i></p>
            </div>
        </footer>
    )
}
export default Footer