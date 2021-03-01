import React from 'react';
import './cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce( (totalSalary, player) => totalSalary +player.salary,0);
    console.log(cart)
    return (
        <div className="selected">
            <h4>Selected Players</h4>
            <p>Total Selected : {cart.length}
            <ol>
               {
                   cart.map(name => <li>{name.name} =  {name.salary}$</li>)
               }
            </ol>
            <p>Total Cost :  {totalSalary} $</p>

            </p>
        </div>
    );
};

export default Cart;