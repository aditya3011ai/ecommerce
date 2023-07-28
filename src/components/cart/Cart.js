import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";


function Cart({ onClose }) {
    const cart = useSelector((state) => state.cartReducer.cart);
    let totalAmount = 0;
    cart.forEach((item) => (totalAmount += item.quantity * item.price));
    const isCartEmpty = cart.length === 0;
    const [textOn, setTextOn] = useState(false)
    const setClose=()=>{
        onClose()
        setTextOn(false)
    }

    return (
        <div className="Cart">
            <div className="overlay" onClick={setClose }></div>
            <div className="cart-content">
                <div className="header">
                    <h3>Shopping Cart</h3>
                    <div className="close-btn" onClick={setClose}>
                        <AiOutlineClose /> Close
                    </div>
                </div>
                <div className="cart-items">
                    {cart.map((item) => (
                        <CartItem key={item.key} cart={item} />
                    ))}
                </div>
                {isCartEmpty && (
                    <div className="empty-cart-info">
                        <div className="icon">
                            <BsCartX />
                        </div>
                        <h4>Cart is Empty</h4>
                    </div>
                )}
                {!isCartEmpty && (
                    <div className="checkout-info">
                        <div className="total-amount">
                            <h3 className="total-message">Total:</h3>
                            <h3 className="total-value">₹ {totalAmount}</h3>
                        </div>
                        <div className="checkout btn-primary" onClick={()=>{setTextOn(true)}}>Checkout now</div>
                    </div>
                )}
                {textOn &&
                <p className="no-service-mesg">Sorry We are currently Out of Service*</p>}
            </div>
        </div>
    );
}

export default Cart;
