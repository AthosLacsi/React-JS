// src/components/common/cartWidget/CartWidget.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={24} />
            <span className="badge bg-secondary">3</span>
        </div>
    );
};

export default CartWidget;
