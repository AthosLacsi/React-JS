import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const itemIndex = cartItems.findIndex(item => item.id === product.id);
        if (itemIndex === -1) {
            setCartItems([...cartItems, { ...product, quantity }]);
        } else {
            const newCart = [...cartItems];
            newCart[itemIndex].quantity += quantity;
            setCartItems(newCart);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;