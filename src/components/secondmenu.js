import React from "react"
import Pizza from "./pizza.js"
import Sides from "./sides.js"
import Desserts from "./desserts.js"
import Drinks from "./drinks.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
 
function SecondMenuContainer(){
    return(
        <div className="second-menu-container">
        <div className="menu-head-container">
            <h1 className="menu-head-text" id="menu">Menu</h1>
        </div>
        <Router basename={process.env.PUBLIC_URL}>
            <div className="links-container">
                <li className="link-container">
                    <NavLink to="/" exact activeClassName="active" className="link">Pizza</NavLink>
                </li>
                <li className="link-container">
                    <NavLink to="/menu-sides" activeClassName="active" className="link">Sides</NavLink>
                </li>
                <li className="link-container">
                    <NavLink to="/menu-desserts" activeClassName="active" className="link">Desserts</NavLink>
                </li>  
                <li className="link-container">
                    <NavLink to="/menu-drinks" activeClassName="active" className="link">Drinks</NavLink>  
                </li>
            </div>                    
            <Switch>
            <Route path="/menu-sides">
                <Sides />
            </Route>
            <Route path="/menu-desserts">
                <Desserts />
            </Route>
            <Route path="/menu-drinks">
                <Drinks />
            </Route>
            <Route path="/">
                <Pizza />
            </Route>
        </Switch>
        </Router>
        </div>
    )
}
export default SecondMenuContainer
