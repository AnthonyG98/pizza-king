import React from "react"
import MenuProps from "./menuprops.js"
import SecondMenuContainer from "./secondmenu"

function MenuContainer(){
    return(
         <div>
      <h1 className="king-specials" id="specials">Pizza King Specials</h1>
        <div className="menu">
                <MenuProps 
                first="House Special"
                heading="Pick Up Only"
                second="Large"
                third="$7.25 + tax"
                smallText="Add topping 1.75 + tax"
                fourth="X-Large"
                smallTextTwo="(Cheese or Pepperoni)"
                fifth="$9.50 + tax"
                smallTextThree="Add topping 3.00 + tax"
                className="hey"
           />
           <MenuProps 
               className="special-two"
                first="King #2"
                heading="2 Pizzas With Cheese + 2 Toppings"
                second="Med"
                third="$15.99 + tax"
                fourth="LG"
                fifth="18.99 + tax"
                sixth="X-LG"
                seventh="$22.99 + tax"
           />
           <MenuProps 
           className="special-three"
           first="Crazy Monday Specials"
           heading="Limited Delivery"
           second="3 Medium Pizzas Cheese + 2 Toppings"
           third="$16.99 + tax"
           fourth="3 Large Pizzas Cheese + 2 Toppings"
           fifth="$19.99 + tax"
           sixth="3 X-Large Pizzas Cheese + 2 Toppings"
           seventh="$25.99 + tax"    
           />
        </div>
        <SecondMenuContainer />
        </div>
        )
}
export default MenuContainer