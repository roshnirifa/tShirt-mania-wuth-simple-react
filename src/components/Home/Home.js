import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import useTshirt from '../Hooks/useTshirts';
import TShirt from '../TShirt/TShirt'

const Home = () => {
    const [tShirts, setTshirts] = useTshirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (seletedItem) => {
        const exist = cart.find(tShirt => tShirt._id === seletedItem._id);
        if (!exist) {
            const newCart = [...cart, seletedItem];
            setCart(newCart);
        }
        else {
            alert('item already added')
        }

    }
    const handleRemoveFromCart = (seletedItem) => {
        const restItem = cart.filter(tShirt => tShirt._id !== seletedItem._id);
        setCart(restItem);

    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}

                ></Cart>
            </div>
        </div>
    );
};

export default Home;