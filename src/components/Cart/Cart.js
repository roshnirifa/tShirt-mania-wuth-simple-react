import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendaring options
    // 1. element variable 
    // 3. && operator jodi sotii hoy
    // 4. || mittha

    let command;
    if (cart.length === 0) {
        command = <p>Please add atleast one items</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thamks for adding item</small></p>
    }
    // 2. trnary operator for conditional rendaring
    return (
        <div>
            <h3>Items seleted:{cart.length}</h3>
            {/* tarnary operator */}
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {
                cart.length !== 4 ? <p>kep adding</p> : <button>Remove All</button>
            }
        </div>
    );
};

export default Cart;