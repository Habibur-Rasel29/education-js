import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const total = cart[i];
        totalPrice = totalPrice + total.price;
    }
    const tax = Math.round(totalPrice / 10);
    let courseTotalPrice = (totalPrice + tax).toFixed(2);


    return (
        <div class="cart">
            <h3>Shopping Cart </h3>
            <hr/>
            <p>{cart.length} Course in Cart</p>
            <p>Course Price: ${totalPrice}</p>
            <p>Tax: ${tax}</p>
            <h5>Total Price: ${courseTotalPrice}</h5>


        </div>
    );
};

export default Cart;