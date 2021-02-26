import React from "react"
import {Link} from "react-scroll"

class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            showNav: false
        }
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }
    openNav(){
        this.setState(prevState =>({
            showNav: !prevState.showNav
        }))
    }
    closeNav(){
        this.setState({
            showNav: false
        })
    }
    render(){
        return(
            <div>
                <i className="fas fa-pizza-slice" 
                onClick={this.openNav} 
                style={{
                    left: this.state.showNav ? '50%' : '0%',
                    animation: this.state.showNav ? 'spin 1s ease' : ''
                }}
                ></i>
                <div className="nav-container" style={
                    {left: this.state.showNav ? '0%' : '-48%',
                    animation: this.state.showNav ? '' : 'nav-back 1s ease'
                    }}>
                    <ul className="nav-list-container">
                        <Link
                        onClick={this.closeNav}
                            activeClass="active-link"
                            className="nav-link"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}

                        >Home</Link>                    
                        <Link
                        onClick={this.closeNav}
                            activeClass="active-link"
                            className="nav-link"
                            to="specials"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Specials</Link>
                        <Link
                        onClick={this.closeNav}
                            activeClass="active-link"
                            className="nav-link"
                            to="menu"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Menu</Link>
                        <Link
                        onClick={this.closeNav}
                            activeClass="active-link"
                            className="nav-link"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Nav