import React from 'react';
import './Body.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';




const Body = () => {
    // console.log(fakeData);
    const first9 = fakeData.slice(0, 4);
    const [courses] = useState(first9);
    const [cart, setCart] = useState([]);

    const handleItem = (product) => {
        // console.log('hey', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="container">
            <div className="body-container">

                {
                    courses.map(course => <Course handleItem={handleItem} name={course}></Course>)
                }

            </div>
            <div className="cart-container">

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Body;