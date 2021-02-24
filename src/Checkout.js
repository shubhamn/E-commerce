import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";
function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_7._V515060851_.jpg" alt=""/>
        
        {basket?.length === 0 ? (
            <div>
                <h2>Your Amazon Cart is empty</h2>
                <p>Check your Saved for later items below or continue shopping</p>
                </div>
        ):(
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
             {basket.map(item=>{
                return <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
                
             })}
              
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal/>
            </div>
        ) }
        </div>

        
    );
}

export default Checkout
