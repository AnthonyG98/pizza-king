import React from "react"

function Pizza(){
    return(
        <div className="more-menu">
            <h1>Calzone (cheese)</h1>
            <table>
                <tr>
                    <th>Medium</th>
                    <th>large</th>
                    <th>X-Large</th>
                </tr>
                <tr>
                    <td>$9.99</td>
                    <td>$11.99</td>
                    <td>$13.99</td>
                </tr>
            </table>
            <h1>Pepperoni or cheese</h1>
            <table>
                <tr>
                    <th>Small</th>
                    <th>Medium</th>
                    <th>large</th>
                    <th>X-Large</th>
                </tr>
                <tr>
                    <td>$6.10</td>
                    <td>$7.20</td>
                    <td>$9.40</td>
                    <td>$12.25</td>
                </tr>
            </table>
            <h1>Combo</h1>
            <table>    
                <tr>
                    <th>Small</th>
                    <th>Medium</th>
                    <th>large</th>
                    <th>X-Large</th>
                </tr>
                <tr>
                    <td>$11.02</td>
                    <td>$13.22</td>
                    <td>$15.43</td>
                    <td>$19.84</td>
                </tr>
            </table>
            <h1>Mexican</h1>
            <table>
                <tr>
                    <th>Medium</th>
                    <th>large</th>
                    <th>X-Large</th>
                </tr>
                <tr>
                    <td>$11.02</td>
                    <td>$13.22</td>
                    <td>$15.43</td>
                </tr>
            </table>
        </div>
    )
}
export default Pizza